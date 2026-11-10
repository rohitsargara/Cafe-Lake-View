import React, { useState } from 'react';
import { Star, MessageCircle, Send, Check, Quote } from 'lucide-react';
import { REVIEWS, Review } from '../data/cafeData';

export const GuestbookSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newAuthor, setNewAuthor] = useState<string>('');
  const [newOrigin, setNewOrigin] = useState<string>('');
  const [newQuote, setNewQuote] = useState<string>('');
  const [newVibe, setNewVibe] = useState<string>('Sunset Coffee on Rooftop');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newQuote) return;

    const added: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      origin: newOrigin || 'World Traveler',
      date: 'Just now',
      rating: 5,
      quote: newQuote,
      vibe: newVibe,
    };

    setReviewsList([added, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddForm(false);
      setNewAuthor('');
      setNewOrigin('');
      setNewQuote('');
    }, 1800);
  };

  return (
    <section id="guestbook" className="py-24 sm:py-32 bg-[#faf7f2] text-[#2c241c] border-t border-[#e8dfd3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8c5836] font-semibold mb-3">
              <Quote className="w-4 h-4" />
              <span>Traveler Chronicles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c241c] mb-4">
              Whispers from the Rooftop.
            </h2>
            <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
              Words penned by nomads, spiritual pilgrims, and coffee purists from across India and around the world who found quiet along our balustrade.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-2.5 bg-[#ede5d9] hover:bg-[#2c241c] hover:text-white text-[#2c241c] text-xs font-semibold uppercase tracking-wider rounded-md transition-all self-start sm:self-auto shrink-0"
          >
            {showAddForm ? 'Close Form' : 'Write a Traveler Note'}
          </button>
        </div>

        {/* Add Note Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddReview}
            className="mb-14 p-6 sm:p-8 bg-[#f5ede0] rounded-xl border border-[#ded3c2] max-w-2xl shadow-sm space-y-4 animate-in fade-in duration-200"
          >
            <h3 className="font-serif font-bold text-lg text-[#2c241c]">
              Leave Your Pushkar Memory in the Guestbook
            </h3>

            {submitted ? (
              <div className="py-6 flex items-center justify-center gap-2 text-[#2d7a32] text-sm font-medium">
                <Check className="w-5 h-5" />
                <span>Your reflection has been added to the guestbook!</span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam or Priya"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded text-xs text-[#2c241c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                      Home City / Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Amsterdam, Netherlands"
                      value={newOrigin}
                      onChange={(e) => setNewOrigin(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded text-xs text-[#2c241c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a3b2f] mb-1">
                    Your Reflection or Favorite Brew
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your sunset experience or favorite coffee..."
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#d8cbbb] rounded text-xs text-[#2c241c] resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-xs text-[#6b5847] hover:text-[#2c241c]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#2c241c] text-white text-xs font-semibold rounded uppercase tracking-wider hover:bg-[#43382d]"
                  >
                    Publish Note
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 bg-[#fdfaf6] rounded-xl border border-[#e8dfd3] flex flex-col justify-between hover:border-[#d0bfab] transition-all hover:shadow-xs"
            >
              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-[#8c7866] mb-4 font-mono">
                  <span>{review.vibe}</span>
                  <span>{review.date}</span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-[#2c241c] leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author attribution (with claim-to-proof rigor) */}
              <div className="pt-4 border-t border-[#f0e7db] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#2c241c]">
                    {review.author}
                  </div>
                  <div className="text-xs text-[#8c7866]">
                    {review.origin}
                  </div>
                </div>

                {/* 5-Star indicator */}
                <div className="flex items-center gap-1 text-[#d97c45]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
