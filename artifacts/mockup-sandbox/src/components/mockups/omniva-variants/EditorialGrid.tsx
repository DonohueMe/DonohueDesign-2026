import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  {
    category: 'Website Designer',
    headline: 'Websites that work as hard as you do.',
    body: 'Fast, beautiful, and built to convert. From brochure sites to custom e-commerce.',
    items: ['Website Design', 'Website Development', 'E-commerce Store', 'Website Redesign', 'SEO-Optimized Design'],
  },
  {
    category: 'Internet Marketing',
    headline: 'AI marketing for every local business.',
    body: 'Voice assistants, email automation, and local SEO — enterprise tools at small-business prices.',
    items: ['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'],
  },
  {
    category: 'Graphic Designer',
    headline: 'Brands that leave an impression.',
    body: 'Logos, print materials, and digital assets that communicate who you are before you say a word.',
    items: ['Logo Design', 'Brand Identity Design', 'Stationery & Business Cards', 'Brochure & Flyer Design'],
  },
];

export function EditorialGrid() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Hero — rose · coral · amber · peach gradient */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 10% 25%, rgba(255,120,140,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 18%, rgba(255,180,80,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 60%, rgba(255,150,120,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 82%, rgba(255,210,90,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 82%, rgba(255,100,130,0.65) 0%, transparent 40%)',
          '#fff0ee',
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
          maxWidth: 720,
          margin: '0 0 28px',
        }}>
          Grow your business.<br />Look good doing it.
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
          See our services
        </button>
      </section>

      {/* Services — two-column editorial layout, alternating sides */}
      {services.map((s, i) => (
        <section key={s.category} style={{
          background: i % 2 === 0 ? '#ffffff' : '#f5f5f7',
          borderTop: '1px solid #d2d2d7',
          padding: '100px 24px',
        }}>
          <div style={{
            maxWidth: 980, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}>
            {/* Text side */}
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 16 }}>
                {s.category}
              </p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#000', margin: '0 0 20px' }}>
                {s.headline}
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: '#6e6e73', margin: '0 0 28px' }}>
                {s.body}
              </p>
              <a href="#" style={{ fontSize: 17, color: '#0066cc', textDecoration: 'none', fontWeight: 500 }}>
                Learn more ›
              </a>
            </div>
            {/* Items side */}
            <div style={{ order: i % 2 === 0 ? 1 : 0, borderTop: '1px solid #d2d2d7' }}>
              {s.items.map(item => (
                <div key={item} style={{ borderBottom: '1px solid #d2d2d7', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 17, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 20 }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Location */}
      <section style={{ background: '#ffffff', borderTop: '1px solid #d2d2d7', padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 16 }}>
            Locations
          </p>
          <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 16px' }}>
            Local experts.<br />Global-quality work.
          </h2>
          <p style={{ fontSize: 19, color: '#6e6e73', margin: '0 0 32px' }}>
            Santa Rosa, CA · Serving all of Sonoma County
          </p>
          <button style={{
            background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980,
            padding: '12px 24px', fontSize: 16, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
          }}>
            Get in touch
          </button>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #d2d2d7', padding: '40px 24px', background: '#f5f5f7', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
