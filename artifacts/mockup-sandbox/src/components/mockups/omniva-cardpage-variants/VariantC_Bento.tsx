import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  { kicker: 'Website', tint: '#2997ff', title: 'Sites that convert.', items: ['Design & Strategy', 'UX/UI Design', 'Development'] },
  { kicker: 'Marketing', tint: '#34c759', title: 'Get found.', items: ['Email Automation', 'Local SEO (GMB)'] },
  { kicker: 'AI Suite', tint: '#c898e2', title: 'AI 24/7.', items: ['AI Receptionist', 'AI Voice', 'AI Chat'] },
  { kicker: 'Branding', tint: '#f09030', title: 'Look the part.', items: ['Logo', 'Email', 'Brochure', 'Presentation'] },
];

const reviews = [
  { name: 'Maria T.', text: 'Bookings up 30% in the first month.' },
  { name: 'Derek H.', text: 'Page 3 to page 1 on Google.' },
  { name: 'Lisa M.', text: "Haven't missed a lead in weeks." },
];

// VARIATION C — BENTO GRID: dashboard-style mixed-size tiles, dense, glanceable
export function VariantC_Bento() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#f5f5f7', minHeight: '100vh' }}>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 40px' }}>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 814 1000" fill="#1d1d1f">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
            </svg>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f' }}>Donohue Design</span>
          </div>
          <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '8px 16px', fontSize: 12, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
            Get a quote
          </button>
        </div>

        {/* BENTO GRID — 12 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>

          {/* HERO TILE — 8 cols × 2 rows */}
          <div style={{
            gridColumn: 'span 8', gridRow: 'span 2',
            borderRadius: 22, padding: '48px 44px',
            background: [
              'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 90%, rgba(100,195,250,0.80) 0%, transparent 50%)',
              '#dff3ff',
            ].join(','),
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 320,
          }}>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#000', margin: '0 0 18px' }}>
              Beautiful websites. Powered by smart marketing.
            </h1>
            <p style={{ fontSize: 15, color: '#1d1d1f', opacity: 0.7, margin: 0 }}>Santa Rosa, CA · Strategy-first web design</p>
          </div>

          {/* CTA TILE — 4 cols × 1 row */}
          <div style={{
            gridColumn: 'span 4',
            borderRadius: 22, padding: '28px 26px',
            background: '#1d1d1f',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 154,
          }}>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px' }}>
              Ready to grow?
            </p>
            <button style={{ background: '#fff', color: '#1d1d1f', border: 'none', borderRadius: 980, padding: '10px 18px', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer', alignSelf: 'flex-start' }}>
              Free consultation
            </button>
          </div>

          {/* RATING TILE — 4 cols × 1 row */}
          <div style={{ gridColumn: 'span 4', borderRadius: 22, padding: '24px 26px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 154 }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 18 }}>★</span>)}
            </div>
            <p style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1 }}>5.0</p>
            <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Google Reviews</p>
          </div>

          {/* BIO TILE — 8 cols × 2 rows */}
          <div style={{ gridColumn: 'span 8', gridRow: 'span 2', borderRadius: 22, padding: '40px 36px', background: '#fff' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2997ff', margin: '0 0 12px' }}>About Jim</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#1d1d1f', margin: '0 0 16px' }}>
              Website Designer, Santa Rosa, CA
            </h2>
            <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 12px' }}>
              Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do.
            </p>
            <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
              Jim Donohue. 20+ years of experience. Senior Product Designer at Wells Fargo and Deloitte. A 15% lift in subscriptions. A 22% jump in user engagement. Design systems adopted across 90+ apps.
            </p>
          </div>

          {/* STAT TILE — 4 cols */}
          <div style={{ gridColumn: 'span 4', borderRadius: 22, padding: '28px 26px', background: 'linear-gradient(135deg, #2997ff, #5ac8fa)', minHeight: 158 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', margin: '0 0 10px' }}>Subscriptions</p>
            <p style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1 }}>+15%</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', margin: '8px 0 0' }}>Lift on redesigned products</p>
          </div>

          {/* STAT TILE 2 — 4 cols */}
          <div style={{ gridColumn: 'span 4', borderRadius: 22, padding: '28px 26px', background: 'linear-gradient(135deg, #c898e2, #f4a0b8)', minHeight: 158 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', margin: '0 0 10px' }}>Engagement</p>
            <p style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1 }}>+22%</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', margin: '8px 0 0' }}>Across leading apps</p>
          </div>

          {/* SERVICE TILES — 4× 3 cols each */}
          {services.map(({ kicker, tint, title, items }) => (
            <div key={kicker} style={{ gridColumn: 'span 3', borderRadius: 22, padding: '24px 22px', background: '#fff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: tint, marginBottom: 14 }} />
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: tint, margin: '0 0 6px' }}>{kicker}</p>
              <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.025em', color: '#1d1d1f', margin: '0 0 14px', lineHeight: 1.2 }}>{title}</h3>
              {items.map((item, i) => (
                <div key={item} style={{ padding: '7px 0', borderTop: i === 0 ? '1px solid #e5e5ea' : 'none', borderBottom: '1px solid #e5e5ea', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ fontSize: 13, color: '#c7c7cc' }}>›</span>
                </div>
              ))}
            </div>
          ))}

          {/* REVIEWS TILE — 6 cols */}
          <div style={{ gridColumn: 'span 6', borderRadius: 22, padding: '28px 26px', background: '#fff' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2997ff', margin: '0 0 18px' }}>Client wins</p>
            {reviews.map(({ name, text }, i) => (
              <div key={name} style={{ borderTop: i > 0 ? '1px solid #e5e5ea' : 'none', padding: i > 0 ? '14px 0 0' : '0 0 14px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#5aaeff,#46dcc3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{name[0]}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, color: '#1d1d1f', margin: 0, lineHeight: 1.45 }}>"{text}"</p>
                  <p style={{ fontSize: 11, color: '#6e6e73', margin: '4px 0 0' }}>{name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MAP TILE — 6 cols */}
          <div style={{ gridColumn: 'span 6', borderRadius: 22, overflow: 'hidden', background: '#fff', position: 'relative', minHeight: 240 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: 240 }} loading="lazy" title="Map"
            />
            <div style={{ position: 'absolute', bottom: 14, left: 14, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 2px 12px rgba(0,0,0,0.14)' }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Donohue Design</p>
              <p style={{ fontSize: 11, color: '#6e6e73', margin: 0 }}>Santa Rosa · Sonoma County</p>
            </div>
          </div>
        </div>

        <footer style={{ padding: '32px 4px 12px', textAlign: 'center' }}>
          <p style={{ fontSize: 11, color: '#6e6e73', margin: 0 }}>© 2025 Donohue Design — Santa Rosa, CA</p>
        </footer>
      </div>
    </div>
  );
}
