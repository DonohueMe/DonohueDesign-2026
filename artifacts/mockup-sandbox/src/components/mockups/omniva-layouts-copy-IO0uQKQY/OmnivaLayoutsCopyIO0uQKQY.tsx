import React, { useState } from 'react';
import portfolioImg from '../../../assets/deloitte.png';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const WEB_DESIGN_SERVICES = ['Website Design & Strategy', 'UX/UI Design', 'Website Development'];
const OTHER_NAV_LINKS = ['Digital Marketing', 'Graphic Designer', 'Case Studies', 'Pricing', 'Contact us'];

function StickyNav() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'absolute', top: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <nav style={{ background: '#0d1535', borderRadius: 980, padding: '0 28px', height: 52, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', boxShadow: '0 4px 24px rgba(0,0,0,0.22)', position: 'relative' }}>
        <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <button style={{ fontSize: 14, fontWeight: 500, color: open ? '#fff' : 'rgba(255,255,255,0.88)', background: open ? 'rgba(255,255,255,0.12)' : 'transparent', border: 'none', cursor: 'pointer', padding: '6px 14px', borderRadius: 980, letterSpacing: '-0.01em', fontFamily: SF, display: 'flex', alignItems: 'center', gap: 5, transition: 'background 0.15s' }}>
            Website Designer
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d={open ? 'M1 5l4-4 4 4' : 'M1 1l4 4 4-4'} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open && (
            <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 10 }}>
              <div style={{ background: '#0d1535', borderRadius: 16, padding: '8px 0', minWidth: 240, boxShadow: '0 12px 40px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {WEB_DESIGN_SERVICES.map((item, i) => (
                  <a key={item} href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', borderBottom: i < WEB_DESIGN_SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'background 0.1s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    {item}<span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>›</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {OTHER_NAV_LINKS.map(link => (
          <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: '#ffffff', textDecoration: 'none', padding: '6px 14px', borderRadius: 980, transition: 'background 0.15s', letterSpacing: '-0.01em' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

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

const IllustrBrowser = () => (
  <div style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f5f7 60%, #fef0f6 100%)', borderRadius: 10, padding: 10, marginBottom: 4, position: 'relative', overflow: 'hidden' }}>
    {/* Mac window */}
    <div style={{ background: '#fff', borderRadius: 7, boxShadow: '0 6px 18px rgba(20,20,40,0.10)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.04)' }}>
      {/* Title bar */}
      <div style={{ background: '#f6f6f8', borderBottom: '1px solid #ececef', padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
        <div style={{ display: 'flex', gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div style={{ flex: 1, height: 8, background: '#fff', borderRadius: 3, border: '1px solid #ececef', marginLeft: 4 }} />
      </div>
      {/* Hero preview */}
      <div style={{ padding: '8px 10px 10px' }}>
        <div style={{ height: 30, borderRadius: 5, background: 'linear-gradient(135deg, #2997ff 0%, #5ac8fa 60%, #c898e2 100%)', position: 'relative', overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ position: 'absolute', left: 6, top: 6, height: 4, width: 30, background: 'rgba(255,255,255,0.95)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: 6, top: 13, height: 3, width: 22, background: 'rgba(255,255,255,0.7)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', right: 6, bottom: 5, height: 8, width: 22, background: '#1d1d1f', borderRadius: 10 }} />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ flex: 1, height: 14, background: '#f5f5f7', borderRadius: 3 }} />
          <div style={{ flex: 1, height: 14, background: '#f5f5f7', borderRadius: 3 }} />
          <div style={{ flex: 1, height: 14, background: '#f5f5f7', borderRadius: 3 }} />
        </div>
      </div>
    </div>
    {/* Cursor */}
    <svg width="14" height="14" viewBox="0 0 24 24" style={{ position: 'absolute', right: 14, bottom: 12, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))' }}>
      <path d="M3 2l7 18 2.5-7.5L20 10z" fill="#1d1d1f" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  </div>
);

const IllustrDigitalMarketing = () => {
  const bars = [38, 56, 44, 72, 60, 88, 78];
  return (
    <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f7 50%, #eef6ff 100%)', borderRadius: 10, padding: 10, marginBottom: 4, position: 'relative', overflow: 'hidden' }}>
      <div style={{ background: '#fff', borderRadius: 7, boxShadow: '0 6px 18px rgba(20,20,40,0.08)', border: '1px solid rgba(0,0,0,0.04)', padding: '10px 10px 8px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34c759' }} />
            <span style={{ fontSize: 7.5, color: '#8e8e93', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Campaign reach</span>
          </div>
          <span style={{ fontSize: 7.5, color: '#34c759', fontWeight: 700 }}>+24%</span>
        </div>
        {/* Big metric */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1 }}>12.4k</span>
          <span style={{ fontSize: 8, color: '#8e8e93' }}>impressions / wk</span>
        </div>
        {/* Bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 32, marginBottom: 5 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 2, background: i === bars.length - 1 ? 'linear-gradient(180deg, #2997ff, #5ac8fa)' : '#e5e5ea' }} />
          ))}
        </div>
        {/* Channel chips */}
        <div style={{ display: 'flex', gap: 4 }}>
          {[
            { dot: '#2997ff', label: 'SEO' },
            { dot: '#c898e2', label: 'Email' },
            { dot: '#f09030', label: 'Ads' },
          ].map(({ dot, label }) => (
            <div key={label} style={{ flex: 1, background: '#f5f5f7', borderRadius: 4, padding: '3px 5px', display: 'flex', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: dot, flexShrink: 0 }} />
              <span style={{ fontSize: 7.5, color: '#3d3d3f', fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IllustrAvatars = () => (
  <div style={{ background: '#f5f5f7', borderRadius: 10, padding: '14px 12px', marginBottom: 4, display: 'flex', gap: 8 }}>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#7b5ea7,#a07bc8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>OD</div>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#f09030,#f4b860)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>A</div>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#2997ff,#6ac4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>M</div>
  </div>
);

const IllustrWave = () => (
  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  </div>
);

const serviceCards = [
  {
    label: 'WEBSITE DESIGNER',
    headline: 'Websites that convert browsers into buyers.',
    Illust: IllustrBrowser,
    items: ['Website Design \u0026 Strategy', 'UX/UI Design', 'Website Development'],
  },
  {
    label: 'DIGITAL MARKETING',
    headline: 'AI marketing that never sleeps.',
    Illust: IllustrDigitalMarketing,
    items: ['Email marketing automation', 'Local SEO (GBP)', 'AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant', 'Internet Marketing Service'],
  },
  {
    label: 'GRAPHIC DESIGNER',
    headline: 'A brand identity you\u2019re proud to show off.',
    Illust: IllustrAvatars,
    items: ['Email design', 'Logo design', 'Brochure \u0026 Flyer Design', 'Presentation Design'],
  },
];

export default function OmnivaLayoutsCopyIO0uQKQY() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff', position: 'relative' }}>

      {/* Nav */}
      <StickyNav />

      {/* Hero */}
      <section style={{ minHeight: 600, background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 60px' }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 88px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 22px' }}>
          Built to rank.<br />Designed to convert.
        </h1>
        <p style={{ fontSize: 16, color: '#6e6e73', maxWidth: 400, lineHeight: 1.55, margin: 0 }}>
          Strategy-first web design and AI-powered marketing for Santa Rosa businesses that are done playing small.
        </p>
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
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={{ flex: '0 0 300px', position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Service category cards — screenshot style */}
          {serviceCards.map(({ label, headline, Illust, items }) => (
            <div key={label} style={{ background: '#fff', borderRadius: 18, padding: '16px 16px 18px', marginBottom: 10, border: '1px solid #e5e5ea' }}>
              <Illust />
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8e8e93', margin: '10px 0 6px' }}>{label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px', lineHeight: 1.25 }}>{headline}</p>
              {items.map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: i === 0 ? '1px solid #e5e5ea' : 'none', borderBottom: '1px solid #e5e5ea', padding: '7px 0' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f', lineHeight: 1.4 }}>{item}</span>
                  <span style={{ fontSize: 14, color: '#c7c7cc', marginLeft: 8 }}>›</span>
                </div>
              ))}
            </div>
          ))}

          {/* AI Receptionist banner */}
          <div style={{ borderRadius: 18, padding: '20px 20px 22px', background: 'linear-gradient(135deg, #c898e2 0%, #e8a0c0 50%, #f4b880 100%)', marginBottom: 10 }}>
            <IllustrWave />
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>Your AI Receptionist answers every call.</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', margin: '0 0 16px', lineHeight: 1.5 }}>Never miss a lead. Our AI Voice Assistant books appointments, answers FAQs, and qualifies callers \u2014 24 hours a day, 7 days a week.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ background: '#1d1d1f', borderRadius: 30, padding: '9px 18px', fontSize: 13, fontWeight: 600, color: '#fff', cursor: 'pointer' }}>See how it works</div>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', marginLeft: 4 }}>Free 14-day trial</span>
            </div>
          </div>

          {/* AI Receptionist — copy card */}
          <div style={{ borderRadius: 18, padding: '22px 20px 20px', background: 'linear-gradient(160deg, #2997ff 0%, #5ac8fa 100%)', marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', margin: '0 0 8px' }}>AI Receptionist</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Never miss a call.</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, margin: '0 0 18px' }}>Your AI Receptionist answers every inbound call, qualifies the lead, books the appointment, and follows up automatically \u2014 even at 2am.</p>
            <div style={{ background: '#fff', borderRadius: 30, padding: '11px 0', fontSize: 13, fontWeight: 600, color: '#1d1d1f', textAlign: 'center', cursor: 'pointer' }}>Try it free</div>
          </div>

          {/* AI Chat Bot — copy card */}
          <div style={{ borderRadius: 18, padding: '22px 20px 20px', background: 'linear-gradient(160deg, #1c7ef0 0%, #28c9a8 100%)', marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', margin: '0 0 8px' }}>AI Chat Bot</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Instant answers. Always.</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, margin: '0 0 18px' }}>Live on your site 24/7, your AI Chat Assistant answers questions, captures contact info, and hands warm leads straight to you.</p>
            <div style={{ background: '#fff', borderRadius: 30, padding: '11px 0', fontSize: 13, fontWeight: 600, color: '#1d1d1f', textAlign: 'center', cursor: 'pointer' }}>Add to your site</div>
          </div>

          {/* AI Automation — copy card */}
          <div style={{ borderRadius: 18, padding: '22px 20px 20px', background: 'linear-gradient(160deg, #7b5ea7 0%, #2997ff 100%)', marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', margin: '0 0 8px' }}>AI Automation</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 10px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Work smarter. Not harder.</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, margin: '0 0 18px' }}>Follow-ups, reminders, review requests, and lead nurture sequences \u2014 all running on autopilot so you can focus on doing the work.</p>
            <div style={{ background: '#fff', borderRadius: 30, padding: '11px 0', fontSize: 13, fontWeight: 600, color: '#1d1d1f', textAlign: 'center', cursor: 'pointer' }}>Automate now</div>
          </div>

        </aside>
      </div>
    </div>
  );
}
