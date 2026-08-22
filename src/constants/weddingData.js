/**
 * Wedding Information and Configuration Constants
 * Shuhair & Hadiya Wedding Celebration
 */

export const WEDDING_DETAILS = {
  couple: {
    groomShort: "Shuhair",
    groomFull: "Muhammed Shuhair",
    groomParents: "Mr. Moideen Kunhi & Mrs. Safiya Moideen",
    brideShort: "Hadiya",
    brideFull: "Hadiya Bayan",
    brideParents: "Mr. Musthafa & Mrs. Souda Musthafa",
  },
  dates: {
    display: "September 1 - 2, 2026",
    nikah: {
      date: "September 1, 2026",
      day: "Tuesday",
      month: "SEPTEMBER",
      dayNumber: "1",
      year: "2026",
      time: "After Asar",
      venue: "Thaqwa Masjid, Varam",
      mapQuery: "Thaqwa+Masjid+Varam+Kannur+Kerala",
    },
    reception: {
      date: "September 2, 2026",
      day: "Wednesday",
      year: "2026",
      venue: "Groom's House",
      mapQuery: "Varam+Kannur+Kerala",
    },
  },
  hadithDua: {
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english: "May Allah bless you both and bring you together in goodness.",
  },
  hadithQuote: {
    text: "When a servant marries, he has completed half of his faith.",
    source: "Al-Bayhaqi",
  },
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
  bismillahTranslation: "IN THE NAME OF ALLAH THE MOST GRACIOUS AND THE MOST MERCIFUL",
};

export const MASJID_MAP_URL = "https://maps.google.com/?q=Thaqwa+Masjid+Varam+Kannur";
export const RECEPTION_MAP_URL = "https://maps.google.com/?q=Varam+Kannur+Kerala";
export const WEDDING_MUSIC_URL = new URL(
  "../assets/music/SueLius-WeddingNasheeda-MP3-128kbps.mp3",
  import.meta.url
).href;
