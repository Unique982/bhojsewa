"use client";
import React, { useEffect, useRef } from "react";
import { Zap, ArrowRight, ShieldCheck, Timer } from "lucide-react";

export default function AdvertisementCard() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal-init");
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal-init opacity-0 translate-y-10 transition-all duration-1000 ease-out relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden p-1">
          {/* Animated Glow Backgrounds */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-8 md:p-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-[11px] font-bold text-yellow-400 uppercase tracking-[0.2em] mb-8">
                <Zap size={14} className="fill-current" />
                Exclusive Founder's Offer
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                Launch your digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic">
                  menu for free today
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Join the{" "}
                <span className="text-white font-medium">
                  BhojSewa Early Access
                </span>{" "}
                program. Get 3 months of premium features for free when you sign
                up before March 31st.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "0", label: "Setup Cost", suffix: "%" },
                  { value: "15", label: "Live Time", suffix: "min" },
                  { value: "24/7", label: "Support", suffix: "" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.value}
                      <span className="text-yellow-400 text-sm">
                        {item.suffix}
                      </span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Pricing/Action */}
            <div className="w-full lg:w-auto flex flex-col items-center gap-6">
              <div className="w-full sm:w-72 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md relative group transition-all hover:border-yellow-400/30">
                <div className="absolute inset-0 bg-yellow-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                <div className="relative z-10 text-center">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-4">
                    Starting At
                  </span>
                  <div className="flex items-start justify-center gap-1 mb-2">
                    <span className="text-5xl font-black text-white">$0</span>
                    <span className="text-gray-500 text-sm mt-2">/mo</span>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase mb-6">
                    Risk Free Trial
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    {["Scan-to-Order", "Digital Menu", "KDS Access"].map(
                      (feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-gray-300"
                        >
                          <ShieldCheck size={14} className="text-yellow-400" />
                          {feat}
                        </div>
                      ),
                    )}
                  </div>

                  <a
                    href="#pricing"
                    className="w-full py-4 rounded-xl bg-yellow-400 text-black font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all active:scale-95"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
                <Timer size={12} className="text-orange-500" />
                Limited to first 100 restaurants
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
