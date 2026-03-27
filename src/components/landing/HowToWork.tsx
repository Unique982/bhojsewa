"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "S1",
    icon: "📱",
    title: "Guest Scans the QR",
    desc: "Each table has a unique QR code. Guests scan it with any smartphone camera — no app, no download, no friction.",
    highlight: "Works on every device",
    color: "border-yellow-400/40 bg-yellow-400/10",
    dotColor: "bg-yellow-400",
  },
  {
    number: "S2",
    icon: "🍽️",
    title: "Browse Digital Menu",
    desc: "A beautiful, photo-rich menu opens instantly in the browser. Filter by category, dietary preference, or price.",
    highlight: "Updated in real-time",
    color: "border-cyan-400/40 bg-cyan-400/10",
    dotColor: "bg-cyan-400",
  },
  {
    number: "S3",
    icon: "🚀",
    title: "Order Goes to Kitchen",
    desc: "The order hits your kitchen display system in under 2 seconds. No misheard items. No lost tickets. Just clarity.",
    highlight: "< 2 second delivery",
    color: "border-pink-400/40 bg-pink-400/10",
    dotColor: "bg-pink-400",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 px-4 md:px-10 bg-neutral-950  relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg- from-yellow-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            How BhojSewa Works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Three steps to <br></br>
            <span className="text-yellow-400">effortless</span> dining.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-reveal hidden-init rounded-3xl border p-8 md:p-10 hover:shadow-lg transition-all duration-300 ${step.color} ${
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                    ? "md:col-span-4"
                    : "md:col-span-3"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{step.icon}</div>
                <span className="text-[10px] font-mono text-white/70 border border-white/20 rounded-full px-2 py-1">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                {step.desc}
              </p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${step.dotColor}`} />
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
