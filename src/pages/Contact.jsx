import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#0b1324]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 
                     rounded-2xl p-10 shadow-xl"
        >
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#111c36] border border-white/10 
                           rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#111c36] border border-white/10 
                           rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#111c36] border border-white/10 
                           rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
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

        {/* Location & Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          {/* Location */}
          <div className="flex justify-center items-center gap-3 text-gray-400 mb-6">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Pune, India</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center 
                         bg-white/10 backdrop-blur-md rounded-full 
                         hover:bg-cyan-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center 
                         bg-white/10 backdrop-blur-md rounded-full 
                         hover:bg-cyan-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center 
                         bg-white/10 backdrop-blur-md rounded-full 
                         hover:bg-cyan-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}