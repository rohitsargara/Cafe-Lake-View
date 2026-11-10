import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Calendar, MapPin } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  orderCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenOrder,
  orderCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8dfd3] transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0 text-left"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2c241c] group-hover:text-[#8c5836] transition-colors">
              CAFE LAKE VIEW
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c5836] font-medium">
              Pushkar Lake · Rajasthan
            </span>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5c4f42]">
            <a
              href="#story"
              className="hover:text-[#2c241c] hover:underline underline-offset-8 decoration-[#8c5836] transition-colors whitespace-nowrap shrink-0"
            >
              Story
            </a>
            <a
              href="#sunset-rooftop"
              className="hover:text-[#2c241c] hover:underline underline-offset-8 decoration-[#8c5836] transition-colors whitespace-nowrap shrink-0"
            >
              Sunset Rooftop
            </a>
            <a
              href="#menu"
              className="hover:text-[#2c241c] hover:underline underline-offset-8 decoration-[#8c5836] transition-colors whitespace-nowrap shrink-0"
            >
              Artisanal Menu
            </a>
            <a
              href="#location-ghats"
              className="hover:text-[#2c241c] hover:underline underline-offset-8 decoration-[#8c5836] transition-colors whitespace-nowrap shrink-0"
            >
              Ghats & Location
            </a>
            <a
              href="#guestbook"
              className="hover:text-[#2c241c] hover:underline underline-offset-8 decoration-[#8c5836] transition-colors whitespace-nowrap shrink-0"
            >
              Guestbook
            </a>
          </nav>

          {/* Zone 3: 1 Primary CTA + Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Order Tab Drawer Button */}
            <button
              onClick={onOpenOrder}
              className="relative p-2.5 rounded-full bg-[#f3ece0] text-[#4a3b2f] border border-[#e2d5c3] hover:bg-[#eae0d0] transition-colors"
              aria-label="View order tab"
            >
              <ShoppingBag className="w-4 h-4" />
              {orderCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8c5836] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#2c241c] hover:bg-[#43382d] text-[#faf7f2] text-xs font-semibold tracking-wider uppercase rounded-md transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#e8dfd3]" />
              Reserve Table
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4a3b2f] hover:text-[#2c241c]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e8dfd3] bg-[#faf7f2] px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-[#4a3b2f]">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8c5836]"
              >
                Story & Philosophy
              </a>
              <a
                href="#sunset-rooftop"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8c5836]"
              >
                Sunset Rooftop & Zones
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8c5836]"
              >
                Artisanal Menu & Brews
              </a>
              <a
                href="#location-ghats"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8c5836]"
              >
                Ghats & Directions
              </a>
              <a
                href="#guestbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8c5836]"
              >
                Traveler Guestbook
              </a>
            </div>

            <div className="pt-3 border-t border-[#e8dfd3] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2c241c] text-[#faf7f2] text-xs font-semibold tracking-wider uppercase rounded-md shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Reserve Sunset Table
              </button>
              <a
                href={CAFE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#f0e7da] text-[#4a3b2f] text-xs font-medium rounded-md border border-[#e2d5c3]"
              >
                <MapPin className="w-4 h-4 text-[#8c5836]" />
                Find on Google Maps
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
