import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/Fadein";

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
    href: "https://www.linkedin.com/in/scalingwithmichael/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter/X",
    href: "https://x.com/michael_belloo",
    icon: <span className="text-sm font-bold leading-none">𝕏</span>,
  },
];

const CONTACT_DETAILS = [
  { icon: <Mail size={18} />, label: "Email", val: "michaelbello1505@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", val: "+234 901 076 5760" },
  { icon: <MapPin size={18} />, label: "Location", val: "Lagos, Nigeria" },
];

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#info", label: "Info" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Create a "FormData" object
    const formData = new FormData();
    formData.append("access_key", "f77556ae-14e7-450c-947b-d9e7c1fdab8c"); // Put your key here
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    // 2. Send the request
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      // Check if the error is specifically a network failure
      if (error.message === "Failed to fetch") {
        alert("Network Error: Please check your internet connection or disable your VPN/Proxy.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
};

return (
  <section id="contact" className="bg-[#101010] pt-25">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <FadeIn className="mb-16">
        <p className="text-[#FF5024] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl lg:text-5xl font-black text-white">
          Contact <span className="text-white/20">Me</span>
        </h2>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left — details + socials */}
        <FadeIn direction="right">
          <div>
            <p className="text-white/40 leading-relaxed mb-10">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and I'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-5 mb-12">
              {CONTACT_DETAILS.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5024]/10 border border-[#FF5024]/20 flex items-center justify-center text-[#FF5024]">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-medium">{c.label}</p>
                    <p className="text-white text-sm font-medium">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                Social Links
              </p>
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
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn direction="left" delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Michael Bello"
                required
                className="w-full bg-[#141414] border border-white/8 rounded-xl px-5 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5024]/50 focus:bg-[#1a1a1a] transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="hello@example.com"
                required
                className="w-full bg-[#141414] border border-white/8 rounded-xl px-5 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5024]/50 focus:bg-[#1a1a1a] transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-[#141414] border border-white/8 rounded-xl px-5 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5024]/50 focus:bg-[#1a1a1a] transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF5024] text-white font-semibold hover:bg-[#e04420] transition-all duration-200 shadow-lg shadow-[#FF5024]/20 flex items-center justify-center gap-2"
            >
              {sent ? "Message Sent! ✓" : "Send Message"}
              {!sent && <ArrowUpRight size={16} />}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>

    {/* Footer */}

  </section>
);
}

export default Contact;