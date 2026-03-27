"use client";

export default function Contact() {
  return (
    <section className="bg-neutral-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Contact <span className="text-[#FFC107]">Support</span>
          </h2>
          <p className="text-slate-400 mt-2">
            Have questions or need help? Reach out to our team.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column – Map + Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-neutral-800 rounded-xl flex items-center justify-center text-slate-500">
              Map Placeholder
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#FFC107]">
                  📍 Location:
                </span>
                <span className="text-slate-400">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#FFC107]">✉️ Email:</span>
                <span className="text-slate-400">support@bhojsewa.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#FFC107]">📞 Phone:</span>
                <span className="text-slate-400">+977 9800000000</span>
              </div>
            </div>
          </div>

          {/* Right Column – Form */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your Message..."
                  className="w-full p-3 rounded bg-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#FFC107] text-black font-semibold px-6 py-3 rounded-lg w-full hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
