import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

export default function OmnivaLayoutsCopyM7oYEExCopyMxTYOcmfCopyDCSyI8wn() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, minHeight: '100vh' }}>

      {/* Hero — deep purple gradient with soft wave hills */}
      <section style={{
        position: 'relative',
        height: 600,
        padding: '175px 48px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 70% 60% at 50% 18%, #4a2670 0%, #2c1548 35%, #1a0a30 70%, #110621 100%)',
      }}>
        {/* Wave hills layer */}
        <svg
          aria-hidden
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: '45%', pointerEvents: 'none', transform: 'rotate(20deg)', transformOrigin: 'center bottom' }}
        >
          <path
            d="M0,120 C260,-20 520,300 820,140 C1120,-20 1300,260 1440,120 L1440,400 L0,400 Z"
            fill="#3a1f5c"
            opacity="0.85"
          />
          <path
            d="M0,200 C200,-40 520,400 800,180 C1080,-40 1280,380 1440,170 L1440,400 L0,400 Z"
            fill="#6b3aa0"
            opacity="1"
          />
          <path
            d="M0,260 C280,120 600,400 920,220 C1180,80 1320,360 1440,240 L1440,400 L0,400 Z"
            fill="#26123e"
          />
        </svg>

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
