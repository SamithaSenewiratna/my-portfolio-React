import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin, SiGithub, SiWhatsapp, SiX } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-10 left-0 right-0 z-50 mx-[40px] text-white
        transition-transform transition-opacity duration-500 ease-in-out rounded-4xl
        backdrop-blur-xl
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        shadow-[0_0_15px_rgba(192,192,192,0.6)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
      `}
    >
      <div className="relative flex items-center justify-between py-3.5 w-full px-4">
        {/* Show logo only if menu NOT open */}
        {!menuOpen && (
          <h1 className="z-10 ml-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text">
            Samitha Seneviratna
          </h1>
        )}

        {/* If menu is open, show horizontal icons + close button */}
        {menuOpen && (
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex space-x-4">
             
              <a
                href="https://www.linkedin.com/in/samitha-senavirathna-b748b52b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition cursor-pointer hover:text-blue-400"
              >
                <SiLinkedin size={23} />
              </a>
                <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="transition cursor-pointer hover:text-gray-400"
              >
                <SiX size={23} />
              </a>
               <a
                href="mailto:your-samithani17@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                className="transition cursor-pointer hover:text-red-400"
              >
                <HiOutlineMail size={29} />
              </a>
              <a
                href="https://github.com/SamithaSenewiratna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition cursor-pointer hover:text-white"
              >
                <SiGithub size={26} />
              </a>
              <a
                href="https://wa.me/+94767176314"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="mt-0.4 transition cursor-pointer hover:text-green-400"
              >
                <SiWhatsapp size={25} />
              </a>
            
            </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute p-2 transition-transform duration-300 rounded-full shadow-lg top-2.5 right-4 bg-gradient-to-br from-purple-500 to-rose-500 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          </div>
        )}

        {/* Desktop Nav Links */}
        {!menuOpen && (
          <nav className="absolute hidden space-x-8 transform -translate-x-1/2 md:flex left-1/2">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "TechStack", href: "#techstack" },
              { label: "Skills", href: "#skills" },
              { label: "Goals", href: "#goals" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition md:text-base group"
              >
                <span className="text-gray-300 transition duration-300 hover:text-indigo-400">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>
        )}

        {/* Desktop Social Icons */}
        {!menuOpen && (
          <div className="items-center hidden mr-2 space-x-7 md:flex">
            <a
              href="mailto:your-samithani17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="transition hover:text-red-400"
            >
              <HiOutlineMail size={33} />
            </a>
            <a
              href="https://www.linkedin.com/in/samitha-senavirathna-b748b52b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-400"
            >
              <SiLinkedin size={23} />
            </a>
            <a
              href="https://github.com/SamithaSenewiratna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-white"
            >
              <SiGithub size={25} />
            </a>

             <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="transition hover:text-gray-400"
            >
              <SiX size={22} />
            </a>
            <a
              href="https://wa.me/+94767176314"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-green-400"
            >
              <SiWhatsapp size={26} />
            </a>
           
          </div>
        )}

        {/* Hamburger Button - Mobile */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="z-20 block md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />

            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
