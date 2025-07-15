import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiRedux,
  SiVercel,
  SiApachekafka,
  SiIntellijidea,
  SiApachenetbeanside,
  SiFigma,
  SiPostman,
  SiFlutter,
  SiDart,
  SiTensorflow,
  SiOpenai,
  SiKubernetes,


} from "react-icons/si";
import { FaAws, FaCloud, FaCloudUploadAlt, FaCode, FaCogs, FaCube, FaDatabase, FaDesktop, FaEye, FaIdBadge, FaJava, FaKey, FaLayerGroup, FaMobileAlt, FaMoneyCheckAlt, FaPaintBrush, FaProjectDiagram, FaPython, FaSitemap, FaTasks, FaTerminal, FaUserShield, FaWater } from "react-icons/fa";
import { MdAccountTree, MdDesignServices, MdDesktopWindows, MdWidgets, MdWindow } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";



const techs = [
  { name: "React", icon: SiReact, color: "text-cyan-400", type: "Frontend Library" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-300", type: "CSS Framework" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", type: "Programming Language" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", type: "Programming Language" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", type: "Backend Runtime" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300", type: "Backend Framework" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", type: "Database" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-400", type: "Backend Framework" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300", type: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", type: "Backend Platform" },
  { name: "Next.js", icon: SiNodedotjs, color: "text-white", type: "Fullstack Framework" },
  { name: "Angular", icon: SiAngular, color: "text-red-500", type: "Frontend Framework" },
  { name: "Java", icon: FaJava, color: "text-orange-500", type: "Programming Language" },
  { name: "Python", icon: FaPython, color: "text-yellow-300", type: "Programming Language" },
  { name: "React Native", icon: SiReact, color: "text-blue-300", type: "Mobile Framework" },
  { name: "JavaFX", icon: MdWindow, color: "text-blue-500", type: "Java GUI Framework" },
  { name: "Java Swing", icon: MdDesktopWindows, color: "text-orange-600", type: "Java GUI Framework" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600", type: "Markup Language" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-600", type: "Style Sheet Language" },
   { name: "OpenAI", icon: SiOpenai, color: "text-pink-500", type: "AI Research & API" },
  { name: "SCSS", icon: SiSass, color: "text-pink-500", type: "CSS Preprocessor" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-600", type: "ML Framework" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400", type: "UI Framework" },
  { name: "Dart", icon: SiDart, color: "text-blue-700", type: "Programming Language" },

  
];

const technoliges = [
  { name: "Git & GitHub", icon: SiGithub, color: "text-white", type: "Version Control" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600", type: "CSS Framework" },
  { name: "Convex", icon: FaCloud, color: "text-purple-500", type: "Database-Service" },
  { name: "Flowbite", icon: FaWater, color: "text-blue-400", type: "UI Component Library" },
  { name: "Chadcn UI", icon: MdDesignServices, color: "text-green-400", type: "UI Component Library" },
  { name: "Material-UI", icon: FaCube, color: "text-blue-700", type: "UI Component Library" },
  { name: "AWS", icon: FaAws, color: "text-orange-400", type: "Cloud Platform" },
  { name: "Redux /Redux Toolkit", icon: SiRedux, color: "text-purple-600", type: "State Management" },
  { name: "Angular Material", icon: FaLayerGroup, color: "text-red-600", type: "UI Component Library" },
  { name: "SendGrid", icon: HiOutlineMail, color: "text-blue-500", type: "Email Service" },
  { name: "Vercel", icon: SiVercel, color: "text-black", type: "Hosting Platform" },
  { name: "Apache Kafka", icon: SiApachekafka, color: "text-red-600", type: "Event Streaming" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", type: "Containerization" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600", type: "Container Orchestration" },
  { name: "Scene Builder", icon: FaDesktop, color: "text-blue-500", type: "GUI Design Tool" },
  { name: "Clerk", icon: FaUserShield, color: "text-blue-500", type: "Authentication Provider" },
  { name: "JWT", icon: FaKey, color: "text-yellow-500", type: "Token-based Auth" },
  { name: "Keycloak", icon: FaIdBadge, color: "text-green-600", type: "Identity Provider" },
  { name: "Maven", icon: FaCogs, color: "text-orange-500", type: "Build Tool" },
  { name: "Swagger", icon: FaSitemap, color: "text-lime-500", type: "API Documentation" },
  { name: "Grafana", icon: FaEye, color: "text-orange-500", type: "Monitoring Dashboard" },
  { name: "Cloudinary", icon: FaCloudUploadAlt, color: "text-sky-500", type: "Media Management" },
  { name: "Stripe", icon: FaMoneyCheckAlt, color: "text-indigo-600", type: "Payment Gateway" },
  { name: "Expo", icon: FaMobileAlt, color: "text-teal-400", type: "React Native Framework" },
  
];


const tools = [
  { name: "Figma", icon: SiFigma, color: "text-pink-500", type: "Design Tool" },
  { name: "VS Code", icon: FaCode, color: "text-blue-500", type: "IDE" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "text-purple-700", type: "IDE" },
  { name: "NetBeans", icon: SiApachenetbeanside, color: "text-blue-700", type: "IDE" },
  { name: "draw.io", icon: FaProjectDiagram, color: "text-green-500", type: "Diagram Tool" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500", type: "API Testing Tool" },
  { name: "Canva", icon: FaPaintBrush, color: "text-purple-500", type: "Design Tool" },
  { name: "MoonModeler", icon: MdAccountTree , color: "text-blue-600", type: "Database Modeling" },
  { name: "Jira", icon: FaTasks, color: "text-indigo-500", type: "Project Management Tool" },
  { name: "PyCharm", icon: FaCode, color: "text-green-700", type: "IDE / Code Editor" },
  { name: "Geany", icon: FaTerminal, color: "text-teal-600", type: "Lightweight IDE" },
  { name: "StarUML", icon: FaProjectDiagram, color: "text-pink-500", type: "Modeling Tool" },

];

const TechStackSection = () => {
  return (

    <>
    <section id="techstack" className="px-6 py-20 text-gray-100 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-indigo-400 md:text-4xl"
        >
          languages & Frameworks
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {techs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                className="p-6 transition duration-300 bg-gray-800 shadow-lg rounded-xl hover:shadow-indigo-500/40 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex justify-center mb-4 text-5xl">
                  <IconComponent className={`${tech.color}`} />
                </div>
                <p className="text-lg font-semibold text-white">{tech.name}</p>
                <p className="mt-1 text-sm text-gray-400">{tech.type}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>


 <section id="technoliges" className="px-6 py-20 text-gray-100 bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
          <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
    className="mb-10 text-2xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"

        >
          Other Technologies
        </motion.h3>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {technoliges.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
           className="p-4 transition-all duration-300 bg-gray-900 border border-gray-700 shadow-md rounded-4xl hover:border-indigo-400 hover:shadow-indigo-600/30"

                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex justify-center mb-4 text-5xl">
                  <IconComponent className={`${tech.color}`} />
                </div>
                <p className="text-lg font-semibold text-white">{tech.name}</p>
                <p className="mt-1 text-sm text-gray-400">{tech.type}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

<section id="tools" className="px-6 py-20 text-gray-100 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center ">
          <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
className="mb-10 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"

        >
           Tools 
        </motion.h3>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {tools.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
  className="p-4 transition duration-300 shadow-md rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 group hover:from-indigo-700 hover:to-purple-800 ring-1 ring-gray-700 hover:ring-2 hover:ring-indigo-500/80"


                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex justify-center mb-4 text-5xl">
                  <IconComponent className={`${tech.color}`} />
                </div>
                <p className="text-lg font-semibold text-white">{tech.name}</p>
                <p className="mt-1 text-sm text-gray-400">{tech.type}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

</>

  );
};

export default TechStackSection;
