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
        {/* Aurora light beams emanating from the right */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {/* Glow halo origin */}
          <div style={{
            position: 'absolute', top: '50%', right: '18%', width: 520, height: 520,
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(255,210,180,0.55) 0%, rgba(255,150,120,0.25) 25%, transparent 60%)',
            filter: 'blur(20px)',
          }} />
          {/* Orange beam */}
          <div style={{
            position: 'absolute', top: '-10%', right: '24%', width: 110, height: '120%',
            transform: 'rotate(8deg)',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,140,60,0.85) 40%, rgba(255,90,40,0.95) 55%, rgba(255,140,60,0.6) 75%, transparent 100%)',
            filter: 'blur(38px)',
            borderRadius: '50%',
          }} />
          {/* Magenta/pink beam */}
          <div style={{
            position: 'absolute', top: '-15%', right: '12%', width: 130, height: '125%',
            transform: 'rotate(-6deg)',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,80,160,0.75) 35%, rgba(220,60,180,0.9) 55%, rgba(160,60,200,0.6) 80%, transparent 100%)',
            filter: 'blur(42px)',
            borderRadius: '50%',
          }} />
          {/* Cyan/blue beam */}
          <div style={{
            position: 'absolute', top: '-8%', right: '32%', width: 95, height: '118%',
            transform: 'rotate(4deg)',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(80,180,255,0.7) 38%, rgba(60,120,240,0.85) 58%, rgba(80,90,220,0.5) 80%, transparent 100%)',
            filter: 'blur(44px)',
            borderRadius: '50%',
          }} />
          {/* Soft purple wash on left */}
          <div style={{
            position: 'absolute', top: '20%', left: '-10%', width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(80,40,140,0.35) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }} />
          {/* Inner core highlight */}
          <div style={{
            position: 'absolute', top: '50%', right: '22%', width: 180, height: 180,
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,220,180,0.4) 30%, transparent 70%)',
            filter: 'blur(8px)',
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
