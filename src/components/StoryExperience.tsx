import React from 'react';
import { Coffee, Heart, Feather, ShieldCheck } from 'lucide-react';
import interiorImage from '../assets/images/cafe_interior_terrace_1794303608987.jpg';
import coffeePourImage from '../assets/images/specialty_coffee_pour_1794303610232.jpg';

export const StoryExperience: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#faf7f2] text-[#2c241c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8c5836] font-semibold mb-3">
            <span>The Pushkar Sanctuary</span>
            <span aria-hidden="true">·</span>
            <span>Est. along the Ghats</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c241c] mb-6">
            A slow refuge sculpted by natural stone, morning light, and sacred tranquility.
          </h2>
          <p className="text-base sm:text-lg text-[#5c4f42] leading-relaxed">
            Just steps from the ancient Brahma Temple, Pushkar’s vibrant bazaar yields to a silent stairwell. Ascend above the bustling sandstone lanes to find Cafe Lake View—a space designed in the spirit of wabi-sabi, where coffee is an intentional craft, and the sacred lake commands stillness.
          </p>
        </div>

        {/* 2-Column Split: Image Left & Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#e2d5c3]">
              <img
                src={interiorImage}
                alt="Minimalist sunlit cafe interior with handcrafted wood table, cappuccino, and carved jali window"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[540px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#faf7f2]/90 backdrop-blur-md p-4 rounded border border-[#e8dfd3] flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#4a3b2f]">
                  "A book, a warm ceramic cup, and gentle breezes from the lake."
                </span>
                <span className="text-[11px] font-mono text-[#8c5836]">Inner Diwan Nook</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#8c5836] mb-1">
                01. The Architecture of Calm
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2c241c] mb-3">
                Lime-Plastered Walls & Desert Diwans
              </h3>
              <p className="text-sm text-[#5c4f42] leading-relaxed">
                Hand-rubbed lime plaster cools the afternoon heat, while low seating diwans dressed in raw linen invite travelers to remove their shoes, sit grounded, and linger without hurry. Traditional carved jali screens filter the midday desert glare into soft geometric shadows.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e2d5c3]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8c5836] mb-1">
                02. Single-Estate Indian Coffee
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2c241c] mb-3">
                Shade-Grown Arabicas from Chikmagalur & Araku
              </h3>
              <p className="text-sm text-[#5c4f42] leading-relaxed">
                We celebrate India’s finest micro-lots. Roasted light-to-medium to preserve fruit clarity, our beans are ground on-demand and brewed with exact water temperature curves—from nuanced V60 pour-overs to 24-hour slow cold drips.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e2d5c3]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8c5836] mb-1">
                03. Reverence for the Sacred Lake
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2c241c] mb-3">
                The Rhythm of Morning & Sunset Aarti
              </h3>
              <p className="text-sm text-[#5c4f42] leading-relaxed">
                Pushkar Lake is among India’s oldest holy sites. As dusk descends across the 52 ghats, temple conch shells ring across the calm water. Our rooftop offers unobstructed front-row witnessing in an atmosphere of respect and wonder.
              </p>
            </div>
          </div>
        </div>

        {/* Coffee Craft Spotlight with Second Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8 border-t border-[#e2d5c3]">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8c5836] font-semibold">
              <Coffee className="w-4 h-4" />
              <span>Barista Philosophy</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#2c241c]">
              We brew every cup like a quiet tea ceremony.
            </h3>
            <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
              Every pour-over is weighed to the tenth of a gram with TDS-calibrated mineral water. No rushed buttons, no synthetic syrups. Just the genuine terroir of Indian estates, organic plant milks, and fresh botanical spices from regional spice farms.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-4 bg-[#f3ece0] rounded border border-[#e2d5c3]">
                <div className="text-[#8c5836] font-bold text-base">100%</div>
                <div className="text-[#5c4f42] mt-1">Single-Estate Indian Arabica</div>
              </div>
              <div className="p-4 bg-[#f3ece0] rounded border border-[#e2d5c3]">
                <div className="text-[#8c5836] font-bold text-base">24-Hour</div>
                <div className="text-[#5c4f42] mt-1">Slow Cold-Drip Extraction</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#e2d5c3]">
              <img
                src={coffeePourImage}
                alt="Barista pouring single-origin filter coffee with gooseneck kettle into ceramic mug"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#1f1914]/80 text-[#faf7f2] backdrop-blur-sm px-3.5 py-1.5 rounded text-xs font-mono">
                Manual Pour-Over Bar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
