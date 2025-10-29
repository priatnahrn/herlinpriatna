/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const PortfolioSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Eduka App",
      tags: ["Mobile App", "UI Design", "AR Technology", "Education"],
      image: "/assets/eduka-app.png",
      description:
        "An innovative AR-based learning platform designed to boost elementary students motivation and combat learning fatigue through interactive experiences.",
      path: "/portfolio/eduka",
      featured: true,
      objective: "1st Winner Primakara UI/UX Design Competition 2024",
      bgColor: "bg-violet-500",
      hasDetailPage: true,
    },
    {
      id: 2,
      title: "Kasih Ibu App",
      tags: ["Mobile App", "UI Design", "Healthcare", "AI Integration"],
      image: "/assets/kasih-ibu-mockup.png",
      description:
        "A mobile app using AI to support pregnant and postpartum mothers in managing their mental health and emotional well-being.",
      path: "/portfolio/kasihibu",
      featured: true,
      objective: "2nd Winner UI/UX Design Competition 2024 at UMY",
      bgColor: "bg-rose-500",
      hasDetailPage: true,
    },
    {
      id: 3,
      title: "SMBC TOUCHBIZ APP",
      tags: ["Mobile & Web App", "UI Design", "Business Banking", "Fintech"],
      image: "/assets/touchbiz/touchbiz-cover.png",
      description:
        "A comprehensive business banking solution designed for Touchbiz, streamlining financial operations, payment processing, and account management for corporate clients.",
      featured: true,
      objective: "Internship Project 2025",
      bgColor: "bg-blue-600",
      externalLink: "https://drive.google.com/file/d/1lDgHFd-IwNyy-hHa8lVefi9fNJlCgle4/view?usp=sharing",
      hasDetailPage: false,
    },
    {
      id: 4,
      title: "FitWell App",
      tags: ["Mobile App", "UI Design", "Healthcare", "AI Integration"],
      image: "/assets/fitwell/fitwell-cover.png",
      description:
        "FitWell is a nutrition-focused app powered by AI that offers personalized meal plans, nutritionist consultations, and a product scanner to help users prevent and manage obesity.",
      featured: true,
      objective: "Project Competition 2023",
      bgColor: "bg-orange-500",
      externalLink: "https://drive.google.com/file/d/1p0AiD8jHDDNXJ5iILc6qkcC1hYsS0n2M/view?usp=sharing",
      hasDetailPage: false,
    },
    {
      id: 5,
      title: "Hamim App",
      tags: ["Mobile App", "UI Design", "Education", "Islamic App"],
      image: "/assets/hamim/hamim-cover.png",
      description:
        "A mobile application for learning and memorizing the Quran using the Maqdis method, featuring excellent audio-based memorization tracking that is affordable and easily accessible.",
      featured: true,
      objective: "Internship Project 2024",
      bgColor: "bg-green-600",
      externalLink: "https://play.google.com/store/apps/details?id=co.metode.hamim&hl=id&pli=1",
      hasDetailPage: false,
    },
    {
      id: 6,
      title: "Maqdis Academy",
      tags: ["Web App", "UI Design", "Education", "E-Learning"],
      image: "/assets/maqdis.png",
      description:
        "Maqdis Academy is a platform that provides access to project-based learning and internships for students to improve their skills in technology.",
      featured: true,
      objective: "Internship Project 2024",
      bgColor: "bg-blue-500",
      externalLink: "https://academy.maqdis.com",
      hasDetailPage: false,
    },
    {
      id: 7,
      title: "ERP Kawan Kerja",
      tags: ["Web App", "UI Design", "Enterprise", "Dashboard"],
      description:
        "ERP Kawan Kerja is an integrated application designed to optimize business operations by streamlining processes such as finance, HR, inventory, and project management.",
      image: "/assets/kawankerja/erp-cover.png",
      featured: true,
      objective: "Internship Project 2024",
      bgColor: "bg-cyan-600",
      externalLink: "https://erp.kawankerja.id",
      hasDetailPage: false,
    },
    {
      id: 8,
      title: "Maqdis Travel Management",
      tags: ["Web App", "UI Design", "Dashboard", "Travel"],
      description:
        "A platform tailored for halal and religious travel, enabling administrators to manage travel content, user interactions, and bookings efficiently.",
      image: "/assets/maqdis/travel-cover.png",
      featured: true,
      objective: "Internship Project 2024",
      bgColor: "bg-amber-600",
      externalLink: "https://travel.maqdis.com",
      hasDetailPage: false,
    },
    {
      id: 9,
      title: "Hamim Game App",
      tags: ["Mobile App", "UI Design", "Game", "Islamic App"],
      image: "/assets/maqdis/hamim-game-cover.png",
      description:
        "A mobile game-based application for learning and memorizing the Quran using the Maqdis method, featuring interactive audio-tracking tools for efficient memorization.",
      featured: true,
      objective: "Internship Project 2024",
      bgColor: "bg-emerald-600",
      externalLink: "https://play.google.com/store/apps/hamim-game",
      hasDetailPage: false,
    },
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in UI/UX design across various industries and platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 ${project.bgColor} text-white text-xs font-medium rounded-full`}
                >
                  {project.objective}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Action Button */}
                {project.hasDetailPage ? (
                  <button
                    onClick={() => navigate(project.path)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 ${project.bgColor} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-between px-4 py-2.5 ${project.bgColor} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;