import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">T</div>

        <ul className="navbar-links">
          <li><a href="#profil">Profil</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
        </ul>

        <a href="#contact" className="navbar-button">
          Me contacter
        </a>
      </nav>
    </header>
  );
};

export default Navbar;