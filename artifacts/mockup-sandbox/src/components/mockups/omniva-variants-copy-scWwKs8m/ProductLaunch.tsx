import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

// Shared tile style
const tile = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: '#ffffff',
  borderRadius: 20,
  padding: '40px 44px',
  overflow: 'hidden',
  position: 'relative',
  ...extra,
});

// Plus button in corner (matches Apple Card page)
function PlusBtn() {
  return (
    <div style={{
      position: 'absolute', bottom: 20, right: 20,
      width: 28, height: 28, borderRadius: '50%',
      background: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function ProductLaunch() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* ── Hero ── lavender · pink · peach · orange · yellow */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
        background: [
          'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
          'radial-gradient(ellipse at 82% 82%, rgba(255,220,100,0.80) 0%, transparent 40%)',
          'radial-gradient(ellipse at 18% 80%, rgba(175,145,230,0.65) 0%, transparent 40%)',
          '#f5eef8',
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
          color: '#000000', maxWidth: 720, margin: '0 0 28px',
        }}>
          The simplicity of Apple.<br />In your website.
        </h1>
        <button style={{
          background: '#1d1d1f', color: '#fff', border: 'none',
          borderRadius: 980, padding: '10px 22px',
          fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
        }}>
          Get started
        </button>
      </section>

      {/* ── Tile Grid ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Row 1: two equal tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* Tile 1A — Website services mockup tile */}
            <div style={tile({ minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' })}>
              {/* Mock website card visual */}
              <div style={{
                background: 'linear-gradient(135deg, #f0f0f5 0%, #e8e8ee 100%)',
                borderRadius: 12, padding: '20px 24px', marginBottom: 28,
                border: '1px solid #e0e0e5',
              }}>
                <div style={{ fontSize: 11, color: '#6e6e73', marginBottom: 8 }}>omnivaclient.com</div>
                <div style={{ height: 6, background: '#d2d2d7', borderRadius: 3, marginBottom: 6, width: '70%' }}/>
                <div style={{ height: 6, background: '#d2d2d7', borderRadius: 3, marginBottom: 16, width: '45%' }}/>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ height: 28, background: '#1d1d1f', borderRadius: 14, width: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: 10, fontWeight: 600 }}>Book Now</span>
                  </div>
                  <div style={{ height: 28, background: '#f5f5f7', borderRadius: 14, width: 80, border: '1px solid #d2d2d7' }}/>
                </div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 8px' }}>Website Designer</p>
              <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: 0, lineHeight: 1.2 }}>
                Websites that convert browsers into buyers.
              </p>
              <PlusBtn/>
            </div>

            {/* Tile 1B — Graphic design */}
            <div style={tile({ minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' })}>
              {/* Mock logo card */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 140, marginBottom: 28,
              }}>
                <div style={{
                  width: 120, height: 120, borderRadius: 28,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(102,126,234,0.35)',
                }}>
                  <span style={{ fontSize: 40, fontWeight: 800, color: 'white', letterSpacing: '-0.05em' }}>OD</span>
                </div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 8px' }}>Graphic Designer</p>
              <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: 0, lineHeight: 1.2 }}>
                A brand identity you're proud to show off.
              </p>
              <PlusBtn/>
            </div>
          </div>

          {/* Row 2: typographic statement tiles (matches "No fees." tiles) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* Tile 2A — statement with accent color lead */}
            <div style={tile({ minHeight: 340 })}>
              <p style={{ margin: '0 0 4px', fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>No contracts.</span>
              </p>
              <p style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                Not even the fine print.
              </p>
              <PlusBtn/>
            </div>

            {/* Tile 2B — statement text only */}
            <div style={tile({ minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' })}>
              {/* Circular indicator (matches the ring graphic in Apple Card) */}
              <div style={{ marginBottom: 28 }}>
                <svg width="90" height="90" viewBox="0 0 90 90">
                  <circle cx="45" cy="45" r="38" fill="none" stroke="#e5e5ea" strokeWidth="8"/>
                  <circle cx="45" cy="45" r="38" fill="none" stroke="#34c759" strokeWidth="8"
                    strokeDasharray="180 239" strokeLinecap="round"
                    transform="rotate(-90 45 45)"/>
                  <circle cx="45" cy="25" r="5" fill="#34c759"/>
                </svg>
              </div>
              <p style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: 0, lineHeight: 1.2 }}>
                The first web agency that actually encourages you to spend less on marketing.
              </p>
              <PlusBtn/>
            </div>
          </div>

          {/* Row 3: full-width AI Marketing gradient tile */}
          <div style={{
            borderRadius: 20, overflow: 'hidden', position: 'relative', minHeight: 260,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: '44px 52px',
            background: [
              'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
              '#f5c8e0',
            ].join(','),
          }}>
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: 'rgba(255,255,255,0.90)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <p style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1.05, textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
              AI Marketing<br />that never sleeps.
            </p>
          </div>

          {/* Row 4: two service list tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 12 }}>
            {/* Tile 4A — service list */}
            <div style={tile()}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 20px' }}>Internet Marketing</p>
              <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 28px', lineHeight: 1.15 }}>
                Smarter marketing,<br />powered by AI.
              </p>
              {['AI Voice Assistant', 'AI Receptionist', 'Email Marketing Automation', 'Local SEO (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Tile 4B — contact CTA */}
            <div style={tile({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 20px' }}>Santa Rosa, CA</p>
                <p style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 16px', lineHeight: 1.2 }}>
                  Local experts. World-class results.
                </p>
                <p style={{ fontSize: 15, color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
                  Serving businesses throughout Sonoma County and Northern California.
                </p>
              </div>
              <div style={{ marginTop: 32 }}>
                <button style={{
                  background: '#1d1d1f', color: '#fff', border: 'none',
                  borderRadius: 980, padding: '12px 24px',
                  fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer', width: '100%',
                }}>
                  Get in touch
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6e6e73' }}>© 2025 Omniva Design — Santa Rosa, CA</span>
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
