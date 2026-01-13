import React from "react";
import Card from "../components/Card.jsx";


const projects = [
    {
        title: "Algochurn",
        description: "A web app that allows users to ...",
        link: "https:github.com/example/algochurn",
        image: "/images/algochurn.png",
        techIcons: ["/icons/nextjs.svg", "/icons/tailwind.svg", "/icons/typescript.svg"],
    },

    {
        title: "Aceternity",
        description: "A web design and development agency that gets the job done. Somehow.",
        link: "https://github.com/example/aceternity",
        image: "/images/aceternity.png",
        techIcons: ["/icons/nextjs.svg", "/icons/tailwind.svg", "/icons/typescript.svg"],
    },

    {
        title: "Tailwind Master Kit",
        description: "Buy premium tailwind components and templates for your next project.",
        link: "https://github.com/example/tailwind-master-kit",
        image: "/images/tailwind-master-kit.png",
        techIcons: ["/icons/nextjs.svg", "/icons/tailwind.svg", "/icons/typescript.svg"],
    },
];


const projectSection = () => {
    return (
        <section className="bg-gray-950 py-12 px-6">

            <h2 className="text-3xl font-bold text-white mb-8 text-center">I've been building a lot of things</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    techIcons={project.techIcons} 
                />
            )
            )}
            </div>
        </section>
    );
};

export default projectSection;

