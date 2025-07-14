import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaRocket, FaRobot } from "react-icons/fa";

const goals = [
  {
    icon: <FaBullseye size={28} />,
    title: "Achieve Mastery",
    description:
      "Become an expert in full-stack development and cloud technologies.",
    gradient: "bg-gradient-to-tr from-cyan-400 to-blue-600",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Innovate Continuously",
    description:
      "Create innovative solutions that solve real-world problems efficiently.",
    gradient: "bg-gradient-to-tr from-pink-500 to-purple-600",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Launch Projects",
    description:
      "Deliver impactful projects with great user experience and performance.",
    gradient: "bg-gradient-to-tr from-purple-500 to-indigo-700",
  },
  {
    icon: <FaRobot size={28} />,
    title: "Develop AI Innovations",
    description:
      "Explore and build AI-powered solutions to push the boundaries of technology.",
    gradient: "bg-gradient-to-tr from-green-400 to-teal-600",
  },
];

const floatingAnimation = {
  y: [0, -15, 0], // move up then back down
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};

const GoalsSection = () => {
  return (
    <section id="goals" className="relative px-4 py-20 text-gray-100 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 sm:text-4xl text-cyan-400 drop-shadow-lg">
          My Goals
        </h2>

        <div className="relative">
          {goals.map(({ icon, title, description, gradient }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start px-4 mb-12 space-y-4 sm:flex-row sm:items-center sm:mb-16 sm:space-y-0 sm:space-x-6 sm:ml-10"
              animate={floatingAnimation}
            >
              <motion.div
                className={`flex-shrink-0 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${gradient} text-white shadow-lg`}
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {icon}
              </motion.div>

              <div className="max-w-lg">
                <h3 className="mb-1 text-2xl font-semibold transition-colors duration-300 cursor-pointer sm:mb-2 sm:text-3xl hover:text-cyan-300">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
