import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  'radial-gradient(ellipse at 82% 82%, rgba(255,220,100,0.80) 0%, transparent 40%)',
  'radial-gradient(ellipse at 18% 80%, rgba(175,145,230,0.65) 0%, transparent 40%)',
  '#f5eef8',
].join(',');

const GRAD_BG = [
  'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
  'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
  'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
  '#f5c8e0',
].join(',');

function AppleLogo({ size = 17, color = '#1d1d1f' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 814 1000" fill={color}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
    </svg>
  );
}

function PlusBtn({ light = false }: { light?: boolean }) {
  return (
    <div style={{
      position: 'absolute', bottom: 20, right: 20,
      width: 28, height: 28, borderRadius: '50%',
      background: light ? 'rgba(255,255,255,0.22)' : '#1d1d1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

const tile = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: '#ffffff',
  borderRadius: 20,
  padding: '40px 44px',
  overflow: 'hidden',
  position: 'relative',
  ...extra,
});

/* ─── NAV ─── */
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: 48,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AppleLogo size={16}/>
        <span style={{ fontSize: 17, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>Omniva Design</span>
      </div>
      <div style={{ display: 'flex', gap: 28 }}>
        {['Websites', 'Marketing', 'Branding', 'About', 'Contact'].map(l => (
          <a key={l} href="#" style={{ fontSize: 14, color: '#1d1d1f', textDecoration: 'none', fontWeight: 400 }}>{l}</a>
        ))}
      </div>
      <button style={{
        background: '#1d1d1f', color: '#fff', border: 'none',
        borderRadius: 980, padding: '7px 16px',
        fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
      }}>
        Get started
      </button>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{
      minHeight: '40vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '48px 24px',
      background: HERO_BG,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <AppleLogo size={16}/>
        <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Omniva Design</span>
      </div>
      <h1 style={{
        fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700,
        lineHeight: 1.03, letterSpacing: '-0.04em',
        color: '#000', maxWidth: 760, margin: '0 0 6px',
      }}>
        The simplicity<br />of Apple.
      </h1>
      <h2 style={{
        fontSize: 'clamp(22px, 3vw, 36px)',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        color: '#3d3d3f', maxWidth: 700, margin: '0 0 14px',
        fontWeight: 400,
      }}>
        For your business website.
      </h2>
      <p style={{ fontSize: 14, color: '#3d3d3f', maxWidth: 500, lineHeight: 1.55, margin: '0 0 16px' }}>
        Omniva Design builds stunning, conversion-focused websites and AI-powered marketing systems for local businesses in Sonoma County.
      </p>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '8px 18px',
          fontSize: 14, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Get a free consultation
        </button>
        <a href="#services" style={{
          fontSize: 14, color: '#2997ff', textDecoration: 'none', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          See our services ›
        </a>
      </div>
    </section>
  );
}

/* ─── TILE SECTION ─── */
function TileSection() {
  return (
    <div style={{ background: '#f5f5f7', padding: '20px 20px 80px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* ── Row 1: Big statement + side panel ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
          {/* Left: Lead statement */}
          <div style={tile({ minHeight: 340 })}>
            <p style={{ margin: 0, fontSize: 'clamp(48px, 5.5vw, 70px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
              <span style={{
                background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>No contracts.</span>
            </p>
            <p style={{ margin: '6px 0 24px', fontSize: 'clamp(40px, 4.5vw, 58px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
              Not even the fine print.
            </p>
            <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, maxWidth: 420, margin: 0 }}>
              All plans are month-to-month. Cancel anytime. We earn your business every single month, or you walk.
            </p>
            <PlusBtn/>
          </div>

          {/* Right: Location + trust tile */}
          <div style={tile({ minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 16px' }}>Based in Santa Rosa, CA</p>
              <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 16px', lineHeight: 1.2 }}>
                Local experts who actually answer the phone.
              </h3>
              <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                We've helped dozens of Sonoma County businesses get found online, generate more leads, and look like the professional operation they already are.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
              {['Sonoma County', 'Napa Valley', 'North Bay'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, padding: '5px 12px', borderRadius: 980,
                  background: '#f5f5f7', color: '#1d1d1f', border: '1px solid #e5e5ea',
                }}>{tag}</span>
              ))}
            </div>
            <PlusBtn/>
          </div>
        </div>

        {/* ── Row 2: Three service tiles ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {/* Website Design */}
          <div style={tile({ minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
            {/* Mini site mockup */}
            <div style={{
              background: '#f5f5f7', borderRadius: 12, padding: '14px 16px',
              border: '1px solid #e5e5ea', marginBottom: 20,
            }}>
              <div style={{ fontSize: 10, color: '#8e8e93', marginBottom: 6 }}>yoursite.com</div>
              <div style={{ height: 5, background: '#d2d2d7', borderRadius: 3, marginBottom: 5, width: '65%' }}/>
              <div style={{ height: 5, background: '#d2d2d7', borderRadius: 3, marginBottom: 12, width: '40%' }}/>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ height: 24, background: '#1d1d1f', borderRadius: 12, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 8, fontWeight: 700 }}>Book Online</span>
                </div>
                <div style={{ height: 24, background: '#f5f5f7', borderRadius: 12, width: 60, border: '1px solid #d2d2d7' }}/>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Website Designer</p>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 12px', lineHeight: 1.2 }}>
                Websites that convert browsers into buyers.
              </h3>
              {['Custom website design', 'Mobile-first development', 'E-commerce & booking', 'Speed-optimized', 'SEO-ready from day one'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 14 }}>›</span>
                </div>
              ))}
            </div>
            <PlusBtn/>
          </div>

          {/* AI Marketing */}
          <div style={tile({ minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
            {/* Mini analytics chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 60, marginBottom: 20 }}>
              {[22, 38, 30, 52, 44, 68, 55, 80, 72, 90].map((h, i) => (
                <div key={i} style={{
                  flex: 1, height: `${h}%`, borderRadius: 4,
                  background: i === 9
                    ? 'linear-gradient(180deg, #c898e2, #f4a0b8)'
                    : '#e5e5ea',
                }}/>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Internet Marketing</p>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 12px', lineHeight: 1.2 }}>
                AI marketing that never sleeps.
              </h3>
              {['AI Voice Assistant (24/7 answering)', 'AI Receptionist & booking', 'Email marketing automation', 'Google My Business (Local SEO)', 'Reputation management'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 14 }}>›</span>
                </div>
              ))}
            </div>
            <PlusBtn/>
          </div>

          {/* Graphic Design */}
          <div style={tile({ minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
            {/* Logo mockup */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              {[
                { bg: 'linear-gradient(135deg, #667eea, #764ba2)', text: 'OD' },
                { bg: 'linear-gradient(135deg, #f4a0b8, #ffb347)', text: 'A' },
                { bg: 'linear-gradient(135deg, #4facfe, #00f2fe)', text: 'M' },
              ].map(({ bg, text }) => (
                <div key={text} style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                }}>
                  <span style={{ color: 'white', fontSize: 20, fontWeight: 800 }}>{text}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Graphic Designer</p>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 12px', lineHeight: 1.2 }}>
                A brand identity you are proud to show off.
              </h3>
              {['Logo design', 'Full brand identity system', 'Business cards & stationery', 'Brochures & flyers', 'Social media templates'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 14 }}>›</span>
                </div>
              ))}
            </div>
            <PlusBtn/>
          </div>
        </div>

        {/* ── Row 3: Full-width AI gradient feature tile ── */}
        <div style={{
          borderRadius: 20, overflow: 'hidden', position: 'relative',
          minHeight: 280, padding: '52px 64px',
          background: GRAD_BG,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(255,255,255,0.88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <p style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 12px', lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
              Your AI Receptionist answers every call.
            </p>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: 520, lineHeight: 1.55 }}>
              Never miss a lead. Our AI Voice Assistant books appointments, answers FAQs, and qualifies callers — 24 hours a day, 7 days a week.
            </p>
          </div>
          <div style={{ flexShrink: 0, marginLeft: 60 }}>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '14px 28px',
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
              display: 'block', marginBottom: 12,
            }}>
              See how it works
            </button>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.70)', textAlign: 'center', margin: 0 }}>Free 14-day trial</p>
          </div>
        </div>

        {/* ── Row 4: Statement + reviews ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 12 }}>
          {/* Statement tile */}
          <div style={tile({ minHeight: 320 })}>
            <p style={{ margin: 0, fontSize: 'clamp(38px, 4.5vw, 56px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
              <span style={{
                background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>No setup fees.</span>
            </p>
            <p style={{ margin: '6px 0 28px', fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
              No annual lock-ins.
            </p>
            <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 24px' }}>
              Pay month-to-month. Everything is included — design updates, hosting, support, and strategy.
            </p>
            <a href="#pricing" style={{ fontSize: 16, color: '#2997ff', textDecoration: 'none', fontWeight: 500 }}>View pricing ›</a>
            <PlusBtn/>
          </div>

          {/* Reviews tile */}
          <div style={tile({ minHeight: 320 })}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 20px' }}>Customer Reviews</p>
            {[
              { stars: 5, text: '"Bookings went up 40% within the first three months. Omniva designed our entire site and set up the AI phone system. Worth every penny."', name: 'Maria G.', biz: 'Rosa Day Spa, Santa Rosa' },
              { stars: 5, text: '"Our Google rankings went from nowhere to the top 3 for every keyword that matters. The SEO work alone has paid for itself ten times over."', name: 'James T.', biz: 'Redwood Roofing, Petaluma' },
              { stars: 5, text: '"The AI receptionist saves our staff hours every week. Customers love that someone always picks up, even after hours."', name: 'Linda K.', biz: 'Vine & Table, Healdsburg' },
            ].map((r, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? '1px solid #e5e5ea' : 'none', padding: '14px 0' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="#ffcc00"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.5 }}>{r.text}</p>
                <p style={{ fontSize: 12, color: '#6e6e73', margin: 0, fontWeight: 500 }}>{r.name} — {r.biz}</p>
              </div>
            ))}
            <PlusBtn/>
          </div>
        </div>

        {/* ── Row 5: Stats strip (4 columns) ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
          {[
            { num: '40+', label: 'Local businesses served', sub: 'Sonoma County & beyond' },
            { num: '3×', label: 'Average lead increase', sub: 'Within 90 days of launch' },
            { num: '24/7', label: 'AI systems running', sub: 'Never miss a call or lead' },
            { num: '100%', label: 'Month-to-month', sub: 'No contracts, ever' },
          ].map(({ num, label, sub }) => (
            <div key={num} style={tile({ padding: '32px 28px' })}>
              <p style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1 }}>{num}</p>
              <p style={{ fontSize: 16, fontWeight: 600, color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.3 }}>{label}</p>
              <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>{sub}</p>
            </div>
          ))}
        </div>

        {/* ── Row 6: Pricing tiles ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            {
              plan: 'Starter',
              price: '$197',
              period: '/mo',
              tag: 'Website + Local SEO',
              desc: 'For businesses ready to get found online and look professional.',
              features: ['5-page custom website', 'Mobile-first design', 'Google My Business setup', 'Basic SEO optimization', 'Monthly updates included', 'Hosting & SSL included'],
              cta: 'Get started',
              highlight: false,
            },
            {
              plan: 'Growth',
              price: '$397',
              period: '/mo',
              tag: 'Most Popular',
              desc: 'Everything in Starter, plus AI marketing that runs on autopilot.',
              features: ['Everything in Starter', 'AI Voice Assistant', 'Email marketing automation', 'Reputation management', 'Local SEO (advanced)', 'Monthly strategy call'],
              cta: 'Get started',
              highlight: true,
            },
            {
              plan: 'Pro',
              price: '$697',
              period: '/mo',
              tag: 'Full-Service Agency',
              desc: 'The complete Omniva stack — design, marketing, and brand.',
              features: ['Everything in Growth', 'AI Receptionist system', 'Full brand identity', 'Social media templates', 'Video/photo direction', 'Priority support & SLA'],
              cta: 'Talk to us',
              highlight: false,
            },
          ].map(({ plan, price, period, tag, desc, features, cta, highlight }) => (
            <div key={plan} style={{
              ...tile({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }),
              ...(highlight ? { border: '2px solid #1d1d1f' } : {}),
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: 0 }}>{plan}</p>
                  {highlight && (
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '3px 10px',
                      background: '#1d1d1f', color: '#fff', borderRadius: 980,
                    }}>{tag}</span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 8 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', lineHeight: 1 }}>{price}</span>
                  <span style={{ fontSize: 16, color: '#6e6e73' }}>{period}</span>
                </div>
                <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.5, margin: '0 0 24px' }}>{desc}</p>
                <div>
                  {features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f0f0f5' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#1d1d1f' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button style={{
                background: highlight ? '#1d1d1f' : '#f5f5f7',
                color: highlight ? '#fff' : '#1d1d1f',
                border: 'none', borderRadius: 980, padding: '12px',
                fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
                width: '100%', marginTop: 24,
              }}>
                {cta}
              </button>
            </div>
          ))}
        </div>

        {/* ── Row 7: Full-width CTA ── */}
        <div style={{
          borderRadius: 20, padding: '72px 72px',
          position: 'relative', overflow: 'hidden', textAlign: 'center',
          background: GRAD_BG,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center', marginBottom: 20 }}>
            <AppleLogo size={20} color="rgba(255,255,255,0.7)"/>
            <span style={{ fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Omniva Design</span>
          </div>
          <p style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 16px', lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
            Ready to grow your business?
          </p>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.80)', margin: '0 0 36px', lineHeight: 1.5 }}>
            Book a free 30-minute consultation. No pressure, no sales pitch — just honest advice about what your business needs to grow online.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '16px 32px',
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
            }}>
              Book a free consultation
            </button>
            <a href="tel:+17074218350" style={{
              background: 'rgba(255,255,255,0.20)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: 980, padding: '16px 32px',
              fontSize: 17, fontWeight: 500, textDecoration: 'none',
              display: 'flex', alignItems: 'center',
            }}>
              (707) 421-8350
            </a>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '20px 0 0' }}>Santa Rosa, CA · Serving all of Sonoma County</p>
        </div>

      </div>
    </div>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{ background: '#f5f5f7', borderTop: '1px solid #d2d2d7', padding: '40px 40px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
              <AppleLogo size={16}/>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#1d1d1f' }}>Omniva Design</span>
            </div>
            <p style={{ fontSize: 13, color: '#6e6e73', lineHeight: 1.6, margin: '0 0 16px', maxWidth: 260 }}>
              Web design, AI marketing, and graphic design for local businesses in Sonoma County, CA.
            </p>
            <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>Santa Rosa, California</p>
          </div>
          {[
            { heading: 'Services', links: ['Website Design', 'Website Development', 'E-commerce', 'Local SEO', 'AI Voice Assistant', 'Email Marketing'] },
            { heading: 'Company', links: ['About Us', 'Our Work', 'Pricing', 'Blog', 'Contact'] },
            { heading: 'Contact', links: ['(707) 421-8350', 'hello@omnivadesign.com', 'Free Consultation', 'Santa Rosa, CA'] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d1d1f', margin: '0 0 14px' }}>{heading}</p>
              {links.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: '#6e6e73', textDecoration: 'none', marginBottom: 8 }}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #d2d2d7', paddingTop: 20, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: '#6e6e73' }}>© 2025 Omniva Design. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: '#6e6e73', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FullSite() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Nav/>
      <Hero/>
      <TileSection/>
      <Footer/>
    </div>
  );
}
