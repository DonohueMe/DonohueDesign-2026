import React, { useState } from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  'radial-gradient(ellipse at 82% 82%, rgba(255,220,100,0.80) 0%, transparent 40%)',
  'radial-gradient(ellipse at 18% 80%, rgba(175,145,230,0.65) 0%, transparent 40%)',
  '#f5eef8',
].join(',');

const WEB_DESIGN_SERVICES = ['Website Design & Strategy', 'UX/UI Design', 'Website Development'];
const OTHER_NAV_LINKS = ['Digital Marketing', 'Graphic Designer', 'Case Studies', 'Pricing', 'Contact us'];

function AppleLogo({ size = 17, fill = '#1d1d1f' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 814 1000" fill={fill}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
    </svg>
  );
}

function StickyNav() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <nav style={{ background: '#0d1535', borderRadius: 980, padding: '0 28px', height: 52, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', boxShadow: '0 4px 24px rgba(0,0,0,0.22)', position: 'relative' }}>
        <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <button style={{ fontSize: 14, fontWeight: 500, color: '#fff', background: open ? 'rgba(255,255,255,0.12)' : 'transparent', border: 'none', cursor: 'pointer', padding: '6px 14px', borderRadius: 980, letterSpacing: '-0.01em', fontFamily: SF, display: 'flex', alignItems: 'center', gap: 5 }}>
            Website Designer
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d={open ? 'M1 5l4-4 4 4' : 'M1 1l4 4 4-4'} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {open && (
            <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 10 }}>
              <div style={{ background: '#0d1535', borderRadius: 16, padding: '8px 0', minWidth: 240, boxShadow: '0 12px 40px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {WEB_DESIGN_SERVICES.map((item, i) => (
                  <a key={item} href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', borderBottom: i < WEB_DESIGN_SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    {item}<span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>›</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {OTHER_NAV_LINKS.map(link => (
          <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', padding: '6px 14px', borderRadius: 980, letterSpacing: '-0.01em' }}>{link}</a>
        ))}
      </nav>
    </div>
  );
}

