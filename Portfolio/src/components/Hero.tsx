import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-hello">Hello<span className="hero-dot">.</span></h2>
          <h3 className="hero-name">Je suis Thomas</h3>
          <h1 className="hero-title">Etudiant en Développement Web</h1>
          <div className="hero-buttons">
            <button className="hero-button primary">Got a project?</button>
            <button className="hero-button secondary">My resume</button>
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
