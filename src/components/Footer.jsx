/* eslint-disable no-unused-vars */
import React from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/priatnahrn", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/herlin-priatna-952830285/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/priatnahrn__",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:herlinpriatna31@email.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 font-plusJakartaSans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-black text-xl bg-gradient-to-r from-[#EB3748] to-[#e4630d] bg-clip-text text-transparent">
              Herlin Priatna
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              UI/UX Designer crafting beautiful and functional digital
              experiences that bring value to peoples lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-600 hover:text-[#EB3748] transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#EB3748] transition-colors duration-300 text-sm inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4 flex flex-col">
            <h3 className="font-bold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Have a project in mind? Lets talk about it and see how I can help
              bring your ideas to life.
            </p>
            <a
              href="mailto:herlinpriatna31@gmail.com"
              className="px-4 py-2 mt-8 bg-[#EB3748] text-white rounded-lg hover:bg-[#e4630d] transition-colors duration-300 text-sm"
            >
              Start a Conversation
            </a>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Subscribe to my newsletter for design tips, tutorials, and latest
              projects.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#EB3748] transition-colors duration-300 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © {currentYear} Herlin Priatna. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-[#EB3748] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#EB3748] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
