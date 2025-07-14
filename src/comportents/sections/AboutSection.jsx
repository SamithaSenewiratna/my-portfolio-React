import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaUniversalAccess,
} from "react-icons/fa";

const technicalStrengths = [
  {
    title: "Clean & Modular Code",
    icon: <FaLaptopCode />,
    description:
      "Writing maintainable, reusable, and scalable code following best practices and design patterns.",
  },
  {
    title: "Database Design & Optimization",
    icon: <FaDatabase />,
    description:
      "Designing efficient database schemas and optimizing queries for high performance.",
  },
  {
    title: "Creativity",
    icon: <FaBrain />,
    description:
      "Innovative thinking and analytical skills to solve complex challenges effectively.",
  },
  {
    title: "API Design & Documentation",
    icon: <FaProjectDiagram />,
    description:
      "Creating clear, well-documented RESTful APIs that are easy to consume and maintain.",
  },
  {
    title: "Accessibility & Inclusivity",
    icon: <FaUniversalAccess />,
    description:
      "Building applications accessible to all users by adhering to accessibility standards and guidelines.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-16 overflow-hidden text-gray-100 sm:py-24 bg-gray-950"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 bg-indigo-600 rounded-full w-72 h-72 blur-3xl opacity-20 animate-ping"></div>
      <div className="absolute bottom-0 right-0 bg-pink-600 rounded-full w-80 h-80 blur-3xl opacity-20 animate-pulse"></div>

      {/* Animated Bar */}
      <motion.div
        className="absolute top-0 w-1 h-full rounded-full left-6 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 opacity-70"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto md:px-0">
        {/* Title */}
        <motion.h2
          className="inline-block px-6 py-2 mb-12 text-xl font-semibold tracking-wide text-indigo-500 uppercase bg-indigo-100 rounded-full shadow-sm sm:text-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          Technical Strengths
        </motion.h2>

        {/* Skill Blocks */}
        <div className="space-y-10 sm:space-y-14">
          {technicalStrengths.map((skill, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[40px_1fr] gap-4 items-start sm:items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: [0, 5, -5, 0] }}
              transition={{
                delay: index * 0.3,
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto text-white rounded-full shadow-md sm:mx-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce">
                {skill.icon}
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-indigo-300 sm:text-xl">
                  {skill.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400 sm:text-base">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
