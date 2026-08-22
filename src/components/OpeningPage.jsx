import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DETAILS } from '../constants/weddingData';

import groomImg from '../assets/images/groom.png';
import brideImg from '../assets/images/bride.png';

/**
 * PAGE 1: Interactive Couple Introduction & Opening Scene
 *
 * Each avatar is dragged independently toward the center.
 * When both are brought close enough, they lock into place and the page reveals Page 2.
 */
export default function OpeningPage({ onComplete }) {
  const [groomProgress, setGroomProgress] = useState(0);
  const [brideProgress, setBrideProgress] = useState(0);
  const [groomLocked, setGroomLocked] = useState(false);
  const [brideLocked, setBrideLocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSide, setActiveSide] = useState(null);
  const [isCompleting, setIsCompleting] = useState(false);

  const groomProgressRef = useRef(0);
  const brideProgressRef = useRef(0);
  const groomLockedRef = useRef(false);
  const brideLockedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const startProgressRef = useRef({ groom: 0, bride: 0 });
  const activeSideRef = useRef(null);
  const timelineRef = useRef(null);

  const [maxTravelX, setMaxTravelX] = useState(220);
  const [timelineWidth, setTimelineWidth] = useState(0);

  const clamp01 = (value) => Math.max(0, Math.min(1, value));

  const setGroomValue = (value) => {
    groomProgressRef.current = value;
    setGroomProgress(value);
  };

  const setBrideValue = (value) => {
    brideProgressRef.current = value;
    setBrideProgress(value);
  };

  const setGroomLockState = (value) => {
    groomLockedRef.current = value;
    setGroomLocked(value);
  };

  const setBrideLockState = (value) => {
    brideLockedRef.current = value;
    setBrideLocked(value);
  };

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMaxTravelX(88);
      } else if (w < 1024) {
        setMaxTravelX(164);
      } else {
        setMaxTravelX(228);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const measureTimeline = () => {
      if (timelineRef.current) {
        setTimelineWidth(timelineRef.current.getBoundingClientRect().width);
      }
    };

    measureTimeline();
    window.addEventListener('resize', measureTimeline);
    return () => window.removeEventListener('resize', measureTimeline);
  }, []);

  const triggerCompletion = useCallback(() => {
    if (isCompleting) return;
    setIsCompleting(true);
    setIsDragging(false);
    setActiveSide(null);
    setGroomLockState(true);
    setBrideLockState(true);
    setGroomValue(1);
    setBrideValue(1);

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 850);
  }, [isCompleting, onComplete]);

  const startDrag = useCallback((side, e) => {
    if (isCompleting) return;
    if ((side === 'groom' && groomLockedRef.current) || (side === 'bride' && brideLockedRef.current)) return;

    if (e.currentTarget && typeof e.currentTarget.setPointerCapture === 'function') {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Some browsers may refuse capture during synthetic interactions.
      }
    }

    setIsDragging(true);
    setActiveSide(side);
    activeSideRef.current = side;
    dragStartXRef.current = e.clientX;
    startProgressRef.current = {
      groom: groomProgressRef.current,
      bride: brideProgressRef.current,
    };
  }, [isCompleting]);

  useEffect(() => {
    if (!isDragging || isCompleting) return;

    const onPointerMove = (e) => {
      const side = activeSideRef.current;
      if (!side) return;

      const deltaX = e.clientX - dragStartXRef.current;
      const dragSpan = timelineRef.current ? (timelineRef.current.clientWidth * 0.22) : (window.innerWidth < 640 ? 84 : 168);
      const normalizedDelta = deltaX / (dragSpan || 168);

      if (side === 'groom' && !groomLockedRef.current) {
        const next = clamp01(startProgressRef.current.groom + normalizedDelta);
        setGroomValue(next);
      }

      if (side === 'bride' && !brideLockedRef.current) {
        const next = clamp01(startProgressRef.current.bride - normalizedDelta);
        setBrideValue(next);
      }
    };

    const onPointerUp = () => {
      const side = activeSideRef.current;
      setIsDragging(false);
      setActiveSide(null);
      activeSideRef.current = null;

      if (side === 'groom' && !groomLockedRef.current) {
        if (groomProgressRef.current >= 0.7) {
          setGroomLockState(true);
          setGroomValue(1);
        } else {
          setGroomValue(0);
        }
      }

      if (side === 'bride' && !brideLockedRef.current) {
        if (brideProgressRef.current >= 0.7) {
          setBrideLockState(true);
          setBrideValue(1);
        } else {
          setBrideValue(0);
        }
      }

      if (groomLockedRef.current && brideLockedRef.current) {
        triggerCompletion();
      }
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

  const reunionProgress = Math.max(groomProgress, brideProgress);
  const groomTranslateX = groomProgress * maxTravelX;
  const brideTranslateX = -brideProgress * maxTravelX;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-h-[100dvh] overflow-x-hidden overflow-y-visible flex flex-col justify-between pt-6 sm:pt-8 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="text-center space-y-1.5 sm:space-y-2 max-w-2xl mx-auto pt-1 sm:pt-3"
      >
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight text-[#C29F59] leading-tight font-normal">
          Shuhair &amp; Hadiya
        </h1>

        <p className="font-editorial italic text-sm sm:text-base md:text-lg text-[#7F705F] font-light tracking-wide">
          Are getting married!
        </p>

        <div className="flex items-center justify-center gap-2 text-[#C29F59] text-xs sm:text-sm md:text-base font-editorial tracking-widest pt-0.5">
          <span className="text-[#C29F59] text-xs">✧</span>
          <span className="font-normal tracking-wider">{WEDDING_DETAILS.dates.display}</span>
          <span className="text-[#C29F59] text-xs">✧</span>
        </div>
      </motion.div>

      <div className="w-full max-w-[1600px] mx-auto my-auto py-2 sm:py-4 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 sm:gap-8 md:gap-14 lg:gap-32 px-2 sm:px-8 md:px-12 relative">
        <motion.div
          animate={{
            x: groomTranslateX,
            scale: isDragging && activeSide === 'groom' ? 1.02 : 1,
          }}
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: isCompleting ? 0.7 : (isDragging ? 0.05 : 0.4),
          }}
          onPointerDown={(e) => startDrag('groom', e)}
          className="justify-self-start flex flex-col items-center text-center cursor-grab active:cursor-grabbing z-20 touch-none lg:-ml-14"
        >
          <div className="relative w-32 h-52 sm:w-44 sm:h-72 md:w-56 md:h-80 flex items-center justify-center pointer-events-none">
            <img
              src={groomImg}
              alt="Groom Muhammed Shuhair"
              className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.02] drop-shadow-sm"
              draggable="false"
            />
          </div>

          <div className="mt-2 space-y-0.5 pointer-events-none">
            <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#3C3228] leading-none">
              Shuhair
            </h3>
            <p className="font-caps text-[9px] sm:text-[11px] text-[#9E9080] tracking-[0.25em]">
              The Groom
            </p>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center p-2 z-10 pointer-events-none justify-self-center">
          <svg
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 transition-all duration-300 pointer-events-none"
            viewBox="0 0 24 24"
            fill={reunionProgress > 0.05 ? '#EBDDC3' : '#F3EBDD'}
            stroke="#D2B989"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: reunionProgress > 0.35 ? `drop-shadow(0 0 ${reunionProgress * 14}px rgba(197, 160, 89, 0.35))` : 'none' }}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>

        <motion.div
          animate={{
            x: brideTranslateX,
            scale: isDragging && activeSide === 'bride' ? 1.02 : 1,
          }}
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: isCompleting ? 0.7 : (isDragging ? 0.05 : 0.4),
          }}
          onPointerDown={(e) => startDrag('bride', e)}
          className="justify-self-end flex flex-col items-center text-center cursor-grab active:cursor-grabbing z-20 touch-none lg:-mr-14"
        >
          <div className="relative w-32 h-52 sm:w-44 sm:h-72 md:w-56 md:h-80 flex items-center justify-center pointer-events-none">
            <img
              src={brideImg}
              alt="Bride Hadiya Bayan"
              className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.02] drop-shadow-sm"
              draggable="false"
            />
          </div>

          <div className="mt-2 space-y-0.5 pointer-events-none">
            <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#3C3228] leading-none">
              Hadiya
            </h3>
            <p className="font-caps text-[9px] sm:text-[11px] text-[#9E9080] tracking-[0.25em]">
              The Bride
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-[1180px] px-4 mx-auto pb-3 sm:pb-5">
        <div ref={timelineRef} className="relative h-24 sm:h-28 touch-none">
          <div className="absolute left-6 right-6 top-[48%] h-[5px] sm:h-[6px] rounded-full bg-[#EEE5D4] shadow-inner overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#D6B26B] transition-all duration-200"
              style={{ width: groomLocked ? '50%' : `${Math.max(0, groomProgress * 50)}%` }}
            />
            <div
              className="absolute right-0 top-0 h-full rounded-full bg-[#D6B26B] transition-all duration-200"
              style={{ width: brideLocked ? '50%' : `${Math.max(0, brideProgress * 50)}%` }}
            />
          </div>

          <div className="absolute left-1/2 top-[56%] -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            <span className="font-script text-sm sm:text-base text-[#B7924B] italic whitespace-nowrap mb-1">
              Meet here
            </span>
            <div className="h-6 w-[1.5px] rounded-full bg-[#D2A955] opacity-90" />
          </div>

          <div
            onPointerDown={(e) => startDrag('groom', e)}
            className="absolute top-[48%] -translate-y-1/2 z-30 flex flex-col items-center cursor-grab active:cursor-grabbing touch-none"
            style={{ left: timelineWidth ? `${Math.max(24, 24 + (timelineWidth - 48) * 0.5 * (groomLocked ? 1 : groomProgress))}px` : '24px' }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D7B369] bg-[#FAF6EE] overflow-hidden p-0.5 shadow-[0_1px_8px_rgba(176,145,88,0.18)]">
              <img
                src={groomImg}
                alt="Shuhair Anchor"
                className="w-full h-full object-cover object-top rounded-full mix-blend-multiply"
                draggable="false"
              />
            </div>
            <span className="font-script text-base sm:text-lg text-[#C39A43] mt-1">
              Shuhair
            </span>
          </div>

          <div
            onPointerDown={(e) => startDrag('bride', e)}
            className="absolute top-[48%] -translate-y-1/2 z-30 flex flex-col items-center cursor-grab active:cursor-grabbing touch-none"
            style={{ right: timelineWidth ? `${Math.max(24, 24 + (timelineWidth - 48) * 0.5 * (brideLocked ? 1 : brideProgress))}px` : '24px' }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D7B369] bg-[#FAF6EE] overflow-hidden p-0.5 shadow-[0_1px_8px_rgba(176,145,88,0.18)]">
              <img
                src={brideImg}
                alt="Hadiya Anchor"
                className="w-full h-full object-cover object-top rounded-full mix-blend-multiply"
                draggable="false"
              />
            </div>
            <span className="font-script text-base sm:text-lg text-[#C39A43] mt-1">
              Hadiya
            </span>
          </div>
        </div>

        <motion.div className="flex justify-center mt-2.5">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#BA9554] text-white text-xs sm:text-sm font-editorial tracking-wide shadow-[0_2px_10px_rgba(186,149,84,0.3)] select-none">
            <span className="text-white text-xs">♡</span>
            <span>Slide Shuhair and Hadiya individually to meet at the center!</span>
            <span className="text-white text-xs">♡</span>
          </div>
        </motion.div>

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
