"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Mail, ArrowRight, Shield, Leaf, Award, Star } from "lucide-react";

function LiveBadge() {
  const [count, setCount] = useState(312);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3 - 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-4 py-2 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      {count} people waiting for launch
    </div>
  );
}

function FloatingBottle() {
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
    <div className="relative flex items-center justify-center">
      {/* Glow ring */}
      <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-200/50 glow-animation" />

      {/* Bottle */}
      <div ref={bottleRef} className="relative z-10">
        <div className="w-44 h-64 lg:w-56 lg:h-80 bg-gradient-to-b from-[#1a3a8f] to-[#0d2260] rounded-[40px] shadow-2xl shadow-blue-900/40 relative overflow-hidden flex flex-col items-center justify-center">
          {/* Shine */}
          <div className="absolute top-0 left-8 w-8 h-full bg-white/10 blur-sm rounded-full" />
          <div className="absolute top-4 left-12 w-3 h-20 bg-white/15 rounded-full" />

          {/* Label */}
          <div className="w-32 lg:w-40 bg-white rounded-2xl px-3 py-4 shadow-lg mx-2">
            <p className="text-[8px] lg:text-[9px] text-slate-500 font-bold tracking-wider text-center">
              Omequa™ Life Sciences
            </p>
            <p className="text-[11px] lg:text-xs font-black text-blue-900 text-center leading-tight mt-1">
              OMEGA-3<br />FISH OIL
            </p>
            <div className="bg-blue-700 text-white text-[8px] font-bold text-center py-0.5 rounded mt-1 tracking-widest">
              4X STRENGTH
            </div>
            <p className="text-[10px] lg:text-xs font-black text-blue-950 text-center mt-1">2200 mg</p>
            <p className="text-[7px] text-slate-500 text-center">EPA 892mg · DHA 594mg</p>
            <div className="mt-2 bg-amber-50 border border-amber-200 rounded p-1 text-center">
              <p className="text-[7px] text-amber-700 font-semibold">+ Vit D3 · Vit E · Astaxanthin</p>
            </div>
            <p className="text-[6px] text-slate-400 text-center mt-2">60 Softgel Capsules</p>
          </div>
          {/* Cap */}
          <div className="absolute -top-4 w-20 lg:w-28 h-7 bg-white/90 rounded-full shadow-md" />
        </div>

        {/* Floating tags */}
        <div className="absolute -right-6 top-10 bg-white rounded-2xl shadow-xl px-3 py-2 border border-blue-50 badge-pulse">
          <p className="text-xs font-bold text-blue-900">EPA 892mg</p>
          <p className="text-[10px] text-slate-400">Heart health</p>
        </div>
        <div className="absolute -left-8 bottom-16 bg-white rounded-2xl shadow-xl px-3 py-2 border border-blue-50 badge-pulse" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs font-bold text-blue-900">DHA 594mg</p>
          <p className="text-[10px] text-slate-400">Brain support</p>
        </div>
        <div className="absolute -right-4 bottom-4 bg-green-50 border border-green-200 rounded-2xl shadow-xl px-3 py-2 badge-pulse" style={{ animationDelay: "1s" }}>
          <p className="text-xs font-bold text-green-700">🧪 Lab Tested</p>
        </div>
      </div>
    </div>
  );
}

const badges = [
  { icon: Shield, text: "Lab Tested" },
  { icon: Leaf, text: "Sustainably Sourced" },
  { icon: Award, text: "4X Strength" },
  { icon: Star, text: "Premium Quality" },
];

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      {/* Ticker */}
      <div className="bg-blue-900 text-white py-2.5 overflow-hidden fixed top-0 left-0 right-0 z-50">
        <div className="ticker-wrap">
          <div className="ticker-content text-xs font-medium tracking-wide">
            {[
              "🧬 Lab Tested & Certified",
              "🌊 Sustainably Sourced",
              "⚡ 4X Strength Formula",
              "🛡️ Triglyceride Form for Better Absorption",
              "🌿 Enhanced with Vit D3, E & Astaxanthin",
              "🚀 Launching Soon",
            ].flatMap((t, i) => [
              <span key={`a${i}`} className="inline-flex items-center mx-8 text-blue-100">{t}</span>,
              <span key={`d${i}`} className="text-blue-600 mx-2">◆</span>,
            ]).concat(
              ["🧬 Lab Tested & Certified", "🌊 Sustainably Sourced", "⚡ 4X Strength Formula", "🛡️ Triglyceride Form", "🌿 Enhanced with Vit D3", "🚀 Launching Soon"].flatMap((t, i) => [
                <span key={`b${i}`} className="inline-flex items-center mx-8 text-blue-100">{t}</span>,
                <span key={`e${i}`} className="text-blue-600 mx-2">◆</span>,
              ])
            )}
          </div>
        </div>
      </div>

      <main className="min-h-screen hero-gradient flex items-center justify-center px-4 pt-10 pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e40af" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-blue-400/20 border border-blue-300/30"
              style={{
                top: `${20 + i * 15}%`,
                left: `${3 + i * 4}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xl font-black tracking-tight text-blue-950 leading-none">Omequa</p>
                <p className="text-[9px] text-blue-400 font-semibold tracking-widest leading-none mt-0.5">LIFE SCIENCES</p>
              </div>
            </div>

            <LiveBadge />

            <div>
              <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Something big is coming
              </p>
              <h1 className="text-5xl sm:text-6xl font-black text-blue-950 leading-tight">
                Premium<br />
                <span className="shimmer-text">Omega-3</span><br />
                Coming Soon
              </h1>
            </div>

            <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              High-potency triglyceride form Omega-3, enhanced with Vitamin D3, E &
              Astaxanthin — engineered for your heart, brain, and joints.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 bg-white border border-blue-100 shadow-sm text-slate-700 text-xs font-semibold px-3 py-2 rounded-full">
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                  {text}
                </div>
              ))}
            </div>

            {/* Email form */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-600">Get notified at launch — exclusive early-bird offer inside.</p>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 font-semibold text-sm px-6 py-4 rounded-2xl text-center">
                  You&apos;re on the list! 🎉 We&apos;ll reach out when we go live.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-4 shadow-sm">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 py-4 text-sm text-slate-700 placeholder-slate-300 bg-transparent outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-200 active:scale-95 whitespace-nowrap"
                  >
                    Notify Me <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-slate-300 text-xs">No spam. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Right — bottle */}
          <div className="order-1 lg:order-2 flex justify-center">
            <FloatingBottle />
          </div>
        </div>
      </main>
    </>
  );
}
