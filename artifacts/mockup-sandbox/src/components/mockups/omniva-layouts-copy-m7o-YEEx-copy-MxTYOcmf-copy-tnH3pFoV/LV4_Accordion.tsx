import React, { useState } from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const HERO_BG = [
  'radial-gradient(ellipse at 10% 25%, rgba(196,153,226,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 88% 18%, rgba(255,185,120,0.85) 0%, transparent 45%)',
  'radial-gradient(ellipse at 55% 55%, rgba(248,140,170,0.70) 0%, transparent 48%)',
  '#f5eef8',
].join(',');

const sections = [
  {
    id: 'web', title: 'Website Design & Strategy',
    body: "A well-designed website isn\u2019t just attractive \u2014 it\u2019s strategic. Every layout choice, CTA, and navigation path should guide visitors toward a clear goal.",
    items: ['Website Design & Strategy', 'UX/UI Design', 'Website Development', 'E-commerce Design', 'Website Redesign'],
  },
  {
    id: 'mkt', title: 'Digital Marketing',
    body: 'Email campaigns and local SEO that put your business in front of the right people at the right time. Automated, measurable, and always on.',
    items: ['Email Marketing Automation', 'Local SEO (GMB)', 'Google Ads Management'],
  },
  {
    id: 'ai', title: 'AI Marketing Tools',
    body: 'Enterprise-grade automation built for small businesses. Your phones answered, leads captured, and follow-ups sent \u2014 while you focus on the work.',
    items: ['AI Receptionist', 'AI Voice Assistant', 'AI Chat Assistant'],
  },
  {
    id: 'gfx', title: 'Graphic Design',
    body: 'Everything matches your website \u2014 same colors, same feel, same quality across every customer touchpoint.',
    items: ['Logo Design', 'Email Design', 'Brochure & Flyer Design', 'Presentation Design'],
  },
];

function Nav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '0 40px', display: 'flex', alignItems: 'center', height: 52, fontFamily: SF }}>
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f' }}>Donohue Design</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
        {['Services', 'Work', 'About', 'Contact'].map(i => <span key={i} style={{ fontSize: 14, color: '#3d3d3f', cursor: 'pointer' }}>{i}</span>)}
      </div>
      <button style={{ marginLeft: 28, background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '7px 16px', fontSize: 13, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Get a quote</button>
    </nav>
  );
}

export default function LV4_Accordion() {
  const [open, setOpen] = useState('web');

  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, background: '#fff' }}>
      <Nav />

      <section style={{ minHeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', background: HERO_BG }}>
        <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#1d1d1f', margin: '0 0 24px' }}>Plug and stay.</h1>
        <p style={{ fontSize: 19, color: '#6e6e73', maxWidth: 520, lineHeight: 1.55, margin: '0 0 32px' }}>Strategy-first web design and digital marketing for Santa Rosa businesses.</p>
        <button style={{ background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '14px 28px', fontSize: 17, fontWeight: 500, fontFamily: SF, cursor: 'pointer' }}>Start a project</button>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Main — accordion sections */}
        <main style={{ flex: '1 1 0', minWidth: 0 }}>
          <h1 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 6px' }}>Website Designer, Santa Rosa, CA</h1>
          <p style={{ fontSize: 14, color: '#6e6e73', margin: '0 0 36px' }}>Design, Strategy, and UX for Local Businesses</p>

          {/* Bio — compact */}
          <p style={{ fontSize: 16, color: '#3d3d3f', lineHeight: 1.7, margin: '0 0 40px', borderLeft: '3px solid #e5e5ea', paddingLeft: 18 }}>
            My name is Jim Donohue. 20+ years in design, UX/UI, and digital strategy. Former Senior Product Designer at Wells Fargo and Deloitte. I start with strategy, not a blank canvas.
          </p>

          {/* Accordion */}
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6e6e73', margin: '0 0 4px' }}>Services</p>
          {sections.map(({ id, title, body, items }) => {
            const isOpen = open === id;
            return (
              <div key={id} style={{ borderTop: '1px solid #e5e5ea' }}>
                <button
                  onClick={() => setOpen(isOpen ? '' : id)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: SF, textAlign: 'left' }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>{title}</span>
                  <span style={{ color: '#2997ff', fontSize: 22, transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 12 }}>›</span>
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 24 }}>
                    <p style={{ fontSize: 15, color: '#6e6e73', lineHeight: 1.65, margin: '0 0 16px' }}>{body}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {items.map(item => (
                        <span key={item} style={{ background: '#f5f5f7', borderRadius: 980, padding: '6px 14px', fontSize: 13, color: '#1d1d1f', fontWeight: 500 }}>{item}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid #e5e5ea' }} />
        </main>

        {/* Sidebar — availability */}
        <aside style={{ flex: '0 0 260px', position: 'sticky', top: 72 }}>
          <div style={{ background: '#f5f5f7', borderRadius: 20, padding: '22px', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#30d158', display: 'inline-block', boxShadow: '0 0 0 3px rgba(48,209,88,0.2)' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>Currently accepting projects</span>
            </div>
            <p style={{ fontSize: 13, color: '#6e6e73', margin: '0 0 14px', lineHeight: 1.5 }}>Sonoma County and remote. Start in 1-2 weeks.</p>
            <div style={{ background: '#e5e5ea', borderRadius: 6, height: 5, marginBottom: 6 }}>
              <div style={{ background: '#30d158', borderRadius: 6, height: 5, width: '35%' }} />
            </div>
            <p style={{ fontSize: 11, color: '#8e8e93', margin: '0 0 16px' }}>2 of 5 spots filled</p>
            <button style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', borderRadius: 980, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: SF, cursor: 'pointer' }}>Reserve your spot</button>
          </div>
          <div style={{ background: '#f5f5f7', borderRadius: 16, padding: '16px 20px' }}>
            {['Free 30-min strategy call', 'Fixed project pricing', 'Revisions included', 'Post-launch support'].map(item => (
              <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span style={{ color: '#30d158', fontWeight: 700, fontSize: 13 }}>&#10003;</span>
                <span style={{ fontSize: 13, color: '#3d3d3f' }}>{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
