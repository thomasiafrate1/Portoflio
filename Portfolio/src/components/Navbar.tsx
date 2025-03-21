import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div  onClick={() => scrollToSection("hero")} className="navbar-brand">Thomas Iafrate</div>
      <ul className="navbar-links">
        <li><a onClick={() => scrollToSection("profil")}>Profil</a></li>
        <li><a onClick={() => scrollToSection("experiences")}>Expérience</a></li>
        <li><a onClick={() => scrollToSection("competences")}>Compétences</a></li>
        <li><a onClick={() => scrollToSection("projets")}>Projets</a></li>
        <li><a onClick={() => scrollToSection("contact")}>Me contacter</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
