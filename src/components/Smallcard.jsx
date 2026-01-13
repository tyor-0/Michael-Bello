import React from "react";


const projectCards = [
    {
        title: "react-code-editor",
        description: "Build your own code editor that compiles and runs 40+ programming languages.",
        comments: 57,
        likes: 158,
    },

    {
        title: "simple-developer-portfolio-website",
        description: "A simple portfolio for developers to showcase their skills and smallCard.",
        comments: 116,
        likes: 272,
    },

    {
        title: "devmedium",
        description: "A Dev.to & Medium like blogging platform with custom usernames in Next.js",
        comments: 1,
        likes: 7,
    },

    {
        title: "manuarora.in",
        description: "Personal website built using Next.js & TailwindCSS.", comments: 17,
        likes: 53,
    },

    {
        title: "sendgrid-contact-form",
        description: "A working contact form integrated with SendGrid for your Nextjs project.", comments: 20, likes: 39,
    },

    {
        title: "integrate-payments",
        description: "Integrate payments with Next.js, TailwindCSS, and Razorpay.", comments: 12,
        likes: 30,
    },

    {
        title: "tictactoe",
        description: "An Angular based Tic Tac Toe game. Learning Angular, Firebase and PWA.",
        comments: 8, likes: 21,
    },

    {
        title: "hashnode-github-backup",
        description: "Take backup of your hashnode blogs with the Hashnode and GitHub API.",
        comments: 2,
        likes: 3,
    },

    {
        title: "100-days-interview-preparation",
        description: "100 Days of DS Algo for interview preparation (C++ and Javascript)",
        comments: 6,
        likes: 11,
    },
];


const ProjectCard = ({ title, description, comments, likes }) => {
        return (
            <div className="bg-gray-900 text-white rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-4">{description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>💬 {comments}</span>
                    <span>❤️ {likes}</span>
                </div>
            </div>

        );
    };




const ProjectGrid = () => {
    return (
        <section className="bg-gray-950 py-12 px-6">

            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest contributions to open source</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectCards.map((card, index) => (
                    <ProjectCard key={index} {...card} />
                ))}
            </div>

            <div className="mt-10 text-center">
                <button className="bg-blue-950 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
                    Show More
                </button>
            </div>
        </section>
    );
};

export default ProjectGrid;