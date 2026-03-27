"use client";

import { Check, Star } from "lucide-react";

interface Props {
  plan: any;
}

export default function PackageCard({ plan }: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300
      ${
        plan.isPopular
          ? "bg-yellow-500/10 border-yellow-500 shadow-xl scale-105"
          : "bg-neutral-950 border-neutral-800"
      }`}
    >
      {/* Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Popular
        </div>
      )}

      {/* Info */}
      <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>

      <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">
          ₨ {plan.price.toLocaleString("en-NP")}
        </span>
        <span className="text-gray-400 text-sm"> /month</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-1 mb-8">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span className="text-sm text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="bg-yellow-400 hover:bg-yellow-300 text-black">
        Get Started
      </button>
    </div>
  );
}
