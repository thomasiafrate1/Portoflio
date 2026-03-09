import "../styles/Profil.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
    <div id="profil" className="profile-container" >
      <div className="profile-content">
        <div className="profile-image">
          <img src="https://thomasiafrate1.github.io/Portoflio/profilicon2.png" alt="Your Name" />
          <div className="profile-projects-years">
            <div className="container-projects-years">
              <h1 className="profile-name" >35<span>+</span></h1>
              <p className="profile-job">Projets Effectués</p>
            </div>
            <div className="container-projects-years">
              <h1 className="projects-years">4<span>+</span></h1>
              <p className="desc-projects-years">Ans de développement</p>
            </div>
          </div>
        </div>

        <div className="profile-info">
          <h1 className="profile-title">Un peu de mon <span>histoire</span></h1>
          <p className="profile-description">
            Bonjour, je m'appelle Thomas Iafrate, j'ai 21 ans et je suis Master 1 en
            Développement Fullstack. <br /> 
            <br />
            Depuis petit j'ai toujours été curieux et passionné par l'informatique.
            J'ai commencé à apprendre le développement web il y a 4 ans et je suis
            actuellement en formation à l'école Ynov Aix Campus. <br />
            <br />
            J'ai eu l'occasion de travailler sur plusieurs projets personnels et
            professionnels qui m'ont ainsi permis de développer mes compétences en
            développement web. <br />
            <br />
            Je suis actuellement à la recherche d'une alternance pour une durée de 1 an 
            à partir de septembre 2026. <br />
            <br />
            Vous pouvez me contacter via les liens ci-dessous.
          </p>
          <div className="profile-links">
            <a href="https://www.linkedin.com/in/thomas-iafrate-21a35824b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="profile-icon" />
            </a>
            <a href="https://github.com/thomasiafrate1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="profile-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
