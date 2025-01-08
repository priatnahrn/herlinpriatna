/* eslint-disable no-unused-vars */
import React from "react";
import {
  Users,
  Target,
  Search,
  MessagesSquare,
  Presentation,
  BarChart,
} from "lucide-react";
import DesignProcessSection from "./DesignProcessSection";

const ResearchSection = () => {
  const targetUsers = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Elementary Students",
      description:
        "Ages 6-12 who struggle with learning motivation and find traditional learning methods unengaging",
      details: [
        "Looking for more interactive learning experiences",
        "Comfortable with mobile technology",
        "Various learning styles and preferences",
        "Need motivation boost in studies",
      ],
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Elementary Teachers",
      description:
        "Educators seeking innovative ways to engage students through interactive and effective teaching methods",
      details: [
        "Want to incorporate modern teaching tools",
        "Need easy-to-use technology solutions",
        "Focus on student engagement",
        "Looking for ways to track progress",
      ],
    },
  ];

  const researchProcess = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Understanding Users",
      description:
        "We conducted extensive research through literature studies to understand both teachers' and students' needs.",
      stats: "4 Previous Studies Analyzed",
      highlight: "Discovered key pain points in current educational technology",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Defining Requirements",
      description:
        "Translated research findings into concrete features and functionalities that address user needs.",
      stats: "6 Core Features Identified",
      highlight:
        "AR learning, gamification, and progress tracking emerged as key solutions",
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "User Testing",
      description:
        "Conducted usability testing with real teachers to validate our design decisions.",
      stats: "79.17 SUS Score",
      highlight:
        "Achieved 'Good' usability rating with recommendations for future improvements",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Research Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Research Journey
          </h2>
          <p className="text-gray-600">
            We took a user-centered approach to understand and solve the
            challenges in elementary education, focusing on both students and
            teachers needs.
          </p>
        </div>

        {/* Target Users */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Who We are Helping
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-6">
                  {user.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {user.title}
                </h4>
                <p className="text-gray-600 mb-6">{user.description}</p>
                <ul className="space-y-3">
                  {user.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-violet-500/30 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Research Process */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            The Research Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-6">
                  {process.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h4>
                <p className="text-gray-600 mb-6">{process.description}</p>
                <div className="bg-violet-50 rounded-lg p-4 mb-4">
                  <div className="text-violet-500 font-semibold">
                    {process.stats}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{process.highlight}</p>
              </div>
            ))}
          </div>
        </div>

      

        {/* Testing Results */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart className="w-4 h-4" />
              Testing Results
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Validation Through Testing
            </h3>
            <p className="text-gray-600 mb-8">
              Our usability testing with teachers yielded positive results,
              achieving a System Usability Scale (SUS) score of 79.17 -
              indicating good usability with room for continued improvement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">3</div>
                <div className="text-gray-600">Teacher Participants</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">
                  79.17
                </div>
                <div className="text-gray-600">Average SUS Score</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl font-bold text-violet-500 mb-2">7</div>
                <div className="text-gray-600">Key Improvements Identified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
