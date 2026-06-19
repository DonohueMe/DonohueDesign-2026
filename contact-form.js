document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var notice = document.getElementById('form-notification');
  if (!form) return;

  function showNotice(type, msg) {
    if (!notice) return;
    notice.hidden = false;
    notice.className = 'contact-notice contact-notice--' + type;
    notice.textContent = msg;
    try {
      notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (_e) {}
  }

  form.addEventListener('submit', async function (ev) {
    ev.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      showNotice('warning', 'Please fix the highlighted fields and try again.');
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';

    var formData = new FormData(form);
    var payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      subject: formData.get('subject'),
      message: formData.get('message'),
      'cf-turnstile-response': formData.get('cf-turnstile-response')
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      var res = await fetch(form.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      var data = null;
      try {
        data = await res.json();
      } catch (_err) {}

      if (res.ok) {
        showNotice(
          'success',
          (data && data.message) ||
            'Thanks! Your message has been sent. I typically reply within one business day.'
        );
        form.reset();
        form.classList.remove('was-validated');
        if (window.turnstile) {
          try {
            window.turnstile.reset();
          } catch (_e) {}
        }
      } else {
        showNotice(
          'danger',
          (data && data.error) || 'Sorry, something went wrong. Please try again in a moment.'
        );
        if (window.turnstile) {
          try {
            window.turnstile.reset();
          } catch (_e) {}
        }
      }
    } catch (_networkErr) {
      showNotice('danger', 'Network error. Please check your connection and try again.');
      if (window.turnstile) {
        try {
          window.turnstile.reset();
        } catch (_e) {}
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
});
