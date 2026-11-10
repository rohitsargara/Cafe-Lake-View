import React, { useState } from 'react';
import { Sunset, Compass, Sparkles, Check, ArrowRight, Clock } from 'lucide-react';
import { ROOFTOP_ZONES, RooftopZone } from '../data/cafeData';
import sunsetImage from '../assets/images/sunset_lake_view_dusk_1794303612000.jpg';

interface SunsetGuideProps {
  onSelectZoneForReservation: (zoneId: string) => void;
}

export const SunsetGuide: React.FC<SunsetGuideProps> = ({ onSelectZoneForReservation }) => {
  const [activeZone, setActiveZone] = useState<RooftopZone>(ROOFTOP_ZONES[0]);

  return (
    <section id="sunset-rooftop" className="py-24 sm:py-32 bg-[#231b14] text-[#faf7f2] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97c45_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d97c45] font-semibold mb-3">
              <Sunset className="w-4 h-4" />
              <span>The Rooftop Haven</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf7f2] mb-4">
              Golden Hour over 52 Sacred Ghats.
            </h2>
            <p className="text-sm sm:text-base text-[#b8a795] leading-relaxed">
              Pushkar’s legendary dusk light turns the water into liquid amber and casts warm violet over the Aravalli peaks. Choose your vantage point across our multi-level terrace.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#2e231b] border border-[#4a3a2e] flex items-center gap-4 shrink-0">
            <Clock className="w-6 h-6 text-[#d97c45]" />
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a89380]">Recommended Arrival</div>
              <div className="text-base font-bold text-white font-mono">4:45 PM – 5:15 PM</div>
              <div className="text-[11px] text-[#8c7866]">To witness the full twilight spectrum</div>
            </div>
          </div>
        </div>

        {/* Feature Image of Pushkar Sunset from the Rooftop */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#4a3a2e] mb-16">
          <img
            src={sunsetImage}
            alt="Pushkar lake bathed in sunset blue hour with warm lanterns and temple reflection"
            referrerPolicy="no-referrer"
            className="w-full h-[400px] sm:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a140f] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d97c45] block mb-1">
                Actual View From Upper Terrace
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                "As the temple bells ring for Maha Aarti, the entire valley turns golden."
              </h3>
            </div>
            <button
              onClick={() => onSelectZoneForReservation('balcony-edge')}
              className="px-5 py-2.5 bg-[#d97c45] hover:bg-[#c46933] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              Book Sunset Table
            </button>
          </div>
        </div>

        {/* Interactive Zone Switcher & Explorer */}
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-[#a89380] font-medium mb-4">
            Select A Rooftop Zone to Explore
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ROOFTOP_ZONES.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={`p-4 rounded-lg text-left transition-all border ${
                    isSelected
                      ? 'bg-[#3d2f23] border-[#d97c45] shadow-md'
                      : 'bg-[#291f17] border-[#3d2e21] hover:bg-[#31251c] text-[#a89380]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#d97c45]">Zone 0{ROOFTOP_ZONES.indexOf(zone) + 1}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#d97c45]" />}
                  </div>
                  <div className={`font-serif text-sm sm:text-base font-semibold ${isSelected ? 'text-white' : 'text-[#ded4c7]'}`}>
                    {zone.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Zone Detail Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#2b2118] border border-[#443426] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#a89380]">
              <span className="text-[#d97c45] font-mono uppercase tracking-wider">{activeZone.vibe}</span>
              <span aria-hidden="true">·</span>
              <span>{activeZone.capacity}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {activeZone.name}
            </h3>

            <p className="text-sm text-[#ded4c7] leading-relaxed">
              {activeZone.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-[#b8a795]">
              <div>
                <span className="text-[#8c7866] uppercase">Ideal For:</span>{' '}
                <span className="text-white font-medium">{activeZone.bestFor}</span>
              </div>
              <div aria-hidden="true">·</div>
              <div>
                <span className="text-[#8c7866] uppercase">View Angle:</span>{' '}
                <span className="text-white font-medium">{activeZone.view}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3 justify-center">
            <button
              onClick={() => onSelectZoneForReservation(activeZone.id)}
              className="w-full py-3.5 px-6 bg-[#d97c45] hover:bg-[#c46933] text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Reserve in this Zone</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-[#8c7866] text-center font-mono">
              Zero booking fee · Confirmation sent instantly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
