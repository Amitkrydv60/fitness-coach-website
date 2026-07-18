import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Transformations", href: "#transformations" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" }, // ✅ Added
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-2xl">

            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-wide text-white"
            >
              ELITE
              <span className="text-red-500">FIT</span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-300 transition hover:text-white group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-3xl"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 transition hover:text-red-500"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-red-500 py-3 text-center font-semibold text-white transition hover:bg-red-600"
              >
                Book Consultation
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}