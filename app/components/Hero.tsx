"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Shield, Leaf, Award, ChevronDown } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "100%", label: "Lab Tested" },
  { value: "2200mg", label: "Per Serving" },
];

const badges = [
  { icon: Shield, text: "Lab Tested" },
  { icon: Leaf, text: "Sustainably Sourced" },
  { icon: Award, text: "4X Strength" },
];

function LiveBadge() {
  const [count, setCount] = useState(247);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3 - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      {count} people viewing right now
    </div>
  );
}

export default function Hero() {
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.005;
      if (bottleRef.current) {
        bottleRef.current.style.transform = `translateY(${Math.sin(angle) * 12}px) rotate(${Math.sin(angle * 0.7) * 2}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e40af" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating molecules */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-blue-400/20 border border-blue-300/30"
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + i * 5}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <div className="order-2 lg:order-1 space-y-6">
            <LiveBadge />

            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                Omequa™ Advanced
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-blue-950">
                Premium{" "}
                <span className="shimmer-text">Omega-3</span>
                <br />
                Fish Oil
              </h1>
              <p className="text-lg text-slate-500 font-medium">
                4X Strength · 2200mg Per Serving
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed max-w-lg">
              High-potency triglyceride form with EPA 892mg & DHA 594mg — enhanced
              with Vitamin D3, Vitamin E, and Astaxanthin for superior heart, brain,
              and joint health.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 bg-white border border-blue-100 shadow-sm text-slate-700 text-xs font-semibold px-3 py-2 rounded-full"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                  {text}
                </div>
              ))}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 5 ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600 font-medium">
                4.8 · <span className="text-blue-700 font-semibold">4,600+ reviews</span>
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-blue-200 active:scale-95 text-base"
              >
                Buy Now — ₹899
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">Save 30%</span>
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-800 font-semibold px-8 py-4 rounded-full border border-blue-200 transition-all text-base"
              >
                Learn the Science
              </a>
            </div>

            {/* Mini guarantee */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              30-day money-back guarantee · Free shipping above ₹499
            </p>
          </div>

          {/* Right — product visual */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-200/50 glow-animation" />
            </div>

            {/* Bottle placeholder (replace with Image tag when you add the product image) */}
            <div ref={bottleRef} className="relative z-10">
              <div className="w-48 h-72 lg:w-64 lg:h-96 bg-gradient-to-b from-[#1a3a8f] to-[#0d2260] rounded-[40px] shadow-2xl shadow-blue-900/40 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Bottle shine */}
                <div className="absolute top-0 left-8 w-8 h-full bg-white/10 blur-sm rounded-full" />
                <div className="absolute top-4 left-12 w-3 h-20 bg-white/15 rounded-full" />

                {/* Label area */}
                <div className="w-36 lg:w-48 bg-white rounded-2xl px-3 py-4 shadow-lg mx-2">
                  <p className="text-[8px] lg:text-[9px] text-slate-500 font-bold tracking-wider text-center">
                    Omequa™ Life Sciences
                  </p>
                  <p className="text-[11px] lg:text-xs font-black text-blue-900 text-center leading-tight mt-1">
                    OMEGA-3<br />FISH OIL
                  </p>
                  <div className="bg-blue-700 text-white text-[8px] font-bold text-center py-0.5 rounded mt-1 tracking-widest">
                    4X STRENGTH
                  </div>
                  <p className="text-[10px] lg:text-xs font-black text-blue-950 text-center mt-1">
                    2200 mg
                  </p>
                  <p className="text-[7px] text-slate-500 text-center">
                    EPA 892mg · DHA 594mg
                  </p>
                  <div className="mt-2 bg-amber-50 border border-amber-200 rounded p-1 text-center">
                    <p className="text-[7px] text-amber-700 font-semibold">
                      + Vit D3 · Vit E · Astaxanthin
                    </p>
                  </div>
                  <p className="text-[6px] text-slate-400 text-center mt-2">
                    60 Softgel Capsules
                  </p>
                </div>

                {/* Cap */}
                <div className="absolute -top-4 w-24 lg:w-32 h-8 bg-white/90 rounded-full shadow-md" />
              </div>

              {/* Floating info tags */}
              <div className="absolute -right-4 top-12 bg-white rounded-2xl shadow-xl px-3 py-2 border border-blue-50 badge-pulse">
                <p className="text-xs font-bold text-blue-900">EPA 892mg</p>
                <p className="text-[10px] text-slate-400">Heart health</p>
              </div>
              <div className="absolute -left-6 bottom-20 bg-white rounded-2xl shadow-xl px-3 py-2 border border-blue-50 badge-pulse" style={{ animationDelay: "0.5s" }}>
                <p className="text-xs font-bold text-blue-900">DHA 594mg</p>
                <p className="text-[10px] text-slate-400">Brain support</p>
              </div>
              <div className="absolute -right-2 bottom-8 bg-green-50 border border-green-200 rounded-2xl shadow-xl px-3 py-2 badge-pulse" style={{ animationDelay: "1s" }}>
                <p className="text-xs font-bold text-green-700">🧪 Lab Tested</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/80 backdrop-blur border border-blue-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-2xl font-black text-blue-800">{value}</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-12">
          <a href="#products" className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
            <span className="text-xs font-medium">Explore Products</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
