import { useState } from 'react'
import Navbar from '../components/Navbar'
import Project from '../pages/Project';
import Smallcard from '../components/Smallcard.jsx';
import ContactSection from '../pages/ContactSection.jsx';
import ServiceSection from '../pages/ServiceSection.jsx';


function Landing() {

  return (
    <>
      <Navbar />

      <section className="bg-gray-950 text-white py-30 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mt-26 mb-6">
          I'm a software engineer that rarely writes code.
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-4">
          Meet <span className="text-cyan-400 font-semibold">Manu Arora</span>, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His passion for building clean and functional designs is only rivaled by his passion for finding the perfect GIF to express his excitement.
        </p>

        <p className="text-gray-400 text-md">
          Building <span className="text-cyan-400 font-medium">Algochurn</span> and <span className="text-cyan-400 font-medium">Aceternity</span> when I'm not working on my day job.
        </p>
      </section>

            {/* Services Section */}
      <section>
        <ServiceSection />
      </section>

      
      <section className=" text-white py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Skill Item */}
          {[
            { name: "HTML", icon: "/icons/html.svg" },
            { name: "CSS", icon: "/icons/css.svg" },
            { name: "JavaScript", icon: "/icons/javascript.svg" },
            { name: "React", icon: "/icons/react.svg" },
            { name: "Git", icon: "/icons/git.svg" },
            { name: "GitHub", icon: "/icons/github.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center w-24">
              <img src={skill.icon} alt={skill.name} className="h-10 w-10 mb-2" />
              <span className="text-sm text-gray-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>


      {/* work experience */}
      <section className=" text-white p-8 rounded-lg  mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-gray-300 mb-6 text-center">I switch a lot of companies. It's mostly about the culture.</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Company List */}
          <div className="flex md:flex-col gap-4 md:w-1/4 justify-center">
            <button className="bg-gray-800 text-white py-2 px-4 rounded ring-2 ring-blue-500">Apple</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Google</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Microsoft</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Netflix</button>
          </div>

          {/* Experience Details */}
          <div className="md:w-3/4 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Senior Software Engineer @ Apple</h3>
            <p className="text-sm text-gray-400 mb-1">Jan 2021 - Jun 2021</p>
            <p className="text-sm text-gray-400 mb-4">Cupertino, CA</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Worked on the Apple Music team</li>
              <li>Increased the revenue of the company from $80 billion to $1 Trillion</li>
              <li>Built a new feature that allowed users to listen to music while they were sleeping</li>
            </ul>
          </div>
        </div>
      </section>







      {/* Contributions */}
      {/* <section>
        <Smallcard />
      </section> */}




      {/* Project Section */}

      <section>
        <Project />
      </section>

      {/* Contact Section */}
      <section>
        <ContactSection />
      </section>

    </>
  )
}

export default Landing;