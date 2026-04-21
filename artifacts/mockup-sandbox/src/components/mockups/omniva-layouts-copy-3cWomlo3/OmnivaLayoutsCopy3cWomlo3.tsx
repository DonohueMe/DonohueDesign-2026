import React from 'react';
import portfolioImg from '../../../assets/deloitte.png';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  /* orange spotlight — top-left, tight circle bleeding from corner */
  'radial-gradient(circle 32% at 6% 0%, rgba(255,100,0,1) 0%, rgba(200,55,0,0.55) 40%, transparent 68%)',
  /* hot pink spotlight — center top */
  'radial-gradient(circle 28% at 50% 5%, rgba(238,50,172,1) 0%, rgba(190,30,130,0.45) 45%, transparent 70%)',
  /* electric blue spotlight — top-right */
  'radial-gradient(circle 26% at 94% 3%, rgba(18,38,230,1) 0%, rgba(12,25,185,0.45) 45%, transparent 70%)',
  /* teal accent — far upper-right edge */
  'radial-gradient(circle 14% at 100% 0%, rgba(0,205,160,0.75) 0%, transparent 65%)',
  '#020202',
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

const IconMarketing = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="17" width="4" height="8" rx="1"/>
    <rect x="9" y="12" width="4" height="13" rx="1"/>
    <rect x="15" y="7" width="4" height="18" rx="1"/>
    <rect x="21" y="3" width="4" height="22" rx="1"/>
  </svg>
);
const IconAI = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="5"/>
    <path d="M14 3v4M14 21v4M3 14h4M21 14h4"/>
    <path d="M6.22 6.22l2.83 2.83M18.95 18.95l2.83 2.83M21.78 6.22l-2.83 2.83M9.05 18.95l-2.83 2.83"/>
  </svg>
);
const IconDesign = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l4-1 14-14a2.83 2.83 0 00-4-4L4 19l-1 4z"/>
    <path d="M17 7l4 4"/>
  </svg>
);

const serviceCards = [
  {
    title: 'Digital Marketing',
    Icon: IconMarketing,
    items: ['Email marketing automation', 'Local SEO Services (GMB)'],
  },
  {
    title: 'Internet Marketing Service',
    Icon: IconAI,
    items: ['AI Receptionist', 'AI Voice Assistant, website', 'AI Chat Assistant, website'],
  },
  {
    title: 'Graphic Design',
    Icon: IconDesign,
    items: ['Email design', 'Logo design', 'Brochure \u0026 Flyer Design', 'Presentation Design'],
  },
];

export default function OmnivaLayoutsCopy3cWomlo3() {
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
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 14px' }}>Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#ffffff', margin: '0 0 18px' }}>
          Plug and stay.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 380, lineHeight: 1.55, margin: '0 0 28px' }}>
          Strategy-first web design and digital marketing for Santa Rosa businesses.
        </p>
        <button style={{ background: '#ffffff', color: '#0a0a0a', border: 'none', borderRadius: 980, padding: '13px 26px', fontSize: 15, fontWeight: 700, fontFamily: SF, cursor: 'pointer' }}>
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

          {/* Stats card — blue-to-teal gradient */}
          <div style={{
            background: 'linear-gradient(160deg, #2d8cff 0%, #1a6fd4 35%, #0fb8c9 100%)',
            borderRadius: 22,
            padding: '22px 20px 20px',
            marginBottom: 12,
          }}>
            {/* Label */}
            <p style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.60)', margin: '0 0 8px' }}>One Designer</p>
            {/* Headline */}
            <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Full-stack results.</p>
            {/* Stat rows */}
            {[
              { stat: '+15%', label: 'Subscriptions' },
              { stat: '+22%', label: 'Engagement' },
              { stat: '90+',  label: 'Apps' },
              { stat: '20 yrs', label: 'Experience' },
            ].map(({ stat, label }, i) => (
              <div key={stat}>
                {i > 0 && <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', margin: '0 0 0' }} />}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0' }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{stat}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)', fontWeight: 500 }}>{label}</span>
                </div>
              </div>
            ))}
            {/* CTA button */}
            <button style={{ marginTop: 8, width: '100%', background: '#fff', color: '#1a6fd4', border: 'none', borderRadius: 980, padding: '13px 0', fontSize: 13, fontWeight: 700, fontFamily: SF, cursor: 'pointer', letterSpacing: '-0.01em' }}>
              Start your project
            </button>
          </div>

          {/* Service category cards — Apple style */}
          {serviceCards.map(({ title, Icon, items }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 18, padding: '14px 14px 40px', marginBottom: 10, border: '1px solid #e5e5ea', position: 'relative' }}>
              <Icon />
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '10px 0 6px', lineHeight: 1.2 }}>{title}</p>
              {items.map(item => (
                <p key={item} style={{ fontSize: 11, color: '#6e6e73', margin: '0 0 3px', lineHeight: 1.45 }}>{item}</p>
              ))}
              {/* "+" button */}
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 26, height: 26, borderRadius: '50%', background: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#fff', fontSize: 18, lineHeight: 1, marginTop: -1 }}>+</span>
              </div>
            </div>
          ))}

        </aside>
      </div>
    </div>
  );
}
