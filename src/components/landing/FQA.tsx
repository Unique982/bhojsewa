"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I set up my business in 15 minutes?",
    answerSteps: [
      {
        step: "Step 01",
        title: "Create Business Account",
        description:
          "Enter your Business Name & Details, set Password & Agreement, and go directly to Dashboard.",
      },
      {
        step: "Step 02",
        title: "Add Your Business Details",
        description:
          "Upload Menu, Logo, Cover Images. Set Table Layout / Delivery Zones. Customize Business Settings.",
      },
      {
        step: "Step 03",
        title: "Generate QR Codes",
        description:
          "One QR per table, or a single QR for entire venue. Print or display QR codes for customers.",
      },
      {
        step: "Step 04",
        title: "Start Receiving Orders",
        description:
          "Customers scan QR → browse menu → place order. Orders arrive instantly in your dashboard.",
      },
    ],
  },
  {
    question: "Do customers need to download an app?",
    answer:
      "No app required! Customers scan the QR code with their smartphone camera and access the menu instantly in their browser.",
  },
  {
    question: "Is it compatible with my existing kitchen setup?",
    answer:
      "Yes! Our Kitchen Display System (KDS) works on any tablet or laptop. You can also print orders directly to thermal printers.",
  },
  {
    question: "Can I manage multiple restaurants from one account?",
    answer:
      "Yes! BhojSewa supports multi-location management. Control menus, orders, and reports for all branches from a single dashboard.",
  },
  {
    question: "Can I customize my digital menu?",
    answer:
      "Absolutely! Add images, categories, pricing, and special offers to match your brand and menu layout.",
  },
  {
    question: "How secure is the system?",
    answer:
      "BhojSewa uses HTTPS encryption, secure authentication, and role-based access control to keep your data safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          {/* Section Title */}
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Features
          </span>
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Frequently Asked <span className="text-[#FFC107]">Questions</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left text-white"
              >
                <span className="font-medium text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-[#FFC107]" />
                ) : (
                  <Plus className="text-white" />
                )}
              </button>

              <div
                className={`px-4 pb-4 text-slate-400 text-sm leading-relaxed transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[2000px] opacity-100 pt-2"
                    : "max-h-0 opacity-0 pt-0 overflow-hidden"
                }`}
              >
                {/* If the FAQ has steps, render them */}
                {faq.answerSteps ? (
                  <div className="space-y-4">
                    <p className="text-white font-semibold mb-2">
                      Live in under 15 Minutes
                    </p>
                    <p className="mb-2">
                      No IT team needed. No complex integrations. Just four
                      steps from sign-up to first order.
                    </p>
                    {faq.answerSteps.map((step, i) => (
                      <div key={i} className="border-l-2 border-[#FFC107] pl-3">
                        <p className="text-[#FFC107] font-bold">{step.step}</p>
                        <p className="text-white font-semibold">{step.title}</p>
                        <p className="text-slate-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
