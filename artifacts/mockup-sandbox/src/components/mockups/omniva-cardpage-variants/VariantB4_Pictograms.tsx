import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

// Larger illustrative "card" pictograms for each service
function PictBrowser() {
  return (
    <div style={{ width: 200, height: 140, borderRadius: 16, background: 'linear-gradient(135deg,#dff3ff,#a8e8f5)', padding: 10, boxShadow: '0 14px 40px rgba(41,151,255,0.25)', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c941' }} />
      </div>
      <div style={{ flex: 1, borderRadius: 8, background: 'linear-gradient(135deg,#2997ff,#5ac8fa)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.6)' }} />
        <div style={{ position: 'absolute', top: 28, left: 12, width: '60%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.5)' }} />
        <div style={{ position: 'absolute', bottom: 12, left: 12, width: 50, height: 18, borderRadius: 980, background: '#1d1d1f' }} />
      </div>
    </div>
  );
}

function PictAnalytics() {
  return (
    <div style={{ width: 200, height: 140, borderRadius: 16, background: '#fff', padding: 16, boxShadow: '0 14px 40px rgba(52,199,89,0.20)', display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid #e8e8ec' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#6e6e73', letterSpacing: '0.08em' }}>EMAIL OPENS</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#34c759', background: '#34c75922', padding: '2px 6px', borderRadius: 4 }}>+24%</span>
      </div>
      <p style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#1d1d1f', margin: 0, lineHeight: 1 }}>12.4k</p>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
        {[34,52,28,68,46,80,62].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 2, background: 'linear-gradient(180deg,#34c759,#28c9a8)' }} />
        ))}
      </div>
    </div>
  );
}

