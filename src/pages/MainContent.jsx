/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ChevronRight,
  Download,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  Calendar,
  Trophy,
  Dribbble,
  Send,
} from "lucide-react";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioShowcase from "../components/PortfolioShowcase";
import AchievementSection from "../components/AchievementSection";
import HeroSection from "../components/HeroSection";
import CaseStudiesSection from "../components/CaseStudiesSection";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <Navbar />

      <HeroSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      <CaseStudiesSection />
      {/* About Section */}
      <AboutSection />


      {/* Experience Section */}
      <section className="py-20" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
              Experience
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              My Professional Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Coming Soon...",
              },
              {
                year: "Mar – Sep 2025",
                title: "UI/UX Designer Intern",
                company: "PT Bank SMBC Indonesia Tbk",
                location: "South Jakarta, Indonesia (Hybrid)",
                description: (
                  <>
                    Completed over 10 sprint cycles within an Agile Scrum
                    framework, actively contributing to sprint activities and
                    cross-functional discussions to ensure timely and
                    high-quality design outcomes. Served as the team’s PIC,
                    coordinating with Product Owners and Business Stakeholders
                    to align design goals and requirements. Designed and refined
                    key features for the TOUCHBIZ business banking app —
                    including KYC Video Call, Rebranding, Enhanced Security
                    Features, and New Product Handling — while collaborating
                    with a 5+ member UI/UX team through brainstorming sessions,
                    peer reviews, and workshops to enhance overall usability and
                    user experience.
                  </>
                ),
                gallery: [
                  "/assets/touchbiz/smbc-office.jpg",
                  "/assets/touchbiz/reward.jpg",
                ],
              },
              {
                year: "Oct 2024 - Jan 2024",
                title: "UI Designer Internship",
                company: "Yayasan Maqdis",
                location: "Bandung, Indonesia (Hybrid)",
                description: (
                  <>
                    Designed 4 projects for Maqdis Foundation, including Maqdis
                    Travel App which focuses on religious tourism, Maqdis
                    Academy which focuses on education, and Hamim App which
                    focuses on assisting in memorizing the Al Quran with a final
                    performance predicate for 3 months of{" "}
                    <span className="text-[#EB3748] font-bold">Excellent</span>.
                  </>
                ),
                gallery: [
                  "/assets/maqdis.jpg",
                  "/assets/fullteam.jpg",
                  "/assets/predikat-maqdis.png",
                ],
              },
              {
                year: "Jul - Oct 2024",
                title: "UI/UX Designer Internship",
                company: "Kawan Kerja",
                location: "Bandung, Indonesia (Remote)",
                description:
                  "Collaborated and contributed to the creation of UI designs for the Kawan Kerja ERP system within a 2-month period. Focused on improving user experience by streamlining interfaces and optimizing the workflow for better functionality. Later, worked on the GadgetIndo project, which provided users with easy access to comprehensive information about cutting-edge gadget technology, significantly enhancing the platform's usability and design appeal.",
                gallery: [
                  "/assets/kawankerjafullteam.jpg",
                  "/assets/erp.png",
                  "/assets/kawankerja.png",
                ],
              },
              {
                year: "Jul - Aug 2024",
                title: "UI Designer Internship",
                company: "BBGP Kemendikbudristek",
                location: "Bandung, Indonesia (Onsite)",
                description:
                  "Worked as part of a team to design the BBGP West Java Province Library website, aimed at improving access to educational resources and services. Contributed to crafting an intuitive, user-friendly interface that enhances the digital experience for both students and educators, ensuring easy navigation and seamless functionality. The project achieved great success in boosting the platform's user engagement and accessibility.",
                gallery: ["/assets/bbgp-1.jpeg", "/assets/bbgp-2.jpg"],
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 group">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 group-hover:bg-[#EB3748] transition-colors duration-300" />
                <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-[#EB3748]" />
                <div className="text-sm font-medium text-[#EB3748] mb-1">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <div className="text-gray-600 font-medium mb-1">
                  {item.company}
                </div>
                {item.location && (
                  <div className="text-gray-500 text-sm mb-2">
                    {item.location}
                  </div>
                )}
                <p className="text-gray-600">{item.description}</p>
                {/* Gallery */}
                <div className="flex gap-4 flex-wrap mt-6">
                  {Array.isArray(item.gallery) &&
                    item.gallery.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`Gallery ${i + 1}`}
                        className="w-32 h-32 object-cover rounded-lg border"
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#EB3748] font-medium text-sm tracking-wider uppercase">
              Gallery
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Featured Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "assets/eduka-2.png",
                name: "Eduka App",
                link: "https://dribbble.com/shots/24383614-Eduka-App-Augmented-Reality-for-Engaging-Elementary-Education?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Eduka%20App%3A%20Augmented%20Reality%20for%20Engaging%20Elementary%20Education&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Eduka%20App%3A%20Augmented%20Reality%20for%20Engaging%20Elementary%20Education&utm_medium=Social_Share",
              },
              {
                image: "assets/unggastek.png",
                name: "UnggasTek App",
                link: "https://dribbble.com/shots/24481867-UnggasTech-All-in-1-App-for-Efficient-Chicken-Farm-Management?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=UnggasTech%20-%20All%20in%201%20App%20for%20Efficient%20Chicken%20Farm%20Management&utm_medium=Social_Share",
              },
              {
                image: "assets/mangan.png",
                name: "Mangan App",
                link: "https://dribbble.com/shots/24482088-Mangan-Online-Food-Delivery-App?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Mangan%20%3A%20Online%20Food%20Delivery%20App&utm_medium=Social_Share",
              },
              {
                image: "assets/kasihibu.png",
                name: "Kasih Ibu App",
                link: "https://dribbble.com/shots/24482088-Mangan-Online-Food-Delivery-App?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Mangan%20%3A%20Online%20Food%20Delivery%20App&utm_medium=Social_Share",
              },
              {
                image: "assets/geegi.png",
                name: "Geegi : Landing Page Dental Health Care ",
                link: "https://dribbble.com/shots/24482088-Mangan-Online-Food-Delivery-App?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Mangan%20%3A%20Online%20Food%20Delivery%20App&utm_medium=Social_Share",
              },
              {
                image: "assets/architech.png",
                name: "Architech : Web for Architectural Services",
                link: "https://dribbble.com/shots/24482088-Mangan-Online-Food-Delivery-App?utm_source=Clipboard_Shot&utm_campaign=priatnahrn__&utm_content=Mangan%20%3A%20Online%20Food%20Delivery%20App&utm_medium=Social_Share",
              },
            ].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={`Gallery item ${item.name}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="mb-4 font-bold font-manrope text-white text-lg">
                      {item.name}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="px-6 py-3 bg-white text-gray-900 rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AchievementSection />
      {/* CTA Section */}
      <section className="py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EB3748] to-[#e4630d] px-6 py-20 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                I am Ready to Work and Collaborate with You
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Lets collaborate to create something amazing together. Im always
                excited to take on new challenges and help turn your vision into
                reality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/6282246805359"
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  <Send size={20} />
                  Get in Touch
                </a>
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
                >
                  View Portfolio
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}

      <Footer />
    </div>
  );
};

export default MainContent;
