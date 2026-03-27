import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-15 h-15 md:w-15 md:h-15 overflow-hidden rounded-full border border-white/10">
              <Image
                src="/logo.png"
                alt="BhojSewa"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Bhoj<span className="text-[#FFC107]">Sewa</span>
            </h2>
          </div>

          <p className="max-w-sm mb-8 text-slate-400 leading-relaxed text-sm">
            BhojSewa is a smart QR ordering platform for hotels, restaurants,
            cafés and bars. Customers scan a table QR code to open the digital
            menu, place orders instantly, and send them directly to the kitchen
            display system (KDS) for faster service.
          </p>

          {/* Social Links */}
          {/* <div className="flex gap-4">
            {[
              { icon: <Globe size={20} />, href: "#" },
              { icon: <Facebook size={20} />, href: "#" },
              { icon: <Instagram size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FFC107] hover:text-black hover:border-[#FFC107] transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div> */}
        </div>

        {/* Product */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Product
          </h5>

          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                QR Menu System
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Kitchen Display (KDS)
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Table Management
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Billing & Payments
              </Link>
            </li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Businesses
          </h5>

          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Hotels
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Restaurants
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Cafés
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Bars & Lounges
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Resources
          </h5>

          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Help Center
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Setup Guide
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                API Documentation
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Partner Program
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Legal
          </h5>

          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Terms of Service
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#FFC107] transition-colors">
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 italic">
          © {new Date().getFullYear()} BhojSewa. Built by{" "}
          <span className="text-white font-medium">Unique Neupane</span>.
        </p>
      </div>
    </footer>
  );
}
