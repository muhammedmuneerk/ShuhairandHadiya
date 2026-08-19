import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Download } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants/weddingData';

export default function SaveTheDate() {
  
  // Google Calendar URL Generator
  const createGoogleCalendarUrl = (event) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    let dates = "";
    let title = "";
    let location = "";
    let details = "";

    if (event === "nikah") {
      title = encodeURIComponent("Nikah — Suhail & Nabeela");
      dates = "20260729T113000Z/20260729T143000Z"; // After Asar (approx 4 PM IST = 11:30 AM UTC)
      location = encodeURIComponent(WEDDING_DETAILS.dates.nikah.venue);
      details = encodeURIComponent("Nikah ceremony of Muhammed Suhail & Nabeela Musthafa at Thaqwa Masjid, Varam.");
    } else {
      title = encodeURIComponent("Wedding Reception — Suhail & Nabeela");
      dates = "20260730T053000Z/20260730T153000Z";
      location = encodeURIComponent(WEDDING_DETAILS.dates.reception.venue);
      details = encodeURIComponent("Wedding Reception celebration of Muhammed Suhail & Nabeela Musthafa at Groom's House.");
    }

    return `${baseUrl}&text=${title}&dates=${dates}&location=${location}&details=${details}`;
  };

  // Generate and download .ics iCalendar file for Apple Calendar & Outlook
  const downloadIcsFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Suhail & Nabeela Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:nikah-suhail-nabeela-20260729@wedding",
      "DTSTAMP:20260729T000000Z",
      "DTSTART:20260729T113000Z",
      "DTEND:20260729T143000Z",
      "SUMMARY:Nikah — Muhammed Suhail & Nabeela Musthafa",
      "DESCRIPTION:Nikah Ceremony of Muhammed Suhail & Nabeela Musthafa (After Asar)",
      "LOCATION:Thaqwa Masjid\\, Varam",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:reception-suhail-nabeela-20260730@wedding",
      "DTSTAMP:20260730T000000Z",
      "DTSTART:20260730T053000Z",
      "DTEND:20260730T153000Z",
      "SUMMARY:Wedding Reception — Muhammed Suhail & Nabeela Musthafa",
      "DESCRIPTION:Wedding Reception of Muhammed Suhail & Nabeela Musthafa",
      "LOCATION:Groom\\'s House\\, Varam",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Suhail-and-Nabeela-Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="w-full py-4 px-4 max-w-[700px] mx-auto z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#FCFAF7] border border-[#EBDDC3] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(180,160,130,0.06)]"
      >
        {/* Circular Calendar Icon */}
        <div className="w-10 h-10 rounded-full bg-[#FAF3E6] border border-[#E8DCB8] flex items-center justify-center text-[#B58D43] mb-3 shadow-inner">
          <Calendar className="w-4 h-4" />
        </div>

        {/* Title */}
        <h3 className="font-editorial text-xl sm:text-2xl text-[#3C3225] font-normal mb-1">
          Save the Date
        </h3>

        {/* Description */}
        <p className="font-editorial text-xs sm:text-sm text-[#7F705F] max-w-sm mx-auto mb-4 font-light leading-relaxed">
          Add both events to your phone or computer calendar so you don&apos;t miss a moment.
        </p>

        {/* Calendar links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs mb-4">
          <a
            id="link-nikah-gcal"
            href={createGoogleCalendarUrl("nikah")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#967332] hover:text-[#5E471C] underline underline-offset-4 decoration-[#DCC299] hover:decoration-[#967332] transition-colors font-normal"
          >
            Add Nikah to Google Calendar
          </a>

          <a
            id="link-reception-gcal"
            href={createGoogleCalendarUrl("reception")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#967332] hover:text-[#5E471C] underline underline-offset-4 decoration-[#DCC299] hover:decoration-[#967332] transition-colors font-normal"
          >
            Add Reception to Google Calendar
          </a>
        </div>

        {/* Download .ics Button */}
        <button
          id="btn-download-ics"
          onClick={downloadIcsFile}
          className="py-2 px-5 rounded-lg bg-[#FAF6EE] hover:bg-[#F2EADB] text-[#6E5D4B] border border-[#E4D5BE] text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#A77D35]" />
          <span>Download for Apple / Outlook (.ics)</span>
        </button>

      </motion.div>
    </section>
  );
}
