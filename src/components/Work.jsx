import { Code2, ArrowUpRight, ExternalLink } from "lucide-react";
import FadeIn from "@/components/Fadein";
import SyncasifyImg from "../assets/syncasify.png"

const PROJECTS = [
  {
    title: "Reconciliation System",
    desc: "A high-performance Transaction Reconciliation System that automatically compares financial transaction records from two independent systems, detects discrepancies, and generates detailed reconciliation reports for auditing and operational accuracy.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "TanStack Table", "Axios", "Node.js", "Express.js", "Worker Threads", "Multer", "CSV Parser", "Winston Logger", "REST APIs", "Vercel", "Render"],
    link: "https://reconciliation-system.vercel.app/",
    color: "#FF7A50",
    image: SyncasifyImg,   //change image 
  },
  {
    title: "Rovax AI",
    desc: "ROVAX AI helps traders discover, analyze, and act on high-quality trading opportunities with AI-driven signals and instant notifications.", 
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Firebase Cloud Messaging (FCM)", "Capacitor", "Deno Edge Functions"],  
    link: "https://app.rovax-ai.com/",
    color: "#FF7A50",
    image: SyncasifyImg,     //change image 
  },
  {
    title: "Syncasify",
    desc: "A full-featured business management SaaS with CRM, POS checkout, inventory, and role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://syncasify.vercel.app/",
    color: "#FF7A50",
    image: SyncasifyImg,
  },
  {
    title: "Megamart Mall",
    desc: "MegaMart is a full-stack multi-department retail web app that lets customers shop across a supermarket, pharmacy, eatery, and phone store — with an admin dashboard to manage products, orders, and inventory.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB",],
    link: "https://megamartmall.com/",
    color: "#FF7A50",
  },
  {
    title: "Simisky",
    desc: "A Saas platform that digitizes pharmaceutical supply chains by enabling healthcare providers to order, manage inventory, and access verified medicine efficiently.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
    color: "#FF7A50",
  },
];

function Work() {
  return (
    <section id="work" className="bg-[#0d0d0d] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="mb-16">
          <p className="text-[#FF5024] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Recent <span className="text-white/20">Works</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group block bg-[#141414] border border-white/6 rounded-2xl overflow-hidden hover:border-[#FF5024]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5024]/5"
              >
                {/* Image Placeholder */}
                {/* Project Image */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={p.image} // This assumes your project object has an "image" property
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* The Gradient Overlay (Keeps the "Tech" look) */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `linear-gradient(to bottom, transparent, #111)`,
                    }}
                  />

                  {/* Hover overlay (Your existing code) */}
                  <div className="absolute inset-0 bg-[#FF5024]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#FF5024] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white text-xl font-bold group-hover:text-[#FF5024] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-white/20 group-hover:text-[#FF5024] transition-colors duration-200 flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/8 text-white/50 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;