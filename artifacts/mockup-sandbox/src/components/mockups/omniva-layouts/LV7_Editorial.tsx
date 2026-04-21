import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  'radial-gradient(ellipse at 15% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
  'radial-gradient(ellipse at 85% 15%, rgba(255,185,120,0.85) 0%, transparent 50%)',
  'radial-gradient(ellipse at 60% 70%, rgba(248,220,130,0.70) 0%, transparent 50%)',
  '#f0eaf8',
].join(',');

const sidebarNav = [
  {
    title: 'About Jim',
    items: ['Website designer, Santa Rosa CA', 'Strategy \u00b7 UX/UI \u00b7 Development'],
  },
  {
    title: 'Website Design',
    items: ['UX/UI, Strategy, Development', 'Mobile-first \u00b7 Conversion-focused'],
  },
  {
    title: 'Digital Marketing',
    items: ['SEO \u00b7 AI tools', 'Email automation'],
  },
  {
    title: 'Graphic Design',
    items: ['Brand \u00b7 Logo \u00b7 Design', 'Email \u00b7 Print \u00b7 Presentations'],
  },
];

export default function LV7_Editorial() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>

      {/* Nav */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, padding: '0 40px', display: 'flex', alignItems: 'center', height: 52 }}>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Omniva Design</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 24 }}>
          {['Services', 'Work', 'About', 'Contact'].map(i => (
            <span key={i} style={{ fontSize: 13, color: '#3d3d3f', cursor: 'pointer' }}>{i}</span>
          ))}
        </div>
        <button style={{ marginLeft: 24, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 15px', fontSize: 12, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
          Get a quote
        </button>
      </nav>

      {/* Hero — full bleed gradient */}
      <section style={{ minHeight: 380, background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 60px', position: 'relative' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6e6e73', margin: '0 0 14px' }}>Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 18px' }}>
          Plug and stay.
        </h1>
        <p style={{ fontSize: 16, color: '#6e6e73', maxWidth: 400, lineHeight: 1.55, margin: '0 0 28px' }}>
          Strategy-first web design and digital marketing for Santa Rosa businesses.
        </p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '13px 26px', fontSize: 15, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
          Start a project
        </button>
      </section>

      {/* Body — white, two column */}
      <div style={{ display: 'flex', gap: 48, padding: '52px 40px 80px', maxWidth: 1100, margin: '0 auto' }}>

        {/* Main content */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>

          {/* Intro block */}
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.15 }}>
            Website Designer, Santa Rosa, CA
          </h1>
          <p style={{ fontSize: 13, color: '#8e8e93', margin: '0 0 20px', fontWeight: 400 }}>
            Design, Strategy, and UI for Local Businesses
          </p>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', lineHeight: 1.7, margin: '0 0 12px' }}>
            Most website designers jump straight into building. I start with strategy.
          </p>
          <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 12px' }}>
            Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That\u2019s the difference between a website that looks good and one that actually brings in business.
          </p>
          <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 0' }}>
            My name is Jim Donohue. I\u2019m a website designer in Santa Rosa, CA with over 20 years of experience in design, UI/UX, and digital strategy. I\u2019ve spent a good chunk of that time working as a Senior Product Designer at companies like Wells Fargo and Deloitte \u2014 A 15% lift in subscriptions. A 22% increase in user engagement. Design systems adopted across 90+ apps.
          </p>

          {/* Service sections */}
          {[
            {
              title: 'Website Design & Strategy',
              body: 'Every layout choice, CTA, and navigation path should guide visitors toward a clear goal. Mobile-first, fast-loading, and built around what your customers actually need.',
            },
            {
              title: 'Digital Marketing',
              body: 'Email campaigns and local SEO that put your business in front of the right people at the right time. AI tools that keep working after you launch.',
            },
            {
              title: 'Graphic Design',
              body: 'Brand consistency across every touchpoint \u2014 email, logo, brochures, presentations. Everything matches your website, same colors, same feel, same level of quality.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ marginTop: 36, paddingTop: 32, borderTop: '1px solid #e5e5ea' }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 10px' }}>{title}</h2>
              <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.7, margin: 0 }}>{body}</p>
            </div>
          ))}
        </main>

        {/* Sidebar — "ON THIS PAGE" nav */}
        <aside style={{ flex: '0 0 190px', position: 'sticky', top: 24, alignSelf: 'flex-start' }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8e8e93', margin: '0 0 14px' }}>On this page</p>

          {sidebarNav.map(({ title, items }, i) => (
            <div key={title} style={{ borderTop: i === 0 ? 'none' : '1px solid #e5e5ea', paddingTop: i === 0 ? 0 : 12, marginBottom: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 4px', cursor: 'pointer' }}>{title}</p>
              {items.map(item => (
                <p key={item} style={{ fontSize: 12, color: '#8e8e93', margin: '0 0 2px', lineHeight: 1.4, cursor: 'pointer' }}>{item}</p>
              ))}
            </div>
          ))}

          {/* CTA card */}
          <div style={{ marginTop: 16, background: '#1d1d1f', borderRadius: 14, padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: '0 0 10px', lineHeight: 1.4 }}>
              Ready to work together?
            </p>
            <button style={{ width: '100%', background: '#2997ff', color: '#fff', border: 'none', borderRadius: 980, padding: '9px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Get a free quote
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
