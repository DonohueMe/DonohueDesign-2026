# Contact form Worker

Handles `POST /contact` from `contact.html`: validates fields, verifies Cloudflare Turnstile, sends email via [Resend](https://resend.com/docs/send-with-cloudflare-workers).

## Prerequisites

1. **Resend** — API key + verified domain at [resend.com/domains](https://resend.com/domains)
2. **Turnstile** — secret key for the widget already on `contact.html` (site key is public; secret stays in the Worker)
3. **Cloudflare** — account with Workers enabled

## One-time setup

### 1. Install and log in

```bash
cd workers/contact-worker
npm install
npx wrangler login
```

### 2. Configure email addresses

Edit `wrangler.toml`:

- `CONTACT_FROM` — verified sender on your domain, e.g. `Donohue Design <contact@donohuedesign.com>`
- `CONTACT_TO` — inbox that receives submissions
- `ALLOWED_ORIGINS` — comma-separated site origins (already includes `donohuedesign.com`)

### 3. Add secrets

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

Turnstile secret: Cloudflare Dashboard → **Turnstile** → your widget → **Secret key**.

Or set both under **Workers & Pages → contact-worker → Settings → Variables and Secrets**.

### 4. Deploy

```bash
npm run deploy
```

Your form already posts to:

`https://contact-worker.jim-7af.workers.dev/contact`

If this deploys to the same worker name (`contact-worker`), the URL stays the same. If you create a new worker, update the `action` on the form in `contact.html`.

## Local testing

```bash
cp .dev.vars.example .dev.vars
# Edit .dev.vars with real keys (file is gitignored)

npm run dev
```

Turnstile is **not** loaded on localhost in `contact.html`, so test the full flow on the live site or temporarily load Turnstile locally.

## Request / response

**POST** `/contact` — `Content-Type: application/json`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "",
  "subject": "Website project",
  "message": "Hello…",
  "cf-turnstile-response": "<token from Turnstile>"
}
```

**Success (200):**

```json
{ "message": "Thanks! Your message has been sent…" }
```

**Error (4xx/5xx):**

```json
{ "error": "Human-readable message" }
```

## Checklist after deploy

- [ ] Resend domain verified; test send from Resend dashboard
- [ ] `CONTACT_FROM` uses that verified address
- [ ] Secrets set on the worker
- [ ] Submit the form on `https://donohuedesign.com/contact.html`
- [ ] Confirm email arrives; **Reply** goes to the submitter (`reply_to`)
