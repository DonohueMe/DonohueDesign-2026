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
  { label: 'Purpose & Goals',            body: 'Lead generation, e-commerce, brand awareness \u2014 with measurable KPIs tied to business objectives.' },
  { label: 'Target Audience',            body: 'User personas, journey mapping, pain points, and how real customers behave.' },
  { label: 'Content Strategy',           body: 'What to create, how to organize it, tone of voice, and messaging hierarchy.' },
  { label: 'Information Architecture',   body: 'Site structure, navigation, and page hierarchy so users find what they need.' },
  { label: 'Technical Strategy',         body: 'Platform, hosting, performance, security, accessibility, and mobile-friendliness.' },
  { label: 'SEO & Discoverability',      body: 'Keyword targeting, on-page optimization, and visibility in search and AI-powered results.' },
  { label: 'Conversion Optimization',    body: 'CTAs, landing pages, and funnel design that turn visitors into customers.' },
  { label: 'Measurement & Iteration',    body: 'Analytics, A/B testing, and ongoing performance review cycles.' },
];

const IconWeb = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="11" />
    <ellipse cx="14" cy="14" rx="5" ry="11" />
    <path d="M3 14h22" />
  </svg>
);
const IconMarketing = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11v6l16 6V5L4 11z" />
    <path d="M4 11H2.5a1.5 1.5 0 0 0 0 3H4" />
    <path d="M9 18.5l1.2 4a2 2 0 0 0 3.85-1l-.6-2.2" />
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
    <path d="M14 3a11 11 0 1 0 0 22c1.5 0 2.5-1 2.5-2.3 0-.6-.25-1.15-.65-1.55-.4-.4-.65-.95-.65-1.55 0-1.3 1-2.3 2.3-2.3H21A4 4 0 0 0 25 13.4 11 11 0 0 0 14 3z" />
    <circle cx="8.5" cy="12" r="1.2" fill="#1d1d1f" stroke="none" />
    <circle cx="13" cy="8" r="1.2" fill="#1d1d1f" stroke="none" />
    <circle cx="18.5" cy="9.5" r="1.2" fill="#1d1d1f" stroke="none" />
    <circle cx="21" cy="14.5" r="1.2" fill="#1d1d1f" stroke="none" />
  </svg>
);

const serviceCards = [
  {
    title: 'Website Design',
    Icon: IconWeb,
    description: 'Strategy-first websites built to generate leads, earn trust, and turn visitors into customers.',
    items: ['Website Design \u0026 Strategy', 'UX/UI Design', 'Website Development'],
  },
  {
    title: 'Digital Marketing',
    Icon: IconMarketing,
    description: 'AI-powered campaigns, local SEO, and automated outreach \u2014 running around the clock to grow your business.',
    items: ['Email marketing automation', 'Local SEO (GBP)', 'AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant', 'Internet Marketing Service'],
  },
  {
    title: 'Graphic Design',
    Icon: IconDesign,
    description: 'Logos, brand systems, and marketing materials that make your business look like the professional operation it already is.',
    items: ['Email design', 'Logo design', 'Brochure \u0026 Flyer Design', 'Presentation Design'],
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
      <div style={{ display: 'flex', gap: 52, padding: '60px 40px 80px', maxWidth: 1280, margin: '0 auto', alignItems: 'flex-start' }}>

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

              {/* How it works — shown inline in first section */}
              {si === 0 && (
                <div style={{ background: '#fff', borderRadius: 18, padding: '28px 32px', marginBottom: 40, border: '1px solid #e5e5ea' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: '#8e8e93', margin: '0 0 6px' }}>How it works</p>
                  <p style={{ fontSize: 20, fontWeight: 800, color: '#1d1d1f', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Strategy first. Everything else follows.</p>
                  {timelineSteps.map(({ label, body }, i) => (
                    <div key={label}>
                      {i > 0 && <div style={{ height: 1, background: '#e5e5ea' }} />}
                      <div style={{ display: 'flex', gap: 14, padding: '13px 0' }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #e8a0c8 0%, #c87aaa 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>{i + 1}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#1d1d1f', margin: '0 0 3px', lineHeight: 1.2 }}>{label}</p>
                          <p style={{ fontSize: 13, color: '#6e6e73', margin: 0, lineHeight: 1.55 }}>{body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button style={{ marginTop: 12, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '12px 24px', fontSize: 14, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
                    Start with a free call
                  </button>
                </div>
              )}

              {/* Portfolio sample — shown in User Experience section */}
              {si === 1 && (
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
        <aside style={{ flex: '0 0 300px', position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Service category cards */}
          {serviceCards.map(({ title, Icon, description, items }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 18, padding: '20px 18px 52px', marginBottom: 10, border: '1px solid #e5e5ea', position: 'relative' }}>
              <Icon />
              <p style={{ fontSize: description ? 20 : 13, fontWeight: 700, color: '#1d1d1f', margin: '10px 0 6px', lineHeight: 1.2 }}>{title}</p>
              {description && (
                <p style={{ fontSize: 15, color: '#6e6e73', margin: '0 0 10px', lineHeight: 1.55 }}>{description}</p>
              )}
              {items.map(item => (
                <p key={item} style={{ fontSize: 14, color: '#2997ff', margin: '0 0 3px', lineHeight: '22.3px' }}>{item}</p>
              ))}
            </div>
          ))}

          {/* AI Receptionist ad */}
          <div style={{ background: '#f2ede8', borderRadius: 20, padding: '22px 20px 16px', minHeight: 220, display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#6e6e73', margin: '0 0 8px', letterSpacing: '0.01em' }}>AI Receptionist</p>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#1d1d1f', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Answers every call.<br />Around the clock.</p>
            <span style={{ fontSize: 12, color: '#1d1d1f', cursor: 'pointer' }}>Learn more ›</span>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingTop: 16 }}>
              <div style={{ width: 72, height: 72, borderRadius: 18, background: 'linear-gradient(145deg,#2c2c2e,#1a1a1c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* AI Chat Bot ad */}
          <div style={{ background: '#2997ff', borderRadius: 20, padding: '22px 20px 16px', minHeight: 220, display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.75)', margin: '0 0 8px', letterSpacing: '0.01em' }}>AI Chat Assistant</p>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Chat support.<br />Always on.</p>
            <span style={{ fontSize: 12, color: '#fff', cursor: 'pointer', opacity: 0.9 }}>Learn more ›</span>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingTop: 16 }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* AI Automation ad */}
          <div style={{ background: '#1d1d1f', borderRadius: 20, padding: '22px 20px 16px', minHeight: 220, display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px', letterSpacing: '0.01em' }}>AI Automation</p>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Set it. Forget it. Grow.</p>
            <span style={{ fontSize: 12, color: '#2997ff', cursor: 'pointer' }}>Learn more ›</span>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingTop: 16 }}>
              <div style={{ position: 'relative', width: 80, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'conic-gradient(from 0deg, #c898e2, #2997ff, #f4b880, #c898e2)', opacity: 0.85 }} />
                <div style={{ position: 'absolute', width: 46, height: 46, borderRadius: '50%', background: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
