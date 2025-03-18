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

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-brand">Thomas Iafrate</div>
      <ul className="navbar-links">
        <li><a href="#home">Profil</a></li>
        <li><a href="#about">Projets</a></li>
        <li><a href="#services">Compétences</a></li>
        <li><a href="#portfolio">Me contacter</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
