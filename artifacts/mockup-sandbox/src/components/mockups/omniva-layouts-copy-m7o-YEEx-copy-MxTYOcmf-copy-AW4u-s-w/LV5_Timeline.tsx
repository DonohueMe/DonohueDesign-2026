import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  '#f5eef8',
].join(',');

const timeline = [
  {
    year: '20+ yrs', tag: 'Experience', title: 'Website Designer, Santa Rosa, CA',
    body: 'Strategy-first design rooted in 20+ years of UX, product design, and digital strategy.',
    accent: '#c899e2',
  },
  {
    year: 'Wells Fargo', tag: 'Past Work', title: '+15% lift in subscriptions',
    body: "Led a product redesign that measurably grew the company's subscription base.",
    accent: '#f4a0b8',
  },
  {
    year: 'Deloitte', tag: 'Past Work', title: '+22% increase in user engagement',
    body: 'UX overhaul of enterprise tools used by thousands of employees across multiple divisions.',
    accent: '#ffb347',
  },
  {
    year: 'Enterprise', tag: 'Design Systems', title: '90+ apps using one system',
    body: 'Built a design system adopted enterprise-wide — bringing consistency at scale.',
    accent: '#5aaeff',
  },
  {
    year: 'Now', tag: 'Donohue Design', title: 'Serving Santa Rosa & beyond',
    body: 'Bringing that same enterprise-grade rigor to local businesses and remote clients.',
    accent: '#46dcc3',
  },
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

export default function LV5_Timeline() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Main — timeline */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          <h1 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 48px' }}>
            Website Designer,<br />Santa Rosa, CA
          </h1>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 19, top: 20, bottom: 20, width: 2, background: 'linear-gradient(180deg, #c899e2, #f4a0b8, #ffb347, #5aaeff, #46dcc3)' }} />

            {timeline.map(({ year, tag, title, body, accent }, i) => (
              <div key={i} style={{ display: 'flex', gap: 28, marginBottom: 40, position: 'relative' }}>
                {/* Node */}
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, boxShadow: '0 0 0 4px #fff' }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.02em', padding: '0 2px' }}>{year.split(' ').slice(0, 2).join('\n')}</span>
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingTop: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: accent, marginRight: 8 }}>{tag}</span>
                  <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '6px 0 8px', lineHeight: 1.15 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service callout below timeline */}
          <div style={{ marginTop: 12, background: '#f5f5f7', borderRadius: 18, padding: '24px 28px' }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px' }}>What I offer today</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Website Design', 'UX/UI', 'Dev', 'Email Marketing', 'SEO', 'AI Tools', 'Graphic Design'].map(s => (
                <span key={s} style={{ background: '#fff', borderRadius: 980, padding: '6px 14px', fontSize: 13, color: '#1d1d1f', fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar — process steps */}
        <aside style={{ flex: '0 0 250px', position: 'sticky', top: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 18px' }}>How it works</p>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 15, top: 24, bottom: 24, width: 2, background: 'linear-gradient(180deg, #c899e2, #ffb347)' }} />
            {['Strategy', 'Design', 'Build', 'Launch', 'Grow'].map((step, i) => (
              <div key={step} style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #c899e2, #f4a0b8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{i + 1}</span>
                </div>
                <div style={{ paddingTop: 7 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1d1d1f', margin: 0 }}>{step}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, background: '#f5f5f7', borderRadius: 14, padding: '16px', textAlign: 'center' }}>
            <button style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>Start with a free call</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
