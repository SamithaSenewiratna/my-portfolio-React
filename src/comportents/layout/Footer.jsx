import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-gray-300 border-t border-gray-700 bg-gradient-to-t from-gray-900 to-gray-800">
      <div className="flex flex-col mx-auto space-y-8 max-w-7xl md:flex-row md:justify-between md:items-center md:space-y-0">

        {/* Left Section */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="mb-2 text-2xl font-bold text-indigo-400 select-none">
            {/* Optional Heading */}
          </h2>
          <p className="leading-relaxed text-gray-400">
            Full Stack Developer | Passionate about building elegant and performant apps.  
            Let’s connect and create something amazing together!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:items-center md:space-x-12">

          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              {
                href: "https://github.com/SamithaSenewiratna",
                label: "GitHub",
                icon: <FaGithub size={24} />,
                aria: "GitHub profile",
              },
              {
                href: "https://www.linkedin.com/in/samitha-senavirathna-b748b52b5/",
                label: "LinkedIn",
                icon: <FaLinkedin size={24} />,
                aria: "LinkedIn profile",
              },
              {
                href: "mailto:samithani17@gmail.com",
                label: "Email",
                icon: <FaEnvelope size={24} />,
                aria: "Send Email",
              },
              {
                href: "https://twitter.com/yourusername",
                label: "Twitter",
                icon: <FaTwitter size={24} />,
                aria: "Twitter profile",
              },
              {
                href: "https://yourwebsite.com",
                label: "Website",
                icon: <FaGlobe size={24} />,
                aria: "Personal website",
              },
            ].map(({ href, label, icon, aria }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria}
                className="flex flex-col items-center text-gray-400 transition transform group hover:text-indigo-400 hover:scale-110"
              >
                <div className="p-2 transition bg-gray-800 rounded-full shadow-md group-hover:bg-indigo-600 group-hover:shadow-indigo-500/50">
                  {icon}
                </div>
                <span className="hidden mt-1 text-xs font-semibold tracking-wide select-none sm:block">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-center text-gray-500 select-none md:text-left md:ml-4">
            &copy; {new Date().getFullYear()} Samitha Senewirathna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
