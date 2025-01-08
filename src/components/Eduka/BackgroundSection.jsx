/* eslint-disable no-unused-vars */
import React from "react";
import { BookOpen, Target, Users } from "lucide-react";

const BackgroundSection = () => {
  const challenges = [
    {
      title: "Limited Student Engagement",
      description:
        "Traditional learning methods often lead to boredom and reduced motivation among elementary students, affecting their ability to absorb and retain information.",
    },
    {
      title: "Technology Integration Gaps",
      description:
        "While digital learning tools exist, many are limited to basic presentations and websites, lacking the interactive elements needed to truly engage young minds.",
    },
    {
      title: "Learning Style Mismatch",
      description:
        "Current educational approaches don't always accommodate different learning styles, leading to decreased interest and understanding among students.",
    },
  ];

  const goals = {
    title: "Revolutionizing Elementary Education",
    description:
      "Eduka aims to transform traditional learning experiences by combining AR technology with game-based learning, creating an engaging and effective educational environment that motivates students while making learning fun and interactive.",
  };

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Students",
      points: [
        "Interactive AR-based learning experience",
        "Increased motivation through gamification",
        "Better understanding through visual learning",
        "Personalized learning pace",
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "For Teachers",
      points: [
        "Enhanced teaching tools and resources",
        "Better student engagement tracking",
        "Simplified complex concept explanation",
        "Improved classroom interaction",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Challenge */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Challenge
          </h2>
          <p className="text-gray-600 mb-12">
            In todays fast-paced digital world, traditional education faces new
            challenges in keeping students engaged and motivated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>

        {/* Our Vision */}
        <div className="bg-violet-50 rounded-2xl p-12 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Our Vision
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {goals.title}
            </h2>
            <p className="text-gray-600">{goals.description}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-gray-600 mb-12">
            Eduka brings value to both students and teachers, creating a more
            engaging and effective learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-3">
                {benefit.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-violet-500/30 rounded-full"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
