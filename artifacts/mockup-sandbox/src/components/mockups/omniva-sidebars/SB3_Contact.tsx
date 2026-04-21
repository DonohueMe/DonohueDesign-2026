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

function Nav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '0 40px', display: 'flex', alignItems: 'center', height: 52, fontFamily: SF }}>
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Omniva Design</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
        {['Services', 'Work', 'About', 'Contact'].map(item => (
          <span key={item} style={{ fontSize: 14, color: '#3d3d3f', cursor: 'pointer' }}>{item}</span>
        ))}
      </div>
      <button style={{ marginLeft: 28, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
        Get a quote
      </button>
    </nav>
  );
}

export default function SB3_Contact() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, overflowX: 'hidden', background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 18px' }}>Santa Rosa, CA</p>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 28px', maxWidth: 780 }}>
          Plug and stay.
        </h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 540, lineHeight: 1.55, margin: '0 0 36px' }}>
          Strategy-first web design and digital marketing for Santa Rosa businesses.
        </p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>
          Start a project
        </button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 8px' }}>
            Website Designer, Santa Rosa, CA
          </h1>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#6e6e73', margin: '0 0 28px' }}>
            Design, Strategy, and UX for Local Businesses
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 18px' }}>
            Most website designers jump straight into building. I start with strategy.
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 18px' }}>
            Before I open a design tool, I want to know who your customers are, how they find you, and what you need them to do when they land on your site. That's the difference between a website that looks good and one that actually brings in business.
          </p>
          <p style={{ fontSize: 17, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 48px' }}>
            My name is Jim Donohue. I'm a website designer in Santa Rosa, CA with over 20 years of experience in design, UX/UI, and digital strategy. I've spent a good chunk of that time working as a Senior Product Designer at companies like Wells Fargo and Deloitte — A 15% lift in subscriptions. A 22% increase in user engagement. Design systems adopted across 90+ apps.
          </p>

          {[
            { title: 'Website Design & Strategy', body: 'Every layout choice, call-to-action, and navigation path should guide visitors toward a clear goal.' },
            { title: 'Digital Marketing', body: 'Email campaigns and local SEO that put your business in front of the right people at the right time.' },
            { title: 'AI-Powered Marketing', body: 'Enterprise-grade automation tools built for small businesses — so you never miss a lead.' },
            { title: 'Graphic Design', body: 'Brand consistency across every touchpoint — email, logo, brochures, presentations.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ borderTop: '1px solid #e5e5ea', paddingTop: 32, marginBottom: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 12px' }}>{title}</h2>
              <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.65, margin: 0 }}>{body}</p>
            </div>
          ))}
        </main>

        <aside style={{ flex: '0 0 280px', position: 'sticky', top: 72 }}>
          <div style={{ background: '#f5f5f7', borderRadius: 20, padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #c899e2, #f4a0b8, #ffb347)', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>J</span>
            </div>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#1d1d1f', margin: '0 0 2px' }}>Jim Donohue</p>
            <p style={{ fontSize: 13, color: '#6e6e73', margin: '0 0 4px' }}>Website Designer & Strategist</p>
            <p style={{ fontSize: 12, color: '#2997ff', margin: '0 0 20px' }}>📍 Santa Rosa, CA</p>
            <div style={{ borderTop: '1px solid #e5e5ea', paddingTop: 16, marginBottom: 16 }}>
              {[
                { label: 'Email', value: 'jim@omnivadesign.com' },
                { label: 'Phone', value: '(707) 555-0192' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#6e6e73', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
                  <span style={{ fontSize: 13, color: '#1d1d1f' }}>{value}</span>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '11px 0', fontSize: 14, fontWeight: 600, fontFamily: SF, cursor: 'pointer', marginBottom: 8 }}>
              Get a free quote
            </button>
            <button style={{ width: '100%', background: 'transparent', color: '#2997ff', border: '1.5px solid #2997ff', borderRadius: 980, padding: '10px 0', fontSize: 14, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>
              Schedule a call
            </button>
            <p style={{ fontSize: 11, color: '#8e8e93', margin: '14px 0 0', lineHeight: 1.5 }}>
              Serving Sonoma County and remote clients nationwide.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
