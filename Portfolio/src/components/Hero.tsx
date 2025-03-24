import { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [isWebDev, setIsWebDev] = useState(true);
  const [showText, setShowText] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); 
      setTimeout(() => {
        setIsWebDev((prev) => !prev); 
        setShowText(true); 
      }, 500); 
    }, 2500); 
    return () => clearInterval(interval);
  }, []);
  
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
    <div id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-hello">Hello<span className="hero-dot">.</span></h2>
          <h3 className="hero-name">Je suis Thomas</h3>
          <h1 className="hero-title">
            Etudiant en&nbsp; {"  "}
            <span className={`fade-text ${showText ? "visible" : "hidden"}`}>
              {isWebDev ? (
                <>
                  Développement <span>Web</span>
                </>
              ) : (
                 <>
                 Bachelor <span>3</span>
                 </>
              )}
            </span>
          </h1>
          <div className="hero-buttons">
            <button className="hero-button primary" onClick={() => scrollToSection("contact")}>Me contacter ?</button>
            <button className="hero-button secondary" onClick={() => scrollToSection("profil")}>Mon profil</button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-circle"></div>
            <img
              src="./PhotoCV-Photoroom.png"
              alt="Jensen"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
