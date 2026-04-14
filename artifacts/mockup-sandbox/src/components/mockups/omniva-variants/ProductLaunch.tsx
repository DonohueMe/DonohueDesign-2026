import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const serviceRows = [
  {
    category: 'Website Designer',
    headline: 'Websites that work as hard as you do.',
    body: 'Fast, beautiful, and built to convert. From simple brochure sites to fully custom e-commerce stores.',
    items: ['Website Design', 'Website Development', 'E-commerce', 'SEO-Optimized Design', 'Website Redesign'],
  },
  {
    category: 'Internet Marketing',
    headline: 'Smarter marketing, powered by AI.',
    body: 'AI voice assistants, email automation, and local SEO that get you found first.',
    items: ['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'],
  },
  {
    category: 'Graphic Designer',
    headline: "A brand identity you\u2019re proud to show off.",
    body: 'Logos, print materials, and digital assets that communicate who you are at first glance.',
    items: ['Logo Design', 'Brand Identity', 'Stationery & Business Cards', 'Brochure & Flyer Design'],
  },
];

export function ProductLaunch() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Hero — Apple Card gradient: lavender · pink · peach · orange · yellow */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
          'radial-gradient(ellipse at 82% 82%, rgba(255,220,100,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 80%, rgba(175,145,230,0.65) 0%, transparent 40%)',
          '#f5eef8',
        ].join(','),
      }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
          <svg width="18" height="18" viewBox="0 0 56 56" fill="currentColor">
            <path d="M37.5 5.8a14.1 14.1 0 0 0-3.3 10.1 13.7 13.7 0 0 0 8.3 12.5 32.7 32.7 0 0 1-4.2 8.7c-2.6 3.8-5.4 7.6-9.6 7.6s-5.3-2.4-10.1-2.4-4.9 2.5-10.2 2.5-7-3.5-9.6-7.8A37.9 37.9 0 0 1 -7 16.6C-7 4.6.8-1.8 8.4-1.8c4.1 0 7.5 2.7 10 2.7s6.2-2.8 10.9-2.8a13.5 13.5 0 0 1 8.2 3.7z"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f', letterSpacing: '-0.01em' }}>Omniva Design</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 7vw, 80px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: '#000000',
          maxWidth: 720,
          margin: '0 0 28px',
        }}>
          The simplicity of Apple.<br />In your website.
        </h1>

        <button style={{
          background: '#1d1d1f',
          color: '#fff',
          border: 'none',
          borderRadius: 980,
          padding: '10px 22px',
          fontSize: 15,
          fontWeight: 500,
          fontFamily: SF,
          cursor: 'pointer',
          letterSpacing: '-0.01em',
        }}>
          Get started
        </button>
      </section>

      {/* Feature sections */}
      {serviceRows.map((s, i) => (
        <section key={s.category} style={{
          background: i % 2 === 0 ? '#ffffff' : '#f5f5f7',
          borderTop: '1px solid #d2d2d7',
          padding: '100px 24px',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div style={i % 2 === 0 ? { order: 0 } : { order: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 16 }}>
                {s.category}
              </p>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#000', margin: '0 0 20px' }}>
                {s.headline}
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.55, color: '#6e6e73', margin: 0 }}>
                {s.body}
              </p>
            </div>
            <div style={i % 2 === 0 ? { order: 1 } : { order: 0 }}>
              {s.items.map((item) => (
                <div key={item} style={{ borderBottom: '1px solid #d2d2d7', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 17, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 17, fontWeight: 400 }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #d2d2d7', padding: '40px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#6e6e73' }}>© 2025 Omniva Design. Santa Rosa, CA.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Website Designer', 'Internet Marketing', 'Graphic Designer'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: '#6e6e73', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
