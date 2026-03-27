import { Check, Star } from "lucide-react";
import { plans } from "./tstx";

export default function PricingSection() {
  return (
    <div
      className="bg-black py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen"
      id="pricing"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              plan.isPopular
                ? "bg-[#111] border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.1)] scale-105 z-10"
                : "bg-[#0A0A0A] border-neutral-800"
            }`}
          >
            {/* Tag Badge */}
            {plan.tag && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                <Star className="w-3 h-3 fill-black" />
                {plan.tag}
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm italic">
                {plan.description}
              </p>
            </div>

            <div className="flex items-baseline justify-center mb-8">
              <span className="text-4xl font-bold">Rs {plan.price}</span>
              <span className="text-neutral-500 text-sm ml-1">/month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-yellow-500 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-black stroke-[4]" />
                  </div>
                  <span className="text-sm text-neutral-200">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 border ${
                plan.isPopular
                  ? "bg-transparent border-neutral-800 text-neutral-500 cursor-not-allowed"
                  : "bg-transparent border-neutral-800 text-white hover:bg-neutral-900"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
