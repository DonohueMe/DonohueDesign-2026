import React from 'react';
import portfolioImg from '../../../assets/deloitte.png';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const BRAND_ORANGE = '#f47c20';

/* Palette — matched to Donohue UX screenshot */
const C = {
  pageBg:    '#f4f1eb',   /* barely-warm eggshell page bg */
  contentBg: '#ffffff',   /* white — content text area bg */
  cardBg:    '#ffffff',   /* white sidebar card */
  cardBg2:   '#ffffff',   /* white service card */
  border:    '#e0ddd5',   /* soft warm divider */
  textDark:  '#2c2c2a',   /* dark charcoal (not pure black) */
  textMid:   '#555250',   /* medium charcoal */
  textLight: '#888078',   /* muted warm grey */
  sectionSep:'#e0ddd5',
};

const HERO_BG = [
  /* orange orb — left side, floating mid-frame */
  'radial-gradient(ellipse 42% 58% at 10% 38%, rgba(242,105,0,0.95) 0%, rgba(180,55,0,0.35) 52%, transparent 75%)',
  /* hot pink/magenta orb — center */
  'radial-gradient(ellipse 40% 54% at 50% 32%, rgba(218,65,158,0.98) 0%, rgba(170,38,120,0.30) 52%, transparent 76%)',
  /* electric blue orb — right */
  'radial-gradient(ellipse 38% 52% at 86% 30%, rgba(22,42,215,0.95) 0%, rgba(14,26,170,0.30) 52%, transparent 75%)',
  /* teal hint — far upper-right */
  'radial-gradient(ellipse 16% 22% at 100% 18%, rgba(30,185,152,0.70) 0%, transparent 68%)',
  '#050505',
].join(',');


const BrandLogo = () => (
  <div style={{ display: 'flex', alignItems: 'stretch', borderRadius: 4, overflow: 'hidden', height: 28 }}>
    <div style={{ background: '#1a1a1a', padding: '0 8px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontFamily: SF, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', textTransform: 'uppercase' }}>Donohue</span>
    </div>
    <div style={{ background: BRAND_ORANGE, padding: '0 8px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontFamily: SF, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', textTransform: 'uppercase' }}>UX</span>
    </div>
  </div>
);

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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={C.textDark} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="17" width="4" height="8" rx="1"/>
    <rect x="9" y="12" width="4" height="13" rx="1"/>
    <rect x="15" y="7" width="4" height="18" rx="1"/>
    <rect x="21" y="3" width="4" height="22" rx="1"/>
  </svg>
);
const IconAI = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={C.textDark} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="5"/>
    <path d="M14 3v4M14 21v4M3 14h4M21 14h4"/>
    <path d="M6.22 6.22l2.83 2.83M18.95 18.95l2.83 2.83M21.78 6.22l-2.83 2.83M9.05 18.95l-2.83 2.83"/>
  </svg>
);
const IconDesign = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={C.textDark} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l4-1 14-14a2.83 2.83 0 00-4-4L4 19l-1 4z"/>
    <path d="M17 7l4 4"/>
  </svg>
);

const serviceCards = [
  { title: 'Digital Marketing',         Icon: IconMarketing, items: ['Email marketing automation', 'Local SEO Services (GMB)'] },
  { title: 'Internet Marketing Service',Icon: IconAI,        items: ['AI Receptionist', 'AI Voice Assistant, website', 'AI Chat Assistant, website'] },
  { title: 'Graphic Design',            Icon: IconDesign,    items: ['Email design', 'Logo design', 'Brochure \u0026 Flyer Design', 'Presentation Design'] },
];

