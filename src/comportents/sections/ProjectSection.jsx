import React, { useState, useEffect } from "react";
import findX from "../../assets/findX/1.0.png";
import ab5 from "../../assets/autobroker/5.png";
import ab2 from "../../assets/autobroker/1.png";
import ab3 from "../../assets/autobroker/2.png";
import ab4 from "../../assets/autobroker/3.png";
import ab1 from "../../assets/autobroker/4.png";
import ab6 from "../../assets/autobroker/6.png";
import ab7 from "../../assets/autobroker/7.png";
import ab8 from "../../assets/autobroker/8.png";

import iH from "../../assets/ideaHub/main.png";

import qA1 from "../../assets/quizApp/1.png";
import qA2 from "../../assets/quizApp/2.png";
import qA3 from "../../assets/quizApp/3.png";

import pG1 from "../../assets/photoGalary/light-mode.png";
import pG2 from "../../assets/photoGalary/dark-mode.png";
import pG3 from "../../assets/photoGalary/dark-mode-2.png";

import mB1 from "../../assets/mosBurger/mos_burger_0.png";
import mB2 from "../../assets/mosBurger/mos_burger_1.png";
import mB3 from "../../assets/mosBurger/mos_burger_2.png";
import mB4 from "../../assets/mosBurger/mos_burger_3.png";
import mB5 from "../../assets/mosBurger/mos_burger_4.png";

import hR1 from "../../assets/hotelReservation/billing.png";
import hR2 from "../../assets/hotelReservation/customers.png";
import hR3 from "../../assets/hotelReservation/DashBoard.png";
import hR4 from "../../assets/hotelReservation/forget_password.png";
import hR5 from "../../assets/hotelReservation/reports.png";
import hR6 from "../../assets/hotelReservation/rooms.png";
import hR7 from "../../assets/hotelReservation/users.png";

import aS1 from "../../assets/asGame/img1.png";
import aS2 from "../../assets/asGame/img2.png";

import cA1 from "../../assets/chatApp/main.png";
import cA2 from "../../assets/chatApp/second.png";

import tK1 from "../../assets/thogaKade/thogakade.png";
import tK2 from "../../assets/thogaKade/thogakade1.png";
import tK3 from "../../assets/thogaKade/thogakade2.png";
import tK4 from "../../assets/thogaKade/thogakade3.png";
import tK5 from "../../assets/thogaKade/thogakade4.png";

