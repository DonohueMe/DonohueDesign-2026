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
        minHeight: 800,
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

          {/* Tile 1 — Full-width h1 + bio */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '64px 72px',
            position: 'relative', overflow: 'hidden',
          }}>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 10px' }}>
              Website Designer, Santa Rosa, CA
            </h1>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#6e6e73', margin: '0 0 24px', lineHeight: 1.4 }}>
              Website Designer in Santa Rosa, CA — Design, Strategy, and UX for Local Businesses
            </p>
            <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
              Most website designers jump straight into building. I start with strategy.
            </p>
            <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
              Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That's the difference between a website that looks good and one that actually brings in business.
            </p>
            <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
              My name is Jim Donohue. I'm a website designer in Santa Rosa, CA with over 20 years of experience in design, UX/UI, and digital strategy. I've spent a good chunk of that time working as a Senior Product Designer at companies like Wells Fargo and Deloitte — building products used by thousands of people across dozens of applications. I led redesigns that drove real, measurable results. A 15% lift in subscriptions. A 22% increase in user engagement. Design systems adopted across 90+ apps.
            </p>
          </div>

          {/* Tile 2 — Full-width Website Services */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center',
          }}>
            <div style={{ flex: '0 0 420px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: '0 0 16px' }}>Website Designer</p>
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

          {/* Tile 3 — Digital Marketing — row-reverse (text RIGHT, list LEFT) */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center', flexDirection: 'row-reverse',
          }}>
            <div style={{ flex: '0 0 380px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: '0 0 16px' }}>Digital Marketing</p>
              <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>
                Get found. Stay top of mind.
              </h2>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                Email campaigns and local SEO that put your business in front of the right people at the right time.
              </p>
            </div>
            <div style={{ flex: 1, borderRight: '1px solid #e5e5ea', paddingRight: 60 }}>
              {['Email Marketing Automation', 'Local SEO Services (GMB)'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4 — Internet Marketing Service — normal (text LEFT, list RIGHT) */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center',
          }}>
            <div style={{ flex: '0 0 380px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: '0 0 16px' }}>Internet Marketing Service</p>
              <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>
                AI that answers, books, and converts — 24/7.
              </h2>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                Enterprise-grade automation tools built for small businesses — so you never miss a lead.
              </p>
            </div>
            <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 60 }}>
              {['AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 5 — Graphic Designer — row-reverse (text RIGHT, list LEFT) */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '52px 72px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', gap: 80, alignItems: 'center', flexDirection: 'row-reverse',
          }}>
            <div style={{ flex: '0 0 380px' }}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: '0 0 16px' }}>Graphic Designer</p>
              <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>
                A brand as strong as your business.
              </h2>
              <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                Everything matches your website — same colors, same feel, same level of quality across every touchpoint.
              </p>
            </div>
            <div style={{ flex: 1, borderRight: '1px solid #e5e5ea', paddingRight: 60 }}>
              {['Email Design', 'Logo Design', 'Brochure & Flyer Design', 'Presentation Design'].map(item => (
                <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 6 — Reviews + Map combined */}
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
            {/* Reviews section */}
            <div style={{ padding: '52px 72px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: 0 }}>Client Reviews</p>
                <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 14 }}>★</span>)}</div>
                <span style={{ fontSize: 13, color: '#6e6e73' }}>5.0 · Google</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
                {[
                  { name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month. He actually understood what we needed before we did.' },
                  { name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword. The SEO strategy Jim put together was exactly what our shop needed.' },
                  { name: 'Lisa M.', location: 'Healdsburg, CA', text: "The AI receptionist handles after-hours calls now. We haven't missed a lead in weeks. Worth every penny." },
                ].map(({ name, location, text }) => (
                  <div key={name}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #5aaeff, #46dcc3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{name[0]}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', margin: 0 }}>{name}</p>
                        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>{location}</p>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 11 }}>★</span>)}</div>
                    </div>
                    <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.6, margin: 0 }}>"{text}"</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Map section — inset to match tile padding */}
            <div style={{ padding: '0 72px 52px', position: 'relative' }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%" height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Omniva Design — Santa Rosa, CA"
                />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 2px 16px rgba(0,0,0,0.14)' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Omniva Design</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 8 — CTA gradient */}
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
