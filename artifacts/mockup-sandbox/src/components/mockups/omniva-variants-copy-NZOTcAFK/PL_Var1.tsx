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

/**
 * Variation 1 — VERTICAL HIERARCHY
 * Logic: One dominant idea per tier, read top-to-bottom.
 * Statement tile leads; services follow as a horizontal split;
 * gradient CTA anchors the bottom.
 * Tiles are very wide, shorter in height — landscape proportion throughout.
 */
export function PL_Var1() {
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
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>Donohue Design</span>
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

      {/* ── TILE GRID — Vertical Hierarchy ── */}
      <div style={{ background: '#f5f5f7', padding: '20px 20px 60px' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* TIER 1 — Full-width lead statement (leads with gradient text) */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '56px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60,
          }}>
            <div style={{ flex: '0 0 auto' }}>
              <p style={{ margin: 0, fontSize: 'clamp(56px, 7vw, 88px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #c898e2, #f4a0b8, #ffb347)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>No contracts.</span>
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 'clamp(48px, 6vw, 76px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#1d1d1f' }}>
                Not even<br />the fine print.
              </p>
            </div>
            <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 64, maxWidth: 320 }}>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.6, margin: '0 0 20px' }}>
                Month-to-month. No lock-ins, no hidden fees, no surprises.
              </p>
              <a href="#" style={{ fontSize: 16, color: '#2997ff', textDecoration: 'none', fontWeight: 500 }}>Learn more ›</a>
            </div>
            <PlusBtn/>
          </div>

          {/* TIER 2 — Three equal service columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { cat: 'Website Designer', head: 'Sites that convert.', items: ['Website Design', 'Development', 'E-commerce', 'Redesign', 'SEO Design'] },
              { cat: 'Internet Marketing', head: 'Marketing that never sleeps.', items: ['AI Voice Assistant', 'AI Receptionist', 'Email Automation', 'Local SEO (GMB)'] },
              { cat: 'Graphic Designer', head: 'Identity that speaks.', items: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Assets'] },
            ].map(({ cat, head, items }) => (
              <div key={cat} style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 12px' }}>{cat}</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 20px', lineHeight: 1.2 }}>{head}</h3>
                {items.map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#2997ff' }}>›</span>
                  </div>
                ))}
                <PlusBtn/>
              </div>
            ))}
          </div>

          {/* TIER 3 — Fullwidth gradient CTA */}
          <div style={{
            borderRadius: 20, padding: '56px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: [
              'radial-gradient(ellipse at 10% 30%, rgba(196,153,226,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 90% 20%, rgba(255,185,120,0.90) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 70%, rgba(248,140,170,0.70) 0%, transparent 50%)',
              '#f5c8e0',
            ].join(','),
          }}>
            <p style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1.1, textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
              AI Marketing that never sleeps.
            </p>
            <button style={{
              background: '#1d1d1f', color: '#fff', border: 'none',
              borderRadius: 980, padding: '14px 28px', flexShrink: 0,
              fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer', marginLeft: 40,
            }}>
              Get started
            </button>
          </div>

        </div>
      </div>

      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: 1020, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6e6e73' }}>© 2025 Donohue Design — Santa Rosa, CA</span>
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
