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

// Layout D — asymmetric: one tall hero tile on left, stack of 2 on right; then full-width tiles
export function DarkPremium() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* Hero — teal · emerald · indigo · violet */}
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
          color: '#000000', maxWidth: 760, margin: '0 0 28px',
        }}>
          Your business deserves<br />a world-class web presence.
        </h1>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '10px 22px',
          fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Work with us
        </button>
      </section>

      {/* ── Tile Grid — asymmetric layout ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Row 1: tall tile left + 2 stacked tiles right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12 }}>
            {/* LEFT — tall statement tile */}
            <div style={{
              background: '#1d1d1f', borderRadius: 20, padding: '52px 48px',
              position: 'relative', overflow: 'hidden', minHeight: 460,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}>
              <div style={{ marginBottom: 32 }}>
                {/* Teal-purple circular gradient orb */}
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(80,220,180,0.9), rgba(100,120,255,0.9))',
                  marginBottom: 0,
                  boxShadow: '0 0 60px rgba(80,220,180,0.4)',
                }}/>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', margin: '0 0 16px' }}>
                Omniva Design
              </p>
              <p style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#ffffff' }}>
                The agency that treats your business like its own.
              </p>
              <PlusBtn light/>
            </div>

            {/* RIGHT — 2 stacked tiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Top-right tile — services */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 36px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Website Designer</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 20px', lineHeight: 1.2 }}>
                  Websites that work as hard as you do.
                </h3>
                {['Website Design', 'Website Development', 'E-commerce', 'SEO Design'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff' }}>›</span>
                  </div>
                ))}
                <PlusBtn/>
              </div>

              {/* Bottom-right tile — statement */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 36px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ margin: 0, fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #50dcc0, #6478ff)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>Month-to-month.</span>
                </p>
                <p style={{ margin: '8px 0 0', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                  Always.
                </p>
                <PlusBtn/>
              </div>
            </div>
          </div>

          {/* Row 2: two equal tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* AI Marketing services */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 44px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Internet Marketing</p>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 24px', lineHeight: 1.2 }}>
                AI marketing that never sleeps.
              </h3>
              {['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 15, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Reviews */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 44px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 16px' }}>Reviews</p>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 28px', lineHeight: 1.2 }}>
                Trusted by local businesses.
              </h3>
              {[
                { text: '"Bookings up 40% in three months. Worth every penny."', name: 'Maria G. — Rosa Day Spa' },
                { text: '"GMB traffic doubled. Best marketing investment we made."', name: 'James T. — Redwood Roofing' },
                { text: '"The AI phone system alone saves us hours every week."', name: 'Linda K. — Vine & Table' },
              ].map((r, i) => (
                <div key={i} style={{ borderBottom: i < 2 ? '1px solid #e5e5ea' : 'none', padding: '14px 0' }}>
                  <p style={{ fontSize: 14, color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.5 }}>{r.text}</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>{r.name}</p>
                </div>
              ))}
              <PlusBtn/>
            </div>
          </div>

          {/* Row 3: gradient CTA */}
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
            <p style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 28px', lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
              Unlimited growth.<br />Starting today.
            </p>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '14px 28px',
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
            }}>
              Get started
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
