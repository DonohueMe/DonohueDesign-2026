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

/**
 * Variation 3 — ASYMMETRIC ANCHOR
 * Logic: One immovable anchor on the left (tall dark tile, 2-row height) holds
 * visual gravity while a column of small tiles sits to its right.
 * The left tile is the emotional core; the right column is the detail layer.
 * Below: full-width service strip, then gradient CTA.
 */
export function PL_Var3() {
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

      {/* ── TILE GRID — Asymmetric Anchor ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* BLOCK 1 — Anchor layout: tall left + 3 stacked right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
            {/* LEFT — tall gradient anchor tile */}
            <div style={{
              borderRadius: 20, padding: '52px 52px',
              position: 'relative', overflow: 'hidden',
              minHeight: 540,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              background: [
                'radial-gradient(ellipse at 15% 20%, rgba(196,153,226,0.95) 0%, transparent 55%)',
                'radial-gradient(ellipse at 88% 22%, rgba(255,185,120,0.90) 0%, transparent 50%)',
                'radial-gradient(ellipse at 50% 65%, rgba(248,140,170,0.80) 0%, transparent 55%)',
                '#f0c8e8',
              ].join(','),
            }}>
              {/* Top section */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 36 }}>
                  <svg width="18" height="18" viewBox="0 0 814 1000" fill="rgba(0,0,0,0.5)">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.4 135.4-316.8 269.1-316.8 71 0 130.5 46.4 174.5 46.4 42.7 0 109.2-49.9 188.4-49.9 30.5.1 108.2 5.8 160.2 67.5z"/>
                  </svg>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(0,0,0,0.5)' }}>Omniva Design</span>
                </div>
                <p style={{ fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#1d1d1f', margin: 0, lineHeight: 1.05 }}>
                  No contracts.<br />No hidden fees.<br />No surprises.
                </p>
              </div>
              {/* Bottom section */}
              <div>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.55, margin: '0 0 28px' }}>
                  Month-to-month agreements. Cancel anytime. We earn your business every month.
                </p>
                <button style={{
                  background: '#1d1d1f', color: '#fff', border: 'none',
                  borderRadius: 980, padding: '12px 24px',
                  fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
                }}>
                  Start your project
                </button>
              </div>
              <PlusBtn/>
            </div>

            {/* RIGHT — 3 stacked tiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Top-right: Website Designer */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '28px 32px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Website Designer</p>
                <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>Sites that work<br />as hard as you do.</h4>
                {['Design', 'Development', 'E-commerce', 'Redesign'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '8px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff', fontSize: 13 }}>›</span>
                  </div>
                ))}
                <PlusBtn/>
              </div>

              {/* Mid-right: Internet Marketing */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '28px 32px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Internet Marketing</p>
                <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>AI marketing that<br />never sleeps.</h4>
                {['AI Voice Assistant', 'Email Automation', 'Local SEO (GMB)'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '8px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff', fontSize: 13 }}>›</span>
                  </div>
                ))}
                <PlusBtn/>
              </div>

              {/* Bottom-right: Graphic Design */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '28px 32px', position: 'relative', overflow: 'hidden', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 10px' }}>Graphic Designer</p>
                <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 8px', lineHeight: 1.2 }}>An identity as strong<br />as your business.</h4>
                <p style={{ fontSize: 14, color: '#6e6e73', margin: 0 }}>Logo · Brand · Print · Social</p>
                <PlusBtn/>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — Full-width gradient CTA */}
          <div style={{
            borderRadius: 20, padding: '52px 60px',
            position: 'relative', overflow: 'hidden',
            background: [
              'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
              '#f5c8e0',
            ].join(','),
            display: 'flex', alignItems: 'center', gap: 28,
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'rgba(255,255,255,0.90)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1.1, textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
                AI Marketing that never sleeps.
              </p>
            </div>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '12px 24px', flexShrink: 0,
              fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer',
            }}>
              Get started
            </button>
          </div>

          {/* BLOCK 3 — Contact strip: two equal tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 40px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', margin: '0 0 14px' }}>Santa Rosa, CA</p>
              <p style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 10px', lineHeight: 1.2 }}>Local expertise.<br />World-class results.</p>
              <p style={{ fontSize: 15, color: '#6e6e73', margin: 0 }}>Serving all of Sonoma County and Northern California.</p>
              <PlusBtn/>
            </div>
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 40px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 10px', lineHeight: 1.2 }}>
                Ready to grow your business?
              </p>
              <button style={{
                background: '#1d1d1f', color: '#fff', border: 'none',
                borderRadius: 980, padding: '12px 24px',
                fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer', alignSelf: 'flex-start',
              }}>
                Get in touch
              </button>
              <PlusBtn/>
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
