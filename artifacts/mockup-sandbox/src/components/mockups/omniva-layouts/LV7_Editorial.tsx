import React, { useState } from 'react';
import portfolioImg from '../../../assets/deloitte.png';
import logoMark from '../../../assets/ddc-logo.png';

const NAV_DROPDOWNS: Record<string, string[]> = {
  'Website Designer': ['Website Design & Strategy', 'UX/UI Design', 'Website Development'],
  'Digital Marketing': ['Local SEO (GMB)', 'Email Marketing', 'AI Receptionist'],
  'Graphic Designer': ['Logo Design', 'Brochure & Flyer Design', 'Presentation Design', 'Email Design'],
};
const PLAIN_NAV_LINKS = ['Case Studies', 'Pricing', 'About/Contact us'];

function DropdownItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{ fontSize: 18, fontWeight: 500, color: '#1d1d1f', background: open ? 'rgba(0,0,0,0.06)' : 'transparent', border: 'none', cursor: 'pointer', padding: '6px 14px', borderRadius: 980, letterSpacing: '-0.01em', fontFamily: 'inherit', display: 'flex', alignItems: 'center', transition: 'background 0.15s' }}>
        {label}
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 10, zIndex: 200 }}>
          <div style={{ background: '#0d1535', borderRadius: 16, padding: '8px 0', minWidth: 220, boxShadow: '0 12px 40px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {items.map((item, i) => (
              <a key={item} href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'background 0.1s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                {item}<span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>›</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PillNav() {
  return (
    <nav style={{ background: 'transparent', padding: 0, height: 52, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}>
      {Object.entries(NAV_DROPDOWNS).map(([label, items]) => (
        <DropdownItem key={label} label={label} items={items} />
      ))}
      {PLAIN_NAV_LINKS.map(link => (
        <a key={link} href="#" style={{ fontSize: 18, fontWeight: 500, color: '#1d1d1f', textDecoration: 'none', padding: '6px 14px', borderRadius: 980, transition: 'background 0.15s', letterSpacing: '-0.01em' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
          {link}
        </a>
      ))}
    </nav>
  );
}

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
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="22" height="14" rx="1.5" />
    <path d="M3 20h22" />
    <path d="M11 24h6M14 20v4" />
    <rect x="22" y="14" width="8" height="14" rx="1.5" />
    <path d="M25.5 26.5h1" />
  </svg>
);
const IconMarketing = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 26 L13 17 L18 22 L29 9" />
    <path d="M22 9 H29 V16" />
    <path d="M4 29 H30" />
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
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#1d1d1f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 4a13 13 0 1 0 0 26c1.7 0 2.8-1.1 2.8-2.5 0-.65-.25-1.25-.7-1.7-.45-.45-.7-1.05-.7-1.7 0-1.4 1.1-2.5 2.5-2.5h2.6A5 5 0 0 0 28.5 16 13 13 0 0 0 17 4z" />
    <circle cx="10.5" cy="14" r="1.4" />
    <circle cx="15" cy="9" r="1.4" />
    <circle cx="21" cy="10" r="1.4" />
    <circle cx="24.5" cy="15" r="1.4" />
  </svg>
);

const serviceCards = [
  {
    title: 'Website Design',
    Icon: IconWeb,
    description: 'Strategy-first websites built to generate leads, earn trust, and turn visitors into customers.',
    items: ['Website Design & Strategy', 'Smart Websites', 'Website Development'],
  },
  {
    title: 'Digital Marketing',
    Icon: IconMarketing,
    description: 'AI-powered campaigns, local SEO, and automated outreach \u2014 running around the clock to grow your business.',
    items: ['Local SEO (Google My Business)', 'AI Receptionist', 'Email Marketing Automation'],
  },
  {
    title: 'Graphic Design',
    Icon: IconDesign,
    description: 'Logos, brand systems, and marketing materials that make your business look like the professional operation it already is.',
    items: ['Presentation Design', 'Email Design', 'Brochure & Flyer Design', 'Logo Design'],
  },
];

export default function LV7_Editorial() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>

      {/* Fixed white header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid #e5e5ea', padding: '0 40px', display: 'flex', alignItems: 'center', height: 84 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logoMark} alt="Donohue Design" style={{ height: 37, width: 'auto', display: 'block' }} />
        </a>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <PillNav />
        </div>
      </header>
      {/* Spacer to offset fixed header */}
      <div style={{ height: 84 }} />

      {/* Hero */}
      <section style={{ background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 80px' }}>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.03, color: '#1d1d1f', margin: '0 0 18px' }}>
          Strategy first.<br />Results always.
        </h1>
        <hr style={{ border: 'none', borderTop: '1px solid #fff', width: 100, margin: '40px 0 24px' }} />
        <p style={{ fontSize: 18, color: '#3d3d3f', fontWeight: 500, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
          Schedule your free consultation now.
        </p>
        <a href="#" style={{ display: 'inline-block', background: '#000', color: '#fff', fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', padding: '14px 32px', borderRadius: 40, textDecoration: 'none' }}>
          Get Started
        </a>
      </section>

      {/* Body */}
      <div style={{ display: 'flex', gap: 52, padding: '60px 40px 80px', maxWidth: 1280, margin: '0 auto', alignItems: 'flex-start' }}>

        {/* Main — three repeating editorial sections */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          {sections.map(({ h1 }, si) => (
            <React.Fragment key={si}>
              <div style={{ marginBottom: 56 }}>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 0', lineHeight: 1.32 }}>
                  {h1}
                </h2>
                <p style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, margin: '8px 0 40px', lineHeight: 1.15, ...(GRAD_WARM as any), display: 'block' }}>
                  Strategy-Driven Design That Works
                </p>
                {BIO.map((para, pi) => (
                  <p key={pi} style={{ fontSize: 18, lineHeight: 1.75, margin: pi === 0 ? '0 0 22px' : '0 0 12px', color: '#3d3d3f', fontWeight: 400 }}>
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
                <p style={{ fontSize: 16, color: '#6e6e73', margin: '0 0 10px', lineHeight: 1.55 }}>{description}</p>
              )}
              {items.map(item => (
                <p key={item} style={{ fontSize: 14, color: '#2997ff', margin: '0 0 3px', lineHeight: '22.3px' }}>{item}</p>
              ))}
            </div>
          ))}

        </aside>
      </div>
    </div>
  );
}