const projects = [
  {
    title: "Idea Hub Innovation Collaboration Platform - ONGOING PROJECT",
    shortDescription:
    "A real-time, AI-powered platform for idea sharing, enhancement, and monetization with microservices architecture and premium subscription support.",
    description:
          "Idea Hub is a collaborative platform built with a microservices architecture, allowing users to submit, improve, and monetize their ideas. It includes real-time communication via Socket.IO, an AI/ML service for idea enhancement and similarity detection, and a subscription-based model powered by Stripe. The frontend is built with React and Next.js using Tailwind CSS for a fully responsive UI, including dark mode. Authentication is handled via NextAuth.js, supporting OAuth and JWT. Images are stored and delivered efficiently using Cloudinary. Core backend services include Authentication, Idea Management, Chat, Payments, and AI services, ensuring scalability and modularity.",
    tech: [ "React",
      "Next.js",
      "Tailwind CSS",
      "NextAuth.js",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "Cloudinary",
      "Microservices",
      "Custom AI/ML Model",],
    images: [
     iH
      
    ],
  },
  {
    title: "FindX BuyFlow Application - ONGOING PROJECT",
    shortDescription:
      "A scalable, modular, and modern e-commerce platform using microservices and micro-frontends, with full mobile and web shopping support.",
    description:
      "FindX is a full-featured e-commerce platform built with a modular micro-frontend and microservices architecture. The system supports customer shopping through a React.js storefront and an admin dashboard in Angular. A React Native mobile app allows real-time product browsing and order tracking. The backend is powered by Spring Boot and Node.js microservices, secured with OAuth and Keycloak, and supports real-time communication via WebSocket. Features include a secure payment gateway, AWS S3 integration, and both relational (MySQL) and NoSQL (MongoDB) database support.",
    tech: [ "React.js",
      "Angular",
      "React Native",
      "Spring Boot",
      "Node.js",
      "Eureka Server",
      "WebSocket",
      "Google OAuth",
      "Keycloak",
      "AWS S3",
      "MySQL",
      "MongoDB",],
    images: [
       findX
    ],
  },
  {
    title: "Auto Broker Web Application",
    shortDescription:
      "Auto Broker is a full-featured web application that connects vehicle sellers, buyers, and spare part dealers in one seamless digital experience. Built with Spring Boot, Angular, and Tailwind CSS, the platform ensures secure access, a responsive interface, and smart interactions powered by AI.",
    description:
      "This application allows users to post and manage car advertisements and spare parts listings. It includes an intelligent AI chatbot assistant for real-time support and recommendations. Built with Angular and Tailwind CSS on the frontend, and Spring Boot with Spring Security and JWT on the backend. It supports user authentication, protected routes, and full API documentation using Swagger. The platform is mobile-first, featuring filtering, image uploads, and advanced search capabilities for cars and spare parts.",
    tech: [ "Angular",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Swagger / OpenAPI",],
    images: [
     ab5,
     ab4,
     ab1,
     ab2,
     ab3,
     ab6,
     ab7,
     ab8
    ],
  },
  {
    title: "Online Quiz Web Application",
    shortDescription:
    "A MERN-based platform for conducting and managing secure online exams.",
     description:
    "A full-stack online examination system built with the MERN stack. Students can register, take timed exams with real-time tracking, and receive instant results. Admins can create exams, manage questions, and monitor student performance. Features a responsive UI, RESTful APIs, and secure backend integration.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Material-UI"],
    images: [
      qA1,
      qA2,
      qA3
    ],
  },
  {
    title: "Image Stock Photo Gallery",
    shortDescription:
     "A responsive photo gallery with search, pagination, and theme toggle.",
    description:
      "Image Stock is a responsive web app for browsing and managing high-quality stock photos. Built with React, Redux Toolkit, and Tailwind CSS, it features a clean interface with pagination, light/dark mode support, and an image viewer modal for detailed viewing. Optimized for all devices with a mobile-first design.",
    tech: ["React", "Redux Toolkit", "Node.js", "Tailwind CSS"],
    images: [
     pG1,
     pG2,
     pG3
    ],
  },
  {
    title: "Mos Burger – Full Stack Web Application",
    shortDescription:
      "A full-stack burger shop app with ordering, user auth, and admin features.",
    description:
      "Mos Burger is a modern full-stack web app for online ordering at a burger shop. Customers can browse the menu, register/login, customize and place orders. Admins manage products, process orders, and handle customer interactions. Built using Spring Boot with a MySQL database, it showcases practical skills in building scalable food service platforms.",
    tech: [ "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Java",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "Maven"],
    images: [
      mB2,
      mB1,
      mB3,
      mB4,
      mB5
    ],
  },
  {
    title: "Hotel Linara JavaFX Reservation System",
    shortDescription:
       "A full-featured JavaFX hotel management system with user roles, billing, and reports.",
    description:
       "Hotel Linara is a JavaFX-based hotel reservation system with layered architecture, allowing management of rooms, reservations, billing, and users. It includes secure login with role-based access, automated billing, customer profiles, and advanced reporting features for occupancy, revenue, and user activity. Ideal for streamlining hotel operations.",
    tech: [ "Java",
    "JavaFX",
    "MySQL",
    "JDBC",
    "Maven",
    "Jasypt",
    "JavaMail",
    "AnimateFX"],
    images: [
     hR6,hR2,hR3,hR4,hR5,hR1,hR7
    ],
  },
  {
    title: "steroid Shooter Browser Arcade Game",
    shortDescription:
       "A fast-paced browser game built with HTML, CSS, and Vanilla JavaScript.",
    description:
    "Asteroid Shooter is a fun, challenging browser-based arcade game where players control a spaceship to destroy incoming asteroids using real-time movement and shooting. Built with HTML5 Canvas and JavaScript, it features dynamic asteroid generation, accurate collision detection, scoring, and smooth animations with responsive design for both desktop and mobile.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    images: [
      aS1,aS2
    ],
  },
  {
    title: "Real-Time Chat Application",
    shortDescription:
       "A full-stack real-time messaging app built with WebSocket, React, and Node.js.",
    description:
      "A modern, full-stack real-time chat application developed using React for the frontend and Node.js with Express.js for the backend. WebSocket enables instant bi-directional messaging. The sleek and responsive interface is built using Shadcn UI and Tailwind CSS, delivering an intuitive experience across all devices.",
    tech: ["React", "Node.js", "WebSocket", "Express.js", "Shadcn UI", "Tailwind CSS"],
    images: [
      cA2,cA1
    ],
  },
   {
    title: "Thogakade POS System",
    shortDescription:
        "A JavaFX-based POS system for retail, supporting inventory, billing, and customer management.",
    description:
       "A full-featured Point-of-Sale (POS) system developed using JavaFX and MySQL, designed to handle core business operations such as product management, order processing, and real-time transactions. Built following layered architecture and design patterns, the app supports CRUD operations and provides a smooth desktop experience for small to medium-scale retail shops.",
    tech: ["JavaFX", "Java", "Maven", "MySQL", "CSS", "JDBC"],
    images: [
     tK3,tK2,tK1,tK4,tK5
    ],
  },

];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
  }, [selectedProject]);

  const onBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  };

  return (
    <>
      <section
        id="projects"
        className="relative px-4 py-24 text-gray-100 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900/80 via-gray-950 to-gray-900 backdrop-blur-md"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 animate-gradient-x bg-[radial-gradient(circle_at_20%_20%,rgba(0,128,255,0.2)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(128,0,255,0.15)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-extrabold text-center text-indigo-400 sm:text-3xl md:text-4xl drop-shadow-lg">
            My Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden transition duration-300 border border-gray-700 shadow-lg bg-gray-800/90 rounded-3xl hover:shadow-indigo-400/40 hover:scale-105"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover w-full h-48 sm:h-40"
                  loading="lazy"
                />
                <div className="flex flex-col flex-grow p-4 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold text-indigo-300 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300 line-clamp-3 sm:text-base">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs text-indigo-200 border rounded-full border-cyan-500 sm:text-sm bg-indigo-700/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="self-start mt-auto text-sm text-indigo-400 sm:text-base hover:underline"
                    aria-label={`View more details about ${project.title}`}
                  >
                    View More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          id="modalBackdrop"
          onClick={onBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div
            className="bg-gray-900 w-full max-w-4xl rounded-xl shadow-xl relative flex flex-col max-h-[90vh]"
            style={{ overflow: "hidden" }}
          >
            {/* Close Button */}
            <button
              className="absolute text-3xl font-bold text-gray-400 transition top-4 right-4 hover:text-red-400"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>

            <div
              className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800"
              style={{ maxHeight: "calc(90vh - 48px)" }}
            >
              <h3
                id="modalTitle"
                className="mb-4 text-2xl font-bold text-indigo-400 sm:text-3xl"
              >
                {selectedProject.title}
              </h3>
              <p className="mb-6 text-sm text-gray-300 sm:text-base">
                {selectedProject.description}
              </p>

              {/* Image Carousel */}
              <div className="flex pb-4 mb-6 space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800">
                {selectedProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${i + 1}`}
                    className="flex-shrink-0 object-cover w-48 h-32 border border-gray-700 rounded-lg sm:h-40 sm:w-64"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-indigo-200 rounded-full sm:text-sm bg-indigo-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles for Scrollbar */}
      <style jsx>{`
        /* Scrollbar Styling */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #5a67d8; /* indigo-600 */
          border-radius: 9999px;
        }
      `}</style>
    </>
  );
};

export default ProjectsSection;
