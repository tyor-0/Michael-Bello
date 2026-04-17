import React from 'react'


const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#info", label: "Info" },
]

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#FF5024] flex items-center justify-center text-white font-black text-xs">
              M
            </span>
            <span className="text-white/30 text-sm">
              Michael<span className="text-[#FF5024]">.</span>
            </span>
          </div>
          <p className="text-white/20 text-xs text-center">
            © {new Date().getFullYear()} Michael Omotayo Bello. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/20 hover:text-white/50 text-xs transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer