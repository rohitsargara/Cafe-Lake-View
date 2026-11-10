import React, { useState } from 'react';
import { Plus, Check, Info, Sparkles, Coffee, Utensils, Leaf, X } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/cafeData';
import foodSpreadImage from '../assets/images/organic_food_spread_1794303613380.jpg';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'coffee', label: 'Manual Brews & Coffee' },
    { id: 'tea', label: 'Teas & Elixirs' },
    { id: 'sourdough', label: 'Artisan Sourdough' },
    { id: 'bowls', label: 'Wholesome Bowls' },
    { id: 'desserts', label: 'Sunset Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (selectedDietary === 'plant-based') {
      return item.tags.some((t) => t.toLowerCase().includes('plant') || t.toLowerCase().includes('vegan'));
    }
    if (selectedDietary === 'gluten-free') {
      return item.tags.some((t) => t.toLowerCase().includes('gluten'));
    }
    if (selectedDietary === 'signature') {
      return item.isPopular;
    }
    return true;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#faf7f2] text-[#2c241c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8c5836] font-semibold mb-3">
              <Leaf className="w-4 h-4" />
              <span>Conscious Pushkar Kitchen</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c241c] mb-4">
              Nourishment crafted with patience and single-estate integrity.
            </h2>
            <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
              From dawn pour-overs to dusk sourdough tartines, our seasonal menu highlights organic desert produce, house-fermented sourdough, and shade-grown Indian micro-lots.
            </p>
          </div>

          {/* Quick Dietary Filters (Functional Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ede4d8] rounded-lg self-start lg:self-auto">
            <button
              onClick={() => setSelectedDietary('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedDietary === 'all'
                  ? 'bg-white text-[#2c241c] shadow-sm font-semibold'
                  : 'text-[#6b5847] hover:text-[#2c241c]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setSelectedDietary('signature')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedDietary === 'signature'
                  ? 'bg-white text-[#2c241c] shadow-sm font-semibold'
                  : 'text-[#6b5847] hover:text-[#2c241c]'
              }`}
            >
              Barista Picks
            </button>
            <button
              onClick={() => setSelectedDietary('plant-based')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedDietary === 'plant-based'
                  ? 'bg-white text-[#2c241c] shadow-sm font-semibold'
                  : 'text-[#6b5847] hover:text-[#2c241c]'
              }`}
            >
              Plant-Based
            </button>
            <button
              onClick={() => setSelectedDietary('gluten-free')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedDietary === 'gluten-free'
                  ? 'bg-white text-[#2c241c] shadow-sm font-semibold'
                  : 'text-[#6b5847] hover:text-[#2c241c]'
              }`}
            >
              Gluten-Free
            </button>
          </div>
        </div>

        {/* Featured Visual Banner of Organic Food Spread */}
        <div className="mb-14 relative rounded-xl overflow-hidden border border-[#e2d5c3] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-[260px] sm:h-[340px]">
              <img
                src={foodSpreadImage}
                alt="Organic artisan sourdough tartines, falafel mezze and golden latte spread"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#f4ece1] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8c5836]">
                All-Day Sourdough & Bowls
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2c241c]">
                Freshly Baked Sourdough Batards & Mezze
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
                Slow fermented for 36 hours using indigenous wild yeast, our rustic breads are paired with Mediterranean dips, ripe avocado, and local garden herbs.
              </p>
              <div className="pt-2 text-xs text-[#8c5836] font-medium flex items-center gap-2">
                <span>Made fresh every morning from 7:30 AM</span>
                <span aria-hidden="true">·</span>
                <span>Wood-fired crust</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#e2d5c3] no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#2c241c] text-white shadow-sm'
                    : 'bg-[#ede5d9] text-[#5c4f42] hover:bg-[#e4dacb]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const countInCart = cartItemIds[item.id] || 0;
            return (
              <div
                key={item.id}
                className="bg-[#fcfaf7] rounded-lg p-6 border border-[#e8dfd3] hover:border-[#cfbeaa] transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  {/* Clean unboxed metadata header */}
                  <div className="flex items-center justify-between text-xs text-[#8c7866] mb-2 font-mono">
                    <span className="uppercase tracking-wider">{item.category}</span>
                    {item.isPopular && (
                      <span className="text-[#8c5836] font-semibold">House Specialty</span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-lg font-bold text-[#2c241c] group-hover:text-[#8c5836] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-mono text-base font-semibold text-[#2c241c] tabular-nums shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Flavor Notes (Unboxed Text with Separators) */}
                  {item.notes && item.notes.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#8c7866] mb-4">
                      <span className="font-medium text-[#4a3b2f]">Notes:</span>
                      {item.notes.map((note, idx) => (
                        <React.Fragment key={idx}>
                          <span>{note}</span>
                          {idx < item.notes!.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Detail Info & Add To Tab */}
                <div className="pt-4 border-t border-[#f0e7db] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveItemModal(item)}
                    className="text-xs text-[#8c5836] hover:text-[#2c241c] font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Brew Details</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(item)}
                    className={`px-3.5 py-1.5 rounded text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 ${
                      countInCart > 0
                        ? 'bg-[#8c5836] text-white shadow-sm'
                        : 'bg-[#ede5d9] hover:bg-[#2c241c] hover:text-white text-[#4a3b2f]'
                    }`}
                  >
                    {countInCart > 0 ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added ({countInCart})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tab</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filter yields zero items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#f7f2eb] rounded-lg border border-[#e2d5c3]">
            <p className="text-sm text-[#6b5847] mb-3">No offerings matching this dietary selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('all');
              }}
              className="text-xs text-[#8c5836] underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {activeItemModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveItemModal(null);
          }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm p-3 sm:p-6 flex justify-center items-start animate-in fade-in duration-150"
        >
          <div className="bg-[#faf7f2] rounded-xl max-w-lg w-full p-5 sm:p-7 border border-[#e2d5c3] shadow-2xl relative text-[#2c241c] my-4 sm:my-8">
            <button
              type="button"
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2c241c] text-white hover:bg-[#43382d] text-xs font-semibold cursor-pointer shadow-xs transition-colors"
              aria-label="Close modal"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>

            <div className="text-xs font-mono uppercase tracking-widest text-[#8c5836] mb-2">
              {activeItemModal.category}
            </div>

            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="font-serif text-2xl font-bold text-[#2c241c]">
                {activeItemModal.name}
              </h3>
              <span className="font-mono text-xl font-bold text-[#2c241c] tabular-nums">
                ₹{activeItemModal.price}
              </span>
            </div>

            <p className="text-sm text-[#5c4f42] leading-relaxed mb-6">
              {activeItemModal.description}
            </p>

            {activeItemModal.origin && (
              <div className="mb-4 p-3.5 bg-[#f3ece0] rounded border border-[#e2d5c3]">
                <div className="text-[11px] uppercase tracking-wider text-[#8c5836] font-semibold mb-1">
                  Estate Terroir & Origin
                </div>
                <div className="text-xs text-[#2c241c] font-medium">{activeItemModal.origin}</div>
              </div>
            )}

            {activeItemModal.notes && (
              <div className="mb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#8c7866] font-semibold mb-2">
                  Tasting & Botanical Profile
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#5c4f42]">
                  {activeItemModal.notes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#ede5d9] rounded text-[11px] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-[#e2d5c3]">
              <button
                onClick={() => {
                  onAddToCart(activeItemModal);
                  setActiveItemModal(null);
                }}
                className="flex-1 py-3 bg-[#2c241c] hover:bg-[#43382d] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add to My Table Tab (₹{activeItemModal.price})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
