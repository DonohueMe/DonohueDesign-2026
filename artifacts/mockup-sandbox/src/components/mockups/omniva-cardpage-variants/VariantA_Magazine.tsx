import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  { kicker: 'Website Designer', title: 'Your website. Working harder than ever.', copy: 'Strategic layouts, mobile-first design, fast load times. Built around what your customers actually need.', items: ['Website Design & Strategy', 'UX/UI Design', 'Website Development'] },
  { kicker: 'Digital Marketing', title: 'Get found. Stay top of mind.', copy: 'Email and local SEO that put you in front of the right people at the right time.', items: ['Email Marketing Automation', 'Local SEO Services (GMB)'] },
  { kicker: 'Internet Marketing', title: 'AI that books and converts — 24/7.', copy: 'Enterprise-grade automation built for small businesses, so you never miss a lead.', items: ['AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant'] },
  { kicker: 'Graphic Designer', title: 'A brand as strong as your business.', copy: 'Same colors, same feel, same level of quality across every touchpoint.', items: ['Email Design', 'Logo Design', 'Brochure & Flyer Design', 'Presentation Design'] },
];

const reviews = [
  { name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month.' },
  { name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword.' },
  { name: 'Lisa M.', location: 'Healdsburg, CA', text: "The AI receptionist handles after-hours calls. We haven't missed a lead in weeks." },
];

// VARIATION A — MAGAZINE 2-COLUMN: bio + reviews stack on left, services stack on right
export function VariantA_Magazine() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#f5f5f7', minHeight: '100vh' }}>

      {/* Compressed hero strip */}
      <section style={{
        padding: '60px 32px 70px', textAlign: 'center',
        background: [
          'radial-gradient(ellipse at 12% 20%, rgba(90,170,255,0.90) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 15%, rgba(70,220,195,0.85) 0%, transparent 45%)',
          'radial-gradient(ellipse at 50% 70%, rgba(100,195,250,0.70) 0%, transparent 50%)',
          '#dff3ff',
        ].join(','),
      }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 14px', opacity: 0.7 }}>Omniva Design · Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#000', margin: '0 0 22px' }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 22px', fontSize: 14, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
          Get a free consultation
        </button>
      </section>

      {/* 2-column magazine grid */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 24px 60px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 24, alignItems: 'start' }}>

        {/* LEFT COLUMN: Bio + Reviews + Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Bio */}
          <div style={{ background: '#fff', borderRadius: 18, padding: '40px 36px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', margin: '0 0 12px' }}>About Jim</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 16px' }}>Website Designer, Santa Rosa, CA</h2>
            <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 12px' }}>Most website designers jump straight into building. I start with strategy.</p>
            <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 12px' }}>Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site.</p>
            <p style={{ fontSize: 15, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>20+ years of experience. Senior Product Designer at Wells Fargo and Deloitte. A 15% lift in subscriptions. A 22% increase in user engagement. Design systems adopted across 90+ apps.</p>
          </div>

          {/* Reviews — stacked */}
          <div style={{ background: '#fff', borderRadius: 18, padding: '32px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', margin: 0 }}>Client Reviews</p>
              <div style={{ display: 'flex', gap: 1 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 12 }}>★</span>)}</div>
              <span style={{ fontSize: 12, color: '#6e6e73' }}>5.0 · Google</span>
            </div>
            {reviews.map(({ name, location, text }, i) => (
              <div key={name} style={{ borderTop: i > 0 ? '1px solid #e5e5ea' : 'none', padding: i > 0 ? '20px 0 0' : '0 0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#5aaeff,#46dcc3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{name[0]}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: 0 }}>{name}</p>
                    <p style={{ fontSize: 11, color: '#6e6e73', margin: 0 }}>{location}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#3d3d3f', lineHeight: 1.55, margin: 0 }}>"{text}"</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ background: '#fff', borderRadius: 18, overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="220" style={{ border: 0, display: 'block' }} loading="lazy" title="Map"
            />
            <div style={{ padding: '14px 20px' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Omniva Design</p>
              <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Services stack — vertical, dense */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {services.map(({ kicker, title, copy, items }) => (
            <div key={kicker} style={{ background: '#fff', borderRadius: 18, padding: '28px 28px' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', margin: '0 0 8px' }}>{kicker}</p>
              <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#1d1d1f', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 13, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 14px' }}>{copy}</p>
              {items.map((item, i) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i === 0 ? '1px solid #e5e5ea' : 'none', borderBottom: '1px solid #e5e5ea' }}>
                  <span style={{ fontSize: 13, color: '#1d1d1f' }}>{item}</span>
                  <span style={{ color: '#2997ff', fontSize: 16 }}>›</span>
                </div>
              ))}
            </div>
          ))}

          {/* Sticky CTA card */}
          <div style={{
            borderRadius: 18, padding: '32px 28px',
            background: [
              'radial-gradient(ellipse at 8% 30%, rgba(90,170,255,0.95) 0%, transparent 55%)',
              'radial-gradient(ellipse at 92% 75%, rgba(70,220,195,0.90) 0%, transparent 55%)',
              '#a8e8f5',
            ].join(','),
          }}>
            <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
              Ready to grow?
            </h3>
            <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '11px 22px', fontSize: 14, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Start your project
            </button>
          </div>
        </div>
      </div>

      <footer style={{ background: '#f5f5f7', padding: '24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
