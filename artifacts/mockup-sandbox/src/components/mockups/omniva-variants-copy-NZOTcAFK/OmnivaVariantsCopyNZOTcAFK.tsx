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

/* ── Small utility components ── */
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 18, padding: '28px 28px',
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function CalloutDark({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#1d1d1f', borderRadius: 18, padding: '28px 28px',
      position: 'relative', overflow: 'hidden',
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function CalloutGrad({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderRadius: 18, padding: '28px 28px',
      position: 'relative', overflow: 'hidden',
      background: [
        'radial-gradient(ellipse at 15% 20%, rgba(196,153,226,0.90) 0%, transparent 55%)',
        'radial-gradient(ellipse at 88% 80%, rgba(255,185,120,0.85) 0%, transparent 50%)',
        'radial-gradient(ellipse at 50% 55%, rgba(248,140,170,0.75) 0%, transparent 55%)',
        '#f0c8e8',
      ].join(','),
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.11em', color: '#6e6e73', margin: '0 0 3px' }}>
      {children}
    </p>
  );
}

function Row({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div style={{ borderBottom: '1px solid ' + (light ? 'rgba(255,255,255,0.12)' : '#e5e5ea'), padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 13, color: light ? 'rgba(255,255,255,0.75)' : '#1d1d1f' }}>{label}</span>
      <span style={{ color: light ? 'rgba(255,255,255,0.5)' : '#2997ff', fontSize: 14 }}>›</span>
    </div>
  );
}

/* ── AppleLogo ── */
function AppleLogo({ size = 17, fill = '#1d1d1f' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 814 1000" fill={fill}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
    </svg>
  );
}

const WEB_DESIGN_SERVICES = [
  'Website Design & Strategy',
  'UX/UI Design',
  'Website Development',
];

const OTHER_NAV_LINKS = ['Digital Marketing', 'Graphic Designer', 'Case Studies', 'Pricing', 'Contact us'];

function StickyNav() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <nav style={{
        background: '#0d1535',
        borderRadius: 980,
        padding: '0 28px',
        height: 52,
        display: 'flex', alignItems: 'center', gap: 4,
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
        position: 'relative',
      }}>

        {/* ── Website Designer dropdown trigger ── */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button style={{
            fontSize: 14, fontWeight: 500,
            color: open ? '#fff' : 'rgba(255,255,255,0.88)',
            background: open ? 'rgba(255,255,255,0.12)' : 'transparent',
            border: 'none', cursor: 'pointer',
            padding: '6px 14px', borderRadius: 980,
            letterSpacing: '-0.01em', fontFamily: SF,
            display: 'flex', alignItems: 'center', gap: 5,
            transition: 'background 0.15s',
          }}>
            Website Designer
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d={open ? 'M1 5l4-4 4 4' : 'M1 1l4 4 4-4'} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown panel */}
          {open && (
            <div style={{
              position: 'absolute', top: '100%', left: '50%',
              transform: 'translateX(-50%)',
              paddingTop: 10,
            }}>
            <div style={{
              background: '#0d1535',
              borderRadius: 16,
              padding: '8px 0',
              minWidth: 240,
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              {WEB_DESIGN_SERVICES.map((item, i) => (
                <a key={item} href="#" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 20px',
                  fontSize: 14, fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  borderBottom: i < WEB_DESIGN_SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  transition: 'background 0.1s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {item}
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>›</span>
                </a>
              ))}
            </div>
            </div>
          )}
        </div>

        {/* ── Remaining nav links ── */}
        {OTHER_NAV_LINKS.map((link, i) => (
          <a key={link} href="#" style={{
            fontSize: 14, fontWeight: 500,
            color: '#ffffff',
            textDecoration: 'none',
            padding: '6px 14px',
            borderRadius: 980,
            transition: 'background 0.15s',
            letterSpacing: '-0.01em',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

/**
 * Variation 3 — EDITORIAL TEXT + CALL-OUTS
 * The full body copy runs as a readable article in the left column.
 * Apple-style tiles on the right are anchored as call-outs to specific paragraphs.
 */
export function OmnivaVariantsCopyNZOTcAFK() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      <StickyNav />
      {/* ── Hero ── */}
      <section style={{
        minHeight: 800, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '48px 24px', background: HERO_BG,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
          <AppleLogo/>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Omniva Design</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 700,
          lineHeight: 1.05, letterSpacing: '-0.04em',
          color: '#000', maxWidth: 720, margin: '0 0 16px',
        }}>
          Website Designer<br />in Santa Rosa, CA.
        </h1>
        <p style={{ fontSize: 16, color: '#3d3d3f', maxWidth: 480, lineHeight: 1.55, margin: '0 0 20px' }}>
          Strategy-driven design that works.
        </p>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '8px 18px',
          fontSize: 14, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Get started
        </button>
      </section>
      {/* ── Editorial body ── */}
      <div style={{ background: '#f5f5f7', padding: '8px 20px 12px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>

          {/* Page headline */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              color: '#1d1d1f', margin: '0 0 4px',
            }}>
              Website Designer in Santa Rosa, CA.
            </h2>
            <h2 style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              margin: 0,
            }}>
              Strategy-Driven Design That Works.
            </h2>
          </div>

          {/* ── Single two-column grid: left = all prose, right = all tiles (decoupled heights) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start' }}>

            {/* ── LEFT: all prose stacked ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Opening */}
              <div>
                <p style={{ fontSize: 17, color: '#1d1d1f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  Most website designers jump straight into building. I start with strategy.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That's the difference between a website that looks good and one that actually brings in business.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  My name is Jim Donohue. I'm a website designer in Santa Rosa, CA with over 20 years of experience in design, UX/UI, and digital strategy. I spent years as a Senior Product Designer at companies like Wells Fargo and Deloitte — building products used across dozens of applications and leading redesigns that drove measurable results. A 15% lift in subscriptions. A 22% jump in user engagement. Design systems adopted across 90+ apps.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>
                  Now I bring that same strategic, research-driven approach to businesses here in Sonoma County.
                </p>
              </div>

              {/* What I Do */}
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 2px' }}>What I Do</h3>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  I offer website design, website development, and website redesign for local businesses — from tasting rooms along Highway 12 to shops in Railroad Square to service companies in Rincon Valley. Every site I build starts with research and ends with something that actually performs.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>
                  I also handle e-commerce website design for Sonoma County businesses selling products online, and SEO-optimized website design so your site shows up when people search for what you do. UX/UI design and strategy is the core of my process — making sure every page is built around how real people use the web, not just how it looks on a screen. And I offer website maintenance to keep everything running, secure, and fast after launch.
                </p>
              </div>

              {/* Beyond the Website */}
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 2px' }}>Beyond the Website</h3>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  Your site is the foundation. I also offer local SEO services, email marketing automation, and AI-powered tools — AI chat assistants, AI receptionists, and AI voice assistants — that capture leads and handle customer questions even when you're closed.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>
                  On the brand side, I handle logo design, brand identity design, stationery and business card design, brochure and flyer design, infographic design, and presentation design. Everything matches your website. Same colors, same feel, same level of quality — so your brand holds together whether someone finds you on Google or picks up your card at a Chamber event at Old Courthouse Square.
                </p>
              </div>

              {/* Serving Sonoma */}
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 2px' }}>Serving Santa Rosa and Sonoma County</h3>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: '0 0 3px' }}>
                  I work with businesses across Santa Rosa — from Fountaingrove to Roseland, from Montgomery Village to the shops along Santa Rosa Avenue — and throughout Sonoma County, including Windsor, Rohnert Park, Petaluma, Healdsburg, and Sebastopol.
                </p>
                <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>
                  If your website isn't bringing in the calls and customers it should, the issue is usually strategy. Let's figure out what's wrong and fix it. No jargon. No pressure. Just a website designer in Santa Rosa, CA who thinks before he builds.
                </p>
              </div>

            </div>

            {/* ── RIGHT: strategy framework tiles ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              <Callout>
                <Label>Website Strategy</Label>
                <h4 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>
                  Strategy first. Everything else follows.
                </h4>
                {[
                  { n: '1', title: 'Purpose & Goals', sub: 'Lead generation, e-commerce, brand awareness — with measurable KPIs tied to business objectives.' },
                  { n: '2', title: 'Target Audience', sub: 'User personas, journey mapping, pain points, and how real customers behave.' },
                  { n: '3', title: 'Content Strategy', sub: 'What to create, how to organize it, tone of voice, and messaging hierarchy.' },
                  { n: '4', title: 'Information Architecture', sub: 'Site structure, navigation, and page hierarchy so users find what they need.' },
                  { n: '5', title: 'Technical Strategy', sub: 'Platform, hosting, performance, security, accessibility, and mobile-friendliness.' },
                  { n: '6', title: 'SEO & Discoverability', sub: 'Keyword targeting, on-page optimization, and visibility in search and AI-powered results.' },
                  { n: '7', title: 'Conversion Optimization', sub: 'CTAs, landing pages, and funnel design that turn visitors into customers.' },
                  { n: '8', title: 'Measurement & Iteration', sub: 'Analytics, A/B testing, and ongoing performance review cycles.' },
                ].map(({ n, title, sub }) => (
                  <div key={n} style={{ borderTop: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: '#fff',
                      background: 'linear-gradient(135deg, #c898e2, #f4a0b8)',
                      borderRadius: '50%', width: 20, height: 20, minWidth: 20,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: 1,
                    }}>{n}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 2px' }}>{title}</p>
                      <p style={{ fontSize: 12, color: '#6e6e73', lineHeight: 1.45, margin: 0 }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </Callout>

              <div style={{
                borderRadius: 18, padding: '28px 28px',
                background: [
                  'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
                  'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
                  'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
                  '#f5c8e0',
                ].join(','),
              }}>
                <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 16px', lineHeight: 1.1, textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  Let's figure out what's wrong and fix it.
                </p>
                <button style={{
                  background: '#1d1d1f', color: '#fff', border: 'none',
                  borderRadius: 980, padding: '10px 20px',
                  fontSize: 14, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
                }}>
                  Get a free consultation
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <AppleLogo size={13} fill="#6e6e73"/>
            <span style={{ fontSize: 12, color: '#6e6e73' }}>© 2025 Omniva Design · Jim Donohue · Santa Rosa, CA</span>
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
