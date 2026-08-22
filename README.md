# Shuhair & Hadiya Wedding Invitation

An elegant, interactive wedding invitation built with React and Vite. The experience opens with a draggable couple introduction and then transitions into a detailed invitation page with event information, map links, calendar actions, and a music toggle.

## Features

- Two-page invitation flow with a smooth animated transition
- Interactive opening scene where the couple meets at the center
- Luxury invitation card with wedding details and decorative artwork
- Venue shortcuts for the nikah and reception locations
- Google Calendar links plus downloadable `.ics` calendar support
- Floating music player with an audio-file fallback and synthesized ambient playback
- Responsive design tuned for mobile and desktop

## Tech Stack

- React 19
- Vite
- Motion
- Tailwind CSS v4
- Lucide React icons

## Project Structure

- `src/App.jsx` - top-level page switcher
- `src/main.jsx` - React entry point
- `src/constants/weddingData.js` - wedding content, dates, and URLs
- `src/components/OpeningPage.jsx` - interactive intro scene
- `src/components/InvitationPage.jsx` - second-page layout
- `src/components/InvitationCard.jsx` - main invitation card
- `src/components/EventLocations.jsx` - map link cards
- `src/components/SaveTheDate.jsx` - calendar actions
- `src/components/MusicPlayer.jsx` - background music control
- `src/components/ClosingSection.jsx` - closing message and reset action
- `src/components/BackgroundDecorations.jsx` - ambient visual background
- `src/assets/images/` - invitation artwork and portraits

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs on `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Configuration

Wedding details, venue links, and the music file path are defined in:

- [`src/constants/weddingData.js`](src/constants/weddingData.js)

The music player expects an audio file at:

- `src/assets/music/SueLius-WeddingNasheeda-MP3-128kbps.mp3`

If you want background music to play from a file, place the audio asset in the app's public asset path so it can be served at that URL.

## Notes

- The invitation is intentionally content-driven and does not require a backend.
- The project includes a few AI Studio starter dependencies in `package.json`, but the live app itself is frontend-only.
- The wedding date data is currently set to September 1-2, 2026.

## License

No license has been specified for this project.
