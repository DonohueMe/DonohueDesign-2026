import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  {
    category: 'Website Designer',
    headline: 'Extraordinary websites for extraordinary businesses.',
    body: 'We design and build sites that turn visitors into customers. Every pixel considered.',
    items: ['Website Design', 'Website Development', 'E-commerce Store', 'Website Redesign', 'SEO-Optimized Design'],
  },
  {
    category: 'Internet Marketing',
    headline: 'Your 24/7 digital sales team.',
    body: 'AI voice assistants, automated follow-ups, and local SEO that work while you sleep.',
    items: ['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'],
  },
  {
    category: 'Graphic Designer',
    headline: 'An identity as strong as your business.',
    body: 'From first logo sketch to finished brand guide — we make you look unmistakable.',
    items: ['Logo Design', 'Brand Identity Design', 'Stationery & Business Cards', 'Brochure & Flyer Design'],
  },
];

export function DarkPremium() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Hero — teal · emerald · indigo · violet gradient */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 12% 22%, rgba(80,220,180,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 18%, rgba(100,120,255,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 60%, rgba(60,190,160,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 82%, rgba(130,90,255,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 82%, rgba(60,200,155,0.65) 0%, transparent 40%)',
          '#edfaf5',
        ].join(','),
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22 }}>
          <svg width="16" height="16" viewBox="0 0 56 56" fill="#1d1d1f">
            <path d="M37.5 5.8a14.1 14.1 0 0 0-3.3 10.1 13.7 13.7 0 0 0 8.3 12.5 32.7 32.7 0 0 1-4.2 8.7c-2.6 3.8-5.4 7.6-9.6 7.6s-5.3-2.4-10.1-2.4-4.9 2.5-10.2 2.5-7-3.5-9.6-7.8A37.9 37.9 0 0 1 -7 16.6C-7 4.6.8-1.8 8.4-1.8c4.1 0 7.5 2.7 10 2.7s6.2-2.8 10.9-2.8a13.5 13.5 0 0 1 8.2 3.7z"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Omniva Design</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 78px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: '#000000',
          maxWidth: 760,
          margin: '0 0 28px',
        }}>
          Your business deserves<br />a world-class web presence.
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
        }}>
          Work with us
        </button>
      </section>

      {/* Services — large type, card-free list rows */}
      {services.map((s, i) => (
        <section key={s.category} style={{
          background: i % 2 === 0 ? '#ffffff' : '#f5f5f7',
          borderTop: '1px solid #d2d2d7',
          padding: '100px 24px',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 0 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 16 }}>
                  {s.category}
                </p>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.12, color: '#000', margin: '0 0 20px' }}>
                  {s.headline}
                </h2>
                <p style={{ fontSize: 19, lineHeight: 1.6, color: '#6e6e73', margin: '0 0 24px' }}>
                  {s.body}
                </p>
                <a href="#" style={{ fontSize: 17, color: '#0066cc', textDecoration: 'none', fontWeight: 500 }}>
                  Learn more ›
                </a>
              </div>
              <div style={{ borderTop: '1px solid #d2d2d7' }}>
                {s.items.map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #d2d2d7', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 17, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff', fontSize: 20 }}>›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Reviews row */}
      <section style={{ background: '#ffffff', borderTop: '1px solid #d2d2d7', padding: '100px 24px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 20, textAlign: 'center' }}>
            Reviews
          </p>
          <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 60px', textAlign: 'center' }}>
            Trusted by local businesses.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
            {[
              { text: '"Omniva completely transformed our online presence. Bookings up 40% in three months."', name: 'Maria G.', biz: 'Rosa Day Spa' },
              { text: '"Professional, fast, and the results speak for themselves. Our GMB traffic doubled."', name: 'James T.', biz: 'Redwood Roofing' },
              { text: '"Best investment we made for our restaurant. The AI phone system alone saves us hours."', name: 'Linda K.', biz: 'Vine & Table' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#f5f5f7', padding: '32px', borderRadius: 3 }}>
                <div style={{ color: '#ff9f00', fontSize: 14, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1d1d1f', margin: '0 0 20px' }}>{r.text}</p>
                <p style={{ fontSize: 14, color: '#6e6e73', margin: 0 }}>{r.name} · {r.biz}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #d2d2d7', padding: '40px 24px', background: '#ffffff', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