export function HeroA_BottomAnchor() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      <StickyNav />

      {/* Hero — gradient fills frame, text anchored to bottom-left */}
      <section style={{
        height: 780,
        background: HERO_BG,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 72px 64px',
        position: 'relative',
      }}>
        {/* Subtle bottom fade to separate from body */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, rgba(245,238,248,0.6))' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(29,29,31,0.50)', margin: '0 0 16px' }}>Donohue Design · Santa Rosa, CA</p>
          <h1 style={{
            fontSize: 'clamp(52px, 7vw, 88px)', fontWeight: 800,
            lineHeight: 1.0, letterSpacing: '-0.05em',
            color: '#1d1d1f', margin: '0 0 24px', maxWidth: 820,
          }}>
            Website Designer<br />in Santa Rosa, CA.
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '12px 24px', fontSize: 15, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Get started
            </button>
            <span style={{ fontSize: 15, color: '#3d3d3f' }}>Strategy-driven design that works.</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ background: '#f5f5f7', padding: '8px 20px 12px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 4px' }}>Website Designer in Santa Rosa, CA.</h2>
            <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>Strategy-Driven Design That Works.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { h: null, paras: ['Most website designers jump straight into building. I start with strategy.', "Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That\u2019s the difference between a website that looks good and one that actually brings in business.", "My name is Jim Donohue. I\u2019m a website designer in Santa Rosa, CA with over 20 years of experience in design, UX/UI, and digital strategy. I spent years as a Senior Product Designer at companies like Wells Fargo and Deloitte \u2014 building products used across dozens of applications and leading redesigns that drove measurable results. A 15% lift in subscriptions. A 22% jump in user engagement. Design systems adopted across 90+ apps.", "Now I bring that same strategic, research-driven approach to businesses here in Sonoma County."] },
                { h: 'What I Do', paras: ["I offer website design, website development, and website redesign for local businesses \u2014 from tasting rooms along Highway 12 to shops in Railroad Square to service companies in Rincon Valley. Every site I build starts with research and ends with something that actually performs.", "I also handle e-commerce website design for Sonoma County businesses selling products online, and SEO-optimized website design so your site shows up when people search for what you do. UX/UI design and strategy is the core of my process \u2014 making sure every page is built around how real people use the web, not just how it looks on a screen. And I offer website maintenance to keep everything running, secure, and fast after launch."] },
                { h: 'Beyond the Website', paras: ["Your site is the foundation. I also offer local SEO services, email marketing automation, and AI-powered tools \u2014 AI chat assistants, AI receptionists, and AI voice assistants \u2014 that capture leads and handle customer questions even when you\u2019re closed.", "On the brand side, I handle logo design, brand identity design, stationery and business card design, brochure and flyer design, infographic design, and presentation design. Everything matches your website. Same colors, same feel, same level of quality \u2014 so your brand holds together whether someone finds you on Google or picks up your card at a Chamber event at Old Courthouse Square."] },
                { h: 'Serving Santa Rosa and Sonoma County', paras: ["I work with businesses across Santa Rosa \u2014 from Fountaingrove to Roseland, from Montgomery Village to the shops along Santa Rosa Avenue \u2014 and throughout Sonoma County, including Windsor, Rohnert Park, Petaluma, Healdsburg, and Sebastopol.", "If your website isn\u2019t bringing in the calls and customers it should, the issue is usually strategy. Let\u2019s figure out what\u2019s wrong and fix it. No jargon. No pressure. Just a website designer in Santa Rosa, CA who thinks before he builds."] },
              ].map(({ h, paras }, si) => (
                <div key={si}>
                  {h && <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 2px' }}>{h}</h3>}
                  {paras.map((p, pi) => <p key={pi} style={{ fontSize: pi === 0 && !h ? 17 : 16, color: pi === 0 && !h ? '#1d1d1f' : '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>{p}</p>)}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: '#fff', borderRadius: 18, padding: '28px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.11em', color: '#6e6e73', margin: '0 0 3px' }}>Website Strategy</p>
                <h4 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>Strategy first. Everything else follows.</h4>
                {[['1','Purpose & Goals','Lead generation, e-commerce, brand awareness \u2014 with measurable KPIs tied to business objectives.'],['2','Target Audience','User personas, journey mapping, pain points, and how real customers behave.'],['3','Content Strategy','What to create, how to organize it, tone of voice, and messaging hierarchy.'],['4','Information Architecture','Site structure, navigation, and page hierarchy so users find what they need.'],['5','Technical Strategy','Platform, hosting, performance, security, accessibility, and mobile-friendliness.'],['6','SEO & Discoverability','Keyword targeting, on-page optimization, and visibility in search and AI-powered results.'],['7','Conversion Optimization','CTAs, landing pages, and funnel design that turn visitors into customers.'],['8','Measurement & Iteration','Analytics, A/B testing, and ongoing performance review cycles.']].map(([n, title, sub]) => (
                  <div key={n} style={{ borderTop: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #c898e2, #f4a0b8)', borderRadius: '50%', width: 20, height: 20, minWidth: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{n}</span>
                    <div><p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 2px' }}>{title}</p><p style={{ fontSize: 12, color: '#6e6e73', lineHeight: 1.45, margin: 0 }}>{sub}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: 18, padding: '28px 28px', background: ['radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)','radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)','radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)','#f5c8e0'].join(',') }}>
                <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 16px', lineHeight: 1.1, textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>Let\u2019s figure out what\u2019s wrong and fix it.</p>
                <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 20px', fontSize: 14, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a free consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <AppleLogo size={13} fill="#6e6e73"/>
            <span style={{ fontSize: 12, color: '#6e6e73' }}>\u00a9 2025 Donohue Design \u00b7 Jim Donohue \u00b7 Santa Rosa, CA</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Website Designer', 'Internet Marketing', 'Graphic Designer'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: '#6e6e73', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
