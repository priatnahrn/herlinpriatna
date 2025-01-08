/* eslint-disable no-unused-vars */ import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Heart,
  Eye,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Eduka App",
      tags: [
        { name: "Mobile App", color: "bg-violet-100 text-violet-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "AR Technology", color: "bg-green-100 text-green-600" },
        { name: "Education", color: "bg-yellow-100 text-yellow-600" },
      ],
      image: "/assets/eduka-app.png",
      description:
        "An innovative AR-based learning platform designed to boost elementary students motivation and combat learning fatigue through interactive experiences.",
      likes: 128,
      views: 1840,
      path: "/portfolio/eduka",
      featured: true,
      objective: "1st Winner Primakara UI/UX Design Competition 2024",
      color: "from-purple-500/20",
      bgColor: "bg-violet-500",
    },
    {
      id: 2,
      title: "Kasih Ibu App",
      tags: [
        { name: "Mobile App", color: "bg-violet-100 text-violet-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Healthcare", color: "bg-pink-100 text-pink-600" },
        { name: "AI Integration", color: "bg-yellow-100 text-yellow-600" },
      ],
      image: "/assets/kasih-ibu-mockup.png",
      description:
        "A mobile app using AI to support pregnant and postpartum mothers in managing their mental health and emotional well-being.",
      likes: 95,
      views: 1220,
      path: "/portfolio/kasihibu",
      featured: true,
      objective: "2nd Winner UI/UX Design Competition 2024 at UMY",
      color: "from-pink-500/20",
      bgColor: "bg-pink-500",
    },
    {
      id: 3,
      title: "Maqdis Academy",
      tags: [
        { name: "Web App", color: "bg-indigo-100 text-indigo-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Education", color: "bg-yellow-100 text-yellow-600" },
        { name: "E-Learning", color: "bg-green-100 text-green-600" },
      ],
      image: "/assets/maqdis.png",
      description:
        "Maqdis Academy is a platform that provides access to project-based learning and internships for students to improve their skills in technology.",
      likes: 156,
      views: 2100,
      featured: true,
      objective: "Project Internship 2024",
      color: "from-blue-500/20",
      bgColor: "bg-blue-500",
    },
    {
      id: 4,
      title: "FitWell",
      tags: [
        { name: "Mobile App", color: "bg-violet-100 text-violet-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Healthcare", color: "bg-pink-100 text-pink-600" },
        { name: "AI Integration", color: "bg-yellow-100 text-yellow-600" },
      ],
      image: "/assets/fitwell/fitwell-cover.png",
      description:
        "FitWell is a nutrition-focused app powered by AI that offers personalized meal plans, nutritionist consultations, and a product scanner to help users prevent and manage obesity.",
      likes: 95,
      views: 1220,
      featured: true,
      objective: "Project Competition 2023",
      color: "from-orange-500/20",
      bgColor: "bg-orange-500",
    },
    {
      id: 5,
      title: "Hamim App",
      tags: [
        { name: "Mobile App", color: "bg-violet-100 text-violet-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Education", color: "bg-yellow-100 text-yellow-600" },
        { name: "Islamic App", color: "bg-green-100 text-green-600" },
      ],
      image: "/assets/hamim/hamim-cover.png",
      description:
        "A mobile application for learning and memorizing the Quran using the Maqdis method, which provides excellent features in tracking audio-based memorization that is affordable and easily accessible.",
      likes: 95,
      views: 1220,
      featured: true,
      objective: "Project Internship 2024",
      color: "from-orange-500/20",
      bgColor: "bg-orange-500",
    },
    {
      id: 6,
      title: "ERP Kawan Kerja",
      tags: [
        { name: "Web App", color: "bg-indigo-100 text-indigo-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Enterprise", color: "bg-cyan-100 text-cyan-600" },
        { name: "Dashboard", color: "bg-purple-100 text-purple-600" },
      ],
      description:
        "ERP Kawan Kerja is an integrated application designed to optimize business operations by streamlining processes such as finance, HR, inventory, and project management, providing businesses with efficient and data-driven solutions.",
      image: "/assets/kawankerja/erp-cover.png",
      likes: 95,
      views: 1220,
      featured: true,
      objective: "Project Internship 2024",
      color: "from-cyan-500/20",
      bgColor: "bg-cyan-500",
    },
    {
      id: 7,
      title: "Content & User Management of Maqdis Travel App",
      tags: [
        { name: "Web App", color: "bg-indigo-100 text-indigo-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Dashboard", color: "bg-purple-100 text-purple-600" },
        { name: "Travel", color: "bg-yellow-100 text-yellow-600" },
      ],
      description:
        "A platform tailored for halal and religious travel, enabling administrators to manage travel content, user interactions, and bookings efficiently while ensuring a seamless and spiritually enriching experience for travelers.",
      image: "/assets/maqdis/travel-cover.png",
      likes: 95,
      views: 1220,
      featured: true,
      objective: "Project Internship 2024",
      color: "from-yellow-500/20",
      bgColor: "bg-yellow-500",
    },
    {
      id: 8,
      title: "Hamim App Based Game",
      tags: [
        { name: "Mobile App", color: "bg-violet-100 text-violet-600" },
        { name: "UI Design", color: "bg-blue-100 text-blue-600" },
        { name: "Game", color: "bg-orange-100 text-orange-600" },
        { name: "Islamic App", color: "bg-green-100 text-green-600" },
      ],
      image: "/assets/maqdis/hamim-game-cover.png",
      description:
        "A mobile game-based application designed for learning and memorizing the Quran using the Maqdis method, featuring interactive audio-tracking tools for efficient memorization, accessible anytime, and affordable for all users.",
      likes: 95,
      views: 1220,
      featured: true,
      objective: "Project Internship 2024",
      color: "from-orange-500/20",
      bgColor: "bg-orange-500",
    },
  ];
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header stays the same */}
        <div className="text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Showcasing some of my best work in UI/UX design. Each project
            represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter Buttons stay the same */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#EB3748] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EB3748] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}
                >
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center text-white">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart size={16} />
                          {project.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={16} />
                          {project.views}
                        </span>
                      </div>
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 ${project.bgColor} text-white text-xs font-medium rounded-full`}
                  >
                    {project.objective}
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Simplified Case Study Button */}
              {project.path && (
                <div className="px-6 pb-6">
                  <button
                    onClick={() => navigate(project.path)}
                    className={`w-full ${project.bgColor} text-white rounded-lg px-4 py-2 flex items-center justify-between`}
                  >
                    <span className="font-medium">Read the Case Study</span>
                    <ChevronRight />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 group">
            More Projects Coming Soon in 2025
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
