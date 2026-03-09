import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const education = [
  {
    year: "2020 - 2024",
    title: "B.Tech – Information Technology",
    institute: "Walchand Institute of Technology, Solapur",
    extra: "CGPA: 9.15",
  },
  {
    year: "2018 - 2020",
    title: "Higher Secondary Certificate (HSC)",
    institute: "Science Stream",
    extra: "",
  },
  {
    year: "2017 - 2018",
    title: "Secondary School Certificate (SSC)",
    institute: "",
    extra: "",
  },
];

const About = () => {
  return (
<section className="min-h-screen bg-[#0b1630] text-white py-20">
  <div className="max-w-5xl mx-auto px-6">


      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        About <span className="text-indigo-400">Me</span>
      </motion.h1>

      <div className="w-24 h-1 bg-cyan-400 mt-4 mb-12 rounded"></div>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#1a2747] p-8 md:p-10 rounded-2xl max-w-5xl shadow-xl"
      >
<p className="text-gray-300 leading-relaxed text-lg">
          I am a result-oriented B.Tech graduate from Walchand Institute of
          Technology with a strong academic foundation, maintaining a{" "}
          <span className="text-white font-semibold">9.15 CGPA</span>.
          My technical journey is defined by a passion for full-stack web
          development, where I have built a proven track record of creating
          responsive, data-efficient applications using{" "}
          <span className="text-white font-semibold">
            ReactJS, PHP, and MySQL
          </span>.
          During my technical training at{" "}
          <span className="text-white font-semibold">
            Persistent Systems
          </span>
          , I honed my expertise in Core Java, Data Structures, and DBMS,
          achieving a{" "}
          <span className="text-white font-semibold">78% performance improvement</span>{" "}
          in technical evaluations. Whether it is architecting relational
          databases for platforms like{" "}
          <span className="text-white font-semibold">AlphaAgro</span> or
          developing high-precision{" "}
          <span className="text-white font-semibold">
            Invoice Management Systems
          </span>
          , I am dedicated to improving user engagement and operational
          efficiency through clean, innovative code. I am now eager to apply my
          problem-solving skills and collaborative mindset to a professional
          team where I can contribute to the ever-evolving field of technology.
        </p>

      </motion.div>

      {/* Education Section */}
      <div className="mt-24">

        <h2 className="flex items-center gap-3 text-2xl font-bold mb-16">
          <Briefcase className="text-indigo-400" size={28} />
          Education
        </h2>

        <div className="relative border-l-2 border-indigo-500 ml-4">

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-14 ml-10"
            >

              {/* glowing node */}
              <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-indigo-500 rounded-full ring-4 ring-[#0b1630] shadow-lg shadow-indigo-500/50"></span>

              <h3 className="text-xl font-semibold">{edu.title}</h3>

              <p className="text-indigo-400">{edu.year}</p>

              {edu.institute && (
                <p className="text-gray-400">{edu.institute}</p>
              )}

              {edu.extra && (
                <p className="text-gray-300">{edu.extra}</p>
              )}

            </motion.div>
          ))}

        </div>
      </div>
</div>
    </section>
  );
};

export default About;