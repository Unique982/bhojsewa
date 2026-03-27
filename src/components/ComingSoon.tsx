"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoonPage() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: March 28, 2026 12:00 AM Nepal Time (UTC+5:45)
    const target = new Date("2026-03-27T18:15:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = target - now;

      if (gap <= 0) {
        clearInterval(interval);
        return;
      }

      setTime({
        days: Math.floor(gap / (1000 * 60 * 60 * 24)),
        hours: Math.floor((gap / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((gap / (1000 * 60)) % 60),
        seconds: Math.floor((gap / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans px-4 md:px-0">
      {/* Animated Confetti Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center text-center backdrop-blur-2xl bg-white/[0.03] border border-white/10 p-6 md:p-12 rounded-[30px] md:rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-xl w-full md:w-[90%] transform transition-all">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 animate-bounce">
          <Image
            src="/logo1.png"
            alt="BhojSewa Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">
          Bhoj<span className="text-yellow-500">Sewa</span>
        </h1>

        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-4 md:mb-6 animate-pulse"></div>

        {/* Coming Soon Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-6 md:mb-8 tracking-wide">
          <span className="text-white font-bold italic">Coming Soon</span>
        </h2>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 md:mb-10 w-full">
          {Object.entries(time).map(([label, value]: [string, any]) => (
            <div key={label} className="relative">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl py-3 sm:py-4 flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
                  {value}
                </span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-500 mt-1 sm:mt-2 font-bold">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Launch Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1 sm:py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs sm:text-sm font-bold mb-6 md:mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Launch: March 28, 2026 (Chaitra 14)
        </div>

        {/* Email Notification */}
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
