import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";

const keywords = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Creative Designer",
  "Tech Explorer",
];

const AnimatedKeywords = () => {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ opacity: 0, scale: 0.9 }).then(() => {
        setIndex((prev) => (prev + 1) % keywords.length);
        controls.start({ opacity: 1, scale: 1 });
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text md:text-3xl"
      style={{
        backgroundSize: "200% 200%",
        animation: "textGradient 6s ease-in-out infinite",
      }}
    >
      {keywords[index]}
    </motion.span>
  );
};

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes darkBackgroundGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes textGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blobMove1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes blobMove2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-25px, 15px) scale(0.9); }
        }
        @keyframes blobMove3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, 25px) scale(1.05); }
        }
      `}</style>

      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(270deg, #080a1a, #0b0c2f, #1e1f44, #2d2f5a, #222248)",
          backgroundSize: "1200% 1200%",
          animation: "darkBackgroundGradient 40s ease infinite",
        }}
      >
        {/* Vignette overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
            mixBlendMode: "multiply",
            zIndex: 0,
          }}
        ></div>

        {/* Animated blobs with darker colors and lower opacity */}
        <div
          className="absolute bg-purple-900 rounded-full top-20 left-10 w-72 h-72 opacity-10 blur-3xl"
          style={{ animation: "blobMove1 15s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bg-indigo-900 rounded-full top-1/3 right-20 w-96 h-96 opacity-08 blur-3xl"
          style={{ animation: "blobMove2 18s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-pink-900 rounded-full bottom-24 left-1/4 opacity-12 blur-3xl"
          style={{ animation: "blobMove3 12s ease-in-out infinite" }}
        ></div>

        <div className="z-10 flex flex-col items-center justify-between w-full gap-10 max-w-7xl md:flex-row-reverse">
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotate: [0, 2, -2, 0], scale: 1.03 }}
          >
            <div className="relative mt-20 transition-transform duration-700 group">
              <div className="absolute transition duration-700 rounded-[3rem] opacity-50 -inset-2 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 blur-xl group-hover:opacity-80"></div>
              <img
                src="https://img.freepik.com/premium-photo/developer-multitasking-computer-with-numerous-tabs-open-efficient-coding_1166177-13857.jpg"
                alt="Portrait of Samitha Senewirathna"
                loading="lazy"
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-[3rem] border-[6px] border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>

          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left md:ml-8">
            {/* Badges */}
          <motion.div
              className="flex-wrap justify-start hidden gap-2 md:flex"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {["🚀 Let's Build", "🔥 Web/Mobile", "💡 Innovations"].map((text) => (
                <span
                  key={text}
                  className="px-4 py-1 text-sm font-semibold text-black transition bg-white rounded-full shadow-md hover:scale-105"
                >
                  {text}
                </span>
              ))}
            </motion.div>
            {/* Typing title */}
            <h1 className="text-4xl font-extrabold text-transparent md:text-6xl bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text">
              <TypeAnimation
                sequence={["Hi, I'm Samitha", 2500, "", 500]}
                speed={30}
                repeat={Infinity}
              />
            </h1>

            {/* Animated roles */}
            <AnimatedKeywords />

            {/* Paragraph */}
            <motion.p
              className="mt-2 mb-6 text-lg leading-relaxed text-gray-300 md:text-xl"
              animate={{ opacity: [1, 0.8, 1], scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              I build modern, high-performance web applications with a creative and efficient approach.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#projects"
              className="inline-block py-2 font-bold text-white transition bg-indigo-700 rounded-full shadow-xl px-7 hover:bg-indigo-800"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
