import React from 'react';

/**
 * Ambient background floating bubbles/pearls matching the reference screenshots
 * Soft, low-opacity, warm champagne and cream translucent spheres.
 */
export default function BackgroundDecorations() {
  const bubbles = [
    { top: '8%', left: '8%', size: 'w-10 h-10 md:w-14 md:h-14', delay: '0s', duration: '14s' },
    { top: '15%', left: '18%', size: 'w-16 h-16 md:w-24 md:h-24', delay: '2s', duration: '18s' },
    { top: '22%', left: '37%', size: 'w-12 h-12 md:w-16 md:h-16', delay: '1s', duration: '16s' },
    { top: '20%', left: '42%', size: 'w-14 h-14 md:w-20 md:h-20', delay: '4s', duration: '20s' },
    { top: '12%', right: '14%', size: 'w-16 h-16 md:w-22 md:h-22', delay: '3s', duration: '17s' },
    { top: '32%', right: '10%', size: 'w-8 h-8 md:w-10 md:h-10', delay: '1.5s', duration: '15s' },
    { top: '44%', left: '38%', size: 'w-6 h-6 md:w-8 md:h-8', delay: '5s', duration: '13s' },
    { top: '68%', left: '16%', size: 'w-10 h-10 md:w-16 md:h-16', delay: '2.5s', duration: '19s' },
    { top: '70%', left: '28%', size: 'w-12 h-12 md:w-16 md:h-16', delay: '4.5s', duration: '21s' },
    { top: '69%', right: '28%', size: 'w-10 h-10 md:w-14 md:h-14', delay: '3.5s', duration: '16s' },
    { top: '67%', right: '18%', size: 'w-12 h-12 md:w-16 md:h-16', delay: '0.5s', duration: '18s' },
    { top: '80%', left: '6%', size: 'w-14 h-14 md:w-20 md:h-20', delay: '6s', duration: '22s' },
    { top: '88%', right: '10%', size: 'w-16 h-16 md:w-24 md:h-24', delay: '2s', duration: '19s' },
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {bubbles.map((b, idx) => (
        <div
          key={idx}
          className={`absolute ${b.size} rounded-full transition-transform`}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.75) 0%, rgba(238, 226, 203, 0.45) 45%, rgba(216, 198, 166, 0.15) 80%, rgba(200, 180, 150, 0) 100%)',
            boxShadow: 'inset -2px -2px 6px rgba(205, 182, 145, 0.25), 0 4px 12px rgba(220, 200, 170, 0.15)',
            filter: 'blur(0.5px)',
            animation: `subtle-float ${b.duration} ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
