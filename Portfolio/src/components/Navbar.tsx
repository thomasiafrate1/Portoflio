import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 pour ouvrir/fermer le menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // 👈 referme le menu après clic
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div onClick={() => scrollToSection("hero")} className="navbar-brand">Thomas Iafrate</div>

      {/* Menu burger */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Liens */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
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
