
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Profil</a>
        </li>
        <li>
          <a href="#about">Projets</a>
        </li>
        <li>
          <a href="#services">Compétences</a>
        </li>
        <li>
          <a href="#portfolio">Me contacter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;