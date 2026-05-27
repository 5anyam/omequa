"use client";

import { Heart, Brain, Bone, Zap, Droplets, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "4X Potency",
    desc: "4X stronger than standard fish oil — the same results in fewer capsules.",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Heart,
    title: "Heart Health",
    desc: "High EPA (892mg) clinically shown to support cardiovascular function.",
    color: "bg-red-50 border-red-100",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Brain,
    title: "Brain & Mood",
    desc: "DHA 594mg supports cognitive function, focus, and mental clarity.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Droplets,
    title: "Superior Absorption",
    desc: "Triglyceride form absorbs up to 70% better than ethyl ester alternatives.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Bone,
    title: "Joint Support",
    desc: "Reduces inflammation markers for flexible, pain-free joints.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Triple Enhanced",
    desc: "Fortified with Vitamin D3, E & Astaxanthin — a powerful antioxidant trio.",
    color: "bg-teal-50 border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export default function KeyFeatures() {
  return (
    <section id="science" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-2">
            The Science
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 mb-4">
            Why Omequa Works
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every ingredient backed by clinical research. No fillers, no shortcuts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`${f.color} border rounded-2xl p-6 card-hover`}
              >
                <div
                  className={`${f.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <h3 className="font-black text-slate-800 text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Science strip */}
        <div className="mt-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-300 text-sm font-bold tracking-widest uppercase mb-3">
                Clinical Backing
              </p>
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                Triglyceride Form —<br />The Gold Standard
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Unlike cheaper ethyl ester fish oils, our triglyceride form closely
                mimics natural fish oil structure. Studies show up to 70% better
                bioavailability — meaning your body actually absorbs what you pay for.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sardines", "Anchovies", "Wild-Caught", "No Heavy Metals"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "70%", label: "Better Absorption" },
                { val: "2200mg", label: "Per Serving" },
                { val: "100%", label: "Purity Tested" },
                { val: "60", label: "Softgel Capsules" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl font-black text-white">{val}</p>
                  <p className="text-blue-300 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
