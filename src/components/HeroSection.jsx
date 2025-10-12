"use client";

import React from "react";
import {
  Sparkles,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Dribbble,
} from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/priatnahrn" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/herlin-priatna-952830285/" },
    { Icon: Instagram, href: "https://www.instagram.com/priatnahrn__/" },
    { Icon: Dribbble, href: "https://dribbble.com/priatnahrn__" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Greeting Tag */}
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-teal-50 text-teal-500 rounded-full text-sm font-medium inline-flex items-center">
                <Sparkles size={16} className="mr-2" />
                UI/UX Designer
              </span>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              Hello 👋🏻 I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Herlin Priatna
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EB3748] to-[#e4630d] bg-clip-text text-transparent">
              UI/UX Designer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              UI/UX Designer with 1+ year of experience creating intuitive, user-centered
              digital products for web and mobile. Passionate about crafting clean
              interfaces, improving usability, and delivering impactful design solutions
              through creativity and collaboration.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-3 bg-[#EB3748] text-white rounded-lg hover:bg-[#e4630d] transition-all duration-300 flex items-center justify-center group">
              Let&apos;s Connect
              <ChevronRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            <a
              href="/assets/CV_HERLIN_PRIATNA.pdf"
              download="CV_Herlin_Priatna.pdf"
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              Download CV
              <Download
                size={20}
                className="ml-2 group-hover:translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <p className="text-sm text-gray-600 mb-4">Find me on</p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-[#EB3748] hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute" />
          <div className="relative">
            <div className="w-full h-full absolute -inset-2 " />
            <img
              src="/assets/profile-photo.png"
              alt="Herlin Priatna"
              className="relative w-full h-auto transform hover:scale-[1.02] transition-transform duration-300 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
