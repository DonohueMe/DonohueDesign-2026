import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

function PlusBtn() {
  return (
    <div style={{
      position: 'absolute', bottom: 20, right: 20,
      width: 28, height: 28, borderRadius: '50%',
      background: '#1d1d1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// Layout B — single-column LARGE statement tiles, stacked vertically
export function CardPage() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* Hero — ocean blue · cyan · seafoam · mint */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 15% 85%, rgba(60,150,255,0.65) 0%, transparent 40%)',
          '#dff3ff',
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
          color: '#000000', maxWidth: 740, margin: '0 0 28px',
        }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '10px 22px',
          fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Get a free consultation
        </button>
      </section>

      {/* ── Tile Grid — single column, large full-width statement tiles ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Tile 1 — Full-width typographic statement + bio */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '64px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'flex-start',
          }}>
            {/* Left — statement */}
            <div style={{ flex: '0 0 auto' }}>
              <p style={{ margin: '0 0 0', fontSize: 'clamp(52px, 6.5vw, 80px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #5aaeff, #46dcc3)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>No setup fees.</span>
              </p>
              <p style={{ margin: '6px 0 0', fontSize: 'clamp(44px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                Not even the fine print.
              </p>
            </div>
            {/* Right — h1 + bio */}
            <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 60 }}>
              <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#1d1d1f', margin: '0 0 8px' }}>
                Website Designer, Santa Rosa, CA
              </h1>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#6e6e73', margin: '0 0 20px', lineHeight: 1.4 }}>
                Design, Strategy, and UX for Local Businesses
              </p>
              <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 12px' }}>
                Most website designers jump straight into building. I start with strategy.
              </p>
              <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 12px' }}>
                Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That's the difference between a website that looks good and one that actually brings in business.
              </p>
              <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
                My name is Jim Donohue. I'm a website designer in Santa Rosa, CA with over 20 years of experience in design, UX/UI, and digital strategy. I've spent a good chunk of that time working as a Senior Product Designer at companies like Wells Fargo and Deloitte — building products used by thousands of people across dozens of applications. I led redesigns that drove real, measurable results. A 15% lift in subscriptions. A 22% increase in user engagement. Design systems adopted across 90+ apps.
              </p>
            </div>
            <PlusBtn/>
          </div>

          {/* Tile 2 — Full-width Website Services */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center',
          }}>
            <div style={{ flex: '0 0 420px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 16px' }}>Website Designer</p>
              <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>
                Your website. Working harder than ever.
              </h2>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                A well-designed website isn't just attractive — it's strategic. Every layout choice, call-to-action, and navigation path should guide visitors toward a clear goal. In 2025, that means mobile-first design, fast load times, and content built around what your customers actually need — not what looks impressive in a portfolio.
              </p>
            </div>
            <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 60 }}>
              {['Website Design & Strategy', 'UX/UI Design', 'Website Development'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 3 — Full-width Internet Marketing */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center', flexDirection: 'row-reverse',
          }}>
            <div style={{ flex: '0 0 380px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 16px' }}>Internet Marketing</p>
              <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>
                AI marketing that works while you sleep.
              </h2>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                Voice assistants, email automation, local SEO — enterprise tools at small-business prices.
              </p>
            </div>
            <div style={{ flex: 1, borderRight: '1px solid #e5e5ea', paddingRight: 60 }}>
              {['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
            <PlusBtn/>
          </div>

          {/* Tile 4 — Full-width CTA gradient */}
          <div style={{
            borderRadius: 20, padding: '72px 72px',
            position: 'relative', overflow: 'hidden',
            background: [
              'radial-gradient(ellipse at 8% 30%, rgba(90,170,255,0.95) 0%, transparent 50%)',
              'radial-gradient(ellipse at 92% 25%, rgba(70,220,195,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 75%, rgba(100,195,250,0.80) 0%, transparent 50%)',
              '#a8e8f5',
            ].join(','),
          }}>
            <p style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 32px', lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              Ready to take your business to the next level?
            </p>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '14px 28px',
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
            }}>
              Start your project
            </button>
          </div>

        </div>
      </div>

      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
