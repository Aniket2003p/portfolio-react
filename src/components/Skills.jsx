import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaPhp,
} from "react-icons/fa";

import { 
  SiMysql, 
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  
 } from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: <FaReact />, level: 90, color: "text-cyan-400" },
  { name: "NodeJS", icon: <FaNodeJs />, level: 80, color: "text-green-400" },
  { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-400" },
  { name: "Python", icon: <FaPython />, level: 80, color: "text-blue-400" },
  { name: "PHP", icon: <FaPhp />, level: 75, color: "text-indigo-400" },
  { name: "MySQL", icon: <SiMysql />, level: 85, color: "text-orange-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 90, color: "text-teal-400" },
  { name: "HTML", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },

];

export default function Skills({limit}) {
  const skills = [
    { name: "React", icon: <FaReact />, level: 90, color: "text-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-400" },
    { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "text-green-400" },
    { name: "Express", icon: <SiExpress />, level: 85, color: "text-purple-400" },
    { name: "Python", icon: <FaPython />, level: 80, color: "text-blue-400" },
    { name: "PHP", icon: <FaPhp />, level: 75, color: "text-indigo-400" },
    { name: "MySQL", icon: <SiMysql />, level: 85, color: "text-orange-400" },
    { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 90, color: "text-teal-400" },
    { name: "HTML", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "text-gray-400" },
    { name: "GitHub", icon: <FaGithub />, level: 85, color: "text-gray-400" },
    { name: "Database", icon: <FaDatabase />, level: 80, color: "text-red-400" },
  ];

  const visibleSkills = limit ? skills.slice(0, limit) : skills;

  return (
    <section className="py-28 px-8 bg-[#0b1324]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>



        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {visibleSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 
                         border border-white/10 
                         hover:border-cyan-400/40 
                         transition-all duration-300 shadow-lg"
            >
              {/* Top Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-3xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>

              <div className="text-right text-sm text-gray-400 mt-2">
                {skill.level}%
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}