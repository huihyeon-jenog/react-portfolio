import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slidebar from "./components/Slidebar";
import MainSection from "./components/MainSection";
import InfoSection from "./components/Infosection";
import { aboutObj } from "./components/Data";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let st = window.pageXOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setShowNav(false);
        return (lastScrollTop = st);
      } else {
        setShowNav(true);
        return (lastScrollTop = st);
      }
    });
  }, []);

  return (
    <Router>
      <Slidebar isOpen={isOpen} toggle={toggle} />
      {showNav ? <Navbar toggle={toggle} /> : null}
      <MainSection />
      <InfoSection {...aboutObj} />
      <ProjectSection />
      <Blog />
      <Contact />
    </Router>
  );
}

export default App;
