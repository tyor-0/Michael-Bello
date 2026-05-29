import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "My Info", href: "#info" },
  { label: "Services", href: "#services" },
  { label: "Contact Me", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#101010]/95 backdrop-blur-md border-b border-white/5 shadow-xl"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-[#FF5024] flex items-center justify-center text-white font-black text-sm">
            M
          </span>
          <span className="font-bold text-white text-lg tracking-tight">
            Michael<span className="text-[#FF5024]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setActive(l.label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === l.label
                ? "text-[#FF5024] bg-[#FF5024]/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF5024] text-white text-sm font-semibold hover:bg-[#e04420] transition-colors duration-200"
        >
          Hire Me <ArrowUpRight size={14} />
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161616] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => {
                    const section = document.querySelector(l.href);

                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }

                    setActive(l.label);
                    setOpen(false);
                  }}
                  className="px-4 py-3 rounded-lg text-left text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  {l.label}
                </button>
              ))}

              <a
                href="https://wa.me/2349010765760"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 rounded-lg bg-[#FF5024] text-white text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Let's work together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;