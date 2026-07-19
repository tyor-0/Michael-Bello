import { Download } from "lucide-react";

import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import React from "../assets/react.svg"
import Tailwind from "../assets/tail.png"
import Node from "../assets/node.png"
import MongoDB from "../assets/mongo.png"
import GitHub from "../assets/github.png"
import Figma from "../assets/css.png"
import FadeIn from "@/components/Fadein";

const EXPERIENCE = [
  {
    company: "Vnet Global Innovation",
    role: "Full Stack Developer",
    date: "June 2026",
    desc: "Developed, debugged, and maintained full-stack web and mobile applications for real-world business clients, translating project requirements into scalable, high-quality software solutions. Collaborated within an agile development environment to design, implement, test, and optimize applications using modern software engineering principles, ensuring maintainable code, reliable performance, and successful project delivery.",
  },
  {
    company: "Nithub",
    role: "Software Engineer",
    date: "May 2026",
    desc: "Developed production-ready full-stack software solutions by applying object-oriented design, SOLID principles, data structures, algorithms, and modern engineering practices to build scalable, maintainable, and high-performance applications.",
  },
  {
    company: "FAAN, Murtala Muhammed International Airport",
    role: "IT Support Specialist",
    date: "May 2024",
    desc: "Provided end-to-end technical support by diagnosing and resolving hardware/software issues, optimizing system performance, and ensuring secure data recovery with zero loss.",
  },

];

const SKILLS = [
  { name: "HTML5", icon: Html },
  { name: "CSS3", icon: Css },
  { name: "JavaScript", icon: Javascript },
  { name: "React.js", icon: React },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Node.js", icon: Node },
  { name: "MongoDB", icon: MongoDB },
  { name: "Supabase", icon: MongoDB },
  { name: "Git / GitHub", icon: GitHub },
  { name: "Figma", icon: "🎭" },
];

function Info() {
  return (
    <section id="info" className="bg-[#101010] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="mb-16">
          <p className="text-[#FF5024] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            About
          </p>
          {/* <h2 className="text-4xl lg:text-5xl font-black text-white">
            My <span className="text-white/20">Info</span>
          </h2> */}
        </FadeIn>

        {/* About Me */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn direction="right">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/6 overflow-hidden relative flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#FF5024]/20 border-2 border-[#FF5024]/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-black text-[#FF5024]">M</span>
                </div>
                <p className="text-white/20 text-sm">Photo Placeholder</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF5024]/10 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                I'm{" "}
                <span className="text-white font-semibold">
                  Michael Omotayo Bello
                </span>
                , a Computer Engineering graduate with advanced training in{" "}
                <strong className="text-[#FF5024]">Software Engineering</strong>{" "}
                and a strong foundation in full-stack development.
              </p>
              <p className="text-white/40 leading-relaxed mb-8">
                Skilled in modern web technologies including HTML, CSS, Bootstrap, TailwindCSS, JavaScript, TypeScript, ReactJS, and NodeJS, with experience in cloud-based data solutions using MongoDB and SQL. Comfortable working in
                Agile environments with hands-on exposure to CI/CD pipelines and microservices architecture. Driven by a forward-looking curiosity about emerging technologies and committed to building solutions that bridge engineering principles with real-world impact.
              </p>
              <a
                href="https://drive.google.com/file/d/1hGZOfScAeNwWcx6Gen13CCZzcIw2OHZG/view?usp=drive_link"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5024] text-white font-semibold hover:bg-[#e04420] transition-colors duration-200 shadow-lg shadow-[#FF5024]/20"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Experience */}
        <FadeIn className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-10">Experience</h3>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF5024]/60 via-[#FF5024]/20 to-transparent" />
            <div className="flex flex-col gap-8">
              {EXPERIENCE.map((exp, i) => (
                <FadeIn key={exp.company} delay={i * 0.1}>
                  <div className="pl-14 relative">
                    <div className="absolute left-[14px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#FF5024] border-4 border-[#101010] shadow-lg shadow-[#FF5024]/40" />
                    <div className="bg-[#141414] border border-white/6 rounded-xl p-5 hover:border-[#FF5024]/20 transition-colors duration-200">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <div>
                          <h4 className="text-white font-bold text-base">
                            {exp.company}
                          </h4>
                          <p className="text-[#FF5024] text-sm font-medium">
                            {exp.role}
                          </p>
                        </div>
                        <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full font-mono">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed mt-3">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {SKILLS.map((skill, i) => (
              <FadeIn key={skill.name} delay={i * 0.05}>
                <div className="group flex flex-col items-center gap-2 bg-[#141414] border border-white/5 rounded-xl p-4 hover:border-[#FF5024]/30 hover:bg-[#FF5024]/5 transition-all duration-200 cursor-default">

                  {/* FIX: Use an img tag instead of a span */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>

                  <p className="text-white/40 text-[10px] font-semibold text-center leading-tight group-hover:text-white/60 transition-colors">
                    {skill.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Info;