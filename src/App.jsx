import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import BackgroundDecorations from './components/BackgroundDecorations';
import OpeningPage from './components/OpeningPage';
import InvitationPage from './components/InvitationPage';

/**
 * EXACT TWO-PAGE INTERACTIVE WEDDING INVITATION EXPERIENCE
 * 
 * PAGE 1: Opening interactive couple introduction.
 *         The user drags the couple / timeline toward the center.
 *         When the threshold is reached, the couple unites at the center,
 *         the heart glows, and PAGE 2 is revealed.
 * 
 * PAGE 2: Full wedding invitation details screen.
 *         Vertically scrollable luxury invitation card, map directions,
 *         calendar sync (Google + .ics), and "Start Over" reset action.
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('PAGE_1');

  const handleRevealInvitation = () => {
    setCurrentPage('PAGE_2');
  };

  const handleStartOver = () => {
    setCurrentPage('PAGE_1');
  };

  return (
    <div className="relative min-h-screen w-full paper-texture overflow-x-hidden selection:bg-[#EBDDC3] selection:text-[#3C3225]">
      {/* Ambient background watermark texture & subtle floating pearls */}
      <BackgroundDecorations />

      {/* Main Two-Page Switcher with smooth transition */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {currentPage === 'PAGE_1' ? (
            <OpeningPage 
              key="opening-page" 
              onComplete={handleRevealInvitation} 
            />
          ) : (
            <InvitationPage 
              key="invitation-page" 
              onStartOver={handleStartOver} 
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