export default function OmnivaLayoutsCopyM7oYEEx() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: C.pageBg, minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, padding: '0 40px', display: 'flex', alignItems: 'center', height: 52 }}>
        <BrandLogo />
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 0 }}>
          {['About', 'Resume', 'Work', 'Contact'].map((item, i, arr) => (
            <React.Fragment key={item}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1a1a1a', cursor: 'pointer', padding: '0 12px' }}>{item}</span>
              {i < arr.length - 1 && (
                <span style={{ color: BRAND_ORANGE, fontSize: 10, lineHeight: 1 }}>\u00b7</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* Hero — untouched */}
      <section style={{ minHeight: 340, background: HERO_BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px 60px' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)', margin: '0 0 14px' }}>Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#ffffff', margin: '0 0 18px' }}>
          Plug and stay.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.60)', maxWidth: 380, lineHeight: 1.55, margin: '0 0 28px' }}>
          Strategy-first web design and digital marketing for Santa Rosa businesses.
        </p>
        <button style={{ background: '#ffffff', color: '#0a0a0a', border: 'none', borderRadius: 980, padding: '13px 26px', fontSize: 15, fontWeight: 700, fontFamily: SF, cursor: 'pointer' }}>
          Start a project
        </button>
      </section>

      {/* Body — eggshell outer, white inner panels */}
      <div style={{ background: C.pageBg, padding: '60px 40px 80px' }}>
        <div style={{ display: 'flex', gap: 40, maxWidth: 1100, margin: '0 auto', alignItems: 'flex-start' }}>

        {/* Main — white content panel */}
        <main style={{ flex: '1 1 0', minWidth: 0, background: '#fff', borderRadius: 12, padding: '40px 40px 40px', border: `1px solid ${C.border}` }}>
          {sections.map(({ h1 }, si) => (
            <React.Fragment key={si}>
              <div style={{ marginBottom: 56, paddingBottom: 48, borderBottom: `1px solid ${C.sectionSep}` }}>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, letterSpacing: '-0.03em', color: C.textDark, margin: '0 0 20px', lineHeight: 1.1 }}>
                  {h1}
                </h2>
                {BIO.map((para, pi) => (
                  <p key={pi} style={{
                    fontSize: 14, lineHeight: 1.8, margin: '0 0 14px',
                    color: pi === 0 ? C.textDark : C.textMid,
                    fontWeight: pi === 0 ? 600 : 400,
                  }}>
                    {para}
                  </p>
                ))}
              </div>

              {si === 0 && (
                <div style={{ marginBottom: 56 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: BRAND_ORANGE }}>Client work</span>
                    <span style={{ fontSize: 12, color: BRAND_ORANGE, cursor: 'pointer', fontWeight: 600 }}>View case study \u203a</span>
                  </div>
                  <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(43,26,8,0.10)', position: 'relative' }}>
                    <div style={{ background: C.cardBg, borderBottom: `1px solid ${C.border}`, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        {['#ff5f57','#febc2e','#28c840'].map(c => (
                          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                        ))}
                      </div>
                      <div style={{ flex: 1, background: '#fff', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: C.textLight, border: `1px solid ${C.border}` }}>
                        bersinworks.deloitte.com
                      </div>
                    </div>
                    <div style={{ height: 320, overflow: 'hidden' }}>
                      <img src={portfolioImg} alt="Deloitte BersinWorks activity feed" style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))' }} />
                  </div>
                  <p style={{ fontSize: 12, color: C.textLight, margin: '8px 0 0', lineHeight: 1.4 }}>
                    Deloitte / BersinWorks \u2014 enterprise activity feed UX, information architecture, and HR platform design.
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={{ flex: '0 0 200px', position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* How it works */}
          <div style={{ background: C.cardBg, borderRadius: 16, padding: '18px 16px', marginBottom: 12, border: `1px solid ${C.border}` }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.textLight, margin: '0 0 18px' }}>How it works</p>
            {timelineSteps.map(({ label, body }, i) => (
              <div key={label} style={{ display: 'flex', gap: 12, marginBottom: i < timelineSteps.length - 1 ? 18 : 0 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: BRAND_ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{i + 1}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: C.textDark, margin: '0 0 3px', lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontSize: 11.5, color: C.textMid, margin: 0, lineHeight: 1.55 }}>{body}</p>
                </div>
              </div>
            ))}
            <button style={{ marginTop: 20, width: '100%', background: C.textDark, color: '#fff', border: 'none', borderRadius: 980, padding: '11px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Start with a free call
            </button>
          </div>

          {/* Service cards */}
          {serviceCards.map(({ title, Icon, items }) => (
            <div key={title} style={{ background: C.cardBg2, borderRadius: 18, padding: '14px 14px 40px', marginBottom: 10, border: `1px solid ${C.border}`, position: 'relative' }}>
              <Icon />
              <p style={{ fontSize: 13, fontWeight: 700, color: C.textDark, margin: '10px 0 6px', lineHeight: 1.2 }}>{title}</p>
              {items.map(item => (
                <p key={item} style={{ fontSize: 11, color: C.textMid, margin: '0 0 3px', lineHeight: 1.45 }}>{item}</p>
              ))}
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 26, height: 26, borderRadius: '50%', background: C.textDark, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#fff', fontSize: 18, lineHeight: 1, marginTop: -1 }}>+</span>
              </div>
            </div>
          ))}

        </aside>
        </div>
      </div>
    </div>
  );
}
