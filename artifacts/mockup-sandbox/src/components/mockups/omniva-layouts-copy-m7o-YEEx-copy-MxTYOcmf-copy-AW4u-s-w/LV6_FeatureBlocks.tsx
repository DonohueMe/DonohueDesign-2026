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
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Donohue Design</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
        {['Services', 'Work', 'About', 'Contact'].map(i => <span key={i} style={{ fontSize: 14, color: '#3d3d3f', cursor: 'pointer' }}>{i}</span>)}
      </div>
      <button style={{ marginLeft: 28, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a quote</button>
    </nav>
  );
}

export default function LV6_FeatureBlocks() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Main — alternating feature blocks */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>

          {/* Block 1 — Dark statement */}
          <div style={{ background: '#1d1d1f', borderRadius: 20, padding: '44px 48px', marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', margin: '0 0 14px' }}>Website Designer · Santa Rosa, CA</p>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 20px' }}>
              <span style={GRAD_TEXT}>Strategy first.</span>
              <span style={{ color: '#fff' }}>{' '}Design second.</span>
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, maxWidth: 460 }}>
              My name is Jim Donohue. I spent 20+ years as a Senior Product Designer at Wells Fargo and Deloitte. I start by understanding your customers and goals \u2014 then I design.
            </p>
          </div>

          {/* Block 2 — Light text block */}
          <div style={{ padding: '36px 4px', marginBottom: 4 }}>
            <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.75, margin: '0 0 16px' }}>
              Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site.
            </p>
            <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.75, margin: 0 }}>
              That difference \u2014 between a website that looks good and one that actually brings in business \u2014 is the whole point.
            </p>
          </div>

          {/* Block 3 — Gradient feature */}
          <div style={{ background: 'linear-gradient(135deg, rgba(90,170,255,0.12), rgba(70,220,195,0.10))', border: '1px solid rgba(90,170,255,0.2)', borderRadius: 20, padding: '36px 48px', marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2997ff', margin: '0 0 10px' }}>Website Design & Strategy</p>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 14px', lineHeight: 1.1 }}>
              Your website. Working harder than ever.
            </h2>
            <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.65, margin: '0 0 18px' }}>
              Mobile-first, fast-loading, and built around what your customers actually need \u2014 not what looks impressive in a portfolio.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Website Design', 'UX/UI', 'Development', 'E-commerce'].map(s => (
                <span key={s} style={{ background: '#fff', borderRadius: 980, padding: '5px 12px', fontSize: 12, color: '#1d1d1f', fontWeight: 500, border: '1px solid #e5e5ea' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Block 4 — Dark feature */}
          <div style={{ background: '#1d1d1f', borderRadius: 20, padding: '36px 48px', marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', margin: '0 0 10px' }}>Digital Marketing</p>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 14px', lineHeight: 1.1 }}>
              Get found. Stay top of mind.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '0 0 18px' }}>
              Email automation and local SEO that keep working after you launch \u2014 putting your business in front of the right people.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Email Marketing', 'Local SEO (GMB)', 'AI Receptionist'].map(s => (
                <span key={s} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 980, padding: '5px 12px', fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Block 5 — Light feature */}
          <div style={{ background: '#f5f5f7', borderRadius: 20, padding: '36px 48px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Graphic Design</p>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 14px', lineHeight: 1.1 }}>
              One brand. Every touchpoint.
            </h2>
            <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.65, margin: '0 0 18px' }}>
              Logo, email design, brochures, presentations \u2014 all matching your website quality.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Logo Design', 'Email Design', 'Brochures', 'Presentations'].map(s => (
                <span key={s} style={{ background: '#fff', borderRadius: 980, padding: '5px 12px', fontSize: 12, color: '#1d1d1f', fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar — stats */}
        <aside style={{ flex: '0 0 250px', position: 'sticky', top: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 16px' }}>Proven Results</p>
          {[
            { n: '+15%', label: 'Lift in subscriptions', sub: 'Wells Fargo redesign' },
            { n: '+22%', label: 'User engagement', sub: 'Deloitte UX overhaul' },
            { n: '90+', label: 'Apps using the system', sub: 'Enterprise scale' },
            { n: '20+', label: 'Years of experience', sub: 'Design, UX, strategy' },
          ].map(({ n, label, sub }, i) => (
            <div key={n} style={{ borderTop: i === 0 ? 'none' : '1px solid #e5e5ea', paddingTop: i === 0 ? 0 : 18, marginBottom: 18 }}>
              <p style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.04em', margin: '0 0 2px', ...GRAD_TEXT }}>{n}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 1px' }}>{label}</p>
              <p style={{ fontSize: 11, color: '#8e8e93', margin: 0 }}>{sub}</p>
            </div>
          ))}
          <div style={{ marginTop: 4, background: '#f5f5f7', borderRadius: 14, padding: '14px', textAlign: 'center' }}>
            <button style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>Get a free quote</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
