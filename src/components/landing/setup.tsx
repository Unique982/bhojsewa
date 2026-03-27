"use client";

import {
  UserPlus,
  Store,
  QrCode,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Business Account",
    desc: "Enter your Business Name & Details, set Password & Agreement, and go directly to Dashboard.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    number: "02",
    icon: Store,
    title: "Add Your Business Details",
    desc: "Upload Menu, Logo, Cover Images. Set Table Layout / Delivery Zones. Customize Business Settings.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    number: "03",
    icon: QrCode,
    title: "Generate QR Codes",
    desc: "One QR per table, or a single QR for entire venue. Print or display QR codes for customers.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Start Receiving Orders",
    desc: "Customers scan QR → browse menu → place order. Orders arrive instantly in your dashboard.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
];

export default function BusinessSetUpProcess() {
  return (
    <section
      id="set-up"
      className="relative py-12 px-6 md:px-12 overflow-hidden bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Easy Setup Process
          </span>
          <h2 className="font-bold text-3xl md:text-5xl mb-4">
            Live in under <span className="text-yellow-400">15 Minutes</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            No IT team needed. No complex integrations. Just four steps from
            sign-up to first order.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative p-6 rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 hover:shadow-xl animate-slide-up`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute top-4 right-4 text-3xl font-black text-white/20">
                  {step.number}
                </div>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.bg} ${step.border}`}
                >
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>

                <div className="mt-4">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-widest ${step.color}`}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="font-semibold text-lg mt-2">{step.title}</h3>
                  <p className="text-sm mt-2 text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:flex items-center justify-center mt-8 gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider px-4">
            {/* Total setup time: under 10 minutes */}
            14-Day Trial No Credit Card Setup in 15 Min
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
