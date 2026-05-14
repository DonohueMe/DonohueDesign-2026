import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  '#f5eef8',
].join(',');

const services = [
  { cat: 'Website Design', items: ['Website Design & Strategy', 'UX/UI Design', 'Website Development'] },
  { cat: 'Digital Marketing', items: ['Email Marketing', 'Local SEO (GMB)', 'Google Ads'] },
  { cat: 'AI Tools', items: ['AI Receptionist', 'AI Voice Assistant', 'AI Chat'] },
  { cat: 'Graphic Design', items: ['Logo Design', 'Email Design', 'Brochures'] },
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

export default function LV3_PersonaStrip() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px', display: 'flex', gap: 52, alignItems: 'flex-start' }}>

        {/* Main */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>

          {/* Persona strip — horizontal card */}
          <div style={{ background: '#f5f5f7', borderRadius: 20, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #c899e2, #f4a0b8, #ffb347)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>J</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 19, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Jim Donohue</p>
              <p style={{ fontSize: 14, color: '#6e6e73', margin: '0 0 6px' }}>Website Designer & Strategist · Santa Rosa, CA</p>
              <p style={{ fontSize: 13, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>
                20+ years in design, UX/UI, and strategy. Ex-Senior Product Designer at Wells Fargo and Deloitte. I start with your goals — not a template.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
              {['+15%', '+22%', '90+'].map((n, i) => (
                <div key={n} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em', margin: '0 0 2px', background: 'linear-gradient(135deg, #c899e2, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{n}</p>
                  <p style={{ fontSize: 10, color: '#8e8e93', margin: 0 }}>{['Subs', 'Engage', 'Apps'][i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service cards grid 2x2 */}
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Services</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {services.map(({ cat, items }) => (
              <div key={cat} style={{ background: '#f5f5f7', borderRadius: 18, padding: '24px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px' }}>{cat}</p>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                    <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                    <span style={{ fontSize: 13, color: '#3d3d3f' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bio paragraph */}
          <div style={{ marginTop: 32, padding: '28px 32px', background: '#f5f5f7', borderRadius: 18 }}>
            <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.7, margin: 0 }}>
              Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site.
            </p>
          </div>
        </main>

        {/* Sidebar — contact card */}
        <aside style={{ flex: '0 0 260px', position: 'sticky', top: 72 }}>
          <div style={{ background: '#f5f5f7', borderRadius: 20, padding: '24px', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #c899e2, #f4a0b8, #ffb347)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>J</span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Jim Donohue</p>
            <p style={{ fontSize: 12, color: '#6e6e73', margin: '0 0 16px' }}>Santa Rosa, CA</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#e8f8ee', borderRadius: 980, padding: '6px 14px', marginBottom: 16 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#1d8f4a' }}>Available now</span>
            </div>
            <button style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer', marginBottom: 8 }}>Get a free quote</button>
            <button style={{ width: '100%', background: 'transparent', color: '#2997ff', border: '1.5px solid #2997ff', borderRadius: 980, padding: '9px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>Schedule a call</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
