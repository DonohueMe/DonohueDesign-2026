import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const services = [
  { kicker: 'Website Designer', tint: '#2997ff', title: 'Working harder than ever.', copy: 'Strategic layouts, mobile-first, fast load times. Built around what your customers need.', items: ['Design & Strategy', 'UX/UI Design', 'Development'] },
  { kicker: 'Digital Marketing', tint: '#34c759', title: 'Get found. Stay top of mind.', copy: 'Email and local SEO that put you in front of the right people at the right time.', items: ['Email Automation', 'Local SEO (GMB)'] },
  { kicker: 'Internet Marketing', tint: '#c898e2', title: 'AI that books and converts.', copy: 'Enterprise-grade automation built for small businesses, so you never miss a lead.', items: ['AI Receptionist', 'AI Voice', 'AI Chat'] },
  { kicker: 'Graphic Designer', tint: '#f09030', title: 'A brand as strong as you.', copy: 'Same colors, same feel, same level of quality across every touchpoint.', items: ['Logo', 'Email', 'Brochure', 'Presentation'] },
];

const reviews = [
  { name: 'Maria T.', location: 'Santa Rosa, CA', text: 'Jim redesigned our winery site and bookings went up 30% in the first month. He actually understood what we needed before we did.' },
  { name: 'Derek H.', location: 'Petaluma, CA', text: 'We went from page 3 to page 1 on Google for our main keyword. The SEO strategy was exactly what our shop needed.' },
  { name: 'Lisa M.', location: 'Healdsburg, CA', text: "The AI receptionist handles after-hours calls now. We haven't missed a lead in weeks. Worth every penny." },
];

// VARIATION B — HORIZONTAL SERVICE STRIP: full-width hero, single bio block, 4-up service cards as a horizontal row, full-bleed reviews and map
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
        <p style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f', margin: '0 0 16px', opacity: 0.7, letterSpacing: '0.05em' }}>OMNIVA DESIGN</p>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#000', maxWidth: 740, margin: '0 0 28px' }}>
          Beautiful websites.<br />Powered by smart marketing.
        </h1>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '12px 24px', fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
          Get a free consultation
        </button>
      </section>

      {/* Bio — single tall section, centered narrow column */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2997ff', margin: '0 0 16px' }}>Website Designer · Santa Rosa, CA</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#1d1d1f', margin: '0 0 24px' }}>
            Strategy first. Beautiful design second. Both, always.
          </h2>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: '0 0 14px' }}>
            Most website designers jump straight into building. I start with strategy. Before I open a design tool, I want to know who your customers are and what you need them to do.
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.65, margin: 0 }}>
            Jim Donohue. 20+ years. Senior Product Designer at Wells Fargo and Deloitte. 15% lift in subscriptions. 22% jump in engagement. Design systems used across 90+ apps.
          </p>
        </div>
      </section>

      {/* 4-up service strip */}
      <section style={{ padding: '40px 24px 80px', background: '#f5f5f7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8e8e93', margin: '0 0 20px', textAlign: 'center' }}>What I do</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {services.map(({ kicker, tint, title, copy, items }) => (
              <div key={kicker} style={{ background: '#fff', borderRadius: 18, padding: '26px 22px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: tint, marginBottom: 16, opacity: 0.92 }} />
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: tint, margin: '0 0 8px' }}>{kicker}</p>
                <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, color: '#1d1d1f', margin: '0 0 10px' }}>{title}</h3>
                <p style={{ fontSize: 13, color: '#6e6e73', lineHeight: 1.55, margin: '0 0 16px', flex: 1 }}>{copy}</p>
                <div style={{ borderTop: '1px solid #e5e5ea' }}>
                  {items.map(item => (
                    <div key={item} style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f3', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12, color: '#1d1d1f' }}>{item}</span>
                      <span style={{ fontSize: 14, color: '#c7c7cc' }}>›</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews — full-width quote slabs */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36, justifyContent: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2997ff', margin: 0 }}>Client Reviews</p>
            <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: 13 }}>★</span>)}</div>
            <span style={{ fontSize: 13, color: '#6e6e73' }}>5.0 · Google</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {reviews.map(({ name, location, text }) => (
              <div key={name} style={{ borderLeft: '3px solid #2997ff', padding: '4px 0 4px 24px' }}>
                <p style={{ fontSize: 22, color: '#1d1d1f', lineHeight: 1.45, fontWeight: 500, letterSpacing: '-0.015em', margin: '0 0 14px' }}>"{text}"</p>
                <p style={{ fontSize: 14, color: '#6e6e73', margin: 0 }}><strong style={{ color: '#1d1d1f' }}>{name}</strong> · {location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed map + CTA */}
      <section style={{ position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.9!2d-122.7749!3d38.4405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80840b4e0cda2d5d%3A0xdb0af8e4c6c14af5!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
          width="100%" height="380" style={{ border: 0, display: 'block' }} loading="lazy" title="Santa Rosa, CA"
        />
        <div style={{ position: 'absolute', top: 24, left: 24, background: '#fff', borderRadius: 14, padding: '16px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.14)', maxWidth: 280 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#1d1d1f', margin: '0 0 4px' }}>Omniva Design</p>
          <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>Santa Rosa, CA · Serving Sonoma County</p>
        </div>
      </section>

      <section style={{
        padding: '70px 24px', textAlign: 'center',
        background: [
          'radial-gradient(ellipse at 8% 30%, rgba(90,170,255,0.95) 0%, transparent 55%)',
          'radial-gradient(ellipse at 92% 75%, rgba(70,220,195,0.90) 0%, transparent 55%)',
          '#a8e8f5',
        ].join(','),
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 24px', lineHeight: 1.1 }}>
          Ready to grow?
        </h2>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 15, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
          Start your project
        </button>
      </section>

      <footer style={{ background: '#f5f5f7', padding: '24px', borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#6e6e73', margin: 0 }}>© 2025 Omniva Design — Santa Rosa, CA</p>
      </footer>
    </div>
  );
}
