import "../styles/Footer.css";
import {FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {

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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a onClick={() => scrollToSection("profil")}>Profil</a></li>
            <li><a onClick={() => scrollToSection("experiences")}>Expérience</a></li>
            <li><a onClick={() => scrollToSection("competences")}>Compétences</a></li>
            <li><a onClick={() => scrollToSection("projets")}>Projets</a></li>
            <li><a onClick={() => scrollToSection("contact")}>Me contacter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: thomasiafrate04@gmail.com</p>
          <p>Téléphone: 06 35 26 17 99</p>
          <p>Adresse: 13100 Aix-En-Provence /<br /> 84300 Cavaillon</p>
        </div>
        <div className="footer-section">
          <h3>Suivez-moi</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
