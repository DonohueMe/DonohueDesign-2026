import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const BIO = [
  'Most website designers jump straight into building. I start with strategy.',
  "Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That\u2019s the difference between a website that looks good and one that actually brings in business.",
  "My name is Jim Donohue. I\u2019m a website designer in Santa Rosa, CA with over 20 years of experience in design, UI/UX, and digital strategy. I spent years as a Senior Product Designer at companies like Wells Fargo and Deloitte \u2014 building products used across dozens of applications and leading redesigns that drove measurable results. A 15% lift in subscriptions. A 22% jump in user engagement. Design systems adopted across 90+ apps.",
];

const GRAD_WARM: React.CSSProperties = {
  background: 'linear-gradient(135deg, #ff6b35, #ff9f43, #f9ca24)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
};

const sections = [
  {
    h1: 'Website Designer in Santa Rosa, CA.',
    sub: 'Strategy-Driven Design That Works',
    subStyle: GRAD_WARM,
    textStyle: {} as React.CSSProperties,
  },
  {
    h1: 'User experience and User interface (UI/UX) Designer in Santa Rosa, CA.',
    sub: 'Strategy-Driven Design That Works',
    subStyle: { color: '#2997ff', display: 'inline' } as React.CSSProperties,
    textStyle: { color: '#2997ff' } as React.CSSProperties,
  },
  {
    h1: 'Website Development in Santa Rosa, CA.',
    sub: 'Strategy-Driven Design That Works',
    subStyle: GRAD_WARM,
    textStyle: {} as React.CSSProperties,
  },
];

const OCEAN_BG = [
  'radial-gradient(ellipse at 15% 20%, rgba(90,170,255,0.95) 0%, transparent 55%)',
  'radial-gradient(ellipse at 90% 80%, rgba(70,220,195,0.90) 0%, transparent 50%)',
  '#0d6ebd',
].join(',');

export default function LV7_Editorial() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#f5f5f7', minHeight: '100vh' }}>

      {/* Hero — white rounded card */}
      <div style={{ padding: '40px 40px 0' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '80px 40px', textAlign: 'center', boxShadow: '0 2px 24px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontSize: 'clamp(48px, 6.5vw, 88px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, margin: 0, color: '#1d1d1f' }}>
            <span style={{ background: 'linear-gradient(135deg, #34c759, #30d158, #5ac8fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Plug</span>
            {' '}and stay.
          </h1>
        </div>
      </div>

      {/* Body — two column */}
      <div style={{ padding: '48px 40px 60px', display: 'flex', gap: 36, alignItems: 'flex-start', maxWidth: 1200, margin: '0 auto' }}>

        {/* Main — repeating editorial sections only */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          {sections.map(({ h1, sub, subStyle, textStyle }, si) => (
            <div key={si} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: si < sections.length - 1 ? '1px solid #e5e5ea' : 'none' }}>
              <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.15 }}>
                {h1}
              </h2>
              <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 18px', lineHeight: 1.2, ...(subStyle as any) }}>
                {sub}
              </p>
              {BIO.map((para, pi) => (
                <p key={pi} style={{ fontSize: 14, lineHeight: 1.7, margin: '0 0 12px', color: textStyle.color || '#3d3d3f', ...(pi === 0 ? { fontWeight: 600, color: textStyle.color || '#1d1d1f' } : {}) }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={{ flex: '0 0 220px', position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* How it works — white box */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '20px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8e8e93', margin: '0 0 14px' }}>How it works</p>
            {['Strategy', 'Design', 'Build', 'Launch', 'Grow'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: ['#ff6b35', '#f9ca24', '#34c759', '#2997ff', '#c899e2'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>{i + 1}</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#1d1d1f' }}>{step}</span>
              </div>
            ))}
            <button style={{ marginTop: 8, width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '9px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Start with a free call
            </button>
          </div>

          {/* Digital Marketing — dark card style */}
          <div style={{ background: '#1d1d1f', borderRadius: 16, padding: '20px 18px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', margin: '0 0 6px' }}>Digital Marketing</p>
            <p style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 14px', ...(GRAD_WARM as any) }}>
              Get found.<br />Stay top of mind.
            </p>
            {['Email marketing automation', 'Local SEO Services (GMB)'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                <span style={{ color: '#ff9f43', fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.35 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Internet Marketing Service — gradient card style */}
          <div style={{ background: OCEAN_BG, borderRadius: 16, padding: '20px 18px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', margin: '0 0 6px' }}>Internet Marketing</p>
            <p style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff', margin: '0 0 14px' }}>
              Never miss<br />a lead.
            </p>
            {['AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.35 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Graphic Design — simple white box */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>Graphic Design</p>
            {['Email design', 'Logo design', 'Brochure & Flyer Design', 'Presentation Design'].map(item => (
              <p key={item} style={{ fontSize: 13, color: '#2997ff', margin: '0 0 5px', cursor: 'pointer', lineHeight: 1.35 }}>{item}</p>
            ))}
          </div>

        </aside>
      </div>
    </div>
  );
}
