import React from 'react';
import portfolioImg from '../../../assets/deloitte.png';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  'radial-gradient(ellipse at 15% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
  'radial-gradient(ellipse at 85% 15%, rgba(255,185,120,0.85) 0%, transparent 50%)',
  'radial-gradient(ellipse at 60% 70%, rgba(248,220,130,0.70) 0%, transparent 50%)',
  '#f0eaf8',
].join(',');

const GRAD_WARM: React.CSSProperties = {
  background: 'linear-gradient(135deg, #e8472a, #f07030, #f09030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
};

const BIO = [
  'Most website designers jump straight into building. I start with strategy.',
  'Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That\u2019s the difference between a website that looks good and one that actually brings in business.',
  'My name is Jim Donohue. I\u2019m a website designer in Santa Rosa, CA with over 20 years of experience in design, UI/UX, and digital strategy. I spent years as a Senior Product Designer at companies like Wells Fargo and Deloitte \u2014 building products used across dozens of applications and leading redesigns that drove measurable results. A 15% lift in subscriptions. A 22% jump in user engagement. Design systems adopted across 90+ apps.',
];

const sections = [
  { h1: 'Website Designer in Santa Rosa, CA.' },
  { h1: 'User experience and User interface (UI/UX) Designer in Santa Rosa, CA.' },
  { h1: 'Website Development in Santa Rosa, CA.' },
];

const timelineSteps = [
  { label: 'Strategy', body: 'We map your customers, goals, and competitive landscape before a single pixel is placed.' },
  { label: 'Design',   body: 'Wireframes, visual design, and UX flows \u2014 all reviewed and refined with your feedback.' },
  { label: 'Build',    body: 'Clean, fast, mobile-first development with no bloated templates.' },
  { label: 'Launch',   body: 'Go live with confidence. Hosting, DNS, and testing all handled.' },
  { label: 'Grow',     body: 'SEO, email, and AI tools that keep working after you launch.' },
];

const serviceCards = [
  {
    title: 'Digital Marketing',
    items: ['Email marketing automation', 'Local SEO Services (GMB)'],
  },
  {
    title: 'Internet Marketing Service',
    items: ['AI Receptionist', 'AI Voice Assistant, website', 'AI Chat Assistant, website'],
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

      {/* Hero */}
      <section style={{ minHeight: 340, background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 60px' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6e6e73', margin: '0 0 14px' }}>Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 18px' }}>
          Plug and stay.
        </h1>
        <p style={{ fontSize: 16, color: '#6e6e73', maxWidth: 380, lineHeight: 1.55, margin: '0 0 28px' }}>
          Strategy-first web design and digital marketing for Santa Rosa businesses.
        </p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '13px 26px', fontSize: 15, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
          Start a project
        </button>
      </section>

      {/* Body */}
      <div style={{ display: 'flex', gap: 52, padding: '60px 40px 80px', maxWidth: 1100, margin: '0 auto', alignItems: 'flex-start' }}>

        {/* Main — three repeating editorial sections */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          {sections.map(({ h1 }, si) => (
            <React.Fragment key={si}>
              <div style={{ marginBottom: 56 }}>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 0', lineHeight: 1.1 }}>
                  {h1}
                </h2>
                <p style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, margin: '2px 0 20px', lineHeight: 1.15, ...(GRAD_WARM as any) }}>
                  Strategy-Driven Design That Works
                </p>
                {BIO.map((para, pi) => (
                  <p key={pi} style={{ fontSize: 14, lineHeight: 1.75, margin: '0 0 12px', color: '#3d3d3f', ...(pi === 0 ? { fontWeight: 600, color: '#1d1d1f' } : {}) }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Portfolio sample — shown after first section */}
              {si === 0 && (
                <div style={{ marginBottom: 56 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8e8e93' }}>Client work</span>
                    <span style={{ fontSize: 12, color: '#2997ff', cursor: 'pointer', fontWeight: 500 }}>View case study ›</span>
                  </div>
                  {/* Image clipped to show top portion — browser-in-browser feel */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e5ea', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', position: 'relative' }}>
                    {/* Fake browser chrome */}
                    <div style={{ background: '#f2f2f2', borderBottom: '1px solid #e0e0e0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        {['#ff5f57','#febc2e','#28c840'].map(c => (
                          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                        ))}
                      </div>
                      <div style={{ flex: 1, background: '#fff', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: '#8e8e93', border: '1px solid #e0e0e0' }}>
                        bersinworks.deloitte.com
                      </div>
                    </div>
                    {/* Clipped screenshot — shows top portion of the image */}
                    <div style={{ height: 320, overflow: 'hidden' }}>
                      <img
                        src={portfolioImg}
                        alt="Deloitte BersinWorks activity feed"
                        style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                    {/* Fade-out at the bottom */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))' }} />
                  </div>
                  <p style={{ fontSize: 12, color: '#8e8e93', margin: '8px 0 0', lineHeight: 1.4 }}>
                    Deloitte / BersinWorks \u2014 enterprise activity feed UX, information architecture, and HR platform design.
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={{ flex: '0 0 200px', position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Strategy timeline */}
          <div style={{ background: '#f9f9fb', borderRadius: 16, padding: '18px 16px', marginBottom: 12 }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8e8e93', margin: '0 0 18px' }}>How it works</p>
            {timelineSteps.map(({ label, body }, i) => (
              <div key={label} style={{ display: 'flex', gap: 12, marginBottom: i < timelineSteps.length - 1 ? 18 : 0 }}>
                {/* Circle */}
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e8472a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{i + 1}</span>
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0, lineHeight: 1.55 }}>{body}</p>
                </div>
              </div>
            ))}
            <button style={{ marginTop: 20, width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '11px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Start with a free call
            </button>
          </div>

          {/* Service category cards */}
          {serviceCards.map(({ title, items }) => (
            <div key={title} style={{ background: '#f9f9fb', borderRadius: 16, padding: '16px', marginBottom: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>{title}</p>
              {items.map(item => (
                <p key={item} style={{ fontSize: 12, color: '#0066cc', margin: '0 0 5px', lineHeight: 1.45, cursor: 'pointer' }}>{item}</p>
              ))}
            </div>
          ))}

        </aside>
      </div>
    </div>
  );
}
