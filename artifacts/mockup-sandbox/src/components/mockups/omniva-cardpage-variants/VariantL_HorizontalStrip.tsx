import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const ICON_BROWSER = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>
);
const ICON_ENVELOPE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 8c1.5 1 1.5 7 0 8"/><path d="M19 5c3 2 3 12 0 14"/></svg>
);
const ICON_SPARK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2l1.6 6L20 9.5l-6.4 1.5L12 17l-1.6-6L4 9.5l6.4-1.5z"/><circle cx="18" cy="5" r="1.4" fill="white"/><circle cx="5" cy="18" r="1.2" fill="white"/></svg>
);
const ICON_PALETTE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="10.5" r="1" fill="white"/><circle cx="11" cy="7" r="1" fill="white"/><circle cx="15" cy="7.5" r="1" fill="white"/></svg>
);

function IconBadge({ tint, children }: { tint: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 28, height: 28, borderRadius: 8, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </div>
  );
}

function TileHeader({ tint, label, labelColor }: { tint: string; icon?: React.ReactNode; label: string; labelColor?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <p style={{ fontSize: 19, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: labelColor ?? tint, margin: 0 }}>{label}</p>
    </div>
  );
}

// VARIATION B — Hero + centered bio intro + Layout B service tiles + Layout B reviews/map combo tile
export function VariantK_HorizontalStrip() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff', minHeight: '100vh' }}>

      {/* Full-bleed hero */}
      <section style={{
        minHeight: 660, padding: '0 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)',
          '#dff3ff',
        ].join(','),
      }}>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#000', maxWidth: 740, margin: 0 }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
      </section>

      {/* Centered narrow bio intro — white background */}
      <section style={{ padding: '16px 170px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '50px 0 10px' }}>
            Website Designer in Santa Rosa, CA.
          </h1>
          <p style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ff6a1f', margin: '0 0 24px' }}>
            Strategy-Driven Design That Works
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
            Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are and what you need them to do.
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
            Jim Donohue. 20+ years. Senior Product Designer at Wells Fargo and Deloitte. 15% lift in subscriptions. 22% jump in engagement. Design systems used across 90+ apps.
          </p>
        </div>
      </section>

      {/* ── Layout B service tiles + right-side fun sticker sidebar ── */}
      <div style={{ background: '#fff', padding: '60px 20px 60px 70px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 74, alignItems: 'start' }}>

          {/* Left column: 3 service tiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            {/* Tile 2 — Website Designer */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 56, alignItems: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: '0 0 360px' }}>
                <TileHeader tint="#2997ff" labelColor="#000" icon={ICON_BROWSER} label="Website Design" />
                <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#2997ff', margin: '0 0 20px' }}>
                  Your website. Working harder than ever.
                </h2>
                <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  A well-designed website isn't just attractive — it's strategic. Every layout choice, call-to-action, and navigation path should guide visitors toward a clear goal. In 2025, that means mobile-first design, fast load times, and content built around what your customers actually need — not what looks impressive in a portfolio.
                </p>
              </div>
              <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 40 }}>
                {['Website Design & Strategy', 'Smart Websites', 'Website Development'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 15, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#000', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile 3 — Digital Marketing — row-reverse */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 56, alignItems: 'center', flexDirection: 'row-reverse', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: '0 0 320px' }}>
                <TileHeader tint="#2997ff" labelColor="#000" icon={ICON_ENVELOPE} label="Digital Marketing" />
                <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#2997ff', margin: '0 0 20px' }}>
                  Get found. Stay top of mind.
                </h2>
                <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Email campaigns and local SEO that put your business in front of the right people at the right time.
                </p>
              </div>
              <div style={{ flex: 1, borderRight: '1px solid #e5e5ea', paddingRight: 40 }}>
                {['Local SEO Services (GMB)', 'AI Receptionist', 'Email Marketing Automation'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 15, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#000', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tile 5 — Graphic Designer */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 56px', position: 'relative', overflow: 'hidden', display: 'flex', gap: 56, alignItems: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ flex: '0 0 320px' }}>
                <TileHeader tint="#2997ff" labelColor="#000" icon={ICON_PALETTE} label="Graphic Designer" />
                <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#2997ff', margin: '0 0 20px' }}>
                  A brand as strong as your business.
                </h2>
                <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Everything matches your website — same colors, same feel, same level of quality across every touchpoint.
                </p>
              </div>
              <div style={{ flex: 1, borderLeft: '1px solid #e5e5ea', paddingLeft: 40 }}>
                {['Presentation Design', 'Email Design', 'Brochure & Flyer Design', 'Logo Design'].map(item => (
                  <div key={item} style={{ borderBottom: '1px solid #e5e5ea', padding: '14px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 15, color: '#1d1d1f' }}>{item}</span>
                    <span style={{ color: '#000', fontSize: 22 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sidebar — light icon-badge cards */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {[
              {
                gradient: 'linear-gradient(45deg, #56AFF2 0%, #A0D5F2 100%)',
                eyebrow: 'Local SEO · GBP',
                title: ['Own the map.', 'Own the moment.'],
                body: 'Rank higher on Google Maps and capture every nearby search before your competition does.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                gradient: 'linear-gradient(45deg, #56AFF2 0%, #A0D5F2 100%)',
                eyebrow: 'AI Receptionist',
                title: ['No call.', 'No problem.'],
                body: 'Answers in one ring. Books on the spot. Texts a confirmation before you finish your coffee.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <circle cx="8.5" cy="10" r="0.6" fill="#fff" stroke="none" />
                    <circle cx="12" cy="10" r="0.6" fill="#fff" stroke="none" />
                    <circle cx="15.5" cy="10" r="0.6" fill="#fff" stroke="none" />
                  </svg>
                ),
              },
              {
                gradient: 'linear-gradient(45deg, #56AFF2 0%, #A0D5F2 100%)',
                eyebrow: 'Smart Websites',
                title: ['Sites that', 'earn their keep.'],
                body: 'Strategy-first design built to turn quiet visitors into paying customers — not just pretty pixels.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
              },
              {
                gradient: 'linear-gradient(45deg, #56AFF2 0%, #A0D5F2 100%)',
                eyebrow: 'Presentation Design',
                title: ['Decks that', 'win the room.'],
                body: 'Investor-ready slides built around the story you are telling — designed to land the meeting and close it.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M2 3h20M4 3v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3M9 21l3-4 3 4" />
                  </svg>
                ),
              },
            ].map(({ eyebrow, title, body, icon }: any) => (
              <div key={eyebrow} style={{
                background: '#fff',
                border: '1px solid #d2d2d7',
                borderRadius: 22,
                padding: '26px 26px 28px',
                position: 'relative',
                overflow: 'hidden',
                color: '#1d1d1f',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 14, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.16em',
                  color: '#6e6e73',
                  marginBottom: 14,
                }}>
                  {React.cloneElement(icon, { stroke: '#1d1d1f' })}
                  <span>{eyebrow}</span>
                </div>

                <h3 style={{
                  fontSize: 30, fontWeight: 700, letterSpacing: '-0.035em',
                  lineHeight: '37.5px', margin: '0 0 14px', color: '#ff6a1f',
                }}>
                  {title.map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
                </h3>

                <p style={{ fontSize: 17.5, lineHeight: '25.25px', color: '#6e6e73', margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </aside>

        </div>
      </div>

      {/* Reviews + Map combo on white background */}
      <div style={{ background: '#fff', padding: '60px 20px 60px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
            <div style={{ padding: '52px 72px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6ec7ff', margin: 0 }}>Client Reviews</p>
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
                  title="Donohue Design — Santa Rosa, CA"
                />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 2px 16px rgba(0,0,0,0.14)' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Donohue Design</p>
                  <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer style={{ background: '#2c2c2c', padding: '56px 20px 28px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Donohue Design</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
            </div>
            <nav style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {['Website Design', 'Digital Marketing', 'Graphic Design', 'About', 'Contact'].map(link => (
                <a key={link} href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', textDecoration: 'none', fontWeight: 500 }}>{link}</a>
              ))}
            </nav>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { name: 'LinkedIn', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93a1.74 1.74 0 0 0-1.62 1.83V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg> },
                { name: 'Instagram', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="white"/></svg> },
                { name: 'Facebook', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 3h-2.4v6.9A10 10 0 0 0 22 12z"/></svg> },
                { name: 'Twitter', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.99l-4.7-6.14L4.84 22H2.08l6.97-7.96L2 2h7.16l4.27 5.66zM17 20h1.83L7.1 4H5.16z"/></svg> },
              ].map(({ name, svg }) => (
                <a key={name} href="#" aria-label={name} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>{svg}</a>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: '24px 0 0', textAlign: 'center' }}>© 2025 Donohue Design — Santa Rosa, CA</p>
        </div>
      </footer>
    </div>
  );
}
