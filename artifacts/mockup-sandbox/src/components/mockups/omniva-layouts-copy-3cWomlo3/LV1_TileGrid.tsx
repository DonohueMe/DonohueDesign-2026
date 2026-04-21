import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  '#f5eef8',
].join(',');

const GRAD_TEXT: React.CSSProperties = {
  background: 'linear-gradient(135deg, #c899e2, #f4a0b8, #ffb347)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

function Nav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '0 40px', display: 'flex', alignItems: 'center', height: 52, fontFamily: SF }}>
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Omniva Design</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
        {['Services', 'Work', 'About', 'Contact'].map(i => <span key={i} style={{ fontSize: 14, color: '#3d3d3f', cursor: 'pointer' }}>{i}</span>)}
      </div>
      <button style={{ marginLeft: 28, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a quote</button>
    </nav>
  );
}

export default function LV1_TileGrid() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ background: '#f5f5f7', padding: '60px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48, alignItems: 'flex-start' }}>

          {/* Main — Apple-card tile grid */}
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* Bio tile */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 48px' }}>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>About Jim Donohue</p>
              <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#1d1d1f', margin: '0 0 16px' }}>
                Website Designer,<br />Santa Rosa, CA
              </h2>
              <p style={{ fontSize: 15, color: '#6e6e73', lineHeight: 1.7, margin: 0 }}>
                20+ years in design, UX/UI, and strategy. Former Senior Product Designer at Wells Fargo and Deloitte. I start with strategy — not a blank canvas.
              </p>
            </div>

            {/* Stats tiles row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[
                { n: '+15%', label: 'Subscriptions' },
                { n: '+22%', label: 'Engagement' },
                { n: '90+', label: 'Apps' },
              ].map(({ n, label }) => (
                <div key={n} style={{ background: '#fff', borderRadius: 18, padding: '28px 24px', textAlign: 'center' }}>
                  <p style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.04em', margin: '0 0 4px', ...GRAD_TEXT }}>{n}</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0, fontWeight: 600 }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Service tiles */}
            {[
              { cat: 'Website Design', title: 'Your site. Built to convert.', body: 'Mobile-first, fast, and designed around what your customers actually need.' },
              { cat: 'Digital Marketing', title: 'Get found. Stay top of mind.', body: 'Email automation and local SEO that keep working after you launch.' },
              { cat: 'AI Marketing Tools', title: 'Never miss a lead — ever.', body: 'AI receptionist, voice assistant, and chat tools that handle inquiries 24/7.' },
              { cat: 'Graphic Design', title: 'One brand. Every touchpoint.', body: 'Logos, email design, brochures — all matching the quality of your website.' },
            ].map(({ cat, title, body }) => (
              <div key={cat} style={{ background: '#fff', borderRadius: 20, padding: '36px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 8px' }}>{cat}</p>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 10px', lineHeight: 1.15 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
                <span style={{ color: '#2997ff', fontSize: 24, marginLeft: 20, flexShrink: 0 }}>›</span>
              </div>
            ))}
          </div>

          {/* Sidebar — sticky service pills */}
          <aside style={{ flex: '0 0 260px', position: 'sticky', top: 72 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Services I Offer</p>
            {['Website Design & Strategy', 'UX/UI Design', 'Website Development', 'Email Marketing', 'Local SEO (GMB)', 'AI Receptionist', 'Graphic Design'].map(s => (
              <div key={s} style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f' }}>{s}</span>
                <span style={{ color: '#2997ff', fontSize: 14 }}>›</span>
              </div>
            ))}
            <div style={{ marginTop: 16, background: '#1d1d1f', borderRadius: 14, padding: '18px', textAlign: 'center' }}>
              <button style={{ width: '100%', background: '#2997ff', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>Free consultation</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
