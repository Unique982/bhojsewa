"use client";
import React, { useState, useEffect } from "react";
import { X, Menu, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Feature", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-4 px-3 md:px-6 ">
        <div className="max-w-7xl mx-auto bg-[#05070A]/80 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-5 py-3 flex items-center justify-between shadow-xl">
          {/* Logo Section */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded-full border border-white/10">
              <Image
                src="/logo.png"
                alt="BhojSewa"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm md:text-base tracking-tight">
                BhojSewa
              </span>
              <span className="hidden sm:block text-gray-400 text-[10px] md:text-xs">
                Your Digital Menu Solution
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#FFC107] transition text-xs lg:text-sm font-bold tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-white text-[10px] lg:text-xs font-bold border border-white/20 px-2 lg:px-3 py-1.5 rounded-full hover:bg-white/10 transition"
            >
              <Globe size={14} /> {lang}
            </button> */}

            <Link href="/business/create">
              <button className="bg-[#FFC107] hover:bg-[#e5ae06] text-black px-4 lg:px-6 py-2 md:py-2.5 rounded-full text-xs lg:text-sm font-black transition active:scale-95 shadow-lg shadow-[#FFC107]/20">
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-full"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#080A0F] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 bg-white/5 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-xl font-bold hover:text-[#FFC107]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="mt-8 pt-6 border-t border-white/10">
              {/* <button
                onClick={toggleLang}
                className="flex items-center gap-3 text-white font-bold text-base"
              >
                <Globe size={20} className="text-gray-400" />
                {lang === "EN" ? "English" : "नेपाली"}
              </button> */}
            </div>

            {/* CTA */}
            <button className="w-full bg-[#FFC107] text-black py-4 rounded-2xl font-black text-lg mt-8 shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
