import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

function PlusBtn({ light = false }: { light?: boolean }) {
  return (
    <div style={{
      position: 'absolute', bottom: 20, right: 20,
      width: 28, height: 28, borderRadius: '50%',
      background: light ? 'rgba(255,255,255,0.85)' : '#1d1d1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M6 1v10M1 6h10" stroke={light ? '#1d1d1f' : 'white'} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// Layout C — 3-column mosaic: short tiles mixed with tall tiles
export function EditorialGrid() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* Hero — rose · coral · amber · peach */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 10% 25%, rgba(255,120,140,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 18%, rgba(255,180,80,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 60%, rgba(255,150,120,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 82%, rgba(255,210,90,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 82%, rgba(255,100,130,0.65) 0%, transparent 40%)',
          '#fff0ee',
        ].join(','),
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22 }}>
          <svg width="17" height="17" viewBox="0 0 814 1000" fill="#1d1d1f">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Donohue Design</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700,
          lineHeight: 1.05, letterSpacing: '-0.04em',
          color: '#000000', maxWidth: 720, margin: '0 0 28px',
        }}>
          Grow your business.<br />Look good doing it.
        </h1>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '10px 22px',
          fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          See our services
        </button>
      </section>

      {/* ── Tile Grid — 3-column mosaic ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Row 1: 3 equal tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {/* Tile — Website Design */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Websites</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 20px', lineHeight: 1.2 }}>
                Design that converts
              </h3>
              {['Website Design', 'Development', 'E-commerce', 'SEO'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff' }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Tile — Statement */}
            <div style={{ background: '#1d1d1f', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 50px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #ff784e, #ffcc3d)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>No long-term contracts.</span>
              </p>
              <p style={{ margin: '8px 0 0', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#ffffff' }}>
                Ever.
              </p>
              <PlusBtn light/>
            </div>

            {/* Tile — AI Marketing */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>AI Marketing</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 20px', lineHeight: 1.2 }}>
                Marketing that never sleeps
              </h3>
              {['AI Voice Assistant', 'AI Receptionist', 'Email Automation', 'Local SEO (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff' }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>
          </div>

          {/* Row 2: asymmetric — large + small */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            {/* Large tile — statement */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '52px 56px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ margin: 0, fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #ff7880, #ffa550)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Results-driven.</span>
              </p>
              <p style={{ margin: '8px 0 0', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                Not just pretty.
              </p>
              <p style={{ fontSize: 18, color: '#6e6e73', margin: '28px 0 0', lineHeight: 1.55, maxWidth: 440 }}>
                Every site we build is optimized for search, speed, and conversion — because a beautiful website that no one finds is just art.
              </p>
              <PlusBtn/>
            </div>

            {/* Small tile — brand design */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>Brand Design</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 16px', lineHeight: 1.2 }}>
                  An identity as strong as your business.
                </h3>
              </div>
              <div>
                {['Logo Design', 'Brand Identity', 'Print Design'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff' }}>›</span>
                  </div>
                ))}
              </div>
              <PlusBtn/>
            </div>
          </div>

          {/* Row 3: gradient CTA */}
          <div style={{
            borderRadius: 20, padding: '60px 56px',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
            background: [
              'radial-gradient(ellipse at 10% 30%, rgba(255,120,140,0.95) 0%, transparent 50%)',
              'radial-gradient(ellipse at 90% 25%, rgba(255,180,80,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 75%, rgba(255,150,120,0.80) 0%, transparent 50%)',
              '#ffb07c',
            ].join(','),
          }}>
            <p style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 28px', lineHeight: 1.1, textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
              Local expertise.<br />World-class results.
            </p>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', margin: '0 0 32px' }}>Santa Rosa, CA — Serving all of Sonoma County</p>
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
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Donohue Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
