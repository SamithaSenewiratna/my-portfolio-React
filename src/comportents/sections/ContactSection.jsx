import React, { useState } from "react";
import { motion } from "framer-motion";

const inputVariants = {
  focused: {
    scale: 1.02,
    boxShadow: "0 0 10px rgba(99, 102, 241, 0.8)",
    borderColor: "rgba(99, 102, 241, 0.8)",
  },
  unfocused: {
    scale: 1,
    boxShadow: "none",
    borderColor: "rgba(75, 85, 99, 0.7)",
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen px-6 py-24 overflow-visible text-gray-100 bg-gray-900"
    >
      {/* Animated Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradient-background"
        style={{
          background:
            "linear-gradient(270deg, #4f46e5, #ec4899, #f59e0b, #3b82f6)",
          backgroundSize: "800% 800%",
          filter: "blur(100px) brightness(0.7)",
        }}
      ></div>

      {/* Floating subtle circles */}
      <div className="absolute bg-indigo-700 rounded-full -top-10 -left-10 w-72 h-72 opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-0 w-56 h-56 bg-pink-600 rounded-full right-10 opacity-15 animate-float-slower"></div>

      {/* Container for description and form */}
      <div className="relative flex flex-col items-center w-full max-w-3xl gap-12">
        {/* Description Box */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full p-6 text-base font-medium text-center text-indigo-200 shadow-xl select-none bg-indigo-700/30 backdrop-blur-md rounded-3xl sm:text-lg"
        >
          <p>
            Welcome to my contact section! Whether you have questions, project
            ideas, or just want to say hello, I’m excited to hear from you.
            Feel free to share your thoughts or ask about collaboration
            opportunities. Your message matters, and I’ll get back to you as
            soon as possible. Thank you for stopping by!
          </p>
        </motion.div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full p-6 shadow-xl bg-gray-800/60 backdrop-blur-md rounded-3xl sm:p-8 md:p-10"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 sm:space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold tracking-wide text-center text-indigo-400 sm:text-4xl drop-shadow-lg"
            >
              Get in Touch
            </motion.h2>

            {[ 
              { label: "Name", type: "text", id: "name", placeholder: "Your name" },
              { label: "Email", type: "email", id: "email", placeholder: "you@example.com" }
            ].map(({ label, type, id, placeholder }) => (
              <motion.div key={id} className="relative">
                <label
                  htmlFor={id}
                  className="block mb-2 font-semibold text-indigo-300"
                >
                  {label}
                </label>
                <motion.input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-indigo-100 placeholder-indigo-500 transition bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
                  initial="unfocused"
                  whileFocus="focused"
                  variants={inputVariants}
                />
              </motion.div>
            ))}

            <motion.div className="relative">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-indigo-300"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                rows="5"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-indigo-100 placeholder-indigo-500 transition bg-gray-900 border border-gray-700 rounded-lg resize-none focus:outline-none"
                initial="unfocused"
                whileFocus="focused"
                variants={inputVariants}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white transition rounded-lg shadow-lg md:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-background {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
        .animate-gradient-background {
          animation: gradient-background 15s ease infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        .animate-float-slower {
          animation: float-slower 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
