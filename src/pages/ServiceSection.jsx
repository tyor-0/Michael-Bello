import React from "react";

const services = [
  {
    title: "Web Design",
    icon: "🌐",
    description: "Web development is the process of building, programming, and maintaining websites and web apps.",
    link: "#",
  },
  {
    title: "Mobile App",
    icon: "📱",
    description: "Creating mobile applications for Android and iOS platforms with responsive and intuitive interfaces.",
    link: "#",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    description: "Designing user interfaces and experiences that are clean, functional, and user-friendly.",
    link: "#",
  },
  {
    title: "Graphics Design",
    icon: "🖼️",
    description: "Crafting visual content like logos, banners, and illustrations to elevate brand identity.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className=" text-white py-20 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className=" text-sm uppercase tracking-widest mb-2">What I Offer</h2>
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-gray-300">
          I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-[#101828] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{service.description}</p>
            <a href={service.link} className="text-pink-400 hover:text-pink-300 text-sm font-medium">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
