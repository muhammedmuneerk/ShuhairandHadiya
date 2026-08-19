import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { WEDDING_MUSIC_URL } from '../constants/weddingData';

/**
 * Elegant floating music player matching the top-right widget in the screenshots.
 * Incorporates subtle audio synthesis (soft acoustic harp/piano chord progression)
 * as fallback/instant playback + configurable audio file support.
 */
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Soft romantic arpeggio notes in pentatonic/major scale for wedding ambience
  const notes = [
    261.63, 329.63, 392.00, 523.25, // C4, E4, G4, C5
    293.66, 369.99, 440.00, 587.33, // D4, F#4, A4, D5
    246.94, 329.63, 392.00, 493.88, // B3, E4, G4, B4
    220.00, 261.63, 329.63, 440.00  // A3, C4, E4, A4
  ];

  const playSynthHarp = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!synthContextRef.current) {
        synthContextRef.current = new AudioCtx();
      }
      const ctx = synthContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let step = 0;
      synthIntervalRef.current = setInterval(() => {
        if (!ctx || ctx.state === 'closed') return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft sine wave harp-like pluck
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.6);

        step++;
      }, 550);
    } catch (e) {
      console.warn("Ambient synth audio notice:", e);
    }
  };

  const stopSynthHarp = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthHarp();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      // Attempt HTML5 audio first, fallback to pleasant ambient synth
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          playSynthHarp();
        });
      } else {
        playSynthHarp();
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynthHarp();
      if (synthContextRef.current && synthContextRef.current.state !== 'closed') {
        synthContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <audio ref={audioRef} src={WEDDING_MUSIC_URL} loop preload="none" />
      <button
        id="wedding-music-toggle"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        className="group flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#EBDDC3] shadow-[0_4px_20px_rgba(180,160,130,0.15)] hover:border-[#C9A35A] hover:bg-[#FFFDF9] transition-all duration-300 cursor-pointer"
      >
        <span className="text-[#A77D35] text-xs md:text-sm font-medium tracking-wide flex items-center gap-1.5">
          <Music className={`w-3.5 h-3.5 text-[#C9A35A] ${isPlaying ? 'animate-pulse' : ''}`} />
          <span className="font-editorial italic">Now Playing</span>
        </span>

        {/* Small circular audio status button */}
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isPlaying ? 'bg-[#C9A35A] text-white' : 'bg-[#F2E8D5] text-[#8C7A65] group-hover:bg-[#EBDDC3]'}`}>
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 animate-bounce-subtle" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </div>
      </button>
    </div>
  );
}
