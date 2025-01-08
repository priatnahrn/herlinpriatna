/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Heart,
} from "lucide-react";

const PortfolioShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  // Featured projects for the slider
  const featuredProjects = [
    {
      id: 1,
      title: "Healthcare Dashboard",
      category: "UI Design",
      image: "src/assets/project1.png",
      description: "Modern dashboard design for healthcare management system",
      likes: 128,
      views: 1840,
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "Mobile App",
      image: "src/assets/project2.png",
      description:
        "User-friendly e-commerce app with seamless shopping experience",
      likes: 95,
      views: 1220,
    },
    {
      id: 3,
      title: "Finance Platform",
      category: "Web Design",
      image: "src/assets/project3.png",
      description: "Financial platform with intuitive user interface",
      likes: 156,
      views: 2100,
    },
  ];

  // All portfolio projects
  const allProjects = [
    // Include featured projects
    ...featuredProjects,
    // Additional projects
    {
      id: 4,
      title: "Social Media App",
      category: "Mobile App",
      image: "src/assets/project4.png",
      description: "Social networking platform with modern UI",
      likes: 82,
      views: 940,
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      category: "Web Design",
      image: "src/assets/project5.png",
      description: "Travel booking website with seamless UX",
      likes: 113,
      views: 1560,
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "src/assets/project6.png",
      description: "Food delivery app with intuitive interface",
      likes: 94,
      views: 1280,
    },
  ];

  const categories = [
    "All",
    "UI Design",
    "UX Design",
    "Web Design",
    "Mobile App",
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const filteredProjects = allProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            My Work
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects Slider */}
        <div className="relative mb-20 group">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-3xl">
                          <span className="text-[#EB3748] bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          <h3 className="mt-4 text-3xl font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-white/90">
                            {project.description}
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <span className="flex items-center gap-1 text-white/90">
                              <Heart size={16} />
                              {project.likes}
                            </span>
                            <span className="flex items-center gap-1 text-white/90">
                              <Eye size={16} />
                              {project.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "w-8 bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#EB3748] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EB3748] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                      <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <ExternalLink size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#EB3748] font-medium">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
