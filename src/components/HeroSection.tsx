import React from 'react';
import { ArrowDown, Sun, Sparkles, MapPin, Compass } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';
import heroImage from '../assets/images/hero_pushkar_lake_cafe_1794303607721.jpg';

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#faf7f2]">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cafe Lake View rooftop terrace overlooking holy Pushkar Lake and ghats"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Subtle dual gradient scrim for high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1914]/85 via-[#1f1914]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1914]/90 via-transparent to-[#1f1914]/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 sm:pt-32 pb-16 flex-1 flex flex-col justify-center">
        {/* Unboxed clean metadata kicker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#d9c4b0] mb-5 font-medium">
          <span>Pushkar Lakefront Sanctuary</span>
          <span aria-hidden="true" className="text-[#a88265]">·</span>
          <span>Est. at the Sacred Ghats</span>
          <span aria-hidden="true" className="text-[#a88265]">·</span>
          <span>Open Daily 7:30 AM – 10:30 PM</span>
        </div>

        {/* Hero Title with Balanced Measure */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#faf7f2] leading-[1.08] tracking-tight max-w-3xl mb-6">
          Where Sacred Waters Meet Slow Coffee.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg text-[#ded4c7] font-normal leading-relaxed max-w-2xl mb-10">
          Perched directly above the historic bathing ghats of Pushkar Lake. Specialty Indian estate pour-overs, artisanal sourdough, and an unhurried rooftop sanctuary for the golden hour sunset.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            onClick={onOpenReservation}
            className="px-7 py-3.5 bg-[#d97c45] hover:bg-[#c46933] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Reserve Sunset Table
          </button>

          <a
            href="#menu"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#faf7f2] border border-white/30 text-xs font-semibold uppercase tracking-wider rounded-md backdrop-blur-sm transition-all whitespace-nowrap"
          >
            Explore Artisanal Menu
          </a>
        </div>

        {/* Pushkar Real-Time Sunset & Sacred Vibe Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-6 border-t border-white/15">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/10 text-[#f5c28e] border border-white/10">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[#c4b5a3] uppercase tracking-wider font-medium">Pushkar Sunset Today</div>
              <div className="text-sm font-semibold text-white font-mono">5:54 PM IST · Golden Glow</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/10 text-[#f5c28e] border border-white/10">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[#c4b5a3] uppercase tracking-wider font-medium">Brahma Ghat Maha Aarti</div>
              <div className="text-sm font-semibold text-white font-mono">6:30 PM · Bell Chimes</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/10 text-[#f5c28e] border border-white/10">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[#c4b5a3] uppercase tracking-wider font-medium">Vantage Point</div>
              <div className="text-sm font-semibold text-white">360° Lake & Mountain Deck</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Anchor */}
      <div className="relative z-10 w-full pb-6 flex justify-center">
        <a
          href="#story"
          aria-label="Scroll to story section"
          className="p-2 text-[#d9c4b0]/70 hover:text-white transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
