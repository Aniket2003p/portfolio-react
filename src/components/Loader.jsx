import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
export default function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        onFinish();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0b1324] z-[99999]"
    >
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Aniket Parbhankar
        </span>
      </motion.h1>

      <div className="text-2xl text-gray-300">
        <ReactTyped
          strings={[
            "Full Stack Developer",
            "React Developer",
            "Creative Coder",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </div>

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-12 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
      />
    </motion.div>
  );
}