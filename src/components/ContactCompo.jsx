import React from "react";
import xIcon from "../assets/x.jpg";
import Youtube from "../assets/youtube.jpg";
import Linkedin from "../assets/linkedin.jpg";
import Github from "../assets/github.jpg";

const ConnectSection = () => {
    return (
        <section className="bg-[#030712] text-white py-16 px-6">
            {/* Centered CTA */}
            <div className="text-center mb-20">
                <p className="text-gray-400 mb-2 text-sm">Chat to me here</p>

                <button className=" inline-flex items-center justify-center bg-[#0E1A34] hover:bg-[#132246] text-white font-bold tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/40 w-[280px]  md:w-[360px] text-4xl md:text-5xl ">
                    Connect
                </button>

            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto text-sm text-gray-400">
                {/* Email */}
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <span>📧</span>
                    <a href="mailto:creativemichael1501@gmail.com" className="hover:text-white">
                        creativemichael1501@gmail.com
                    </a>
                </div>

                <div className="flex gap-6 items-center">
                    {/* X (Twitter) */}
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white"
                    >
                        <img
                            src={xIcon}
                            alt="X"
                            className="w-6 h-6 object-contain"
                        />
                        
                    </a>

                    {/* YouTube */}
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white"
                    >
                        <img
                            src={Youtube}
                            className="w-6 h-6 object-contain"
                        />
                        
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white"
                    >
                        <img
                            src={Linkedin}
                            alt="LinkedIn"
                            className="w-6 h-6 object-contain"
                        />
                       
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white"
                    >
                        <img
                            src={Github}
                            alt="GitHub"
                            className="w-6 h-6 object-contain"
                        />
                        
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ConnectSection;
