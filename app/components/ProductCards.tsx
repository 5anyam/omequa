"use client";

import { useState } from "react";
import { Star, ShoppingCart, Zap, Heart, Brain, Bone, Eye, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Omega-3 Fish Oil",
    subtitle: "4X Strength · Original",
    price: 899,
    mrp: 1299,
    strength: "2200mg",
    epa: "892mg",
    dha: "594mg",
    capsules: 60,
    rating: 4.8,
    reviews: 4621,
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
    color: "from-blue-700 to-blue-950",
    accent: "blue",
    benefits: ["Heart Health", "Brain Function", "Joint Support"],
    tag: "Most Popular",
    featured: true,
    viewCount: 247,
  },
  {
    id: 2,
    name: "Omega-3 + Vitamin D3",
    subtitle: "Immunity Booster",
    price: 1099,
    mrp: 1599,
    strength: "2200mg",
    epa: "892mg",
    dha: "594mg",
    capsules: 60,
    rating: 4.7,
    reviews: 2340,
    badge: "New",
    badgeColor: "bg-emerald-500",
    color: "from-purple-700 to-purple-950",
    accent: "purple",
    benefits: ["Immunity Boost", "Bone Strength", "Heart Health"],
    tag: "Premium Formula",
    featured: false,
    viewCount: 89,
  },
  {
    id: 3,
    name: "Omega-3 Triple Pack",
    subtitle: "90-Day Supply",
    price: 2399,
    mrp: 3897,
    strength: "2200mg",
    epa: "892mg",
    dha: "594mg",
    capsules: 180,
    rating: 4.9,
    reviews: 1180,
    badge: "Best Value",
    badgeColor: "bg-blue-600",
    color: "from-slate-700 to-slate-900",
    accent: "slate",
    benefits: ["3 Month Supply", "Max Savings", "Priority Shipping"],
    tag: "Save ₹1498",
    featured: false,
    viewCount: 134,
  },
];

const benefitIcons: Record<string, React.ElementType> = {
  "Heart Health": Heart,
  "Brain Function": Brain,
  "Joint Support": Bone,
  "Immunity Boost": Zap,
  "Bone Strength": Bone,
  "3 Month Supply": Check,
  "Max Savings": Star,
  "Priority Shipping": Zap,
  "Eye Health": Eye,
};

function LiveViewers({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
      </span>
      {count} viewing
    </span>
  );
}

function StockBar({ percent }: { percent: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-slate-500 font-medium">Stock remaining</span>
        <span className="text-[10px] font-bold text-red-500">{percent}% left</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function ProductCards() {
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAdd = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section id="products" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-2">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 mb-4">
            Choose Your Formula
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Premium, lab-tested Omega-3 supplements engineered for maximum absorption and efficacy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-3xl overflow-hidden card-hover bg-white border ${
                product.featured
                  ? "border-blue-200 shadow-2xl shadow-blue-100 ring-2 ring-blue-400/30"
                  : "border-slate-100 shadow-lg"
              }`}
            >
              {/* Popular tag */}
              {product.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold text-center py-1.5 tracking-wider z-10">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Product visual area */}
              <div
                className={`bg-gradient-to-br ${product.color} relative h-52 flex items-center justify-center overflow-hidden ${
                  product.featured ? "mt-7" : ""
                }`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full" />

                {/* Bottle visual */}
                <div
                  className="float-animation"
                  style={{ animationDelay: `${product.id * 0.3}s` }}
                >
                  <div className="w-24 h-36 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex flex-col items-center justify-center shadow-2xl relative">
                    <div className="absolute -top-3 w-14 h-5 bg-white/80 rounded-full" />
                    <div className="w-16 bg-white/90 rounded-xl p-1.5 mt-2">
                      <p className="text-[6px] font-black text-blue-900 text-center leading-tight">
                        OMEGA-3<br/>FISH OIL
                      </p>
                      <div className="bg-blue-700 rounded text-white text-[5px] font-bold text-center py-0.5 mt-0.5">
                        4X STRENGTH
                      </div>
                      <p className="text-[6px] text-blue-900 font-black text-center mt-0.5">
                        {product.strength}
                      </p>
                      <p className="text-[5px] text-slate-500 text-center">
                        {product.capsules} Caps
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div
                  className={`absolute top-3 right-3 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg`}
                >
                  {product.badge}
                </div>

                {/* Viewers */}
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1">
                  <LiveViewers count={product.viewCount} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Title + rating */}
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-black text-blue-950 text-base leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{product.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {product.rating} · {product.reviews.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Omega specs */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-xl p-2 text-center">
                    <p className="text-xs font-black text-blue-800">EPA</p>
                    <p className="text-sm font-bold text-blue-600">{product.epa}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-2 text-center">
                    <p className="text-xs font-black text-purple-800">DHA</p>
                    <p className="text-sm font-bold text-purple-600">{product.dha}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-1.5">
                  {product.benefits.map((benefit) => {
                    const Icon = benefitIcons[benefit] || Check;
                    return (
                      <div key={benefit} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                        {benefit}
                      </div>
                    );
                  })}
                </div>

                {/* Stock bar */}
                <StockBar percent={product.id === 1 ? 23 : product.id === 2 ? 61 : 38} />

                {/* Price + CTA */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-blue-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-400 line-through ml-2">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(product.id)}
                    className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all active:scale-95 text-sm ${
                      addedId === product.id
                        ? "bg-green-500 text-white"
                        : product.featured
                        ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-200 hover:shadow-xl"
                        : "bg-blue-950 hover:bg-blue-800 text-white"
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
