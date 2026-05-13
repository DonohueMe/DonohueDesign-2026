import React, { useState, useEffect } from 'react';
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

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

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

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 180);
  };

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


const ICON_BROWSER = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>
);
const ICON_ENVELOPE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 8c1.5 1 1.5 7 0 8"/><path d="M19 5c3 2 3 12 0 14"/></svg>
);
const ICON_SPARK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2l1.6 6L20 9.5l-6.4 1.5L12 17l-1.6-6L4 9.5l6.4-1.5z"/><circle cx="18" cy="5" r="1.4" fill="white"/><circle cx="5" cy="18" r="1.2" fill="white"/></svg>
);
const ICON_PALETTE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="10.5" r="1" fill="white"/><circle cx="11" cy="7" r="1" fill="white"/><circle cx="15" cy="7.5" r="1" fill="white"/></svg>
);

function IconBadge({ tint, children }: { tint: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 28, height: 28, borderRadius: 8, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </div>
  );
}

function TileHeader({ tint, label }: { tint: string; icon?: React.ReactNode; label: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <h2 style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: tint, margin: 0, lineHeight: '25px' }}>{label}</h2>
    </div>
  );
}

// VARIATION B — Hero + centered bio intro + Layout B service tiles + Layout B reviews/map combo tile
export function VariantK_HorizontalStrip() {
  const { w, isMobile, isTablet } = useBreakpoint();
  const showHamburger = w < 768;
  const tileStack = isMobile || w < 1280;
  const sidePad = isMobile ? 16 : w < 1024 ? 32 : 40;
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: `0 ${sidePad}px`, background: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

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
            {/* invisible right counterweight so nav is truly centered */}
            <img src={logoMark} alt="" aria-hidden="true" style={{ height: 37, width: 'auto', visibility: 'hidden', flexShrink: 0 }} />
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
      <div style={{ height: 84, margin: `0 -${sidePad}px` }} />

      {/* Full-bleed hero */}
      <section style={{
        padding: `80px 0 80px`,
        margin: `0 -${sidePad}px`,
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)',
          '#dff3ff',
        ].join(','),
      }}>
        <p style={{ fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.13, letterSpacing: '-0.04em', color: '#000', maxWidth: 740, margin: 0, padding: `0 ${isMobile ? 20 : 0}px` }}>
          Beautiful websites.<br />Powered by smart marketing.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #fff', width: 100, margin: '40px 0 24px' }} />
        <p style={{ fontSize: isMobile ? 16 : 18, color: '#3d3d3f', fontWeight: 500, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
          Schedule your free consultation now.
        </p>
        <a href="#" style={{ display: 'inline-block', background: '#000', color: '#fff', fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', padding: '14px 32px', borderRadius: 40, textDecoration: 'none' }}>
          Get Started
        </a>
      </section>

      {/* Centered narrow bio intro — white background */}
      <section style={{ padding: '16px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.3, color: '#1d1d1f', margin: '44px 0 24px' }}>
            Website Designer, Santa Rosa, CA
          </h1>
          <p style={{ fontSize: 18, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
            Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are and what you need them to do.
          </p>
          <p style={{ fontSize: 18, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
            Jim Donohue. 20+ years. Senior Product Designer at Wells Fargo and Deloitte. 15% lift in subscriptions. 22% jump in engagement. Design systems used across 90+ apps.
          </p>
        </div>
      </section>

      {/* ── Layout B service tiles + right-side fun sticker sidebar ── */}
      <div style={{ background: '#fff', padding: isMobile ? '32px 0' : '60px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 300px', gap: isMobile ? 32 : 74, alignItems: 'start' }}>

          {/* Left column: 3 service tiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, minWidth: 0 }}>

            {/* Tile 2 — Website Designer */}
            <div style={{ background: '#fff', borderRadius: 20, padding: isMobile ? '28px 24px' : '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: tileStack ? 'column' : 'row', gap: tileStack ? 24 : 56, alignItems: tileStack ? 'stretch' : 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: tileStack ? '1 1 auto' : '0 0 360px' }}>
                <TileHeader tint="#2997ff" icon={ICON_BROWSER} label={<>Website Design<br /><span style={{color:'#b7b7b9'}}>Santa Rosa, CA</span></>} />
                <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: '37px', color: '#1d1d1f', margin: '0 0 20px' }}>
                  Your website. Working harder than ever.
                </h3>
                <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  A well-designed website isn't just attractive — it's strategic. Every layout choice, call-to-action, and navigation path should guide visitors toward a clear goal. In 2025, that means mobile-first design, fast load times, and content built around what your customers actually need — not what looks impressive in a portfolio.
                </p>
              </div>
              <div style={{ flex: 1, borderLeft: tileStack ? 'none' : '1px solid #e5e5ea', borderTop: tileStack ? '1px solid #e5e5ea' : 'none', paddingLeft: tileStack ? 0 : 40, paddingTop: tileStack ? 8 : 0 }}>
                {['Website Design & Strategy', 'Smart Websites', 'Website Development'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <a href="#" style={{ fontSize: 18, color: '#2997ff', textDecoration: 'none' }}>{item}</a>
                    <span style={{ color: '#2997ff', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile 3 — Digital Marketing — row-reverse */}
            <div style={{ background: '#fff', borderRadius: 20, padding: isMobile ? '28px 24px' : '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', gap: tileStack ? 24 : 56, alignItems: tileStack ? 'stretch' : 'center', flexDirection: tileStack ? 'column' : 'row-reverse', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: tileStack ? '1 1 auto' : '0 0 320px' }}>
                <TileHeader tint="#2997ff" icon={ICON_ENVELOPE} label={<>Digital Marketing<br /><span style={{color:'#b7b7b9'}}>Santa Rosa, CA</span></>} />
                <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: '37px', color: '#1d1d1f', margin: '0 0 20px' }}>
                  Get found. Stay top of mind.
                </h3>
                <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Email campaigns and local SEO that put your business in front of the right people at the right time.
                </p>
              </div>
              <div style={{ flex: 1, borderRight: tileStack ? 'none' : '1px solid #e5e5ea', borderTop: tileStack ? '1px solid #e5e5ea' : 'none', paddingRight: tileStack ? 0 : 40, paddingTop: tileStack ? 8 : 0 }}>
                {['Local SEO (Google My Business)', 'AI Receptionist', 'Email Marketing Automation'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <a href="#" style={{ fontSize: 18, color: '#2997ff', textDecoration: 'none' }}>{item}</a>
                    <span style={{ color: '#2997ff', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile 5 — Graphic Designer */}
            <div style={{ background: '#fff', borderRadius: 20, padding: isMobile ? '28px 24px' : '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: tileStack ? 'column' : 'row', gap: tileStack ? 24 : 56, alignItems: tileStack ? 'stretch' : 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: tileStack ? '1 1 auto' : '0 0 320px' }}>
                <TileHeader tint="#2997ff" icon={ICON_PALETTE} label={<>Graphic Designer<br /><span style={{color:'#b7b7b9'}}>Santa Rosa, CA</span></>} />
                <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: '37px', color: '#1d1d1f', margin: '0 0 20px' }}>
                  A brand as strong as your business.
                </h3>
                <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Everything matches your website — same colors, same feel, same level of quality across every touchpoint.
                </p>
              </div>
              <div style={{ flex: 1, borderLeft: tileStack ? 'none' : '1px solid #e5e5ea', borderTop: tileStack ? '1px solid #e5e5ea' : 'none', paddingLeft: tileStack ? 0 : 40, paddingTop: tileStack ? 8 : 0 }}>
                {['Presentation Design', 'Email Design', 'Brochure & Flyer Design', 'Logo Design'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <a href="#" style={{ fontSize: 18, color: '#2997ff', textDecoration: 'none' }}>{item}</a>
                    <span style={{ color: '#2997ff', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sidebar — light icon-badge cards */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 36, minWidth: 0 }}>
            {[
              {
                bg: '#fff8ec', accent: '#d18a16',
                eyebrow: 'Local SEO · GBP',
                title: 'Own the map. Own the moment.',
                body: 'Rank higher on Google Maps and capture every nearby search.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/>
                    <circle cx="12" cy="10" r="2.5"/>
                  </svg>
                ),
              },
              {
                bg: '#f0fbf6', accent: '#1f9d6a',
                eyebrow: 'AI Receptionist',
                title: 'Never miss a call again.',
                body: 'A 24/7 voice that books, qualifies, and confirms — in a single ring.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
              },
              {
                bg: '#eef6ff', accent: '#1f6fd6',
                eyebrow: 'Smart Websites',
                title: 'Sites that earn their keep.',
                body: 'Strategy-first design built to turn quiet visitors into paying customers.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="8 6 3 12 8 18"/>
                    <polyline points="16 6 21 12 16 18"/>
                  </svg>
                ),
              },
              {
                bg: '#fdf1f6', accent: '#c43c75',
                eyebrow: 'Presentation Design',
                title: 'Decks that win the room.',
                body: 'Investor-ready slides built around the story you are telling.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="4" width="18" height="13" rx="2"/>
                    <path d="M8 21l4-4 4 4"/>
                    <path d="M7 9h6"/>
                    <path d="M7 12h10"/>
                  </svg>
                ),
              },
            ].map(({ bg, accent, eyebrow, title, body, icon }) => (
              <div key={eyebrow} style={{ background: bg, borderRadius: 18, padding: '26px 24px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                {/* Icon badge + eyebrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: '#fff', color: accent,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 1px 0 ${accent}25, inset 0 0 0 1px ${accent}25`,
                  }}>
                    {icon}
                  </span>
                  <span style={{
                    fontSize: 14, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.16em',
                    color: accent,
                  }}>
                    {eyebrow}
                  </span>
                </div>

                <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 12px', color: '#1d1d1f' }}>
                  {title}
                </h4>
                <p style={{ fontSize: 17, lineHeight: '25px', color: '#6e6e73', margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </aside>

        </div>
      </div>

      {/* Reviews + Map combo on white background */}
      <div style={{ background: '#fff', padding: isMobile ? '0 16px 32px' : '20px 20px 60px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
            <div style={{ padding: isMobile ? '8px 0 24px' : '32px 0 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: 0 }}>Client Reviews</p>
                <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 14 }}>★</span>)}</div>
                <span style={{ fontSize: 13, color: '#6e6e73' }}>5.0 · Google</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr', gap: isMobile ? 24 : 32 }}>
                {[
                  { name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month. He actually understood what we needed before we did.' },
                  { name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword. The SEO strategy Jim put together was exactly what our shop needed.' },
                  { name: 'Lisa M.', location: 'Healdsburg, CA', text: "The AI receptionist handles after-hours calls now. We haven't missed a lead in weeks. Worth every penny." },
                ].map(({ name, location, text }) => (
                  <div key={name}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #5aaeff, #46dcc3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{name[0]}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', margin: 0 }}>{name}</p>
                        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>{location}</p>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 11 }}>★</span>)}</div>
                    </div>
                    <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.6, margin: 0 }}>"{text}"</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: isMobile ? '0 0 24px' : '0 0 52px', position: 'relative' }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%" height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Donohue Design — Santa Rosa, CA"
                />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 2px 16px rgba(0,0,0,0.14)' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Donohue Design</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ height: 26, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 6px, rgba(0,0,0,0.4) 6px, rgba(0,0,0,0.4) 12px, rgba(0,0,0,0.6) 12px, rgba(0,0,0,0.6) 18px, rgba(0,0,0,0.8) 18px, rgba(0,0,0,0.8) 24px, #000 24px)', margin: `0 -${sidePad}px` }} />
      <footer style={{ background: '#000', padding: isMobile ? '40px 20px 40px' : '48px 40px 48px', margin: `0 -${sidePad}px`, color: '#fff' }}>
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
