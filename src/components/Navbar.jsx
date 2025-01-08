import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="font-plusJakartaSans bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1
              className="font-black text-2xl bg-gradient-to-r from-[#EB3748] to-[#e4630d] bg-clip-text text-transparent 
              hover:from-[#e4630d] hover:to-[#EB3748] transition-all duration-300"
            >
              Herlin Priatna
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EB3748] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#EB3748] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 h-72" : "opacity-0 h-0"
          } overflow-hidden`}
        >
          <ul className="pt-2 pb-4 space-y-3">
            {menuItems.map((item) => (
              <li key={item.name} className="block">
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-[#EB3748] hover:bg-pink-50 rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
