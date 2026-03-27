"use client";

const businessBenefits = [
  {
    icon: "⚡",
    title: "Faster Service",
    desc: "Guests can order instantly from their table. No waiting for staff — orders reach the kitchen in seconds.",
  },
  {
    icon: "👨‍🍳",
    title: "Less Staff Workload",
    desc: "Your team focuses on cooking and hospitality, not running back and forth taking orders manually.",
  },
  {
    icon: "🔄",
    title: "Better Table Turnover",
    desc: "Faster ordering means faster meals. Businesses see up to 35% more covers per shift.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "Track peak hours, top sellers, and slow movers. Make smarter decisions with real-time analytics.",
  },
];

const guestBenefits = [
  {
    icon: "📱",
    title: "Order at Your Pace",
    desc: "Guests can browse the full menu, read descriptions, see photos, and order when ready.",
  },
  {
    icon: "🚫",
    title: "Zero Wait Time",
    desc: "No flagging down staff or waiting. Orders go straight to the kitchen instantly.",
  },
  {
    icon: "🤝",
    title: "Contactless Dining",
    desc: "No physical menus to touch. Pay digitally. Safe and clean dining experience.",
  },
  {
    icon: "📍",
    title: "Live Order Status",
    desc: "Guests see exactly where their order is — confirmed, preparing, or on its way.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-12 px-6 md:px-10 bg-neutral-900 relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16c">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Why BhojSewa
          </span>
          <h2 className="font-bold text-3xl text-white md:text-5xl mb-4">
            Built for {""}
            <span className="text-yellow-400">Business</span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-12">
            See how hospitality businesses are improving service, increasing
            orders, and delighting customers using our SaaS platform.
          </p>
        </div>

        {/* Dual Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Business Panel */}
          <div className="scroll-reveal hidden-init rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-10 ">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
                <span className="text-sm">🏨</span>
                <span className="text-[11px] font-bold text-yellow-500 uppercase tracking-wider font-mono">
                  For Businesses
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                Run a leaner, smarter hospitality business.
              </h3>
            </div>
            <div className="space-y-6">
              {businessBenefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex gap-4 scroll-reveal hidden-init"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center text-lg shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1 text-base">
                      {b.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Panel */}
          <div className="scroll-reveal hidden-init rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 md:p-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                <span className="text-sm">😊</span>
                <span className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider font-mono">
                  For Guests
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                Dining made effortless and enjoyable.
              </h3>
            </div>
            <div className="space-y-6">
              {guestBenefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex gap-4 scroll-reveal hidden-init"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-lg shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1 text-base">
                      {b.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
