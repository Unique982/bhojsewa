"use client";
import React from "react";

const items = [
  { icon: "⚡", label: "Instant QR Generation" },
  { icon: "🧾", label: "Digital Menu Management" },
  { icon: "📊", label: "Real-Time Analytics" },
  { icon: "💳", label: "Integrated Payments" },
  { icon: "🪑", label: "Table Management" },
  { icon: "🔔", label: "Live Order Tracking" },
  { icon: "🍽️", label: "Kitchen Display System" },
  { icon: "📱", label: "No App Required" },
];

export default function Ads() {
  return (
    <div className="border-y border-neutral-800 bg-neutral-950 py-4 overflow-hidden relative">
      <div className="marquee flex gap-6">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 px-6 whitespace-nowrap"
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
              {item.label}
            </span>
            <span className="text-gray-400 opacity-30 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
