/* eslint-disable no-unused-vars */
import React from "react";
import {
  Pencil,
  Layout,
  TestTube,
  Workflow,
  Eye,
  Lightbulb,
  Palette,
  Image,
} from "lucide-react";

const DesignProcessGallery = () => {
  const designProcess = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "User-Centered Design",
      description:
        "We employed User Centered Design (UCD) methodology to ensure our solutions truly address user needs",
      details: [
        "Focus on user needs and preferences",
        "Structured approach to design",
        "Iterative development process",
        "Continuous user feedback",
      ],
    },
    {
      icon: <Pencil className="w-6 h-6" />,
      title: "Wireframing",
      description:
        "Created low-fidelity wireframes to establish basic layout and functionality",
      details: [
        "Essential feature placement",
        "Basic navigation flow",
        "Content hierarchy",
        "Key interaction points",
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Design",
      description:
        "Developed high-fidelity designs with engaging visuals and intuitive interfaces",
      details: [
        "Cohesive color scheme",
        "User-friendly interface",
        "Interactive elements",
        "Engaging visuals",
      ],
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Prototype Testing",
      description:
        "Conducted thorough testing to validate design decisions and user experience",
      details: [
        "Interactive prototypes",
        "User feedback collection",
        "Usability improvements",
        "Feature refinement",
      ],
    },
  ];

  const designStages = [
    {
      title: "Empathy Map",
      description: "Understanding user needs and pain points",
      image: "/assets/kasihibu/empathy-map.png",
      type: "Empathy Map",
    },
    {
      title: "Information Architecture",
      description: "Detailed information architecture and navigation design",
      image: "/assets/kasihibu/ia.png",
      type: "Information Architecture",
    },
    {
      title: "User Persona",
      description: "Detailed user persona and needs analysis",
      image: "/assets/kasihibu/user-persona.png",
      type: "Information Architecture",
    },
    {
      title: "Wireframes",
      description: "Initial layout and structure planning",
      image: "/assets/kasihibu/wireframes.jpg",
      type: "Low-fidelity",
    },
    {
      title: "Design System Guidelines",
      description: "Consistent design elements and components",
      image: "/assets/kasihibu/design-system.jpg",
      type: "Design System",
    },
    {
      title: "Visual Design",
      description: "Detailed interface and component design",
      image: "/assets/kasihibu/high-fidelity.png",
      type: "High-fidelity",
    },
    {
      title: "Final Prototype",
      description: "Interactive prototype for testing",
      image: "/assets/kasihibu/prototype.jpg",
      type: "Interactive",
    },
  ];

  const projectGallery = [
    {
      title: "Presentation",
      image: "/assets/yayasanmaqdis.jpg",
      category: "Final Presentation",
    },
    {
      title: "Mockup",
      image: "/assets/kasihibu/high-fidelity.png",
      category: "Mockup",
    },
  ];

  return (
    <>
      {/* Design Evolution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Eye className="w-4 h-4" />
              Design Evolution
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Concept to Reality
            </h2>
            <p className="text-gray-600">
              Witness the transformation of our initial concepts into a
              fully-realized educational platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designStages.map((stage, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    {stage.type}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Image className="w-4 h-4" />
              Project Gallery
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Documentation Highlights
            </h2>
            <p className="text-gray-600">
              Capturing key moments and milestones throughout our design journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectGallery.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignProcessGallery;
