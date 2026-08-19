import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import MusicPlayer from './MusicPlayer';
import InvitationCard from './InvitationCard';
import EventLocations from './EventLocations';
import SaveTheDate from './SaveTheDate';
import ClosingSection from './ClosingSection';

/**
 * PAGE 2: Wedding Invitation Details Screen
 * 
 * Vertically scrollable, featuring the printed luxury invitation card,
 * interactive map locations, calendar sync/save the date, and closing blessings.
 */
export default function InvitationPage({ onStartOver }) {
  useEffect(() => {
    // Scroll window to top when Page 2 mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full flex flex-col items-center pt-10 sm:pt-14 pb-16"
    >
      {/* Floating Music Player at Top Right */}
      <MusicPlayer />

      {/* Main Luxury Wedding Invitation Card */}
      <InvitationCard />

      {/* Event Locations (Masjid & Reception) */}
      <EventLocations />

      {/* Save the Date (Calendar Sync & .ics download) */}
      <SaveTheDate />

      {/* Closing Quote, Signatures & Start Over Button */}
      <ClosingSection onStartOver={onStartOver} />
    </motion.div>
  );
}
