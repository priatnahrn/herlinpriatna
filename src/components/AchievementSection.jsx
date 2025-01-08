/* eslint-disable no-unused-vars */

import React from "react";

const AchievementSection = () => {
  const achievements = [
    {
      year: "2024",
      items: [
        {
          title: "2nd Winner National UI/UX Design Competition at UMY",
          description:
            "Recognized for designing an innovative and user-friendly mobile application prototype tailored to the competition's theme.",
          icon: "public/assets/logo-UMY.png",
        },
        {
          title:
            "1st Winner National UI/UX Design Competition at Primakara University",
          description:
            "Developed a cutting-edge user experience solution, earning the top spot in a highly competitive national event.",
          icon: "public/assets/primakara_logo.png",
        },
        {
          title:
            "Best Top 7 National Business Challenge Astranauts by PT Astra International Tbk",
          description:
            "Achieved distinction by presenting a scalable business solution addressing contemporary challenges.",
          icon: "public/assets/astra.png",
        },
        {
          title: "Project Funding PKM Penerapan IPTEK by PKM Kemendikbud RI",
          description:
            "Secured funding for implementing a technology-based project aimed at community empowerment.",
          icon: "public/assets/kemendikbud.png",
        },
        {
          title:
            "Project Funding Innovillage Bidang Disabilitas by PT Telkom Indonesia",
          description:
            "Awarded funding for a disability-focused innovation to improve accessibility and inclusion.",
          icon: "public/assets/telkom_logo.png",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title:
            "1st Winner National Business Plan Competition BEM FKB Telkom University",
          description:
            "Developed a comprehensive business plan addressing real-world challenges, securing first place.",
          icon: "public/assets/logo-telkom-univ.png",
        },
        {
          title:
            "1st Winner National Business Plan Competition History Fair University of Jambi",
          description:
            "Crafted a strategic and impactful business proposal, earning the top spot in the competition.",
          icon: "public/assets/unjam.jpg",
        },
        {
          title: "Best Team Project at Dinotis 2023",
          description:
            "Recognized for outstanding collaboration and execution in a multidisciplinary project.",
          icon: "public/assets/dinotis_logo.jpeg",
        },
        {
          title: "3rd Winner Motion Hackathon Telkom University 2023",
          description:
            "Developed a creative and functional hackathon project, securing a podium finish.",
          icon: "public/assets/motion-lab.jpeg",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title:
            "2nd Winner National StartUp Innovation Contest University of Indonesia",
          description:
            "Showcased a disruptive startup idea, earning runner-up in a prestigious innovation competition.",
          icon: "public/assets/ui-logo.png",
        },
        {
          title: "3rd Runner Up Hackathon Sharia Economic LIPIA Jakarta",
          description:
            "Delivered a creative and impactful solution aligning with the principles of sharia economics.",
          icon: "public/assets/lipia.png",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
            Personal Achievements
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Key Milestones
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {achievements.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="h-[2px] flex-grow bg-gray-200" />
                <span className="px-6 py-2 bg-[#EB3748] text-white font-bold rounded-full mx-4">
                  {yearGroup.year}
                </span>
                <div className="h-[2px] flex-grow bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearGroup.items.map((achievement, index) => (
                  <div
                    key={index}
                    className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-center gap-4 items-center"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#EB3748] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg  " />

                    <div className="text-3xl">
                      <img
                        src={achievement.icon}
                        alt={achievement.title}
                        className="w-36 "
                      />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>

                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
