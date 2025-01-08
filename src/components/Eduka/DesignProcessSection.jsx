/* eslint-disable no-unused-vars */
import React from "react";
import {
  Palette,
  Shapes,
  Smartphone,
  ListChecks,
  Ruler,
  Globe,
} from "lucide-react";

const DesignProcessSection = () => {
  const designStages = [
    {
      icon: <Shapes className="w-6 h-6" />,
      title: "Wireframing",
      description:
        "Started with low-fidelity wireframes to establish the basic structure and user flows",
      features: [
        "Clear navigation patterns",
        "Core feature placement",
        "Basic interaction flows",
        "Content hierarchy",
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Design",
      description:
        "Transformed wireframes into visually appealing interfaces that engage both students and teachers",
      features: [
        "Engaging color scheme",
        "Intuitive UI elements",
        "Consistent design language",
        "Accessible typography",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Interactive Prototype",
      description:
        "Created clickable prototypes for testing and validation with real users",
      features: [
        "Realistic interactions",
        "Smooth transitions",
        "Complete user flows",
        "Testing-ready interfaces",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AR Learning Experience",
      description:
        "Interactive AR features that bring learning materials to life, making education more engaging and memorable",
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: "Game-Based Learning",
      description:
        "Educational games that make learning fun while maintaining educational value and progress tracking",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Performance Tracking",
      description:
        "Comprehensive tools for teachers to monitor student progress and engagement levels",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Design Process Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            Design Process
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bringing Eduka to Life
          </h2>
          <p className="text-gray-600">
            Our design journey focused on creating an intuitive and engaging
            learning experience that serves both students and teachers
            effectively.
          </p>
        </div>

        {/* Design Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {designStages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-6">
                {stage.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {stage.title}
              </h3>
              <p className="text-gray-600 mb-6">{stage.description}</p>
              <ul className="space-y-3">
                {stage.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-violet-500/30 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Features Showcase */}
        <div className="bg-white rounded-2xl p-12 mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h3>
            <p className="text-gray-600">
              Each feature was carefully designed to enhance the learning
              experience and make education more engaging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Evolution */}
        <div className="bg-violet-50 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Concept to Reality
            </h3>
            <p className="text-gray-600 mb-8">
              Our iterative design process ensured that every screen and
              interaction was thoughtfully crafted to serve our users needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">
                  15+
                </div>
                <div className="text-gray-600">Unique Screens</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">3</div>
                <div className="text-gray-600">Design Iterations</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">
                  100%
                </div>
                <div className="text-gray-600">User Flow Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
