"use client";

import { Shield, Star, Truck, Award } from "lucide-react";

const items = [
  { icon: Shield, text: "Lab Tested & Certified" },
  { icon: Star, text: "4.8/5 Rating · 4600+ Reviews" },
  { icon: Truck, text: "Free Shipping Above ₹499" },
  { icon: Award, text: "4X Strength Formula" },
  { icon: Shield, text: "30-Day Money Back Guarantee" },
  { icon: Star, text: "50,000+ Happy Customers" },
  { icon: Truck, text: "Sustainably Sourced" },
  { icon: Award, text: "Triglyceride Form for Better Absorption" },
];

export default function Ticker() {
  return (
    <div className="bg-blue-900 text-white py-2.5 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...items, ...items].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="inline-flex items-center gap-2 mx-8 text-xs font-medium tracking-wide">
                <Icon className="w-3 h-3 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100">{item.text}</span>
                <span className="text-blue-600 ml-4">◆</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