function PictAI() {
  return (
    <div style={{ width: 200, height: 140, borderRadius: 16, background: 'linear-gradient(135deg,#c898e2,#f4a0b8)', padding: 14, boxShadow: '0 14px 40px rgba(200,152,226,0.30)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: '8px 12px', maxWidth: 130 }}>
        <p style={{ fontSize: 10, color: '#6e6e73', margin: 0 }}>Hi! How can I help?</p>
      </div>
      <div style={{ position: 'absolute', bottom: 14, right: 14, background: '#1d1d1f', borderRadius: 12, padding: '8px 12px', maxWidth: 110 }}>
        <p style={{ fontSize: 10, color: '#fff', margin: 0 }}>Book at 3pm?</p>
      </div>
      <div style={{ position: 'absolute', top: 60, right: 14, fontSize: 22 }}>✨</div>
    </div>
  );
}

function PictBrand() {
  return (
    <div style={{ width: 200, height: 140, borderRadius: 16, background: '#fff', padding: 14, boxShadow: '0 14px 40px rgba(240,144,48,0.22)', border: '1px solid #e8e8ec', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, background: '#1d1d1f', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
        <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em', color: '#1d1d1f' }}>OMNIVA</span>
      </div>
      <p style={{ fontSize: 26, fontWeight: 800, color: '#1d1d1f', margin: 0, fontFamily: 'Georgia, serif', letterSpacing: '-0.03em' }}>Aa</p>
      <div style={{ display: 'flex', gap: 4 }}>
        {['#f09030','#f4a0b8','#c898e2','#2997ff','#34c759'].map(c => <span key={c} style={{ width: 18, height: 18, borderRadius: 4, background: c }} />)}
      </div>
    </div>
  );
}

const services = [
  { Pict: PictBrowser, tint: '#2997ff', kicker: 'Website Designer', title: 'Your website. Working harder than ever.', copy: "A well-designed website isn't just attractive — it's strategic. Every layout choice, call-to-action, and navigation path should guide visitors toward a clear goal. In 2025, that means mobile-first design, fast load times, and content built around what your customers actually need — not what looks impressive in a portfolio.", items: ['Website Design & Strategy', 'UX/UI Design', 'Website Development'], reverse: false },
  { Pict: PictAnalytics, tint: '#34c759', kicker: 'Digital Marketing', title: 'Get found. Stay top of mind.', copy: 'Email campaigns and local SEO that put your business in front of the right people at the right time.', items: ['Email Marketing Automation', 'Local SEO Services (GMB)'], reverse: true },
  { Pict: PictAI, tint: '#c898e2', kicker: 'Internet Marketing Service', title: 'AI that answers, books, and converts — 24/7.', copy: 'Enterprise-grade automation tools built for small businesses — so you never miss a lead.', items: ['AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant'], reverse: false },
  { Pict: PictBrand, tint: '#f09030', kicker: 'Graphic Designer', title: 'A brand as strong as your business.', copy: 'Everything matches your website — same colors, same feel, same level of quality across every touchpoint.', items: ['Email Design', 'Logo Design', 'Brochure & Flyer Design', 'Presentation Design'], reverse: true },
];

// VARIANT B4 — Replace the right-column list with illustrative pictogram cards
export function VariantB4_Pictograms() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff', minHeight: '100vh' }}>
      <section style={{
        minHeight: 560, padding: '0 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        background: ['radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)','radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)','radial-gradient(ellipse at 50% 62%, rgba(100,195,250,0.70) 0%, transparent 50%)','radial-gradient(ellipse at 80% 85%, rgba(80,240,190,0.80) 0%, transparent 40%)','#dff3ff'].join(','),
      }}>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#000', maxWidth: 740, margin: '0 0 28px' }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '12px 24px', fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a free consultation</button>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 24px' }}>Website Designer, Santa Rosa, CA</h1>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are and what you need them to do.</p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>Jim Donohue. 20+ years. Senior Product Designer at Wells Fargo and Deloitte. 15% lift in subscriptions. 22% jump in engagement. Design systems used across 90+ apps.</p>
        </div>
      </section>

      <div style={{ background: '#f5f5f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          {services.map(({ Pict, tint, kicker, title, copy, items, reverse }) => (
            <div key={kicker} style={{ background: '#fff', borderRadius: 20, padding: '52px 72px', display: 'flex', gap: 60, alignItems: 'center', flexDirection: reverse ? 'row-reverse' : 'row' }}>
              <div style={{ flex: '0 0 380px' }}>
                <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: tint, margin: '0 0 16px' }}>{kicker}</p>
                <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#000', margin: '0 0 20px' }}>{title}</h2>
                <p style={{ fontSize: 18, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 24px' }}>{copy}</p>
                <div>
                  {items.map(item => (
                    <div key={item} style={{ borderTop: '1px solid #e5e5ea', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 15, color: '#1d1d1f' }}>{item}</span>
                      <span style={{ color: tint, fontSize: 16 }}>›</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240 }}>
                <Pict />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReviewsAndMap />
      <footer style={{ background: '#f5f5f7', padding: '32px 24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Donohue Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}

function ReviewsAndMap() {
  return (
    <div style={{ background: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
          <div style={{ padding: '52px 72px 48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <p style={{ fontSize: 17, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2997ff', margin: 0 }}>Client Reviews</p>
              <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 14 }}>★</span>)}</div>
              <span style={{ fontSize: 13, color: '#6e6e73' }}>5.0 · Google</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
              {[{ name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month.' },{ name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword.' },{ name: 'Lisa M.', location: 'Healdsburg, CA', text: "The AI receptionist handles after-hours calls now. We haven't missed a lead in weeks." }].map(({ name, location, text }) => (
                <div key={name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #5aaeff, #46dcc3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{name[0]}</span></div>
                    <div><p style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', margin: 0 }}>{name}</p><p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>{location}</p></div>
                  </div>
                  <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.6, margin: 0 }}>"{text}"</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '0 72px 52px' }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1" width="100%" height="360" style={{ border: 0, display: 'block' }} loading="lazy" title="Map" />
              <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 2px 16px rgba(0,0,0,0.14)' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Donohue Design</p>
                <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
