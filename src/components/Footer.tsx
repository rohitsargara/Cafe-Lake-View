import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Instagram, Compass } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f1914] text-[#ded4c7] pt-20 pb-12 border-t border-[#382d24]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#382d24]">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#faf7f2] block">
              CAFE LAKE VIEW
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d97c45] font-medium font-mono">
              Pushkar Lake · Rajasthan · India
            </p>
            <p className="text-xs sm:text-sm text-[#b8a795] leading-relaxed max-w-sm pt-2">
              A serene rooftop sanctuary along the 52 sacred ghats. Dedicated to single-origin Indian estate coffees, organic food, and quiet appreciation of golden hour sunsets.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 bg-[#d97c45] hover:bg-[#c46933] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Reserve a Sunset Table
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#a89380] mb-2">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#b8a795]">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  The Pushkar Story
                </a>
              </li>
              <li>
                <a href="#sunset-rooftop" className="hover:text-white transition-colors">
                  Sunset Rooftop & Zones
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Artisanal Coffee & Fare
                </a>
              </li>
              <li>
                <a href="#location-ghats" className="hover:text-white transition-colors">
                  Ghats & Walking Directions
                </a>
              </li>
              <li>
                <a href="#guestbook" className="hover:text-white transition-colors">
                  Traveler Chronicles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#a89380] mb-2">
              Sanctuary Hours & Location
            </div>
            <div className="space-y-2 text-xs text-[#b8a795]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d97c45] shrink-0 mt-0.5" />
                <span>Near Varaha Ghat & Brahma Temple, Pushkar Lake, Rajasthan 305022</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d97c45] shrink-0" />
                <a href="tel:+919829082001" className="font-mono hover:text-white">
                  +91 98290 82001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d97c45] shrink-0" />
                <span>hello@cafelakeviewpushkar.com</span>
              </div>
              <div className="pt-2 text-[11px] font-mono text-[#a89380]">
                Daily: 07:30 AM – 10:30 PM (All 365 Days)
              </div>
            </div>

            <div className="pt-3">
              <a
                href={CAFE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#d97c45] hover:underline"
              >
                <span>View on Google Maps</span>
                <Compass className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7866]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Cafe Lake View Pushkar.</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Honoring the sacred heritage of Pushkar Lake</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2b2118] hover:bg-[#382b20] text-[#ded4c7] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
