"use client";

import Image from "next/image";
import Link from "next/link";
import {
  QrCode,
  Utensils,
  Coffee,
  Hotel,
  Home,
  Play,
  ArrowRight,
  Users,
  ShoppingCart,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import VideoModal from "./DemoVideo";

// import VideoModal from "./DemoVideo";

const metrics = [
  {
    label: "Orders Today",
    value: "1,240",
    icon: "📦",
    color: "text-amber-500",
  },
  {
    label: "Avg Order Time",
    value: "4.2 min",
    icon: "⚡",
    color: "text-green-400",
  },
  { label: "Tables Active", value: "38 / 40", icon: "🪑", color: "text-white" },
];

const segments = [
  { name: "Restaurants", icon: <Utensils size={14} /> },
  { name: "Cafes", icon: <Coffee size={14} /> },
  { name: "Hotels", icon: <Hotel size={14} /> },
  { name: "Guest Houses", icon: <Home size={14} /> },
];

export default function HeroSection() {
  const [time, setTime] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // convert 0-23 to 1-12
      const formatted = `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      setTime(formatted);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative   min-h-screen flex items-center overflow-hidden bg-[#05070A]">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/95 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1629749380581-38998649af6a"
          alt="Restaurant Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 ">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left ">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-green-400 mb-8 mt-6">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            NOW LIVE — QR ORDERING 1.0
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
            Transform Your Business
            <br />
            <span className="text-amber-500 italic">
              With Smart QR Ordering
            </span>
            <br />& Seamless Digital Menus
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-4 max-w-lg leading-relaxed">
            The ultimate digital operating system for modern hospitality.
            Streamline service for your guests with zero friction.
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
            {" "}
            <QrCode size={16} /> No App Required • Scan & Order Instantly{" "}
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            {segments.map((s) => (
              <span
                key={s.name}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs"
              >
                {s.icon} {s.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="#"
              className="group w-full sm:w-auto bg-amber-500 hover:bg-amber-400 transition-all px-8 py-4 rounded-xl text-sm font-bold text-black text-center flex items-center justify-center gap-2"
            >
              Start Free Trial{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <button
              type="button"
              disabled
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-8 py-4 rounded-xl text-sm font-medium text-white text-center flex items-center justify-center gap-2"
            >
              <Play size={16} className="fill-amber-500 text-amber-500" />
              Watch Demo
            </button>
            <VideoModal
              isOpen={isVideoOpen}
              onClose={() => setIsVideoOpen(false)}
              videoUrl=""
            />
          </div>
        </div>

        {/* Right Side: Phone & Metrics Layout */}
        <div className="relative flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Main Phone Mockup */}
          <div className="relative z-10 w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-[#0A0A0A] rounded-[3rem] border-[10px] border-[#1A1A1A] shadow-2xl overflow-hidden">
            <div className="p-6 flex flex-col h-full">
              {/* Header Bar */}
              <div className="flex justify-between items-center mb-8 px-2">
                {/* Time */}
                <span className="text-[11px] text-white/40 font-mono">
                  {time}
                </span>

                {/* App Name */}
                <span className="text-[11px] text-white/40 font-mono">
                  Bhoj Esewa Qr-Scane
                </span>

                {/* Notifications */}
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center text-[8px] text-amber-500">
                    🔔
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="mb-6 px-2">
                <p className="text-[9px] text-white/30 uppercase tracking-widest">
                  Table 07 • Spice Garden
                </p>
                <h3 className="text-base font-bold text-white">Digital Menu</h3>
              </div>

              {/* Real QR Scanner with Laser Line */}
              <div className="w-full aspect-square bg-[#111] rounded-2xl border border-white/5 relative flex items-center justify-center mb-8 overflow-hidden group">
                <div className="relative w-40 h-40 bg-white p-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {/* Real QR Code Placeholder */}
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https:www.khemrajneupane.com.np"
                    alt="Menu QR"
                    width={150}
                    height={150}
                    className="w-full h-full grayscale"
                  />
                </div>

                {/* Scanning Laser Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/60 shadow-[0_0_15px_#22c55e] animate-scan-line" />

                {/* Corner Markers */}
                <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-green-500/70" />
                <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-green-500/70" />
                <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-green-500/70" />
                <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-green-500/70" />
              </div>

              {/* Cart Preview */}
              <div className="space-y-3 px-2">
                {["Dal Makhani", "Butter Naan"].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <span className="text-[11px] font-medium text-white/90">
                      {item}
                    </span>
                    <span className="text-amber-500 text-[11px] font-bold">
                      ₹{idx === 1 ? "60" : "280"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto bg-amber-500 py-4 rounded-2xl text-center text-black text-[13px] font-bold shadow-lg shadow-amber-900/30">
                Place Order • ₹340
              </div>
            </div>
          </div>

          {/* Metrics Floating - Responsive: Hidden on very small screens, vertical on Desktop */}
        </div>
      </div>
    </section>
  );
}
