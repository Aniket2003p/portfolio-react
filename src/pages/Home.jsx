import { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileInvoiceDollar,
  FaTasks,
  FaShoppingCart,
  FaUserTie,
  FaBlog,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import avatar from "../assets/avatar.png";
import aboutPhoto from "../assets/aniket.jpg";
import starbucks from "../assets/starbucks.jpg";
import invoice from "../assets/invoice2.png";
import myntra from "../assets/myntra.png";
import portfolio from "../assets/resume.png"

import Skills from "../components/Skills";
import ContactSection from "../components/ContactSection";
import { image, title } from "framer-motion/client";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden bg-[#0b1324] pt-32 px-8 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-screen"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block bg-white/10 px-4 py-2 rounded-lg text-sm text-cyan-400 mb-6">
            👋 Welcome to my world
          </span>

          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Aniket
            </span>
          </h1>

          <h2 className="text-3xl text-gray-300 mb-6">
            I'm a{" "}
            <span className="text-cyan-400">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "Creative Coder",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg mb-8">
            Result-oriented IT graduate with experience in React,
            PHP and MySQL. I build modern, scalable and
            high-performance web applications.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/Aniket2003p"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aniket-parbhankar-458829220/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/_annix_jain_03"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-500 transition"
            >
              <FaTwitter />
            </a>
          </div>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition font-semibold shadow-lg"
          >
            Let's Connect →
          </button>
        </motion.div>

        {/* Profile Image */}
        <div className="relative flex justify-center items-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/30"
          />

          <div className="absolute w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img
              src={avatar}
              alt="Aniket"
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </div>

        </div>
      </section>

      <ProjectSlider />

      <section id="skills">
        <Skills limit={9} />
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/skills")}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition font-semibold shadow-lg"
          >
            View All Skills →
          </button>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={aboutPhoto}
              alt="About"
              className="w-[350px] h-[350px] object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-gray-300 mb-8">
              I am a result-oriented Information Technology
              graduate from Walchand Institute of Technology with
              strong expertise in full-stack development using
              React, PHP and MySQL.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition"
            >
              Read More →
            </button>
          </motion.div>

        </div>
      </section>

      <section id="contact">
        <ContactSection />
      </section>

    </main>
  );
}

function ProjectSlider() {

  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState(null);
  const [index, setIndex] = useState(0);

  const projects = [
    {
      title: "Invoice Management System",
      description: "Comprehensive invoice tool with scalable backend.",
      image: invoice,
    },
    {
      title: "Starbucks Landing Page",
      description: "High-fidelity responsive landing page clone.",
      image: starbucks,
    },
    {
      title:"Myntra Clone",
      description: "E-commerce platform with React and Node.js.",
      image : myntra,
    },
    {
      title: "Smart To-Do List",
      description: "Task filtering app with local storage.",
      icon: <FaTasks />,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping platform.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Portfolio Website",
      description: "Modern animated developer portfolio.",
      image: portfolio,
    },
    {
      title: "Blog CMS",
      description: "Dynamic blog management system.",
      icon: <FaBlog />,
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive dashboard with charts.",
      icon: <FaChartLine />,
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto relative">

        {/* Section Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Arrows */}

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     p-3 rounded-full bg-white/10 backdrop-blur-md 
                     hover:bg-cyan-500/30 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     p-3 rounded-full bg-white/10 backdrop-blur-md 
                     hover:bg-cyan-500/30 transition"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}

        <div className="overflow-hidden px-12">

          <motion.div
            className="flex gap-8"
            animate={{ x: `-${index * 320}px` }}
            transition={{ duration: 0.6 }}
          >

            {projects.map((project, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[300px] bg-white/5 backdrop-blur-md 
                           rounded-2xl p-6 border border-white/10 
                           hover:border-cyan-400/40 
                           transition-all duration-300 
                           shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="text-4xl text-cyan-400 mb-4">
                    {project.icon}
                  </div>
                )}

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

        {/* VIEW MORE BUTTON */}

        <div className="flex justify-center mt-14">

          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r 
                       from-purple-500 to-indigo-500 
                       hover:scale-105 transition font-semibold shadow-lg"
          >
            View More Projects →
          </button>

        </div>

      </div>

    </section>
  );
}