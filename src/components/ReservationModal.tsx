import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Phone, MessageSquare, Download } from 'lucide-react';
import { ROOFTOP_ZONES, CAFE_DETAILS } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultZoneId?: string;
}

interface BookingDetails {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  zoneId: string;
  guests: number;
  specialRequests: string;
  createdAt: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  defaultZoneId = 'balcony-edge',
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('04:45 PM · Golden Hour Sunset');
  const [selectedZone, setSelectedZone] = useState<string>(defaultZoneId);
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll behind modal
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    { label: '07:30 AM · Sunrise Calm & Morning Mist', popular: false },
    { label: '10:30 AM · Slow Coffee & Sourdough Brunch', popular: false },
    { label: '01:30 PM · Shaded Diwan & Reading Nook', popular: false },
    { label: '04:45 PM · Golden Hour Sunset (Peak Lake Vibe)', popular: true },
    { label: '06:15 PM · Evening Ghats Aarti & Bell Chimes', popular: true },
    { label: '07:45 PM · Starlit Rooftop & Acoustic Evening', popular: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newBooking: BookingDetails = {
      id: `CLV-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      phone,
      email: email || 'guest@pushkar.com',
      date,
      timeSlot,
      zoneId: selectedZone,
      guests,
      specialRequests: notes,
      createdAt: new Date().toLocaleTimeString(),
    };

    setConfirmedBooking(newBooking);
    setStep('confirmed');
  };

  const selectedZoneDetails = ROOFTOP_ZONES.find((z) => z.id === selectedZone) || ROOFTOP_ZONES[0];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm p-3 sm:p-6 flex justify-center items-start animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#faf7f2] rounded-2xl border border-[#e2d5c3] shadow-2xl text-[#2c241c] my-4 sm:my-8 overflow-hidden">
        {/* Sticky Header with Always-Visible Close Button */}
        <div className="sticky top-0 z-30 px-5 sm:px-6 py-4 bg-[#f3ece0]/95 backdrop-blur-md border-b border-[#e2d5c3] flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8c5836] font-semibold block truncate">
              Rooftop Table Booking
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2c241c] truncate">
              {step === 'form' ? 'Reserve Your Lake View Seat' : 'Reservation Confirmed'}
            </h3>
          </div>

          {/* Prominent High-Contrast Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2c241c] text-white hover:bg-[#43382d] border border-[#2c241c] transition-all text-xs font-semibold shrink-0 shadow-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
            <span className="text-xs">Close</span>
          </button>
        </div>

        {/* Content Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-6">
            {/* Step 1: Rooftop Zone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b5847] mb-2">
                1. Choose Your Rooftop Seating Zone
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {ROOFTOP_ZONES.map((zone) => (
                  <button
                    type="button"
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      selectedZone === zone.id
                        ? 'bg-[#2c241c] text-white border-[#2c241c] shadow'
                        : 'bg-white text-[#4a3b2f] border-[#e2d5c3] hover:bg-[#f7f2ea]'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm mb-0.5">{zone.name}</div>
                    <div className={`text-[11px] truncate ${selectedZone === zone.id ? 'text-[#ded4c7]' : 'text-[#8c7866]'}`}>
                      {zone.vibe}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b5847] mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b5847] mb-1.5">
                  Seating Experience
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.label} value={slot.label}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests Counter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b5847] mb-1.5">
                Number of Guests
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setGuests(num)}
                    className={`w-9 h-9 rounded-md text-xs font-mono font-medium transition-all ${
                      guests === num
                        ? 'bg-[#8c5836] text-white shadow-sm'
                        : 'bg-white border border-[#d8cbbb] text-[#4a3b2f] hover:bg-[#f3ece0]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="text-xs text-[#8c7866] ml-2">guests</span>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-3 pt-3 border-t border-[#e2d5c3]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                  Email (Optional for pass confirmation)
                </label>
                <input
                  type="email"
                  placeholder="maya@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                  Special Notes (Photography, Birthday, Quiet corner, Dietary)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sunset photography, need edge corner table"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded-md text-xs text-[#2c241c] focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                />
              </div>
            </div>

            {/* Submit & Cancel Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#2c241c] hover:bg-[#43382d] text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-all shadow hover:shadow-md cursor-pointer"
              >
                Confirm Sunset Table Booking
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-transparent hover:bg-[#ede5d9] text-[#6b5847] hover:text-[#2c241c] text-xs font-medium rounded-md transition-colors border border-[#e2d5c3] cursor-pointer"
              >
                Cancel & Close
              </button>

              <p className="text-[11px] text-[#8c7866] text-center mt-1 font-mono">
                No deposit needed · Tables held for 20 minutes past reservation time
              </p>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-5 sm:p-7 space-y-6 text-[#2c241c]">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#eef7ee] text-[#2d7a32] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-bold">Your Table is Reserved</h4>
              <p className="text-xs text-[#5c4f42]">
                We look forward to welcoming you to the rooftop above Pushkar Lake.
              </p>
            </div>

            {/* Styled Boarding Pass Card */}
            <div className="bg-white rounded-lg p-5 border border-[#dfd4c4] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f0e7db]">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8c5836]">Reservation Code</span>
                  <div className="font-mono text-base font-bold text-[#2c241c]">{confirmedBooking?.id}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-[#8c7866]">Guest</span>
                  <div className="font-serif font-bold text-sm text-[#2c241c]">{confirmedBooking?.name}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[11px] text-[#8c7866] block">Date</span>
                  <span className="font-medium text-[#2c241c] font-mono">{confirmedBooking?.date}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#8c7866] block">Time Slot</span>
                  <span className="font-medium text-[#2c241c]">{confirmedBooking?.timeSlot.split('·')[0]}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#8c7866] block">Party Size</span>
                  <span className="font-medium text-[#2c241c]">{confirmedBooking?.guests} Guests</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0e7db] text-xs">
                <span className="text-[11px] text-[#8c7866] block">Reserved Zone</span>
                <span className="font-serif font-bold text-[#8c5836] text-sm">
                  {selectedZoneDetails.name}
                </span>
                <span className="text-[#6b5847] block text-[11px] mt-0.5">
                  {selectedZoneDetails.view}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/919829082001?text=Hi%20Cafe%20Lake%20View%2C%20I%20have%20booked%20table%20${confirmedBooking?.id}%20for%20${confirmedBooking?.name}%20on%20${confirmedBooking?.date}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </a>

              <a
                href={CAFE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3 px-4 bg-[#ede5d9] hover:bg-[#e4dacb] text-[#2c241c] text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#8c5836]" />
                <span>Get Walking Directions</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-md bg-[#ede5d9] hover:bg-[#2c241c] hover:text-white text-xs font-medium text-[#2c241c] transition-colors cursor-pointer"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
