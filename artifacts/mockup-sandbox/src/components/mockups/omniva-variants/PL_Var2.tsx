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

function PlusBtn({ light = false }: { light?: boolean }) {
  return (
    <div style={{
      position: 'absolute', bottom: 16, right: 16,
      width: 24, height: 24, borderRadius: '50%',
      background: light ? 'rgba(255,255,255,0.2)' : '#1d1d1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="10" height="10" viewBox="0 0 12 12">
        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/**
 * Variation 2 — DENSE MOSAIC
 * Logic: High information density. Many small tiles in a 4-column grid.
 * Newspaper-like rhythm. No single tile dominates — the whole grid reads as one surface.
 * Short tiles, compact padding, tight gaps.
 */
export function PL_Var2() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px', background: HERO_BG,
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
          color: '#000', maxWidth: 720, margin: '0 0 28px',
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

      {/* ── TILE GRID — Dense 4-column Mosaic ── */}
      <div style={{ background: '#f5f5f7', padding: '16px 16px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>

          {/* Row 1 — 4 compact tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {/* Small label tiles */}
            {[
              { cat: 'Website Design', stat: '3–5', unit: 'day turnaround' },
              { cat: 'Local SEO', stat: '#1', unit: 'Google ranking goal' },
              { cat: 'AI Marketing', stat: '24/7', unit: 'automated response' },
              { cat: 'Graphic Design', stat: '100%', unit: 'custom creative' },
            ].map(({ cat, stat, unit }) => (
              <div key={cat} style={{ background: '#fff', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>{cat}</p>
                <p style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', margin: '0 0 2px', lineHeight: 1 }}>{stat}</p>
                <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>{unit}</p>
                <PlusBtn/>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 tiles: statement (span 2) + service list */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 8 }}>
            {/* Wide statement tile */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 36px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>No contracts.</span>
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                Not even the fine print.
              </p>
              <PlusBtn/>
            </div>

            {/* Website services */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>Websites</p>
              <h4 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>Converts browsers<br />into buyers.</h4>
              {['Design', 'Development', 'E-commerce', 'SEO'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '7px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* AI Marketing */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>AI Marketing</p>
              <h4 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>Never sleeps.<br />Never misses a lead.</h4>
              {['AI Voice', 'AI Receptionist', 'Email', 'SEO (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '7px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>
          </div>

          {/* Row 3 — 4 tiles: dark statement + 3 service badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {/* Dark tile */}
            <div style={{ background: '#1d1d1f', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1.1 }}>Month-to-month.<br />Always.</p>
              <PlusBtn light/>
            </div>

            {/* 3 brand badges */}
            {[
              { label: 'Logo Design', sub: 'Brand Identity' },
              { label: 'Santa Rosa', sub: 'Sonoma County, CA' },
              { label: 'Free Consult', sub: 'No commitment' },
            ].map(({ label, sub }) => (
              <div key={label} style={{ background: '#fff', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#1d1d1f', margin: '0 0 4px', lineHeight: 1.1 }}>{label}</p>
                <p style={{ fontSize: 13, color: '#6e6e73', margin: 0 }}>{sub}</p>
                <PlusBtn/>
              </div>
            ))}
          </div>

          {/* Row 4 — Full-width gradient CTA */}
          <div style={{
            borderRadius: 16, padding: '44px 52px',
            position: 'relative', overflow: 'hidden',
            background: [
              'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
              '#f5c8e0',
            ].join(','),
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.90)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <p style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1.1, textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
                  AI Marketing that never sleeps.
                </p>
              </div>
              <button style={{
                background: '#1d1d1f', color: '#fff', border: 'none',
                borderRadius: 980, padding: '12px 24px', flexShrink: 0,
                fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer', marginLeft: 40,
              }}>
                Get started
              </button>
            </div>
          </div>

        </div>
      </div>

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
