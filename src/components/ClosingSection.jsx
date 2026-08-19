import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DETAILS } from '../constants/weddingData';

export default function ClosingSection({ onStartOver }) {
  const handleStartOver = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (onStartOver) {
      setTimeout(() => {
        onStartOver();
      }, 300);
    }
  };

  return (
    <section className="w-full pt-12 pb-20 px-4 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl mx-auto space-y-8"
      >
        {/* Hadith Quote with Sparkles */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 px-4">
          <span className="text-[#C5A059] text-base sm:text-xl">✧</span>
          <p className="font-script-quote text-2xl sm:text-3xl md:text-4xl text-[#B8934A] leading-snug">
            &ldquo;{WEDDING_DETAILS.hadithQuote.text}&rdquo;
          </p>
          <span className="text-[#C5A059] text-base sm:text-xl">✧</span>
        </div>

        {/* Delicate Heart & Line Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E8DCB8]" />
          <svg 
            className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E8DCB8]" />
        </div>

        {/* In sha Allah message */}
        <div className="space-y-3">
          <p className="font-editorial italic text-base sm:text-lg text-[#7F705F] font-light">
            In sha Allah, we can&apos;t wait to celebrate this blessed union with you!
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-[#C5A059] tracking-normal pt-1 font-normal">
            Suhail &amp; Nabeela
          </h2>
        </div>

        {/* Start Over Button */}
        <div className="pt-6">
          <button
            id="btn-start-over"
            onClick={handleStartOver}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#8C7A65] hover:text-[#5E471C] font-editorial transition-colors cursor-pointer py-1.5 px-3.5 rounded-full hover:bg-[#EFE5D3]/50"
          >
            <span className="text-[#C9A35A]">♡</span>
            <span>Start Over</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}
