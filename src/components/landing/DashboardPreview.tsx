"use client";

import { useEffect, useRef, useState } from "react";

const orders = [
  {
    id: "#1042",
    table: "T-07",
    items: "Dal Makhani, Naan ×2",
    status: "Preparing",
    statusColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    id: "#1041",
    table: "T-12",
    items: "Paneer Tikka, Lassi",
    status: "Ready",
    statusColor: "text-green-400 bg-green-400/10",
  },
  {
    id: "#1040",
    table: "T-03",
    items: "Biryani, Raita",
    status: "Delivered",
    statusColor: "text-gray-400 bg-gray-700/30",
  },
  {
    id: "#1039",
    table: "T-09",
    items: "Chole Bhature, Tea",
    status: "New",
    statusColor: "text-white bg-gray-800",
  },
];

const barData = [
  { label: "Mon", h: 45, val: "Rs 12k" },
  { label: "Tue", h: 62, val: "Rs 17k" },
  { label: "Wed", h: 38, val: "Rs 10k" },
  { label: "Thu", h: 78, val: "Rs 22k" },
  { label: "Fri", h: 95, val: "Rs 26k" },
  { label: "Sat", h: 100, val: "Rs 28k" },
  { label: "Sun", h: 88, val: "Rs 24k" },
];

export default function DashboardPreview() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="py-12 px-4 md:px-10 bg-neutral-900  relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-800 font-semibold mb-3 block">
            Live Dashboard
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Manage Your Business
            <br />
            <span className="italic text-yellow-400">
              Hotels, Restaurants & Cafés
            </span>
          </h2>

          <p className="text-gray-400  text-center">
            Monitor orders, menus, tables, bookings, and analytics for hotels,
            restaurants, cafés, and guest houses — accessible anytime, anywhere.
          </p>
        </div>

        {/* Dashboard */}
        <div className="scroll-reveal hidden-init rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl bg-neutral-900">
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>

              <span className="text-xs text-gray-400">BhojSewa Dashboard</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs text-green-400">Live</span>
            </div>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Sidebar */}
            <div className="hidden md:flex md:col-span-2 flex-col gap-1 border-r border-neutral-800 p-4 bg-neutral-950">
              {[
                "Overview",
                "Orders",
                "Menu",
                "Tables",
                "Analytics",
                "QR Codes",
                "Settings",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs cursor-pointer ${
                    i === 1
                      ? "bg-yellow-400/20 text-yellow-400"
                      : "text-gray-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="md:col-span-10 p-6 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Today's Revenue",
                    value: "Rs 28,450",
                    change: "+12%",
                  },
                  { label: "Active Orders", value: "14", change: "+3" },
                  { label: "Tables Occupied", value: "28/40", change: "70%" },
                  {
                    label: "Avg Order Value",
                    value: "Rs 680",
                    change: "+ Rs42",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4"
                  >
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    <span className="text-xs text-green-400">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Orders + Chart */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Orders */}
                <div className="md:col-span-7 bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
                    <h4 className="text-sm font-bold text-white">
                      Live Orders
                    </h4>
                    <span className="text-xs text-green-400">● 4 active</span>
                  </div>

                  <div className="divide-y divide-neutral-800">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between px-5 py-3 hover:bg-neutral-900"
                      >
                        <div>
                          <p className="text-sm text-white font-semibold">
                            {order.items}
                          </p>
                          <p className="text-xs text-gray-400">{order.table}</p>
                        </div>

                        <span
                          className={`text-xs px-2 py-1 rounded-full ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart */}
                <div className="md:col-span-5 bg-neutral-950 rounded-2xl border border-neutral-800 p-5">
                  <h4 className="text-sm font-bold text-white mb-4">
                    Weekly Revenue
                  </h4>

                  <div className="flex items-end gap-2 h-24">
                    {barData.map((bar, i) => (
                      <div
                        key={bar.label}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-yellow-400/40 rounded-t-md"
                          style={{ height: `${bar.h}%` }}
                        />
                        <span className="text-xs text-gray-400 mt-1">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-800 flex justify-between">
                    <span className="text-xs text-gray-400">This week</span>
                    <span className="text-sm font-bold text-yellow-400">
                      ₹1,39,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center scroll-reveal hidden-init">
          <a
            href="#pricing"
            className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-yellow-300"
          >
            Start Free Trial →
          </a>
        </div>
      </div>
    </section>
  );
}
