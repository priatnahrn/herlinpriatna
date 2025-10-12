"use client";
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Figma,
  PenTool,
  Layout,
  Search,
  Palette,
  CodeSquare,
  GitBranch,
  Users,
  Clock,
  MessageCircle,
  Brain,
  Target,
  Puzzle,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "3.86", label: "GPA" },
    { value: "6+", label: "National Achievements" },
  ];

  const skills = {
    hardSkills: [
      {
        name: "UI/UX Design",
        icon: <Figma size={22} />,
        color: "border-[1.5px] border-pink-500 bg-pink-50 text-pink-500",
        hoverColor: "hover:bg-pink-500",
      },
      {
        name: "Wireframing & Prototyping",
        icon: <PenTool size={22} />,
        color: "border-[1.5px] border-violet-500 bg-violet-50 text-violet-500",
        hoverColor: "hover:bg-violet-500",
      },
      {
        name: "User Research",
        icon: <Search size={22} />,
        color: "border-[1.5px] border-purple-500 bg-purple-50 text-purple-500",
        hoverColor: "hover:bg-purple-500",
      },
      {
        name: "Design System",
        icon: <Layout size={22} />,
        color: "border-[1.5px] border-orange-500 bg-orange-50 text-orange-500",
        hoverColor: "hover:bg-orange-500",
      },
      {
        name: "Front-End Development",
        icon: <CodeSquare size={22} />,
        color: "border-[1.5px] border-blue-500 bg-blue-50 text-blue-500",
        hoverColor: "hover:bg-blue-500",
      },
      {
        name: "Version Control (Git)",
        icon: <GitBranch size={22} />,
        color: "border-[1.5px] border-gray-500 bg-gray-50 text-gray-600",
        hoverColor: "hover:bg-gray-600",
      },
    ],
    softSkills: [
      {
        name: "Problem Solving",
        icon: <Puzzle size={22} />,
        color: "border-[1.5px] border-purple-500 bg-purple-50 text-purple-500",
        hoverColor: "hover:bg-purple-500",
      },
      {
        name: "Collaboration",
        icon: <Users size={22} />,
        color: "border-[1.5px] border-teal-500 bg-teal-50 text-teal-500",
        hoverColor: "hover:bg-teal-500",
      },
      {
        name: "Communication",
        icon: <MessageCircle size={22} />,
        color: "border-[1.5px] border-amber-500 bg-amber-50 text-amber-500",
        hoverColor: "hover:bg-amber-500",
      },
      {
        name: "Adaptability",
        icon: <Brain size={22} />,
        color: "border-[1.5px] border-lime-500 bg-lime-50 text-lime-500",
        hoverColor: "hover:bg-lime-500",
      },
      {
        name: "Time Management",
        icon: <Clock size={22} />,
        color: "border-[1.5px] border-emerald-500 bg-emerald-50 text-emerald-500",
        hoverColor: "hover:bg-emerald-500",
      },
    ],
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Blending Design, Function, and Purpose
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Stats */}
          <div className="space-y-8">
            <img
              src="/assets/about-2.png"
              alt="About Herlin"
              className="group"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-manrope text-xl font-bold text-gray-900">
                A Fresh Graduate UI/UX Designer from Bandung, Indonesia 🇮🇩
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m Herlin Priatna — a Software Engineering graduate from Telkom
                University with hands-on experience designing user-centered digital
                products for web and mobile. Over the past year, I’ve worked on multiple
                UI/UX projects and internships, focusing on crafting intuitive,
                accessible, and visually engaging user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My experience across design and development allows me to bridge
                creativity and functionality — ensuring every product I design not only
                looks good but also performs seamlessly. I’m also recognized in several
                national-level design and innovation competitions for my ability to
                combine user empathy with practical design execution.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I’m passionate about continuous learning, collaboration, and building
                designs that make technology more human-centered and meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {/* Hard Skills */}
              <div>
                <h4 className="font-manrope text-lg font-bold text-gray-900 mb-4">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.hardSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 flex items-center ${skill.color} rounded-lg text-sm font-medium ${skill.hoverColor} hover:text-white transition-colors duration-300`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="font-manrope text-lg font-bold text-gray-900 mb-4">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 flex items-center ${skill.color} rounded-lg text-sm font-medium ${skill.hoverColor} hover:text-white transition-colors duration-300`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
