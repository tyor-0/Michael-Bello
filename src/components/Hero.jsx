import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";


const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/tyor-0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter/X",
    href: "#",
    icon: <span className="text-sm font-bold leading-none">𝕏</span>,
  },
];


function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#101010] relative overflow-hidden flex items-center"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF5024]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF5024]/10 border border-[#FF5024]/20 text-[#FF5024] text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5024] animate-pulse" />
              Available for work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight"
            >
              Michael
              <br />
              <span className="text-[#FF5024]">Omotayo </span>
              Bello
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#FF5024]" />
              <p className="text-white/50 text-lg font-medium tracking-wide">
                Fullstack Web Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-white/40 text-base leading-relaxed max-w-md"
            >
              Building performant, scalable web applications from pixel-perfect
              frontends to robust backend systems. Turning ideas into polished
              digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF5024] text-white font-semibold hover:bg-[#e04420] transition-all duration-200 shadow-lg shadow-[#FF5024]/20"
              >
                View My Work <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/70 font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-12 flex items-center gap-8"
            >

              {
                <div className="flex items-center gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.label}
                      className="w-11 h-11 rounded-xl bg-[#141414] border border-white/8 flex items-center justify-center text-white/40 hover:text-[#FF5024] hover:border-[#FF5024]/30 hover:bg-[#FF5024]/5 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              }

            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-[-16px] rounded-3xl border border-[#FF5024]/15" />
              <div className="absolute inset-[-32px] rounded-3xl border border-white/5" />

              <div className="w-[320px] h-[400px] lg:w-[380px] lg:h-[460px] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/8 overflow-hidden relative">
                {/* Placeholder avatar graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-[#FF5024]/20 border-2 border-[#FF5024]/40 flex items-center justify-center">
                    <span className="text-4xl font-black text-[#FF5024]">M</span>
                  </div>
                  <p className="text-white/20 text-sm font-medium">Photo Placeholder</p>
                </div>
                {/* Color overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#FF5024]/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
                <p className="text-xs text-white/40 font-medium">Currently</p>
                <p className="text-white text-sm font-bold mt-0.5">
                  Open to opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-white/20 text-xs tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#FF5024]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;