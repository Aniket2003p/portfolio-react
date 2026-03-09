import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ icon, image, title, description }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden 
                 border border-white/10 shadow-lg 
                 hover:border-cyan-400/40 
                 transition-all duration-300 
                 transform-gpu"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Top Section */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 flex items-center justify-center text-4xl text-cyan-400 bg-[#162036]">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <button className="text-cyan-400 hover:text-white transition">
          View Details →
        </button>
      </div>
    </motion.div>
  );
}