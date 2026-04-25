import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

const HERO_BG = [
  'radial-gradient(ellipse 38% 70% at 8% 35%, rgba(255,150,30,0.95) 0%, rgba(220,90,10,0.45) 38%, transparent 70%)',
  'radial-gradient(ellipse 22% 30% at 38% 8%, rgba(210,205,90,0.55) 0%, transparent 70%)',
  'radial-gradient(ellipse 46% 70% at 48% 38%, rgba(255,170,210,0.98) 0%, rgba(230,70,160,0.55) 28%, rgba(170,30,110,0.20) 55%, transparent 78%)',
  'radial-gradient(ellipse 36% 60% at 88% 32%, rgba(40,90,235,0.95) 0%, rgba(20,40,180,0.40) 42%, transparent 75%)',
  'radial-gradient(ellipse 14% 18% at 100% 12%, rgba(180,210,250,0.75) 0%, transparent 70%)',
  '#0a0a0a',
].join(',');

const GRAIN_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
);
const GRAIN_URL = `url("data:image/svg+xml;utf8,${GRAIN_SVG}")`;

const GRAIN_GREY_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'>
    <filter id='g'>
      <feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix type='matrix' values='0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#g)'/>
  </svg>`
);
const GRAIN_GREY_URL = `url("data:image/svg+xml;utf8,${GRAIN_GREY_SVG}")`;

export default function OmnivaLayoutsCopyM7oYEEx() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, minHeight: '100vh' }}>

      {/* Hero — bloomy color blobs + heavy film grain */}
      <section style={{ position: 'relative', height: 600, background: '#0a0a0a', padding: '90px 48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: '-15%', background: HERO_BG, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_URL, backgroundSize: '260px 260px', opacity: 1, mixBlendMode: 'overlay', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_URL, backgroundSize: '260px 260px', opacity: 0.7, mixBlendMode: 'soft-light', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_URL, backgroundSize: '180px 180px', opacity: 0.55, mixBlendMode: 'screen', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_GREY_URL, backgroundSize: '280px 280px', opacity: 1, mixBlendMode: 'overlay', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_GREY_URL, backgroundSize: '160px 160px', opacity: 0.85, mixBlendMode: 'overlay', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35) 100%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(48px, 7.4vw, 84px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.0, color: '#ffffff', margin: '0 0 18px' }}>
            Plug and stay.
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', maxWidth: 460, lineHeight: 1.5, margin: '0 auto' }}>
            Strategy-first web design and digital marketing for Santa Rosa businesses.
          </p>
        </div>
      </section>

    </div>
  );
}
