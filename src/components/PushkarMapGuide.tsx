import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Phone, Clock, ExternalLink, ShieldCheck, Footprints } from 'lucide-react';
import { CAFE_DETAILS, PUSHKAR_GUIDELINES } from '../data/cafeData';

export const PushkarMapGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'walking' | 'rickshaw' | 'etiquette'>('walking');

  return (
    <section id="location-ghats" className="py-24 sm:py-32 bg-[#f4ede2] text-[#2c241c] border-t border-[#e2d5c3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8c5836] font-semibold mb-3">
            <Compass className="w-4 h-4" />
            <span>Sacred Geography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c241c] mb-4">
            Finding Cafe Lake View along the Ghats.
          </h2>
          <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
            Pushkar is a walking town of whitewashed havelis and ancient ghats. We are tucked right along the sacred water’s edge, elevated three flights above the serene Varaha Ghat.
          </p>
        </div>

        {/* Map & Landmark Visualizer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Map Simulation & Interactive Google Maps Trigger */}
          <div className="lg:col-span-7 bg-[#faf7f2] rounded-xl border border-[#ded3c2] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd3] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#8c5836] text-white rounded-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#2c241c]">
                      Cafe Lake View Pushkar
                    </h3>
                    <p className="text-xs text-[#8c7866] font-mono">
                      Coordinates: 26.4893752° N, 74.5540116° E
                    </p>
                  </div>
                </div>

                <a
                  href={CAFE_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2c241c] hover:bg-[#43382d] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stylized Ghats Spatial Map Graphic */}
              <div className="relative h-64 sm:h-72 w-full rounded-lg bg-[#e7ddcf] border border-[#d8c8b4] overflow-hidden p-6 flex flex-col justify-between">
                {/* Pushkar Lake Water Simulation */}
                <div className="absolute inset-y-4 right-0 w-1/2 bg-[#5c7a82]/20 border-l border-[#5c7a82]/40 rounded-l-full flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <span className="font-serif italic text-xs text-[#3a5860] font-medium tracking-wide">
                      Pushkar Sacred Lake
                    </span>
                    <div className="text-[10px] text-[#486b75] font-mono mt-0.5">52 Holy Ghats</div>
                  </div>
                </div>

                {/* Key Landmark Pins */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-sm rounded border border-[#8c5836] shadow-sm max-w-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8c5836] shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-xs text-[#2c241c]">
                        ★ Cafe Lake View (Our Rooftop)
                      </div>
                      <div className="text-[10px] text-[#6b5847]">Direct Varaha Ghat Water View</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 bg-white/70 backdrop-blur-sm rounded border border-[#d4c6b2] max-w-[220px]">
                    <div className="w-2 h-2 rounded-full bg-[#4a3b2f] shrink-0" />
                    <div>
                      <div className="font-medium text-[11px] text-[#2c241c]">Varaha Ghat Steps</div>
                      <div className="text-[9px] text-[#7d6c5c]">50 meters (1 min walk)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 bg-white/70 backdrop-blur-sm rounded border border-[#d4c6b2] max-w-[220px]">
                    <div className="w-2 h-2 rounded-full bg-[#4a3b2f] shrink-0" />
                    <div>
                      <div className="font-medium text-[11px] text-[#2c241c]">Lord Brahma Temple</div>
                      <div className="text-[9px] text-[#7d6c5c]">300 meters (3 min walk)</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 text-[10px] text-[#7d6c5c] font-mono bg-white/80 py-1 px-2.5 rounded w-fit">
                  Paved pedestrian alleyway · No motor vehicles permitted on lake edge
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#e8dfd3] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#5c4f42]">
                <Clock className="w-4 h-4 text-[#8c5836]" />
                <span>Open 7:30 AM – 10:30 PM Every Day</span>
              </div>
              <div className="flex items-center gap-2 text-[#5c4f42]">
                <Phone className="w-4 h-4 text-[#8c5836]" />
                <a href="tel:+919829082001" className="font-mono hover:text-[#8c5836]">
                  +91 98290 82001
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Guide & Tabs */}
          <div className="lg:col-span-5 bg-[#faf7f2] rounded-xl border border-[#ded3c2] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 p-1 bg-[#ede4d8] rounded-lg mb-6">
                <button
                  onClick={() => setActiveTab('walking')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    activeTab === 'walking'
                      ? 'bg-white text-[#2c241c] shadow-xs'
                      : 'text-[#6b5847] hover:text-[#2c241c]'
                  }`}
                >
                  On Foot (Best)
                </button>
                <button
                  onClick={() => setActiveTab('rickshaw')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    activeTab === 'rickshaw'
                      ? 'bg-white text-[#2c241c] shadow-xs'
                      : 'text-[#6b5847] hover:text-[#2c241c]'
                  }`}
                >
                  Auto Rickshaw
                </button>
                <button
                  onClick={() => setActiveTab('etiquette')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    activeTab === 'etiquette'
                      ? 'bg-white text-[#2c241c] shadow-xs'
                      : 'text-[#6b5847] hover:text-[#2c241c]'
                  }`}
                >
                  Ghats Etiquette
                </button>
              </div>

              {activeTab === 'walking' && (
                <div className="space-y-4 text-xs text-[#5c4f42]">
                  <h4 className="font-serif font-bold text-base text-[#2c241c]">
                    Walking from Brahma Temple (3 min)
                  </h4>
                  <ol className="space-y-3 list-decimal list-inside leading-relaxed">
                    <li>
                      Exit the Brahma Temple entrance onto Main Temple Road.
                    </li>
                    <li>
                      Head east into the stone-paved lane towards Varaha Ghat for about 200 meters.
                    </li>
                    <li>
                      Look for the handcrafted teakwood sign of <strong className="text-[#2c241c]">Cafe Lake View</strong> on the lakeside arch.
                    </li>
                    <li>
                      Take the whitewashed lime stairs up to the rooftop terrace overlooking the lake.
                    </li>
                  </ol>
                </div>
              )}

              {activeTab === 'rickshaw' && (
                <div className="space-y-4 text-xs text-[#5c4f42]">
                  <h4 className="font-serif font-bold text-base text-[#2c241c]">
                    Rickshaw Drop-off & Parking
                  </h4>
                  <p className="leading-relaxed">
                    Vehicles cannot enter the narrow historic ghats lane. Tell your driver to drop you at:
                  </p>
                  <div className="p-3 bg-[#f3ece0] rounded border border-[#e2d5c3] font-medium text-[#2c241c]">
                    "Brahma Temple Chowk / Varaha Ghat Entry"
                  </div>
                  <p className="text-[#8c7866] leading-relaxed">
                    From the drop point, it is an easy 2-minute flat walk to our stairwell.
                  </p>
                </div>
              )}

              {activeTab === 'etiquette' && (
                <div className="space-y-4 text-xs text-[#5c4f42]">
                  <h4 className="font-serif font-bold text-base text-[#2c241c]">
                    Pushkar Sacred Lake Customs
                  </h4>
                  <ul className="space-y-2.5 leading-relaxed">
                    <li>• Please remove footwear before stepping onto the cushioned diwan carpets.</li>
                    <li>• Alcohol and meat are strictly non-permissible throughout the sacred holy town of Pushkar.</li>
                    <li>• Respect bathing pilgrims; avoid pointing telephoto lenses at people in the water.</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8dfd3]">
              <a
                href={CAFE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#2c241c] hover:bg-[#43382d] text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#d97c45]" />
                <span>Navigate via Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Pushkar Guidelines Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#ded3c2]">
          {PUSHKAR_GUIDELINES.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <span className="font-mono text-xs text-[#8c5836]">0{idx + 1}.</span>
              <h4 className="font-serif font-bold text-base text-[#2c241c]">
                {item.title}
              </h4>
              <p className="text-xs text-[#5c4f42] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
