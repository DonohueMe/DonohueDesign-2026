import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  '#f5eef8',
].join(',');

const CARD_BG = [
  'radial-gradient(ellipse at 15% 20%, rgba(90,170,255,0.95) 0%, transparent 55%)',
  'radial-gradient(ellipse at 90% 80%, rgba(70,220,195,0.90) 0%, transparent 50%)',
  '#0d6ebd',
].join(',');

const rows = [
  { num: '01', cat: 'Website Design & Strategy', tag: 'Mobile-first · Conversion-focused · Fast' },
  { num: '02', cat: 'UX/UI Design', tag: 'User-centered · Wireframes · Prototypes' },
  { num: '03', cat: 'Website Development', tag: 'Clean code · No bloated templates' },
  { num: '04', cat: 'Email Marketing Automation', tag: '3× open rates · Drip sequences · Segmentation' },
  { num: '05', cat: 'Local SEO (GMB)', tag: 'Page 1 results · Santa Rosa · Sonoma County' },
  { num: '06', cat: 'AI Receptionist', tag: '24/7 · Never miss a lead · Instant response' },
  { num: '07', cat: 'Graphic Design', tag: 'Brand-consistent · Logo · Print · Presentations' },
];

function Nav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '0 40px', display: 'flex', alignItems: 'center', height: 52, fontFamily: SF }}>
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Donohue Design</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
        {['Services', 'Work', 'About', 'Contact'].map(i => <span key={i} style={{ fontSize: 14, color: '#3d3d3f', cursor: 'pointer' }}>{i}</span>)}
      </div>
      <button style={{ marginLeft: 28, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a quote</button>
    </nav>
  );
}

export default function LV2_ScanRows() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Main — statement + scan rows */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          {/* Big typographic statement */}
          <div style={{ marginBottom: 52 }}>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 12px' }}>
              Website Designer,<br />Santa Rosa, CA
            </h1>
            <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.6, maxWidth: 520, margin: 0 }}>
              20+ years of design and strategy. Ex-Wells Fargo, ex-Deloitte. I start with your business goals — not a blank canvas.
            </p>
          </div>

          {/* Scannable service rows */}
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 4px' }}>What I do</p>
          {rows.map(({ num, cat, tag }, i) => (
            <div key={num} style={{ borderTop: '1px solid #e5e5ea', padding: '16px 0', display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f9f9fb')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#c5c5c7', width: 24, flexShrink: 0 }}>{num}</span>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 17, fontWeight: 600, color: '#1d1d1f' }}>{cat}</span>
                <span style={{ fontSize: 13, color: '#8e8e93', marginLeft: 14 }}>{tag}</span>
              </div>
              <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
            </div>
          ))}
          {/* Last border */}
          <div style={{ borderTop: '1px solid #e5e5ea' }} />

          {/* Bio strip below rows */}
          <div style={{ marginTop: 48, padding: '28px 0', borderTop: '2px solid #1d1d1f' }}>
            <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.7, margin: 0 }}>
              My name is Jim Donohue. I spent a good chunk of my career as a Senior Product Designer at Wells Fargo and Deloitte — building products used by thousands of people. I led redesigns that drove +15% in subscriptions, +22% in user engagement, and design systems adopted across 90+ apps.
            </p>
          </div>
        </main>

        {/* Sidebar — gradient feature card */}
        <aside style={{ flex: '0 0 280px', position: 'sticky', top: 72 }}>
          <div style={{ background: CARD_BG, borderRadius: 20, padding: '28px 24px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>One designer</p>
            <p style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 20px', lineHeight: 1.1 }}>Full-stack results.</p>
            {['+15%', '+22%', '90+', '20 yrs'].map((n, i) => (
              <div key={n} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{n}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{['Subscriptions', 'Engagement', 'Apps', 'Experience'][i]}</span>
              </div>
            ))}
            <button style={{ marginTop: 20, width: '100%', background: '#fff', color: '#1d1d1f', border: 'none', borderRadius: 980, padding: '11px 0', fontSize: 14, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Start your project
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
