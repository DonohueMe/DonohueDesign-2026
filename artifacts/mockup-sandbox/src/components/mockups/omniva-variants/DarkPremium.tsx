import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

function PlusBtn({ light = false }: { light?: boolean }) {
  return (
    <div style={{
      position: 'absolute', bottom: 20, right: 20,
      width: 28, height: 28, borderRadius: '50%',
      background: light ? 'rgba(255,255,255,0.20)' : '#1d1d1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function DarkPremium() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 12% 22%, rgba(80,220,180,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 18%, rgba(100,120,255,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 60%, rgba(60,190,160,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 82%, rgba(130,90,255,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 82%, rgba(60,200,155,0.65) 0%, transparent 40%)',
          '#edfaf5',
        ].join(','),
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22 }}>
          <svg width="17" height="17" viewBox="0 0 814 1000" fill="#1d1d1f">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Omniva Design</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700,
          lineHeight: 1.05, letterSpacing: '-0.04em',
          color: '#000000', maxWidth: 760, margin: '0 0 20px',
        }}>
          Your business deserves<br />a world-class web presence.
        </h1>
        <p style={{ fontSize: 19, color: '#3d3d3f', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>
          Most website designers jump straight into building. I start with strategy.
        </p>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '10px 22px',
          fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Work with us
        </button>
      </section>

      {/* ── Tile Grid ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Row 1: tall dark tile left + 2 stacked tiles right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12 }}>

            {/* LEFT — Jim's bio */}
            <div style={{
              background: '#1d1d1f', borderRadius: 20, padding: '52px 48px',
              position: 'relative', overflow: 'hidden', minHeight: 480,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  width: 96, height: 96, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(80,220,180,0.9), rgba(100,120,255,0.9))',
                  marginBottom: 32,
                  boxShadow: '0 0 60px rgba(80,220,180,0.4)',
                }}/>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', margin: '0 0 14px' }}>
                  Jim Donohue · Santa Rosa, CA
                </p>
                <p style={{ margin: '0 0 20px', fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em', color: '#ffffff' }}>
                  I start with strategy. Not a blank canvas.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That's the difference between a website that looks good and one that actually brings in business.
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>
                  20+ years in design, UX/UI &amp; digital strategy. Senior Product Designer at Wells Fargo and Deloitte. Now bringing that same research-driven approach to Sonoma County.
                </p>
              </div>
              <PlusBtn light/>
            </div>

            {/* RIGHT — 2 stacked tiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Top-right — stats tile */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 36px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 20px' }}>Proven Results</p>
                {[
                  { stat: '+15%', label: 'lift in subscriptions' },
                  { stat: '+22%', label: 'jump in user engagement' },
                  { stat: '90+', label: 'apps adopted the design system' },
                ].map(({ stat, label }) => (
                  <div key={stat} style={{ display: 'flex', alignItems: 'baseline', gap: 10, borderBottom: '1px solid #e5e5ea', padding: '12px 0' }}>
                    <span style={{
                      fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em',
                      background: 'linear-gradient(135deg, #50dcc0, #6478ff)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{stat}</span>
                    <span style={{ fontSize: 13, color: '#6e6e73' }}>{label}</span>
                  </div>
                ))}
                <PlusBtn/>
              </div>

              {/* Bottom-right — statement */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 36px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ margin: 0, fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #50dcc0, #6478ff)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>Month-to-month.</span>
                </p>
                <p style={{ margin: '6px 0 0', fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                  Always.
                </p>
                <p style={{ fontSize: 13, color: '#6e6e73', marginTop: 14, lineHeight: 1.5 }}>
                  No contracts. Not even the fine print. Cancel anytime.
                </p>
                <PlusBtn/>
              </div>
            </div>
          </div>

          {/* Row 2: What I Do — services + reviews */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

            {/* Services */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 44px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>What I Do</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 8px', lineHeight: 1.2 }}>
                Websites that work as hard as you do.
              </h3>
              <p style={{ fontSize: 13, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 20px' }}>
                From tasting rooms along Highway 12 to shops in Railroad Square to service companies in Rincon Valley. Every site starts with research and ends with something that actually performs.
              </p>
              {[
                'Website Design &amp; Development',
                'Website Redesign',
                'E-commerce Design',
                'SEO-Optimized Design',
                'UX/UI Strategy',
                'Website Maintenance',
              ].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '9px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: '#1d1d1f' }} dangerouslySetInnerHTML={{ __html: item }}/>
                  <span style={{ color: '#2997ff' }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Reviews */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 44px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 16px' }}>Reviews</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 28px', lineHeight: 1.2 }}>
                Trusted by local businesses.
              </h3>
              {[
                { text: '"Bookings up 40% in three months. Worth every penny."', name: 'Maria G. — Rosa Day Spa' },
                { text: '"GMB traffic doubled. Best marketing investment we made."', name: 'James T. — Redwood Roofing' },
                { text: '"The AI phone system alone saves us hours every week."', name: 'Linda K. — Vine &amp; Table' },
              ].map((r, i) => (
                <div key={i} style={{ borderBottom: i < 2 ? '1px solid #e5e5ea' : 'none', padding: '14px 0' }}>
                  <p style={{ fontSize: 14, color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: r.text }}/>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }} dangerouslySetInnerHTML={{ __html: r.name }}/>
                </div>
              ))}
              <PlusBtn/>
            </div>
          </div>

          {/* Row 3: Beyond the Website — full-width dark tile */}
          <div style={{
            background: '#1d1d1f', borderRadius: 20, padding: '52px 52px',
            position: 'relative', overflow: 'hidden',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', margin: '0 0 12px' }}>Beyond the Website</p>
            <h3 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 12px', lineHeight: 1.05 }}>
              AI marketing that never sleeps.
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 620, margin: '0 0 36px' }}>
              Your site is the foundation. Local SEO, email marketing automation, and AI-powered tools capture leads and handle customer questions even when you're closed.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { label: 'AI Chat Assistant', sub: 'Answers questions 24/7' },
                { label: 'AI Receptionist', sub: 'Books appointments automatically' },
                { label: 'AI Voice Assistant', sub: 'Handles calls after hours' },
                { label: 'Email Automation', sub: 'Nurture leads on autopilot' },
              ].map(({ label, sub }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 20px',
                  borderTop: '1px solid rgba(80,220,180,0.3)',
                }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{label}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
            <PlusBtn light/>
          </div>

          {/* Row 4: Brand services + service area */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 12 }}>

            {/* Brand services */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 44px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Brand &amp; Print</p>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 8px', lineHeight: 1.2 }}>
                Everything matches. Same colors, same feel, same quality.
              </h3>
              <p style={{ fontSize: 13, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 20px' }}>
                So your brand holds together whether someone finds you on Google or picks up your card at a Chamber event at Old Courthouse Square.
              </p>
              {[
                'Logo &amp; Brand Identity',
                'Business Cards &amp; Stationery',
                'Brochures &amp; Flyers',
                'Infographic Design',
                'Presentation Design',
              ].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '9px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: '#1d1d1f' }} dangerouslySetInnerHTML={{ __html: item }}/>
                  <span style={{ color: '#2997ff' }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Service area */}
            <div style={{
              borderRadius: 20, padding: '44px 48px',
              position: 'relative', overflow: 'hidden',
              background: [
                'radial-gradient(ellipse at 10% 20%, rgba(80,220,180,0.75) 0%, transparent 50%)',
                'radial-gradient(ellipse at 90% 80%, rgba(100,120,255,0.75) 0%, transparent 50%)',
                '#c8f2ea',
              ].join(','),
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.4)', margin: '0 0 12px' }}>Service Area</p>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#000', margin: '0 0 12px', lineHeight: 1.1 }}>
                Serving Santa Rosa<br />and Sonoma County.
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 380 }}>
                From Fountaingrove to Roseland, Montgomery Village to Santa Rosa Avenue — and throughout the county including Windsor, Rohnert Park, Petaluma, Healdsburg, and Sebastopol.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.65)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', maxWidth: 380 }}>
                "No jargon. No pressure. Just a website designer in Santa Rosa, CA who thinks before he builds."
              </p>
              <PlusBtn/>
            </div>
          </div>

          {/* Row 5: gradient CTA */}
          <div style={{
            borderRadius: 20, padding: '64px 64px',
            position: 'relative', overflow: 'hidden',
            background: [
              'radial-gradient(ellipse at 8% 30%, rgba(80,220,180,0.95) 0%, transparent 50%)',
              'radial-gradient(ellipse at 92% 25%, rgba(100,120,255,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 75%, rgba(60,190,160,0.80) 0%, transparent 50%)',
              '#78d0c8',
            ].join(','),
          }}>
            <p style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 12px', lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
              If your website isn't bringing in<br />calls and customers, the issue<br />is usually strategy.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', margin: '0 0 32px' }}>
              Let's figure out what's wrong and fix it.
            </p>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '14px 28px',
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
            }}>
              Get a free consultation
            </button>
          </div>

        </div>
      </div>

      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design · Jim Donohue · Santa Rosa, CA · (707) 421-8350</p>
      </footer>
    </div>
  );
}
