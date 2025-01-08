/* eslint-disable no-unused-vars */
import React from "react";
import {
  Briefcase,
  GraduationCap,
  Figma,
  Code2,
  Smartphone,
  Heart,
  Code,
  Sparkle,
  TestTube,
  ChartColumnDecreasingIcon,
  Projector,
  CodeSquare,
  Laptop,
  Brain,
  Users,
  Clock,
  MessageCircle,
  Lightbulb,
  Target,
  Puzzle,
  HandshakeIcon,
  PenTool,
  Grid,
  Layout,
  Search,
  Palette,
  FileJson,
  GitBranch,
  Trello,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "3.85", label: "GPA" },
    { value: "10+", label: "Achievements" },
  ];

  const skills = {
    hardSkills: [
      {
        name: "UI Design",
        icon: <Smartphone size={24} />,
        color: "border-[1.5px] border-pink-500 bg-pink-50 text-pink-500",
        hoverColor: "hover:bg-pink-500",
      },
      {
        name: "Figma & Adobe XD",
        icon: <Figma size={24} />,
        color: "border-[1.5px] border-yellow-500 bg-yellow-50 text-yellow-500",
        hoverColor: "hover:bg-yellow-500",
      },
      {
        name: "Wireframing & Prototyping",
        icon: <PenTool size={24} />,
        color: "border-[1.5px] border-violet-500 bg-violet-50 text-violet-500",
        hoverColor: "hover:bg-violet-500",
      },
      {
        name: "Design System",
        icon: <Grid size={24} />,
        color: "border-[1.5px] border-orange-500 bg-orange-50 text-orange-500",
        hoverColor: "hover:bg-orange-500",
      },
      {
        name: "Information Architecture",
        icon: <Layout size={24} />,
        color:
          "border-[1.5px] border-emerald-500 bg-emerald-50 text-emerald-500",
        hoverColor: "hover:bg-emerald-500",
      },
      {
        name: "User Research",
        icon: <Search size={24} />,
        color: "border-[1.5px] border-purple-500 bg-purple-50 text-purple-500",
        hoverColor: "hover:bg-purple-500",
      },
      {
        name: "Usability Testing",
        icon: <TestTube size={24} />,
        color: "border-[1.5px] border-cyan-500 bg-cyan-50 text-cyan-500",
        hoverColor: "hover:bg-cyan-500",
      },
      {
        name: "Color Theory & Typography",
        icon: <Palette size={24} />,
        color: "border-[1.5px] border-rose-500 bg-rose-50 text-rose-500",
        hoverColor: "hover:bg-rose-500",
      },

      // Web Development Skills
      {
        name: "HTML5 & CSS3",
        icon: <Code size={24} />,
        color: "border-[1.5px] border-blue-500 bg-blue-50 text-blue-500",
        hoverColor: "hover:bg-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: <CodeSquare size={24} />,
        color: "border-[1.5px] border-sky-500 bg-sky-50 text-sky-500",
        hoverColor: "hover:bg-sky-500",
      },
      {
        name: "Bootstrap",
        icon: <Layout size={24} />,
        color: "border-[1.5px] border-indigo-500 bg-indigo-50 text-indigo-500",
        hoverColor: "hover:bg-indigo-500",
      },
      {
        name: "JavaScript (ES6+)",
        icon: <Code2 size={24} />,
        color: "border-[1.5px] border-yellow-600 bg-yellow-50 text-yellow-600",
        hoverColor: "hover:bg-yellow-600",
      },
      {
        name: "React JS",
        icon: <CodeSquare size={24} />,
        color: "border-[1.5px] border-blue-600 bg-blue-50 text-blue-600",
        hoverColor: "hover:bg-blue-600",
      },
      {
        name: "REST API Integration",
        icon: <FileJson size={24} />,
        color: "border-[1.5px] border-green-600 bg-green-50 text-green-600",
        hoverColor: "hover:bg-green-600",
      },
      {
        name: "Git & GitHub",
        icon: <GitBranch size={24} />,
        color: "border-[1.5px] border-orange-600 bg-orange-50 text-orange-600",
        hoverColor: "hover:bg-orange-600",
      },
      {
        name: "Responsive Web Design",
        icon: <Smartphone size={24} />,
        color: "border-[1.5px] border-teal-500 bg-teal-50 text-teal-500",
        hoverColor: "hover:bg-teal-500",
      },
      {
        name: "Laravel",
        icon: <Laptop size={24} />,
        color: "border-[1.5px] border-red-500 bg-red-50 text-red-500",
        hoverColor: "hover:bg-red-500",
      },
      {
        name: "Design Thinking, Agile & Scrum",
        icon: <Trello size={24} />,
        color: "border-[1.5px] border-lime-500 bg-lime-50 text-lime-500",
        hoverColor: "hover:bg-lime-500",
      },
    ],
    softSkills: [
      {
        name: "Problem Solving",
        icon: <Puzzle size={24} />,
        color: "border-[1.5px] border-purple-500 bg-purple-50 text-purple-500",
        hoverColor: "hover:bg-purple-500",
      },
      {
        name: "Team Collaboration",
        icon: <Users size={24} />,
        color: "border-[1.5px] border-teal-500 bg-teal-50 text-teal-500",
        hoverColor: "hover:bg-teal-500",
      },
      {
        name: "Time Management",
        icon: <Clock size={24} />,
        color:
          "border-[1.5px] border-emerald-500 bg-emerald-50 text-emerald-500",
        hoverColor: "hover:bg-emerald-500",
      },
      {
        name: "Communication",
        icon: <MessageCircle size={24} />,
        color: "border-[1.5px] border-amber-500 bg-amber-50 text-amber-500",
        hoverColor: "hover:bg-amber-500",
      },
      {
        name: "Critical Thinking",
        icon: <Brain size={24} />,
        color: "border-[1.5px] border-lime-500 bg-lime-50 text-lime-500",
        hoverColor: "hover:bg-lime-500",
      },
      {
        name: "Leadership",
        icon: <Target size={24} />,
        color:
          "border-[1.5px] border-fuchsia-500 bg-fuchsia-50 text-fuchsia-500",
        hoverColor: "hover:bg-fuchsia-500",
      },
    ],
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Crafting Digital Experiences with Passion
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Stats */}
          <div className="space-y-8">
            {/* About Image */}
            <div className="relative">
              <div className="absolute " />
              <img
                src="/assets/about-2.png"
                alt="About Herlin"
                className="relative w-full h-auto "
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="font-manrope text-xl font-bold text-gray-900">
                A Passionate UI/UX Designer Since 2021 based in Bandung,
                Indonesia 🇮🇩
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I am Herlin Priatna,{" "}
                <span className="font-semibold text-[#EB3748]">
                  a final-year Software Engineering student{"  "}
                </span>
                at Telkom University, Bandung. Since 2021, I have been deeply
                passionate about UI/UX design, dedicating myself to learning,
                practicing, and innovating in the field.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in software engineering, I combine
                technical knowledge with creative problem-solving to craft
                intuitive interfaces and seamless user experiences. My journey
                is driven by a commitment to understanding user needs and
                delivering designs that not only delight users but also help
                businesses achieve their goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In addition to being a designer, I actively participate in
                projects, internships and national competitions programs to
                broaden my skills and make meaningful contributions to the
                digital world.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lets collaborate to turn your ideas into impactful digital
                products!
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {/* Hard Skills */}
              <div>
                <h4 className="font-manrope text-lg font-bold text-gray-900 mb-4">
                  Hard Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.hardSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 flex items-center ${skill.color} bg-gray-50 text-gray-700 rounded-lg text-sm font-medium ${skill.hoverColor} hover:text-white transition-colors duration-300`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="font-manrope text-lg font-bold text-gray-900 mb-4">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 flex items-center ${skill.color} bg-gray-50 text-gray-700 rounded-lg text-sm font-medium ${skill.hoverColor} hover:text-white transition-colors duration-300`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
