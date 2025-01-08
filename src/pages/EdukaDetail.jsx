/* eslint-disable no-unused-vars */

import React from "react";
import {
  ArrowLeft,
  Users,
  Target,
  Clock,
  Star,
  BookOpen,
  Brain,
  Palette,
  ChevronRight,
  Layout,
  Search,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BackgroundSection from "../components/Eduka/BackgroundSection";
import ResearchSection from "../components/Eduka/ResearchSection";
import DesignProcessSection from "../components/Eduka/DesignProcessSection";
import DesignProcessGallery from "../components/Eduka/DesignProcessGallery";

const EdukaStudyCase = () => {
  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research",
      description:
        "Conducted user research to understand pain points of elementary students and teachers regarding learning motivation.",
      details: [
        "Analysis of previous research",
        "Problem identification in learning methods",
        "Understanding user behavior and needs",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Ideation",
      description:
        "Developed solutions focusing on AR technology and game-based learning to increase engagement.",
      details: [
        "Feature ideation and prioritization",
        "Technology selection and feasibility study",
        "Solution framework development",
      ],
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Design",
      description:
        "Created user-centered designs with engaging interfaces for both students and teachers.",
      details: [
        "User flow development",
        "Information architecture",
        "Interactive prototype creation",
      ],
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Testing",
      description:
        "Conducted usability testing with real users to validate and improve the design.",
      details: [
        "Usability testing with 3 participants",
        "Feedback collection and analysis",
        "Design iterations based on user input",
      ],
    },
  ];

  const metrics = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Role",
      value: "UI/UX Designer",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Timeline",
      value: "< 1 Months",
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Platform",
      value: "Mobile App",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Focus",
      value: "Education",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-white my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <Link
            to={"/"}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/src/assets/logo-eduka.png" alt="Logo Eduka" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 font-bold text-gray-900 mb-6">
                Eduka <span className="text-violet-500">App</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                An innovative AR-based learning platform designed to boost
                elementary students motivation and combat learning fatigue
                through interactive experiences.
              </p>
              <div className="flex gap-3 my-5">
                <span className="px-4 py-2 bg-violet-50 text-violet-500 rounded-full text-sm font-medium">
                  UI/UX Case Study
                </span>
                <span className="px-4 py-2 bg-violet-50 text-violet-500 rounded-full text-sm font-medium">
                  2024
                </span>
                <span className="px-4 py-2 bg-violet-50 text-violet-500 rounded-full text-sm font-medium">
                  Project Competition
                </span>
              </div>
             
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet text-violet-500/5 to-violet-100 rounded-3xl blur-3xl"></div>
              <img
                src="/src/assets/eduka-3.png"
                alt="Eduka App Preview"
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600">
              Eduka transforms traditional learning methods into engaging,
              interactive experiences using augmented reality technology and
              game-based learning principles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-violetext-violet-500/10 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                  {metric.icon}
                </div>
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="font-semibold text-gray-900">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-gray-600">
              A comprehensive approach to creating an engaging learning
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-violetext-violet-500/10 rounded-xl flex items-center justify-center text-violet-500 mb-4 group-hover:bg-violetext-violet-500 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-violetext-violet-500/30 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackgroundSection />

      <ResearchSection />

      <DesignProcessGallery />

      
      <Footer />
    </div>
  );
};

export default EdukaStudyCase;
