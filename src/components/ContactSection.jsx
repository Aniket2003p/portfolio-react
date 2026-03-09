import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-8 bg-[#0b1324]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind or just want to say hi?
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 
                     rounded-2xl p-10 shadow-xl"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111c36] border border-white/10 
                         rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#111c36] border border-white/10 
                         rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#111c36] border border-white/10 
                         rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl 
                         bg-gradient-to-r from-purple-500 to-indigo-500 
                         hover:scale-105 transition font-semibold"
            >
              Send Message →
            </button>
          </form>
        </motion.div>

        {/* Location & Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center gap-3 text-gray-400 mb-6">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Pune, India</span>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Aniket2003p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-cyan-500 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-parbhankar-458829220/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-cyan-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/_annix_jain_03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-cyan-500 hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
