import React from "react";
import { FileText, Code, Presentation, ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      icon: <Presentation className="w-6 h-6" />,
      title: "Gizalab Final Project",
      subtitle: "UX Course Fundamental 2023",
      description:
        "A comprehensive UX research and design case study completed as the final project for Gizalab UX Course Fundamental, demonstrating end-to-end user experience design methodology.",
      tags: ["UX Research", "Case Study", "Design Thinking"],
      year: "2023",
      bgColor: "bg-purple-500",
      link: "https://drive.google.com/file/d/1ZAHhc-NOXdYB3SmUx84JuqsXqsfQF0e5/view?usp=sharing",
    },
    {
      id: 2,
      icon: <Code className="w-6 h-6" />,
      title: "Limapoccoe Digital",
      subtitle: "Backend Development with API RESTful - Thesis Project",
      description:
        "Thesis project on 'Adopsi Secure SDLC Berbasis Generative AI pada Pengembangan Backend Sistem Layanan Publik Desa Limapoccoe'. Developed a secure backend system for village public services using RESTful API architecture.",
      tags: ["Backend Development", "API Design", "Secure SDLC", "Gen AI"],
      year: "2024-2025",
      bgColor: "bg-indigo-600",
      link: "https://drive.google.com/file/d/1uApWSkMTc33ekxbh1eV730FZnMH7IUwn/view?usp=sharing",
      website: "https://limapoccoedigital.id",
      repository: "https://repositori.telkomuniversity.ac.id/home/catalog/id/243093/slug/adopsi-secure-sdlc-berbasis-generative-ai-pada-pengembangan-backend-sistem-layanan-publik-desa-limapoccoe-capstone.html",
    },
    {
      id: 3,
      icon: <FileText className="w-6 h-6" />,
      title: "Auto2000 Digiroom Enhancement",
      subtitle: "Stock Theme Feature - Astra International",
      description:
        "Case study on enhancing the stock theme functionality for Auto2000 Digiroom Dealers platform at Astra, improving dealer management and user experience for automotive inventory systems.",
      tags: ["UI/UX Enhancement", "Dealer System", "Automotive"],
      year: "2025",
      bgColor: "bg-red-600",
      link: "https://drive.google.com/file/d/1QD3-VZNI6cguV8Dn4fRizgY7sWxpmFoc/view?usp=sharing",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            Research & Development
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Case Studies & Research Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            In-depth research projects and case studies exploring various aspects of design, development, and technology innovation
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300 flex flex-col"
            >
              {/* Header with Icon */}
              <div className={`${study.bgColor} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  {study.icon}
                </div>
                <span className="text-sm font-medium opacity-90">{study.year}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{study.title}</h3>
                <p className="text-sm opacity-90">{study.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="space-y-2">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  {study.website && (
                    <a
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      Visit Website
                    </a>
                  )}
                  
                  {study.repository && (
                    <a
                      href={study.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;