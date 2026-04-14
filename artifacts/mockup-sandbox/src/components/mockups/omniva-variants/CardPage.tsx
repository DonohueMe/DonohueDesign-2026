import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  {
    category: 'Website Designer',
    headline: 'Your website. Redesigned for results.',
    body: 'We design and build fast, beautiful websites that drive real business outcomes — from simple brochure sites to full e-commerce.',
    items: ['Website Design', 'Website Development', 'E-commerce Store', 'Website Redesign', 'SEO-Optimized Design'],
  },
  {
    category: 'Internet Marketing',
    headline: 'Marketing that never sleeps.',
    body: 'AI-powered tools that answer your calls, send your emails, and rank your business on Google — automatically.',
    items: ['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'],
  },
  {
    category: 'Graphic Designer',
    headline: 'Design that speaks before you do.',
    body: 'Logos, brand guides, print materials, and digital assets crafted to communicate your identity in an instant.',
    items: ['Logo Design', 'Brand Identity Design', 'Stationery & Business Cards', 'Brochure & Flyer Design'],
  },
];

export function CardPage() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Hero — ocean blue · cyan · seafoam · mint gradient */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 15% 85%, rgba(60,150,255,0.65) 0%, transparent 40%)',
          '#dff3ff',
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
          Beautiful websites.<br />Powered by smart marketing.
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
          Get a free consultation
        </button>
      </section>

      {/* Services — centered layout, Apple Card style */}
      {services.map((s, i) => (
        <section key={s.category} style={{
          background: '#ffffff',
          borderTop: '1px solid #d2d2d7',
          padding: '120px 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', marginBottom: 20 }}>
              {s.category}
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#000', margin: '0 0 20px' }}>
              {s.headline}
            </h2>
            <p style={{ fontSize: 21, lineHeight: 1.55, color: '#6e6e73', margin: '0 0 48px' }}>
              {s.body}
            </p>
            <div style={{ textAlign: 'left', borderTop: '1px solid #d2d2d7' }}>
              {s.items.map(item => (
                <div key={item} style={{ borderBottom: '1px solid #d2d2d7', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 17, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 20 }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA banner */}
      <section style={{
        background: '#f5f5f7',
        borderTop: '1px solid #d2d2d7',
        padding: '100px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 16px' }}>
            Ready to grow?
          </h2>
          <p style={{ fontSize: 21, color: '#6e6e73', margin: '0 0 36px' }}>
            Based in Santa Rosa, CA. Serving businesses throughout Sonoma County and Northern California.
          </p>
          <button style={{
            background: '#0066cc', color: '#fff', border: 'none', borderRadius: 980,
            padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
          }}>
            Start your project
          </button>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #d2d2d7', padding: '40px 24px', background: '#ffffff', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
