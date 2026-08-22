import React from 'react';
import { motion } from 'motion/react';
import QRCodeDisplay from './QRCodeDisplay';
import { WEDDING_DETAILS, MASJID_MAP_URL, RECEPTION_MAP_URL } from '../constants/weddingData';

// Image assets
import islamicArchImg from '../assets/images/islamic_gold_arch_1786993687566.jpg';
import botanicalBorderImg from '../assets/images/botanical_roses_border_1786993698784.jpg';

export default function InvitationCard() {
  return (
    <section className="w-full py-8 md:py-12 px-4 flex justify-center z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="w-full max-w-[550px] bg-[#FCFAF7] rounded-[26px] md:rounded-[30px] border border-[#EBDDC3] shadow-[0_16px_50px_rgba(180,155,120,0.12)] overflow-hidden relative"
      >
        {/* Top Islamic Arabesque Arch Header */}
        <div className="relative w-full pt-1 pb-0 px-2 sm:px-3 flex justify-center overflow-hidden">
          <div className="w-full h-36 sm:h-44 md:h-48 relative flex items-center justify-center">
            <img 
              src={islamicArchImg} 
              alt="Islamic Gold Arch Filigree" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top mix-blend-multiply opacity-90 filter contrast-105"
            />
          </div>
        </div>

        {/* Card Main Typography & Details */}
        <div className="px-6 sm:px-10 pb-4 pt-1 text-center space-y-3.5 relative z-10">
          
          {/* Bismillah Calligraphy */}
          <div className="space-y-1 pt-1">
            <p className="font-arabic text-3xl sm:text-4xl text-[#C29F59] font-bold leading-relaxed">
              {WEDDING_DETAILS.bismillah}
            </p>
            <p className="font-caps text-[8.5px] sm:text-[9.5px] text-[#C29F59] tracking-[0.2em] max-w-sm mx-auto leading-relaxed font-medium">
              IN THE NAME OF ALLAH THE MOST GRACIOUS AND<br />THE MOST MERCIFUL
            </p>
          </div>

          {/* Groom's Parents */}
          <div className="pt-1 space-y-1.5">
            <h4 className="font-caps text-[10.5px] sm:text-[11.5px] text-[#C29F59] font-semibold tracking-[0.2em]">
              MR. MOIDEEN KUNHI &amp; MRS. SAFIYA MOIDEEN
            </h4>
            <p className="font-caps text-[8.5px] sm:text-[9.5px] text-[#C29F59] tracking-[0.2em] max-w-xs sm:max-w-sm mx-auto leading-relaxed">
              REQUEST THE HONOUR OF YOUR PRESENCE<br />
              AT THE WEDDING RECEPTION OF THEIR<br />
              BELOVED SON
            </p>
          </div>

          {/* Main Couple Names */}
          <div className="py-1 space-y-0.5">
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] text-[#C29F59] tracking-normal leading-tight font-normal">
              Muhammed Shuhair
            </h2>
            <div className="font-display text-2xl sm:text-3xl text-[#C29F59] my-0.5">
              &amp;
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] text-[#C29F59] tracking-normal leading-tight font-normal">
              Hadiya Bayan
            </h2>
          </div>

          {/* Bride's Parents */}
          <div className="pt-0.5">
            <p className="font-caps text-[9px] sm:text-[10px] text-[#C29F59] font-semibold tracking-[0.2em]">
              D/O MR.MUSTHAFA &amp; MRS.SOUDA MUSTHAFA
            </p>
          </div>

          {/* Nikah Schedule Block */}
          <div className="pt-1.5 space-y-1">
            <p className="font-caps text-[9.5px] sm:text-[10.5px] text-[#8C7A65] tracking-[0.25em]">
              NIKAH ON
            </p>
            <p className="font-caps text-[10px] sm:text-[11px] text-[#C29F59] font-semibold tracking-[0.25em]">
              JULY
            </p>

            {/* Date Grid with 29 highlighted */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 max-w-xs mx-auto py-1">
              <div className="font-caps text-[9.5px] sm:text-[10.5px] text-[#8C7A65] tracking-[0.2em] w-24 text-right">
                WEDNESDAY
              </div>

              <div className="px-3 sm:px-4 border-x border-[#DECBB0] flex flex-col items-center">
                <span className="font-display text-3xl sm:text-4xl font-semibold text-[#C29F59] leading-none">
                  29
                </span>
                <span className="font-caps text-[9px] text-[#8C7A65] tracking-widest mt-0.5">
                  2026
                </span>
              </div>

              <div className="font-caps text-[9.5px] sm:text-[10.5px] text-[#8C7A65] tracking-[0.2em] w-24 text-left">
                AFTER ASAR
              </div>
            </div>

            <p className="font-caps text-[8.5px] sm:text-[9.5px] text-[#8C7A65] tracking-[0.2em]">
              AT THAQWA MASJID,VARAM
            </p>
          </div>

          {/* Reception Schedule Block */}
          <div className="pt-1 space-y-0.5">
            <p className="font-caps text-[9.5px] sm:text-[10.5px] text-[#8C7A65] tracking-[0.22em]">
              RECEPTION AT GROOM&apos;S HOUSE
            </p>
            <p className="font-caps text-[10.5px] sm:text-[11.5px] text-[#C29F59] font-semibold tracking-[0.22em]">
              JULY 30 2026
            </p>
          </div>

          {/* QR Codes Section & in sha allah */}
          <div className="pt-2 pb-1 flex items-center justify-around max-w-sm mx-auto">
            <QRCodeDisplay 
              label="MASJID LOCATION" 
              url={MASJID_MAP_URL} 
              id="masjid-qr"
            />

            <div className="font-script text-2xl sm:text-3xl text-[#9E7A36] italic self-center px-2">
              in sha allah
            </div>

            <QRCodeDisplay 
              label="HOUSE LOCATION" 
              url={RECEPTION_MAP_URL} 
              id="house-qr"
            />
          </div>

        </div>

        {/* Bottom Floral Watercolor Garland */}
        <div className="w-full relative -mt-6">
          <img 
            src={botanicalBorderImg} 
            alt="Wedding Floral Garland" 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover mix-blend-multiply opacity-95 filter contrast-105"
          />
        </div>

      </motion.div>
    </section>
  );
}
