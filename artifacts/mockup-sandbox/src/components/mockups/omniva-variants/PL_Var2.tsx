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
        minHeight: '50vh', display: 'flex', flexDirection: 'column',
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

      {/* ── CONTENT SECTION ── */}
      <div style={{ background: '#f5f5f7', padding: '48px 24px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* h1 + intro */}
          <div style={{ marginBottom: 40 }}>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              color: '#1d1d1f', margin: '0 0 10px', maxWidth: '100%',
            }}>
              Website Designer in Santa Rosa, CA.
            </h1>
            <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.6, maxWidth: '100%', margin: 0 }}>
              I'm Jim Donohue — a website designer, internet marketer, and graphic designer with over 20 years of experience, including senior roles at Wells Fargo and Deloitte. I work with local businesses across Santa Rosa and Sonoma County — from wineries along Highway 12 to shops in Railroad Square to service companies in Rincon Valley. Every project starts with a clear strategy: who your customers are, how they find you, and what needs to happen when they land on your site. I design websites that convert, build marketing systems that run around the clock, and create brands that hold together across every touchpoint. No contracts. No guesswork. Just a designer who thinks before he builds.
            </p>
          </div>

          {/* Row 1 — 3 service tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>

            {/* Website Designer */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>Website Designer</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>Sites built to<br />convert visitors.</h3>
              {['Website Design', 'Website Development', 'Website Redesign', 'E-commerce Design', 'SEO-Optimized Design', 'UX/UI Strategy'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '7px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Internet Marketing Service */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>Internet Marketing Service</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>AI marketing that<br />never sleeps.</h3>
              {['Local SEO (Google Business)', 'Email Marketing Automation', 'AI Chat Assistant', 'AI Receptionist', 'AI Voice Assistant', 'Paid Ads Management'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '7px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Graphic Designer */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: '0 0 10px' }}>Graphic Designer</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: '#000', margin: '0 0 14px', lineHeight: 1.2 }}>A brand as strong<br />as your business.</h3>
              {['Logo & Brand Identity', 'Business Cards & Stationery', 'Brochures & Flyers', 'Infographic Design', 'Presentation Design', 'Social Media Graphics'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '7px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 12 }}>›</span>
                </div>
              ))}
              <PlusBtn/>
            </div>
          </div>

          {/* Row 2 — Reviews + Google Map */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

            {/* Reviews tile */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: '#6e6e73', margin: 0 }}>Client Reviews</p>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 13 }}>★</span>)}
                </div>
                <span style={{ fontSize: 12, color: '#6e6e73' }}>5.0 · Google</span>
              </div>
              {[
                { name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month. He actually understood what we needed before we did.' },
                { name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword. The SEO strategy Jim put together was exactly what our shop needed.' },
                { name: 'Lisa M.', location: 'Healdsburg, CA', text: 'The AI receptionist handles after-hours calls now. We haven\'t missed a lead in weeks. Worth every penny.' },
              ].map(({ name, location, text }) => (
                <div key={name} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%', minWidth: 30,
                      background: 'linear-gradient(135deg, #c898e2, #f4a0b8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{name[0]}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, color: '#1d1d1f', margin: 0 }}>{name}</p>
                      <p style={{ fontSize: 11, color: '#6e6e73', margin: 0 }}>{location}</p>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
                      {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 10 }}>★</span>)}
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#3d3d3f', lineHeight: 1.5, margin: 0 }}>"{text}"</p>
                </div>
              ))}
              <PlusBtn/>
            </div>

            {/* Google Map tile */}
            <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', minHeight: 320 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omniva Design — Santa Rosa, CA"
              />
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                background: '#fff', borderRadius: 12, padding: '10px 14px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Omniva Design</p>
                <p style={{ fontSize: 11, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
              </div>
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
