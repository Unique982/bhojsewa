"use client";

import React from "react";
import { Check, Star } from "lucide-react";

export const plans = [
  {
    name: "Free Trial",
    price: "0",
    description: "14 days free trial with limited features",
    features: [
      "1 Business location",
      "Up to 10 tables/rooms",
      "QR menu & ordering",
      "Basic reports",
      "2 staff accounts",
      "Email support",
      "Kitchen display system",
      "Advanced analytics",
      "Multi-location",
      "API access",
    ],
    buttonText: "Start 14-Day Free Trial",
    isPopular: false,
  },
  {
    name: "Basic Monthly",
    price: "999",
    description: "Best for small restaurants",
    features: [
      "QR Menu & Ordering",
      "Orders Management",
      "Table / Room Management",
      "Basic Dashboard",
      "Basic Analytics & Reports",
      "Menu & Category Management",
      "Customer Order Tracking",
      "Staff Accounts",
      "Mobile Friendly Ordering",
      "Email Support",
    ],
    buttonText: "Start Monthly Plan",
    isPopular: true,
    tag: "Coming Soon",
  },
  {
    name: "Pro Monthly",
    price: "3,999",
    description: "For growing businesses",
    features: [
      "Everything in Basic",
      "Unlimited QR Menu & Ordering",
      "Advanced Analytics & Reports",
      "Kitchen Display System (KDS)",
      "Real-time Order Tracking",
      "Table / Room Management",
      "Staff Role Management",
      "Priority Support",
      "Customer Order History",
      "Menu & Category Management",
      "Daily / Monthly Sales Reports",
      "Custom QR Branding",
    ],
    buttonText: "Start Monthly Plan",
    isPopular: false,
  },
];
