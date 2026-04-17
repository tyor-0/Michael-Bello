import { Code2, Layers, Smartphone } from "lucide-react";
import FadeIn from "./FadeIn";

const SERVICES = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    desc: "End-to-end web applications built with React, Node.js, and MongoDB. Clean architecture, scalable APIs, and blazing-fast performance optimized for real-world usage.",
    features: ["REST APIs", "Authentication", "Database Design", "Deployment"],
  },
  {
    icon: <Layers size={28} />,
    title: "Web Design",
    desc: "Modern, visually stunning interfaces designed in Figma and implemented with pixel-perfect precision. From design systems to interactive prototypes.",
    features: ["UI/UX Design", "Figma Prototypes", "Design Systems", "Branding"],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Responsive Design",
    desc: "Layouts that look and work flawlessly across every screen size — mobile, tablet, and desktop. Performance-first, accessibility-aware implementations.",
    features: ["Mobile-First", "Cross-browser", "Accessibility", "Performance"],
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#0d0d0d] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="mb-16">
          <p className="text-[#FF5024] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            My <span className="text-white/20">Services</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="group bg-[#141414] border border-white/6 rounded-2xl p-8 hover:border-[#FF5024]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5024]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#FF5024]/3 -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FF5024]/8 transition-colors duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF5024]/10 border border-[#FF5024]/20 flex items-center justify-center text-[#FF5024] mb-6 group-hover:bg-[#FF5024]/20 transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/30">
                        <span className="w-1 h-1 rounded-full bg-[#FF5024]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;