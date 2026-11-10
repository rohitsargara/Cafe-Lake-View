import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Send, ShoppingBag, Coffee, ArrowRight, Check } from 'lucide-react';
import { MenuItem, CAFE_DETAILS } from '../data/cafeData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('Rooftop Table 4');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST on dining in India
  const total = subtotal + gst;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrderSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const itemsList = cart
      .map((c) => `• ${c.item.name} x${c.quantity} - ₹${c.item.price * c.quantity}`)
      .join('%0A');
    const msg = `Hi Cafe Lake View! I would like to order:%0A${itemsList}%0A%0AOrder Type: ${orderType}%0A${
      orderType === 'dine-in' ? `Table: ${tableNumber}%0A` : ''
    }Notes: ${specialInstructions || 'None'}%0ATotal: ₹${total}`;

    window.open(`https://wa.me/919829082001?text=${msg}`, '_blank');
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm"
    >
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-[#faf7f2] shadow-2xl flex flex-col border-l border-[#e2d5c3] animate-in slide-in-from-right duration-200 text-[#2c241c]">
        {/* Drawer Header */}
        <div className="p-6 bg-[#f3ece0] border-b border-[#e2d5c3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#faf7f2] rounded-full text-[#8c5836] border border-[#e2d5c3]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Your Table Tab</h3>
              <p className="text-xs text-[#8c7866] font-mono">
                {cart.length} {cart.length === 1 ? 'offering' : 'offerings'} selected
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2c241c] text-white hover:bg-[#43382d] transition-all text-xs font-semibold cursor-pointer shadow-xs"
            aria-label="Close tab"
          >
            <X className="w-4 h-4" />
            <span className="text-xs">Close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-[#eef7ee] text-[#2d7a32] rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold">Order Received!</h4>
              <p className="text-sm text-[#5c4f42]">
                Our barista & kitchen have begun preparing your artisanal brew and dishes.
              </p>

              <div className="p-4 bg-white rounded-lg border border-[#e2d5c3] text-left text-xs space-y-2 mt-4 font-mono">
                <div className="flex justify-between">
                  <span className="text-[#8c7866]">Destination:</span>
                  <span className="font-semibold">{orderType === 'dine-in' ? tableNumber : 'Takeaway Counter'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c7866]">Total Due:</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Notify Barista on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setOrderSubmitted(false);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-2.5 bg-[#ede5d9] hover:bg-[#e4dacb] text-[#2c241c] text-xs font-medium rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Coffee className="w-10 h-10 text-[#c7b7a4] mx-auto" />
              <h4 className="font-serif text-lg font-bold text-[#4a3b2f]">Your Tab is Empty</h4>
              <p className="text-xs text-[#8c7866] max-w-xs mx-auto">
                Explore our single-estate pour-overs, botanical elixirs, and sourdough tartines.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#2c241c] text-white text-xs font-medium rounded-md"
              >
                View Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Items List */}
              <div className="space-y-3">
                {cart.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-lg border border-[#e8dfd3] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-serif font-semibold text-sm truncate text-[#2c241c]">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#8c7866] font-mono">
                        ₹{item.price} each · ₹{item.price * quantity}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#d8cbbb] rounded bg-[#faf7f2]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:bg-[#ede5d9] text-[#6b5847] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-medium">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:bg-[#ede5d9] text-[#6b5847] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#b09b88] hover:text-[#c44] transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="space-y-4 pt-4 border-t border-[#e2d5c3] text-xs">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#6b5847] mb-1.5">
                    Order Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 rounded border text-xs font-medium transition-all ${
                        orderType === 'dine-in'
                          ? 'bg-[#2c241c] text-white border-[#2c241c]'
                          : 'bg-white text-[#4a3b2f] border-[#d8cbbb]'
                      }`}
                    >
                      Rooftop Dine-In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 rounded border text-xs font-medium transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-[#2c241c] text-white border-[#2c241c]'
                          : 'bg-white text-[#4a3b2f] border-[#d8cbbb]'
                      }`}
                    >
                      Takeaway / Ghats Stroll
                    </button>
                  </div>
                </div>

                {orderType === 'dine-in' && (
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#6b5847] mb-1">
                      Table / Seating Area
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder="e.g. Balcony Edge Table 3, Diwan Nook"
                      className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#8c5836]"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#6b5847] mb-1">
                    Barista / Dietary Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. Oat milk, less ice, warm honey on the side..."
                    className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#8c5836] resize-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Calculations */}
        {cart.length > 0 && !orderSubmitted && (
          <div className="p-6 bg-[#f3ece0] border-t border-[#e2d5c3] space-y-3">
            <div className="space-y-1.5 text-xs text-[#5c4f42]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#8c7866]">
                <span>State GST (5%)</span>
                <span className="font-mono tabular-nums">₹{gst}</span>
              </div>
              <div className="flex justify-between font-serif font-bold text-base text-[#2c241c] pt-2 border-t border-[#dfd4c4]">
                <span>Total Amount</span>
                <span className="font-mono tabular-nums">₹{total}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-3.5 bg-[#2c241c] hover:bg-[#43382d] text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Place Table Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
