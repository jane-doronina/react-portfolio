import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="bg-lightGrey scroll-smooth">
    <Navbar />
    <Banner />
    <Routes>
      <Route path="/" element={ <Projects />} />
      <Route path="/projects/:projectId" element={ <Projects />} />
    </Routes>
    <About />
    <Contact />
    <Footer />
  </div>
)

export default App
