import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>

    <ScrollToTop/>

      <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <Footer></Footer>

      </div>

    </BrowserRouter>
  );
}