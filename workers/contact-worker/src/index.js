const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const RESEND_API_URL = 'https://api.resend.com/emails';

const MAX = {
  name: 120,
  email: 254,
  phone: 40,
  subject: 200,
  message: 8000,
};

function json(data, status, corsHeaders) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders,
    },
  });
}

function parseAllowedOrigins(raw) {
  return (raw || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS);
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    Vary: 'Origin',
  };

  if (allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function trimField(value, maxLen) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(body) {
  const name = trimField(body.name, MAX.name);
  const email = trimField(body.email, MAX.email);
  const phone = trimField(body.phone || '', MAX.phone);
  const subject = trimField(body.subject, MAX.subject);
  const message = trimField(body.message, MAX.message);
  const turnstileToken = trimField(body['cf-turnstile-response'] || '', 2048);

  if (!name) return { error: 'Please enter your name.' };
  if (!email || !isValidEmail(email)) return { error: 'Please enter a valid email.' };
  if (!subject) return { error: 'Please enter a subject.' };
  if (!message) return { error: 'Please add a message.' };
  if (!turnstileToken) return { error: 'Please complete the security check and try again.' };

  return {
    data: { name, email, phone, subject, message, turnstileToken },
  };
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return { ok: false, error: 'Server configuration error (Turnstile).' };
  }

  const form = new URLSearchParams();
  form.set('secret', env.TURNSTILE_SECRET_KEY);
  form.set('response', token);

  const remoteip = request.headers.get('CF-Connecting-IP');
  if (remoteip) form.set('remoteip', remoteip);

  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form.toString(),
  });

  if (!res.ok) {
    return { ok: false, error: 'Security verification failed. Please try again.' };
  }

  const result = await res.json();
  if (!result.success) {
    return { ok: false, error: 'Security verification failed. Please try again.' };
  }

  return { ok: true };
}

function buildEmailHtml({ name, email, phone, subject, message }) {
  const phoneRow = phone
    ? `<tr><td style="padding:8px 12px;font-weight:600;color:#1d1d1f;">Phone</td><td style="padding:8px 12px;">${escapeHtml(phone)}</td></tr>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1d1d1f;line-height:1.5;">
  <h2 style="margin:0 0 16px;font-size:20px;">New contact form message</h2>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">
    <tr><td style="padding:8px 12px;font-weight:600;width:100px;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding:8px 12px;font-weight:600;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    ${phoneRow}
    <tr><td style="padding:8px 12px;font-weight:600;">Subject</td><td style="padding:8px 12px;">${escapeHtml(subject)}</td></tr>
  </table>
  <p style="margin:20px 0 8px;font-weight:600;">Message</p>
  <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
</body>
</html>`;
}

function buildEmailText({ name, email, phone, subject, message }) {
  return [
    'New contact form message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n');
}

async function sendEmail(fields, env) {
  if (!env.RESEND_API_KEY) {
    return { ok: false, error: 'Server configuration error (email).' };
  }
  if (!env.CONTACT_FROM || !env.CONTACT_TO) {
    return { ok: false, error: 'Server configuration error (addresses).' };
  }

  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: fields.email,
      subject: `[Contact] ${fields.subject}`,
      html: buildEmailHtml(fields),
      text: buildEmailText(fields),
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error('Resend error', res.status, data);
    return { ok: false, error: 'Sorry, we could not send your message. Please try again later.' };
  }

  return { ok: true };
}

async function handleContact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400, corsHeaders(request, env));
  }

  const validated = validatePayload(body);
  if (validated.error) {
    return json({ error: validated.error }, 400, corsHeaders(request, env));
  }

  const fields = validated.data;

  const turnstile = await verifyTurnstile(fields.turnstileToken, request, env);
  if (!turnstile.ok) {
    return json({ error: turnstile.error }, 403, corsHeaders(request, env));
  }

  const sent = await sendEmail(fields, env);
  if (!sent.ok) {
    return json({ error: sent.error }, 502, corsHeaders(request, env));
  }

  return json(
    {
      message: 'Thanks! Your message has been sent. I typically reply within one business day.',
    },
    200,
    corsHeaders(request, env)
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);

    if (request.method === 'OPTIONS' && url.pathname === '/contact') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method === 'POST' && url.pathname === '/contact') {
      return handleContact(request, env);
    }

    return json({ error: 'Not found.' }, 404, cors);
  },
};
