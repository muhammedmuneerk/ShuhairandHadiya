import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DETAILS } from '../constants/weddingData';

import groomImg from '../assets/images/groom_wedding_avatar_1786993667468.jpg';
import brideImg from '../assets/images/bride_wedding_avatar_1786993678287.jpg';

/**
 * PAGE 1: Interactive Couple Introduction & Opening Scene
 * 
 * Interaction:
 * User drags either avatar or the timeline slider handle toward the center.
 * As they drag, the groom and bride converge inward toward the central champagne heart.
 * When progress >= 70%, completion triggers: couple meets at center, heart glows,
 * and after an elegant reveal pause, onComplete() transitions the app to Page 2.
 */
export default function OpeningPage({ onComplete }) {
  // progress from 0.0 (initial rest) to 1.0 (reunited at center)
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const dragStartXRef = useRef(0);
  const startProgressRef = useRef(0);
  const dragSourceRef = useRef('handle');
  const timelineRef = useRef(null);

  // Maximum horizontal travel distance for the characters toward center
  const [maxTravelX, setMaxTravelX] = useState(210);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMaxTravelX(90);
      } else if (w < 1024) {
        setMaxTravelX(160);
      } else {
        setMaxTravelX(220);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Trigger smooth completion & transition to Page 2
  const triggerCompletion = useCallback(() => {
    if (isCompleting) return;
    setIsCompleting(true);
    setIsDragging(false);
    setProgress(1);

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 850);
  }, [isCompleting, onComplete]);

  const handlePointerDown = useCallback((e, source = 'handle') => {
    if (isCompleting) return;
    setIsDragging(true);
    dragSourceRef.current = source;
    dragStartXRef.current = e.clientX;
    startProgressRef.current = progress;
  }, [isCompleting, progress]);

  // Attach global pointermove and pointerup so dragging never gets stuck
  useEffect(() => {
    if (!isDragging || isCompleting) return;

    const onPointerMove = (e) => {
      const deltaX = e.clientX - dragStartXRef.current;
      const source = dragSourceRef.current;

      let effectiveDelta = deltaX;
      if (source === 'bride') {
        effectiveDelta = -deltaX; // Dragging bride left moves her toward center
      }

      // Total drag span sensitivity across timeline
      const dragSpan = timelineRef.current ? (timelineRef.current.clientWidth * 0.4) : 160;
      const normalizedDelta = effectiveDelta / (dragSpan || 160);

      const newProgress = Math.max(0, Math.min(1, startProgressRef.current + normalizedDelta));
      setProgress(newProgress);
    };

    const onPointerUp = () => {
      setIsDragging(false);

      // Threshold check (55% or higher triggers union)
      setProgress((curr) => {
        if (curr >= 0.55) {
          triggerCompletion();
          return 1;
        }
        return 0; // Return smoothly to initial position
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [isDragging, isCompleting, triggerCompletion]);

  // Calculated horizontal travel for groom and bride
  const groomTranslateX = progress * maxTravelX;
  const brideTranslateX = -progress * maxTravelX;

  // Timeline slider position from left (0%) to center (50%)
  const sliderPercentage = progress * 50;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-h-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-6 sm:pt-8 md:pt-10 pb-6 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto select-none"
    >
      {/* Top Header Information */}
      <motion.div 
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="text-center space-y-1.5 sm:space-y-2 max-w-2xl mx-auto pt-1 sm:pt-3"
      >
        {/* Main Names Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight text-[#C29F59] leading-tight font-normal">
          Suhail &amp; Nabeela
        </h1>

        {/* Subtitle */}
        <p className="font-editorial italic text-sm sm:text-base md:text-lg text-[#7F705F] font-light tracking-wide">
          Are getting married!
        </p>

        {/* Date Display */}
        <div className="flex items-center justify-center gap-2 text-[#C29F59] text-xs sm:text-sm md:text-base font-editorial tracking-widest pt-0.5">
          <span className="text-[#C29F59] text-xs">✧</span>
          <span className="font-normal tracking-wider">{WEDDING_DETAILS.dates.display}</span>
          <span className="text-[#C29F59] text-xs">✧</span>
        </div>
      </motion.div>

      {/* Main Interactive Couple Area */}
      <div className="w-full max-w-4xl my-auto py-2 sm:py-4 flex items-center justify-between px-2 sm:px-8 md:px-12 relative">
        
        {/* Groom (Left side) */}
        <motion.div 
          animate={{ 
            x: groomTranslateX,
            scale: isDragging ? 1.02 : 1
          }}
          transition={{ 
            type: "tween", 
            ease: "easeOut",
            duration: isCompleting ? 0.7 : (isDragging ? 0.05 : 0.4)
          }}
          onPointerDown={(e) => handlePointerDown(e, 'groom')}
          onClick={triggerCompletion}
          className="flex flex-col items-center text-center cursor-grab active:cursor-grabbing z-20 touch-none"
        >
          <div className="relative w-32 h-52 sm:w-44 sm:h-72 md:w-56 md:h-80 flex items-center justify-center pointer-events-none">
            <img 
              src={groomImg} 
              alt="Groom Muhammed Suhail" 
              className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.02] drop-shadow-sm"
              draggable="false"
            />
          </div>
          
          <div className="mt-2 space-y-0.5 pointer-events-none">
            <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#3C3228] leading-none">
              Suhail
            </h3>
            <p className="font-caps text-[9px] sm:text-[11px] text-[#9E9080] tracking-[0.25em]">
              The Groom
            </p>
          </div>
        </motion.div>

        {/* Center Champagne Heart (Clickable to unite) */}
        <motion.button 
          type="button"
          onClick={triggerCompletion}
          animate={{ 
            scale: 1 + progress * 0.12,
            filter: progress > 0.4 
              ? `drop-shadow(0 0 ${progress * 14}px rgba(197, 160, 89, 0.4))` 
              : 'none'
          }}
          transition={{ duration: 0.3 }}
          className="relative flex items-center justify-center p-2 z-10 cursor-pointer hover:scale-105 transition-transform"
          aria-label="Bring couple together"
        >
          <svg 
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 transition-all duration-300 pointer-events-none" 
            viewBox="0 0 24 24" 
            fill={progress > 0.05 ? "#EBDDC3" : "#F3EBDD"}
            stroke="#D2B989" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </motion.button>

        {/* Bride (Right side) */}
        <motion.div 
          animate={{ 
            x: brideTranslateX,
            scale: isDragging ? 1.02 : 1
          }}
          transition={{ 
            type: "tween", 
            ease: "easeOut",
            duration: isCompleting ? 0.7 : (isDragging ? 0.05 : 0.4)
          }}
          onPointerDown={(e) => handlePointerDown(e, 'bride')}
          onClick={triggerCompletion}
          className="flex flex-col items-center text-center cursor-grab active:cursor-grabbing z-20 touch-none"
        >
          <div className="relative w-32 h-52 sm:w-44 sm:h-72 md:w-56 md:h-80 flex items-center justify-center pointer-events-none">
            <img 
              src={brideImg} 
              alt="Bride Nabeela Musthafa" 
              className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.02] drop-shadow-sm"
              draggable="false"
            />
          </div>

          <div className="mt-2 space-y-0.5 pointer-events-none">
            <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#3C3228] leading-none">
              Nabeela
            </h3>
            <p className="font-caps text-[9px] sm:text-[11px] text-[#9E9080] tracking-[0.25em]">
              The Bride
            </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom Timeline, Helper Pill & Arabic Dua */}
      <div className="w-full max-w-3xl px-4 mx-auto pb-3 sm:pb-5">
        
        {/* Interactive Timeline Bar */}
        <div 
          ref={timelineRef}
          className="relative flex items-center justify-between py-2.5 cursor-pointer touch-none"
          onPointerDown={(e) => {
            if (timelineRef.current) {
              const rect = timelineRef.current.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / (rect.width * 0.5)));
              setProgress(ratio);
              if (ratio >= 0.5) {
                triggerCompletion();
                return;
              }
            }
            handlePointerDown(e, 'timeline');
          }}
        >
          {/* Champagne Connecting Track Bar */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[5px] sm:h-[6px] bg-[#E8DCB8] rounded-full overflow-hidden shadow-inner">
            {/* Active Gold Highlight Track */}
            <motion.div 
              className="h-full bg-[#C29F59]"
              style={{
                width: `${sliderPercentage * 2}%`
              }}
            />
          </div>

          {/* Left Anchor Label: Suhail */}
          <div className="relative z-10 flex flex-col items-center">
            {progress <= 0.05 && (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#D8C7A9] bg-[#FAF6EE] overflow-hidden p-0.5 shadow-sm">
                <img 
                  src={groomImg} 
                  alt="Suhail Anchor" 
                  className="w-full h-full object-cover object-top rounded-full mix-blend-multiply"
                  draggable="false"
                />
              </div>
            )}
            <span className="font-script text-base sm:text-lg text-[#736353] mt-1">
              Suhail
            </span>
          </div>

          {/* Draggable Slider Indicator */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-grab active:cursor-grabbing"
            style={{
              left: `${sliderPercentage}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {progress > 0.03 ? (
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#C29F59] bg-[#FAF6EE] overflow-hidden p-0.5 shadow-md ring-2 ring-[#C29F59]/30">
                <img 
                  src={brideImg} 
                  alt="Avatar sliding" 
                  className="w-full h-full object-cover object-top rounded-full mix-blend-multiply"
                  draggable="false"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-[1.5px] h-3.5 bg-[#C29F59] mb-0.5" />
                <span className="font-script text-sm sm:text-base text-[#9E9080] italic whitespace-nowrap">
                  Meet here
                </span>
              </div>
            )}
          </motion.div>

          {/* Right Anchor Label: Nabeela */}
          <div className="relative z-10 flex flex-col items-center">
            {progress <= 0.05 && (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#D8C7A9] bg-[#FAF6EE] overflow-hidden p-0.5 shadow-sm">
                <img 
                  src={brideImg} 
                  alt="Nabeela Anchor" 
                  className="w-full h-full object-cover object-top rounded-full mix-blend-multiply"
                  draggable="false"
                />
              </div>
            )}
            <span className="font-script text-base sm:text-lg text-[#736353] mt-1">
              Nabeela
            </span>
          </div>
        </div>

        {/* Slide Hint Pill */}
        <motion.div 
          className="flex justify-center mt-2.5"
        >
          <button
            type="button"
            onClick={triggerCompletion}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#BA9554] hover:bg-[#A98443] text-white text-xs sm:text-sm font-editorial tracking-wide shadow-[0_2px_10px_rgba(186,149,84,0.3)] transition-all cursor-pointer"
          >
            <span className="text-white text-xs">♡</span>
            <span>Slide the groom &amp; bride to meet in the center!</span>
            <span className="text-white text-xs">♡</span>
          </button>
        </motion.div>

        {/* Arabic Dua & Translation */}
        <div className="text-center mt-3 sm:mt-4 space-y-0.5">
          <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#A77D35] leading-relaxed">
            &ldquo;{WEDDING_DETAILS.hadithDua.arabic}&rdquo;
          </p>
          <p className="font-editorial italic text-xs sm:text-sm text-[#7F705F] max-w-xl mx-auto font-light">
            &ldquo;{WEDDING_DETAILS.hadithDua.english}&rdquo;
          </p>
        </div>

      </div>

    </motion.div>
  );
}
