import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryExperience } from './components/StoryExperience';
import { SunsetGuide } from './components/SunsetGuide';
import { MenuSection } from './components/MenuSection';
import { PushkarMapGuide } from './components/PushkarMapGuide';
import { GuestbookSection } from './components/GuestbookSection';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import { MenuItem } from './data/cafeData';
import { Check } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationDefaultZone, setReservationDefaultZone] = useState('balcony-edge');
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added "${item.name}" to your Table Tab`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemIds = cart.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.item.id] = curr.quantity;
    return acc;
  }, {});

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSelectZoneForReservation = (zoneId: string) => {
    setReservationDefaultZone(zoneId);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c241c] selection:bg-[#d97c45]/20 selection:text-[#8c5836]">
      {/* Top Bar Contract Compliant Header */}
      <Navbar
        onOpenReservation={() => {
          setReservationDefaultZone('balcony-edge');
          setIsReservationOpen(true);
        }}
        onOpenOrder={() => setIsOrderOpen(true)}
        orderCount={totalCartCount}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenReservation={() => {
            setReservationDefaultZone('balcony-edge');
            setIsReservationOpen(true);
          }}
        />

        {/* Story & Philosophy */}
        <StoryExperience />

        {/* Sunset Rooftop & Vantage Zones */}
        <SunsetGuide
          onSelectZoneForReservation={handleSelectZoneForReservation}
        />

        {/* Artisanal Food & Coffee Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Google Maps & Pushkar Ghats Guide */}
        <PushkarMapGuide />

        {/* Guestbook & Traveler Chronicles */}
        <GuestbookSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => {
          setReservationDefaultZone('balcony-edge');
          setIsReservationOpen(true);
        }}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        defaultZoneId={reservationDefaultZone}
      />

      {/* Order / Table Tab Slide-Over Drawer */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2c241c] text-[#faf7f2] px-4 py-3 rounded-lg shadow-xl border border-[#8c5836] flex items-center gap-2.5 text-xs animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#8c5836] text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsOrderOpen(true)}
            className="ml-2 font-mono underline font-medium text-[#d97c45] hover:text-white"
          >
            View Tab
          </button>
        </div>
      )}
    </div>
  );
}
