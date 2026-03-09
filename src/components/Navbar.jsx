import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {

  const [active, setActive] = useState("home");

  const sections = ["home", "projects", "skills", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (section) =>
    `cursor-pointer transition ${
      active === section
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400"
    }`;

    const linkClass = "text-gray-300 hover:text-cyan-400 transition";
    const activeLinkClass = "text-cyan-400 font-semibold";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b1324]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-xl font-bold text-white">
          Aniket's Portfolio
        </h1>

        <div className="flex items-center gap-8 text-sm">

<NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? activeLinkClass : linkClass
  }
>
  Home
</NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Contact
          </NavLink >
          {/* <button*/}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center  gap-2 px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 
              hover:text-black
              transition font-semibold"
            >
              Resume
              <FaDownload />
            </a>
        </div>

      </div>

    </nav>
  );
}