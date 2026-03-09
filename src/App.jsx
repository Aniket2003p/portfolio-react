import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillsPage from "./pages/Skills";

export default function App() {

  const location = useLocation();

  return (
    <div className="bg-[#0b1324] text-white overflow-x-hidden">

      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />

          <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />

          <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>} />
<Route
  path="/skills"
  element={
    <PageWrapper>
      <SkillsPage />
    </PageWrapper>
  }
/>

          <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />

        </Routes>

      </AnimatePresence>

      <Footer />

    </div>
  );
}