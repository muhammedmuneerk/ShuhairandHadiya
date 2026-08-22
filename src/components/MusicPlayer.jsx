import React, { useEffect, useRef, useState } from 'react';
import { Volume2, Music } from 'lucide-react';
import { WEDDING_MUSIC_URL } from '../constants/weddingData';

/**
 * Elegant floating music player matching the top-right widget in the screenshots.
 * If the configured audio asset is missing, the control is disabled gracefully.
 */
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const checkAudioAvailability = async () => {
      try {
        const response = await fetch(WEDDING_MUSIC_URL, { method: 'HEAD' });
        if (!cancelled && !response.ok) {
          setIsUnavailable(true);
        }
      } catch {
        if (!cancelled) {
          setIsUnavailable(true);
        }
      }
    };

    const tryAutoplay = async () => {
      if (!audioRef.current) {
        return;
      }

      try {
        await audioRef.current.play();
        if (!cancelled) {
          setIsPlaying(true);
        }
      } catch {
        // Browsers may block autoplay until the user interacts with the page.
      }
    };

    checkAudioAvailability();
    tryAutoplay();

    return () => {
      cancelled = true;
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = async () => {
    if (isUnavailable) {
      return;
    }

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    if (!audioRef.current) {
      setIsUnavailable(true);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsUnavailable(true);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <audio
        ref={audioRef}
        src={WEDDING_MUSIC_URL}
        loop
        autoPlay
        muted={false}
        playsInline
        preload="auto"
        onError={() => setIsUnavailable(true)}
      />
      <button
        id="wedding-music-toggle"
        onClick={togglePlay}
        disabled={isUnavailable}
        aria-disabled={isUnavailable}
        aria-label={isUnavailable ? 'Wedding music unavailable' : (isPlaying ? 'Pause wedding music' : 'Play wedding music')}
        className={`group flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#EBDDC3] shadow-[0_4px_20px_rgba(180,160,130,0.15)] transition-all duration-300 ${isUnavailable ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#C9A35A] hover:bg-[#FFFDF9] cursor-pointer'}`}
      >
        <span className="text-[#A77D35] text-xs md:text-sm font-medium tracking-wide flex items-center gap-1.5">
          <Music className={`w-3.5 h-3.5 text-[#C9A35A] ${isPlaying ? 'animate-pulse' : 'opacity-80'}`} />
          <span className="font-editorial italic">{isPlaying ? 'Now Playing' : 'Music Ready'}</span>
        </span>

        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isUnavailable ? 'bg-[#EFE4CE] text-[#A18F72]' : isPlaying ? 'bg-[#C9A35A] text-white' : 'bg-[#F2E8D5] text-[#8C7A65] group-hover:bg-[#EBDDC3]'}`}>
          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce-subtle' : ''}`} />
        </div>
      </button>
    </div>
  );
}
