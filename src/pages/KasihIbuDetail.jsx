/* eslint-disable no-unused-vars */

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Brain,
  Layout,
  TestTube,
  Users,
  Clock,
  Target,
  BookOpen,
  Smartphone,
  MessageSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SurveyResults from "../components/KasihIbu/SurveyResult";
import InterviewResults from "../components/KasihIbu/InterviewResults";
import EmpathyAndPersona from "../components/KasihIbu/EmpathyAndPersona";
import DesignProcessGallery from "../components/KasihIbu/DesignProcessGallery";
import IdeationProcess from "../components/KasihIbu/IdeationProcess";
import PrototypeAndTesting from "../components/KasihIbu/PrototypeAndTesting";
import IterationResults from "../components/KasihIbu/IterationResults";

const KasihIbuStudyCase = () => {
  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Empathize",
      description:
        "Understanding psychological and emotional needs of pregnant and postpartum mothers.",
      details: [
        "Conducted surveys and interviews",
        "Mapped user pain points",
        "Performed competitor analysis",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Define",
      description:
        "Analyzed collected data to define the primary challenges faced by users.",
      details: [
        "Identified major pain points",
        "Formulated problem statements",
        "Prioritized issues for solution ideation",
      ],
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Ideate",
      description:
        "Brainstormed and refined solutions using AI for mental health management.",
      details: [
        "Designed key features like AI Chat and AI Vision",
        "Planned user flow and information architecture",
        "Defined innovative approaches for emotional support",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Prototyping",
      description:
        "Created interactive prototypes to validate designs and gather user feedback.",
      details: ["Developed interactive prototypes"],
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Testing",
      description:
        "Validated designs through usability testing with real users.",
      details: [
        "Iterative feedback analysis",
        "Improved usability score from 74 to 83",
        "Enhanced design through multiple iterations",
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
      value: "2 Months",
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Platform",
      value: "Mobile App",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Focus",
      value: "Mental Health",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-white my-8">
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
              <img
                src="/assets/kasihibu/kasih-ibu-logo.png"
                alt="Logo Kasih Ibu"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 font-bold text-gray-900 mb-6">
                Kasih <span className="text-rose-500">Ibu</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                A mobile app using AI to support pregnant and postpartum mothers
                in managing their mental health and emotional well-being.
              </p>
              <div className="flex gap-3 my-5">
                <span className="px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium">
                  UI/UX Case Study
                </span>
                <span className="px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium">
                  2024
                </span>
                <span className="px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium">
                  UX Competition for Gemastik 2024
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-rose-100 rounded-3xl blur-3xl"></div>
              <img
                src="/assets/kasihibu/mockup.png"
                alt="Kasih Ibu App Preview"
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-8  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600">
              Kasih Ibu integrates advanced AI technology to address mental
              health challenges among mothers, fostering emotional resilience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4">
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

      {/* Gallery Section */}
      <DesignProcessGallery />
      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-gray-600">
              A comprehensive approach to ensuring user-centric design and
              effective solutions using{" "}
              <span className="font-bold text-rose-500">Design Thinking</span>{" "}
              method.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
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
                      <div className="w-1.5 h-1.5 bg-rose-500/30 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Background
            </h2>
            <p className="text-gray-600">
              Exploring the challenges and needs of pregnant and postpartum
              mothers through their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pregnancy: An Emotional Journey
              </h3>
              <p className="text-gray-600">
                Pregnancy is a cherished period but often comes with physical
                and psychological changes. Hormonal surges lead to{" "}
                <span className="font-semibold text-gray-800">mood swings</span>{" "}
                and anxiety.
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Alarming Statistics
              </h3>
              <p className="text-gray-600">
                According to BKKBN, 57% of mothers in Indonesia experience{" "}
                <span className="font-semibold text-gray-800">baby blues</span>{" "}
                and{" "}
                <span className="font-semibold text-gray-800">
                  postpartum depression
                </span>
                , the highest rate in Asia.
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Challenges Faced
              </h3>
              <p className="text-gray-600">
                Pregnant and postpartum mothers often feel{" "}
                <span className="font-semibold text-gray-800">anxious</span>,
                lack support, experience poor sleep, and physical and emotional
                exhaustion.
              </p>
            </div>

            {/* Story 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Insights from Healthcare Experts
              </h3>
              <p className="text-gray-600">
                The main cause of anxiety is a{" "}
                <span className="font-semibold text-gray-800">
                  lack of knowledge
                </span>{" "}
                about pregnancy and childbirth, as reported in interviews.
              </p>
            </div>

            {/* Story 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Steps to Address the Issue
              </h3>
              <p className="text-gray-600">
                Practices like yoga, meditation, and emotional support from
                family are crucial in maintaining mental health.
              </p>
            </div>

            {/* Story 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Need for Integrated Support
              </h3>
              <p className="text-gray-600">
                Current healthcare systems often overlook{" "}
                <span className="font-semibold text-gray-800">
                  psychological well-being
                </span>
                , highlighting the need for innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Goals</h2>
            <p className="text-gray-600">
              Kasih Ibu aims to simplify psychological health monitoring for
              pregnant and postpartum mothers while providing a supportive
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Goal 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                Provide a platform for real-time monitoring of psychological
                health to help mothers stay informed and proactive.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Supportive Community
              </h3>
              <p className="text-gray-600">
                Facilitate a community and discussion forum for sharing feelings
                and experiences with others in similar life phases.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                Deliver education and personalized solutions tailored to the
                mother’s current condition and situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empathize Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empathize Process
            </h2>
            <p className="text-gray-600">
              Understanding the challenges, emotions, and perspectives of
              pregnant and postpartum mothers, as well as insights from medical
              professionals.
            </p>
          </div>

          {/* Research Methods Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quantitative Survey
              </h3>
              <p className="text-gray-600">
                Distributed questionnaires to assess the psychological health
                levels of mothers, collecting responses from 31 participants
                within 5 days.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                In-Depth Interviews
              </h3>
              <p className="text-gray-600">
                Conducted interviews with pregnant and postpartum mothers to
                explore their psychological health experiences and challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medical Insights
              </h3>
              <p className="text-gray-600">
                Engaged healthcare professionals specializing in maternal health
                to validate findings and gather expert perspectives.
              </p>
            </div>
          </div>

          {/* Survey Results Section */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Survey Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Pregnant Mothers
                </h4>
                <p className="text-gray-600 mb-4">
                  Key insights reveal high levels of anxiety, mood swings, and
                  concerns about physical changes during pregnancy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>57.1%</strong> are anxious about becoming mothers.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>71.5%</strong> experience unstable emotions or
                      restlessness.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>42.8%</strong> feel lonely during pregnancy.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Postpartum Mothers
                </h4>
                <p className="text-gray-600 mb-4">
                  Findings highlight exhaustion, emotional instability, and
                  difficulty balancing new responsibilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>88.2%</strong> feel tired or low on energy.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>41.2%</strong> experience depression symptoms such
                      as sadness without cause.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-rose-500 rounded-full mt-1"></div>
                    <p className="text-gray-600">
                      <strong>47.1%</strong> feel angry, restless, or irritable.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <SurveyResults />

          <InterviewResults />

          <EmpathyAndPersona />
        </div>
      </section>

      {/*Comparative Analysis */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Competitor Analysis
            </h2>
            <p className="text-gray-600">
              Understanding the strengths and weaknesses of existing solutions
              to position Kasih Ibu effectively in the market.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/assets/kasihibu/analisis-kompetitor.png"
              alt="Analisis Kompetitor"
              className="lg:w-[80%]"
            />
          </div>

          {/* Competitive Edge Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Our Competitive Edge
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  AI-Powered Consultations
                </h4>
                <p className="text-gray-600">
                  Integrating AI for personalized video and chat consultations,
                  ensuring timely and accurate support.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Monitoring
                </h4>
                <p className="text-gray-600">
                  Track daily reflections and detect changes in psychological
                  conditions seamlessly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Comprehensive Screening
                </h4>
                <p className="text-gray-600">
                  Conduct emotional state screenings for better insights and
                  proactive care.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Community Integration
                </h4>
                <p className="text-gray-600">
                  Facilitate emotional support through interactive communities
                  and forums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define Section */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Define Process
            </h2>
            <p className="text-gray-600">
              A critical step to analyze and classify findings from the
              empathize stage, focusing on identifying pain points and
              formulating actionable problem statements.
            </p>
          </div>

          {/* Pain & Gain Definition Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Defining Pain & Gain
            </h3>
            <p className="text-gray-600 mb-6">
              By analyzing data from interviews and questionnaires, key pain
              points and potential gains were identified to focus on solving the
              most impactful issues.
            </p>
            <img
              src="/assets/kasihibu/pain-gain.png"
              alt="Pain & Gain Definition"
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Pain Categorization Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Pain Categorization
            </h3>
            <p className="text-gray-600 mb-6">
              The identified pain points were classified into categories for
              better organization and focus during the solution development
              process.
            </p>
            <img
              src="/assets/kasihibu/pain-categorization.png"
              alt="Pain Categorization"
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Pain Prioritization Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Pain Prioritization
            </h3>
            <p className="text-gray-600 mb-6">
              Each pain point was prioritized based on value and effort,
              enabling a focus on issues with the greatest impact and
              feasibility.
            </p>
            <img
              src="/assets/kasihibu/pain-prioritization.png"
              alt="Pain Prioritization"
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Problem Statement Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Problem Statement
            </h3>
            <p className="text-gray-600 mb-6">
              Based on the selected pain points, a problem statement was
              formulated to define the core challenges to address through the
              solution.
            </p>
            <p className="p-4 bg-rose-50 rounded-xl text-center text-rose-500 ">
              Most pregnant and postpartum women experience mental health
              disorders including frequent anxiety, worry and stress during
              pregnancy and after childbirth due to environmental factors, lack
              of sleep, lack of food nutrition, and lack of knowledge to manage
              their mental health. In addition, limited health programs that
              specifically manage mental health for pregnant and postpartum
              women are one of the most common factors found.
            </p>
          </div>

          {/* How Might We Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              How Might We (HMW)
            </h3>
            <p className="text-gray-600 mb-6">
              Trigger questions were created to drive innovative solutions,
              focusing on the challenges outlined in the problem statement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Access to Mental Health Services
                </h4>
                <p className="text-gray-600">
                  How might we improve access for pregnant and postpartum
                  mothers to high-quality and reliable mental health
                  information?
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Emotional Monitoring and Management
                </h4>
                <p className="text-gray-600">
                  How might we utilize technology to monitor and manage mental
                  health challenges in mothers?
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Knowledge and Support
                </h4>
                <p className="text-gray-600">
                  How might we create a supportive environment to reduce mental
                  health issues in mothers?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IdeationProcess />

      <PrototypeAndTesting />

      <IterationResults />

      <Footer />
    </div>
  );
};

export default KasihIbuStudyCase;
