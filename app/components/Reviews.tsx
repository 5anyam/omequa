"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Rahul M.",
    city: "Mumbai",
    rating: 5,
    date: "May 2025",
    text: "Been taking this for 3 months and my cholesterol numbers improved significantly. Doctor was surprised. The capsules are easy to swallow and no fishy aftertaste!",
    helpful: 42,
    verified: true,
    avatar: "R",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Priya S.",
    city: "Bangalore",
    rating: 5,
    date: "Apr 2025",
    text: "My joint pain has reduced noticeably. I work long hours at a desk and this has made a real difference. Quality is excellent — packaging is premium too.",
    helpful: 38,
    verified: true,
    avatar: "P",
    avatarColor: "bg-purple-600",
  },
  {
    name: "Anil K.",
    city: "Delhi",
    rating: 5,
    date: "Apr 2025",
    text: "I've tried many omega-3 brands. Omequa is genuinely different — the 4X strength means I only need one capsule instead of four. Great value for money.",
    helpful: 29,
    verified: true,
    avatar: "A",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "Sneha T.",
    city: "Pune",
    rating: 4,
    date: "Mar 2025",
    text: "Noticed improvement in my energy levels and skin quality within 6 weeks. Will definitely order again. The triglyceride form makes a real difference.",
    helpful: 21,
    verified: true,
    avatar: "S",
    avatarColor: "bg-rose-500",
  },
  {
    name: "Vikram R.",
    city: "Hyderabad",
    rating: 5,
    date: "Mar 2025",
    text: "As a fitness enthusiast, recovery is everything. These capsules help with inflammation after heavy workouts. Highly recommend to anyone serious about health.",
    helpful: 34,
    verified: true,
    avatar: "V",
    avatarColor: "bg-amber-600",
  },
  {
    name: "Meena D.",
    city: "Chennai",
    rating: 5,
    date: "Feb 2025",
    text: "My neurologist recommended Omega-3 supplements. I chose Omequa for the high DHA content. Excellent product, fast delivery, and great customer support.",
    helpful: 18,
    verified: true,
    avatar: "M",
    avatarColor: "bg-teal-600",
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 76 },
  { stars: 4, pct: 16 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 1 },
];

export default function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 mb-4">
            Real Results, Real People
          </h2>
        </div>

        {/* Rating summary */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 mb-10 grid md:grid-cols-3 gap-8 items-center">
          {/* Big score */}
          <div className="text-center">
            <p className="text-7xl font-black text-blue-900">4.8</p>
            <div className="flex justify-center gap-0.5 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-400 text-sm">Based on 4,621 reviews</p>
          </div>

          {/* Bar chart */}
          <div className="md:col-span-2 space-y-2">
            {ratingBreakdown.map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium w-8 text-right">{stars}★</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400 w-8">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {visible.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`${review.avatarColor} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-400">{review.city} · {review.date}</p>
                  </div>
                </div>
                {review.verified && (
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{review.text}</p>

              {/* Helpful */}
              <div className="flex items-center gap-1.5 text-slate-400 text-xs border-t border-slate-50 pt-3">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{review.helpful} found helpful</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[...Array(pages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                page === i
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-200"
                  : "border border-slate-200 text-slate-500 hover:border-blue-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            disabled={page === pages - 1}
            className="p-2 rounded-full border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
