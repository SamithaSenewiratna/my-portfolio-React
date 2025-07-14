import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";

const skills = [
  {
    name: "Creative Thinking",
    icon: <FaLightbulb size={28} className="text-indigo-500" />,
    description:
      "Bringing fresh and innovative solutions to complex problems, adapting quickly to new challenges.",
  },
  {
    name: "Team Leadership",
    icon: <FaUsers size={28} className="text-green-500" />,
    description:
      "Effectively guiding, motivating, and managing teams to achieve project goals and foster collaboration.",
  },
  {
    name: "Effective Communication",
    icon: <FaComments size={28} className="text-yellow-500" />,
    description:
      "Clear and empathetic communication skills that bridge technical and non-technical stakeholders.",
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush size={28} className="text-pink-500" />,
    description:
      "Designing intuitive, accessible, and visually appealing interfaces for engaging user experiences.",
  },
  {
    name: "Problem Solving",
    icon: <FaCode size={28} className="text-blue-500" />,
    description:
      "Analytical mindset to identify root causes and implement efficient, scalable solutions.",
  },
  {
    name: "Project Management",
    icon: <FaProjectDiagram size={28} className="text-purple-500" />,
    description:
      "Organizing resources, timelines, and tasks to ensure smooth project delivery and stakeholder satisfaction.",
  },
  {
    name: "Frontend Development",
    icon: <FaLaptopCode size={28} className="text-cyan-500" />,
    description:
      "Building responsive, dynamic, and performant user interfaces with modern frameworks and tools.",
  },
  {
    name: "Backend Development",
    icon: <FaCogs size={28} className="text-red-500" />,
    description:
      "Developing robust APIs, databases, and server-side logic ensuring security and scalability.",
  },
];

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.85, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const blobVariants = {
  animate: {
    x: ["0%", "20%", "0%"],
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const SkillsSection = () => {
  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <section
      id="skills"
      className="relative bg-gray-900 text-gray-100 px-6 py-20 overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-40"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-30"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-25"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-extrabold text-indigo-400">
          My Strengths & Talents
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          {leftSkills.map(({ name, icon, description }) => (
            <motion.div
              key={name}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-5 cursor-default"
              {...pulseAnimation}
            >
              <div className="mt-1">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          {rightSkills.map(({ name, icon, description }) => (
            <motion.div
              key={name}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-5 cursor-default"
              {...pulseAnimation}
            >
              <div className="mt-1">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-gray-400 text-sm leading-relaxed">
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

export default SkillsSection;
