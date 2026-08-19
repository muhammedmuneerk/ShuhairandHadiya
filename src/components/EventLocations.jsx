import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { MASJID_MAP_URL, RECEPTION_MAP_URL } from '../constants/weddingData';

export default function EventLocations() {
  return (
    <section className="w-full py-4 md:py-6 px-4 max-w-[700px] mx-auto z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        
        {/* Left: Masjid Location Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FCFAF7] border border-[#EBDDC3] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(180,160,130,0.06)] hover:border-[#DEC39E] transition-all duration-300"
        >
          {/* Circular Pin Icon */}
          <div className="w-10 h-10 rounded-full bg-[#FAF3E6] border border-[#E8DCB8] flex items-center justify-center text-[#B58D43] mb-3 shadow-inner">
            <MapPin className="w-4 h-4" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl text-[#3C3225] font-normal mb-1">
            Masjid Location
          </h3>

          <p className="font-editorial text-xs sm:text-sm text-[#7F705F] mb-4 font-light">
            Thaqwa Masjid, Varam · Nikah, July 29
          </p>

          <a
            id="btn-masjid-map"
            href={MASJID_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[240px] py-2 px-5 rounded-lg bg-[#BE974B] hover:bg-[#AD853C] text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(190,151,75,0.25)] transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>View on Map</span>
          </a>
        </motion.div>

        {/* Right: Reception House Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="bg-[#FCFAF7] border border-[#EBDDC3] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(180,160,130,0.06)] hover:border-[#DEC39E] transition-all duration-300"
        >
          {/* Circular Pin Icon */}
          <div className="w-10 h-10 rounded-full bg-[#FAF3E6] border border-[#E8DCB8] flex items-center justify-center text-[#B58D43] mb-3 shadow-inner">
            <MapPin className="w-4 h-4" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl text-[#3C3225] font-normal mb-1">
            Reception House
          </h3>

          <p className="font-editorial text-xs sm:text-sm text-[#7F705F] mb-4 font-light">
            Groom&apos;s House · Reception, July 29 - 30
          </p>

          <a
            id="btn-reception-map"
            href={RECEPTION_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[240px] py-2 px-5 rounded-lg bg-[#FAF6EE] hover:bg-[#F2EADB] text-[#6E5D4B] border border-[#E4D5BE] text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#A77D35]" />
            <span>View on Map</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
