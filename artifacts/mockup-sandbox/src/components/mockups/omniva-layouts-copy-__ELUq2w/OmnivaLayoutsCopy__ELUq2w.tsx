import React, { useState, useEffect } from 'react';
import portfolioImg from '../../../assets/deloitte.png';
import logoMark from '../../../assets/ddc-logo.png';

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { w, isMobile: w < 768, isTablet: w >= 768 && w < 1024, isDesktop: w >= 1024 };
}

const PLAIN_NAV_LINKS = ['Case Studies', 'Pricing', 'About/Contact us'];

const SERVICES_CATEGORIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Website Designer',
    links: ['Website Design & Strategy', 'UX/UI Design', 'Website Development'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Digital Marketing',
    links: ['Local SEO (Google My Business)', 'Email Marketing', 'AI Receptionist'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/>
        <circle cx="7.5" cy="10.5" r="1" fill="#1d1d1f" stroke="none"/><circle cx="11" cy="7" r="1" fill="#1d1d1f" stroke="none"/><circle cx="15" cy="7.5" r="1" fill="#1d1d1f" stroke="none"/>
      </svg>
    ),
    title: 'Graphic Designer',
    links: ['Logo Design', 'Brochure & Flyer Design', 'Presentation Design', 'Email Design'],
  },
];

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 180); };
  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button style={{ fontSize: 18, fontWeight: 500, color: '#1d1d1f', background: open ? '#f2f2f7' : 'transparent', border: 'none', cursor: 'pointer', padding: '6px 14px', borderRadius: 980, letterSpacing: '-0.01em', fontFamily: SF, display: 'flex', alignItems: 'center', gap: 5, transition: 'background 0.15s' }}>
        Services
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginTop: 1, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <path d="M2 4l4 4 4-4" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'fixed', top: 84, left: '50%', transform: 'translateX(-50%)', zIndex: 200, visibility: open ? 'visible' : 'hidden', pointerEvents: open ? 'auto' : 'none' }}>
        <div style={{ background: '#f2f2f7', borderRadius: 20, padding: '28px 0', width: 700, boxShadow: '0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)', display: 'flex' }}>
          {SERVICES_CATEGORIES.map((cat, ci) => (
            <div key={cat.title} style={{ flex: 1, padding: '0 28px', borderLeft: ci > 0 ? '1px solid #d1d1d6' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                {cat.icon}
                <span style={{ fontSize: 15, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{cat.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {cat.links.map(link => (
                  <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: '#2997ff', textDecoration: 'none', padding: '8px 0', display: 'block', letterSpacing: '-0.01em', borderBottom: '1px solid rgba(0,0,0,0.07)', transition: 'opacity 0.1s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PillNav() {
  return (
    <nav style={{ background: 'transparent', padding: 0, height: 52, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}>
      <ServicesMegaMenu />
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
  { h1: 'Smart Websites' },
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

export default function OmnivaLayoutsCopy__ELUq2w() {
  const { w, isMobile } = useBreakpoint();
  const showHamburger = w < 768;
  const sidebarStack = w < 1024;
  const sidePad = isMobile ? 16 : w < 1024 ? 32 : 40;
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>

      {/* Fixed white header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: '#fff', padding: `0 ${sidePad}px`, display: 'flex', alignItems: 'center', height: 84 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, marginRight: 20 }}>
          <img src={logoMark} alt="Donohue Design" style={{ height: 30, width: 'auto', display: 'block' }} />
        </a>
        {!showHamburger ? (
          <>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <PillNav />
            </div>
            <img src={logoMark} alt="" aria-hidden="true" style={{ height: 30, width: 'auto', visibility: 'hidden', flexShrink: 0 }} />
          </>
        ) : (
          <button aria-label="Menu" style={{ marginLeft: 'auto', background: 'transparent', border: 'none', width: 40, height: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 6, cursor: 'pointer', padding: '0 8px' }}>
            <span style={{ width: 14, height: 2, background: '#1d1d1f', borderRadius: 1 }} />
            <span style={{ width: 20, height: 2, background: '#1d1d1f', borderRadius: 1 }} />
            <span style={{ width: 26, height: 2, background: '#1d1d1f', borderRadius: 1 }} />
          </button>
        )}
      </header>
      {/* Spacer to offset fixed header */}
      <div style={{ height: 84 }} />

      {/* Hero */}
      <section style={{ background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 80px' }}>
        <p style={{ fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 18px' }}>
          Strategy first.<br />Results always.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #fff', width: 100, margin: '40px 0 24px' }} />
        <p style={{ fontSize: 18, color: '#3d3d3f', fontWeight: 500, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
          Schedule your free consultation now.
        </p>
        <a href="#" style={{ display: 'inline-block', background: '#000', color: '#fff', fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', padding: '14px 32px', borderRadius: 40, textDecoration: 'none' }}>
          Get Started
        </a>
      </section>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: sidebarStack ? 'column' : 'row', gap: sidebarStack ? 32 : 52, padding: sidebarStack ? '40px 16px 60px' : '60px 40px 80px', maxWidth: 1280, margin: '0 auto', alignItems: 'flex-start' }}>

        {/* Main — three repeating editorial sections */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          {sections.map(({ h1 }, si) => (
            <React.Fragment key={si}>
              <div style={{ marginBottom: 56 }}>
                <h1 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 24px', lineHeight: 1.36 }}>
                  {h1}<br />
                  <span style={{ ...(GRAD_WARM as any) }}>Strategy-Driven Design That Works</span>
                </h1>
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
        <aside style={{ flex: sidebarStack ? '1 1 auto' : '0 0 300px', width: sidebarStack ? '100%' : undefined, position: sidebarStack ? 'static' : 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Service category cards */}
          {serviceCards.map(({ title, Icon, description, items }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 18, padding: '20px 18px 24px', marginBottom: 40, border: '1px solid #e5e5ea', position: 'relative' }}>
              <Icon />
              <h4 style={{ fontSize: description ? 20 : 13, fontWeight: 700, color: '#1d1d1f', margin: '10px 0 10px', lineHeight: 1.2 }}>{title}</h4>
              {description && (
                <p style={{ fontSize: 17, color: '#1d1d1f', margin: '0 0 10px', lineHeight: 1.55 }}>{description}</p>
              )}
              {items.map(item => (
                <p key={item} style={{ fontSize: 17, color: '#2997ff', margin: '0 0 3px', lineHeight: '26.3px' }}>{item}</p>
              ))}
            </div>
          ))}

        </aside>
      </div>

      <footer style={{ background: '#000', padding: isMobile ? '40px 20px 40px' : '48px 40px 48px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto auto', gap: isMobile ? 24 : 75, paddingBottom: 28, textAlign: isMobile ? 'center' : 'left', justifyContent: isMobile ? 'stretch' : 'start' }}>
            <div style={{ order: isMobile ? 1 : 0 }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Donohue Design</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', fontWeight: 500, margin: '0 0 4px' }}>Santa Rosa, CA</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', fontWeight: 500, margin: '0 0 16px' }}>Serving Sonoma, Marin and Napa Counties</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                {[
                  { name: 'LinkedIn', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93a1.74 1.74 0 0 0-1.62 1.83V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg> },
                  { name: 'Facebook', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 3h-2.4v6.9A10 10 0 0 0 22 12z"/></svg> },
                ].map(({ name, svg }) => (
                  <a key={name} href="#" aria-label={name} style={{ width: 56, height: 56, borderRadius: '50%', background: '#363636', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>{svg}</a>
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#fff', margin: '20px 0 0' }}>©2026 Donohue Design</p>
            </div>
            {isMobile && <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.33)', margin: '4px 0', order: 0 }} />}
            <nav style={{ display: 'flex', columnGap: 32, rowGap: 16, flexWrap: 'wrap', alignSelf: 'flex-start', justifyContent: isMobile ? 'center' : 'flex-start', order: isMobile ? -1 : 0 }}>
              {['Website Designer', 'Digital Marketing', 'Graphic Designer', 'Case Studies', 'Pricing', 'About/Contact us'].map(link => (
                <a key={link} href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', textDecoration: 'none', fontWeight: 500 }}>{link}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
