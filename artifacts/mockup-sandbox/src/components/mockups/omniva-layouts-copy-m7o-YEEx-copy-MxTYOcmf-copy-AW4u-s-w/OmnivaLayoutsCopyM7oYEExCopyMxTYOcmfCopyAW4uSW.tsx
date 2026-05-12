import React from 'react';

const SF = '-apple-system,"SF Pro Display","Helvetica Neue",Helvetica,Arial,sans-serif';

export default function OmnivaLayoutsCopyM7oYEExCopyMxTYOcmfCopyAW4uSW() {
  return (
    <div style={{ fontFamily: SF, margin: 0, padding: 0, minHeight: '100vh' }}>

      {/* Hero — dark navy with neon aurora light streaks on the right */}
      <section style={{
        position: 'relative',
        height: 600,
        padding: '175px 48px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center',
        overflow: 'hidden',
        background: '#0a0d1f',
      }}>
        {/* Aurora vertical light beams emanating from focal point on right */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {/* Beams — narrow vertical columns fanning from a focal point */}
          {[
            { rotate: -18, color: 'rgba(60,120,220,0.75)',  right: '36%', w: 50, blur: 36 },
            { rotate: -10, color: 'rgba(80,160,255,0.90)',  right: '32%', w: 38, blur: 22 },
            { rotate:  -3, color: 'rgba(180,220,255,1.00)', right: '28%', w: 24, blur: 12 },
            { rotate:   2, color: 'rgba(255,250,235,1.00)', right: '25%', w: 20, blur: 9  },
            { rotate:   8, color: 'rgba(255,200,140,0.98)', right: '22%', w: 30, blur: 16 },
            { rotate:  16, color: 'rgba(255,150,80,0.95)',  right: '17%', w: 44, blur: 24 },
            { rotate:  24, color: 'rgba(240,110,60,0.90)',  right: '12%', w: 56, blur: 32 },
            { rotate:  32, color: 'rgba(200,70,50,0.78)',   right:  '7%', w: 70, blur: 40 },
          ].map((b, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: '50%', right: b.right,
              width: b.w, height: '180%',
              transformOrigin: '50% 50%',
              transform: `translateY(-50%) rotate(${b.rotate}deg)`,
              background: `linear-gradient(to bottom, transparent 0%, ${b.color} 48%, ${b.color} 52%, transparent 100%)`,
              filter: `blur(${b.blur}px)`,
              borderRadius: '50%',
              mixBlendMode: 'screen',
            }} />
          ))}
          {/* Bright glow core */}
          <div style={{
            position: 'absolute', top: '50%', right: '20%', width: 240, height: 240,
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(255,240,210,0.9) 0%, rgba(255,180,130,0.4) 25%, transparent 60%)',
            filter: 'blur(18px)',
            mixBlendMode: 'screen',
          }} />
          {/* Hot inner core */}
          <div style={{
            position: 'absolute', top: '50%', right: '21%', width: 90, height: 90,
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,230,200,0.6) 35%, transparent 70%)',
            filter: 'blur(6px)',
            mixBlendMode: 'screen',
          }} />
          {/* Subtle purple wash on far left */}
          <div style={{
            position: 'absolute', top: '20%', left: '-15%', width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(80,40,140,0.30) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }} />
        </div>

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
