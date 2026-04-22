import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const ICON_BROWSER = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6" cy="6.5" r="0.7" fill="white"/><circle cx="8.5" cy="6.5" r="0.7" fill="white"/></svg>
);
const ICON_ENVELOPE = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
);
const ICON_SPARK = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2l1.6 6L20 9.5l-6.4 1.5L12 17l-1.6-6L4 9.5l6.4-1.5z"/><circle cx="18" cy="5" r="1.4" fill="white"/><circle cx="5" cy="18" r="1.2" fill="white"/></svg>
);
const ICON_PALETTE = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="10.5" r="1" fill="white"/><circle cx="11" cy="7" r="1" fill="white"/><circle cx="15" cy="7.5" r="1" fill="white"/></svg>
);

function IconBadge({ tint, children }: { tint: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 56, height: 56, borderRadius: 14, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, boxShadow: `0 8px 24px ${tint}55` }}>
      {children}
    </div>
  );
}

// VARIATION B — Hero + centered bio intro + Layout B service tiles + Layout B reviews/map combo tile
export function VariantB_HorizontalStrip() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff', minHeight: '100vh' }}>

      {/* Full-bleed hero */}
      <section style={{
        minHeight: 560, padding: '0 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)',
          '#dff3ff',
        ].join(','),
      }}>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#000', maxWidth: 740, margin: '0 0 28px' }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '12px 24px', fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
          Get a free consultation
        </button>
      </section>

      {/* Centered narrow bio intro — white background */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 24px' }}>
            Website Designer, Santa Rosa, CA
          </h1>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
            Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are and what you need them to do.
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
            Jim Donohue. 20+ years. Senior Product Designer at Wells Fargo and Deloitte. 15% lift in subscriptions. 22% jump in engagement. Design systems used across 90+ apps.
          </p>
        </div>
      </section>

      {/* ── Layout B service tiles + reviews/map combo on grey ── */}
      <div style={{ background: '#fff', padding: '60px 20px 60px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>

          {/* Tile 2 — Website Designer */}
          <div style={{ background: '#eaf4ff', borderRadius: 20, padding: '52px 72px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 80, alignItems: 'center' }}>
            <div style={{ flex: '0 0 420px' }}>
              <IconBadge tint="#2997ff">{ICON_BROWSER}</IconBadge>
              <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: '0 0 16px' }}>Website Designer</p>
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

          {/* Tile 3 — Digital Marketing — row-reverse */}
          <div style={{ background: '#e8faee', borderRadius: 20, padding: '52px 72px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 80, alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '0 0 380px' }}>
              <IconBadge tint="#34c759">{ICON_ENVELOPE}</IconBadge>
              <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#34c759', margin: '0 0 16px' }}>Digital Marketing</p>
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
                  <span style={{ color: '#34c759', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4 — Internet Marketing Service */}
          <div style={{ background: '#f3eaf9', borderRadius: 20, padding: '52px 72px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 80, alignItems: 'center' }}>
            <div style={{ flex: '0 0 380px' }}>
              <IconBadge tint="#c898e2">{ICON_SPARK}</IconBadge>
              <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c898e2', margin: '0 0 16px' }}>Internet Marketing Service</p>
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
                  <span style={{ color: '#c898e2', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 5 — Graphic Designer — row-reverse */}
          <div style={{ background: '#fdf0e3', borderRadius: 20, padding: '52px 72px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 80, alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '0 0 380px' }}>
              <IconBadge tint="#f09030">{ICON_PALETTE}</IconBadge>
              <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f09030', margin: '0 0 16px' }}>Graphic Designer</p>
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
                  <span style={{ color: '#f09030', fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Reviews + Map combo on white background */}
      <div style={{ background: '#fff', padding: '60px 20px 60px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
            <div style={{ padding: '52px 72px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: 0 }}>Client Reviews</p>
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

        </div>
      </div>

      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
