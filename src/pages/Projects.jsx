import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTractor, FaFileInvoiceDollar, FaTasks, FaShoppingCart, FaUserTie } from "react-icons/fa";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AlphaAgro",
      icon: <FaTractor />,
      tech: "HTML • CSS • JavaScript • PHP • SQL",
      description: `
• Constructed a web application for trading farming machinery, increasing equipment accessibility.

• Architected relational database using phpMyAdmin for managing profiles and rental schedules.

• Designed a responsive interface ensuring cross-device compatibility and improved navigation speed.
      `,
    },

    {
      title: "Invoice Management System",
      icon: <FaFileInvoiceDollar />,
      tech: "React • Node.js • MySQL",
      description: `
• Developed invoice generation and management platform.

• Implemented PDF export functionality for invoices.

• Optimized backend queries for faster data processing.
      `,
    },

    {
      title: "Smart To-Do List",
      icon: <FaTasks />,
      tech: "React • LocalStorage",
      description: `
• Created advanced task manager with filtering and categorization.

• Implemented persistent storage using localStorage.

• Designed intuitive UI for productivity management.
      `,
    },

    {
      title: "E-Commerce Platform",
      icon: <FaShoppingCart />,
      tech: "React • Node.js • MongoDB",
      description: `
• Built full-stack shopping platform.

• Implemented cart, authentication and order management.

• Developed responsive UI for seamless shopping experience.
      `,
    },

    {
      title: "Portfolio Website",
      icon: <FaUserTie />,
      tech: "React • Tailwind • Framer Motion",
      description: `
• Developed modern developer portfolio with animations.

• Implemented dark/light theme toggle.

• Built responsive UI with smooth scroll animations.
      `,
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 px-8 bg-[#0b1324]">

      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            A showcase of my technical expertise and problem-solving skills.
          </p>
        </div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelectedProject(project)}
              className="flex bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition cursor-pointer"
            >

              {/* Left Icon Section */}

              <div className="w-40 flex items-center justify-center bg-[#1b2545] text-5xl text-purple-400">
                {project.icon}
              </div>

              {/* Right Content */}

              <div className="p-6 flex-1">

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-cyan-400 mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-400 text-sm">
                  Click to view details
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>


      {/* Modal Popup */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              className="bg-[#111c36] p-8 rounded-xl max-w-lg w-full border border-cyan-400/20"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-6 whitespace-pre-line">
                {selectedProject.description}
              </p>

              <p className="text-purple-400 mb-6">
                Tech Stack: {selectedProject.tech}
              </p>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition"
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}