"use client";

const features = [
  {
    icon: "📲",
    title: "QR Menu System",
    desc: "Generate unique QR codes per table, section, or event. Update your menu in real-time without reprinting.",
    stat: "0 Print Costs",
    size: "md:col-span-8",
  },
  {
    icon: "⚡",
    title: "Instant KDS",
    desc: "Orders reach your kitchen in under 2 seconds with zero miscommunication.",
    stat: "<2s Delivery",
    size: "md:col-span-4",
  },
  {
    icon: "🌐",
    title: "Multi-Language Support",
    desc: "Menus available in English and Nepali for local and international guests.",
    stat: "EN + NP",
    size: "md:col-span-4",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Track peak hours, best-selling dishes, and revenue trends from a single dashboard.",
    stat: "47+ Metrics",
    size: "md:col-span-4",
  },
  {
    icon: "💰",
    title: "Billing & Payments",
    desc: "Generate invoices and tax/VAT bills. Accept cash or online payments, split bills, apply discounts or promo codes, and view past invoices.",
    stat: "Invoices + Payments",
    size: "md:col-span-4",
  },
  {
    icon: "🪑",
    title: "Table & Room Management",
    desc: "Visual floor map for tables and rooms with live status. Seat guests faster and manage rooms efficiently.",
    stat: "35% Faster Turns",
    size: "md:col-span-6",
  },
  {
    icon: "🔔",
    title: "Order Tracking",
    desc: "Guests see live order status on their phone. Reduce staff interruptions by 60%.",
    stat: "60% Less Queries",
    size: "md:col-span-6",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-12 px-4 md:px-10 bg-neutral-950  relative overflow-hidden"
      id="features"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg- from-yellow-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Features
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Everything your <span className="text-neutral-500">Business</span>
            <br />
            <span className="italic text-yellow-400">needs to thrive.</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Built for modern hospitality — from single cafes to multi-outlet
            hotel chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 flex flex-col justify-between hover:border-yellow-500/50 transition-all duration-500 ${feature.size}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest font-mono">
                    {feature.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
