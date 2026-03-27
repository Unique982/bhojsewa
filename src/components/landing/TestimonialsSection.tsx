"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We cut order errors by 73% in the first week. Our servers now focus on hospitality, not transcribing orders. QROrderly paid for itself in 3 days.",
    name: "Marcus Delgado",
    role: "Owner, Copper & Vine Restaurant",
    location: "Austin, TX",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_14302cb45-1772163046212.png",
    metric: "73% fewer errors",
    metricLabel: "Order accuracy",
    rating: 5,
  },
  {
    quote:
      "Our average check size went up $14 per table because the menu photos make every dish look incredible.",
    name: "Priya Nair",
    role: "F&B Director, The Meridian Hotel",
    location: "San Francisco, CA",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e076cd8c-1772983622767.png",
    metric: "+$14 avg check",
    metricLabel: "Per table increase",
    rating: 5,
  },
  {
    quote:
      "Setup took 11 minutes. I'm not kidding. We had QR codes on every table before lunch service.",
    name: "Tyler Okonkwo",
    role: "Chef-Owner, Birdhouse Café",
    location: "Brooklyn, NY",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_149d4a356-1766765242227.png",
    metric: "11 min setup",
    metricLabel: "To first order",
    rating: 5,
  },
];

const stats = [
  { value: "4,200+", label: "Restaurants using QROrderly" },
  { value: "2.8M", label: "Orders processed monthly" },
  { value: "4.8★", label: "Average customer rating" },
  { value: "31%", label: "Avg. increase in table turnover" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-neutral-950 text-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Customer Stories
          </span>
          <h2 className="font-bold text-3xl md:text-5xl mb-4">
            Trusted by <br></br>
            <span className="text-yellow-400">Hospitality</span>
            Businesses
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto">
            See how hospitality businesses are improving service, increasing
            orders, and delighting customers using our SaaS platform.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-all flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Metric */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 self-start bg-orange-500/10 border border-orange-500/20">
                <span className="text-sm font-bold text-orange-400">
                  {t.metric}
                </span>
                <span className="text-[10px] text-gray-400">
                  {t.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed flex-1 mb-6 text-gray-300">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                  <p className="text-[10px] text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
