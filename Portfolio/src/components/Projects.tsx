import "../styles/Projects.css";

const slides = [
  { title: "Echo Memories", subtitle: "Application PWA de mémoire basée sur la mémorisation espacée, avec une page d'accueil, notifications, calendrier et catégories. Chaque catégorie contient des thèmes et des cartes de révision personnalisables.", image: "./EchoMemories.png" },
  { title: "RunYnov", subtitle: "Application de running codé en React Native. Elle est composé d'un écran d'authentification, un ecran d'accueil, un écran de course et un écran d'historique des courses. Suivi d'itinéraire en temps réel avec les kilometres et temps indiqués.", image: "./RunYnov.png" },
  { title: "SpotYnov", subtitle: "Site Web utilisant l'API Spotify, avec une authentification et un dashboard. Permet de créer un compte, rejoindre/créer un groupe, lier Spotify, voir les goûts musicaux et synchroniser plusieurs utilisateurs sur un même Jam.", image: "./SpotYnov.png" },
  { title: "Toma's Adventure", subtitle: "Jeu développer sur Unity en C#. C'est un Mario Bros Like, nous jouons un personnage et notre but est d'arriver jusqu'au drapeau de fin sans perdre de vie et en récoltant le plus de pièces.", image: "./TomasAdventure.png" },
  { title: "Bape To Sell", subtitle: "Site Web développé en JS, HTML et CSS. C'est une boutique en ligne de vêtements, il est possible de trier les vêtements, attribué une promotion sur certains vêtement, les ajouter au panier.", image: "./BapeToSell.png" },
  { title: "Project Stars", subtitle: "Un site vitrine en HTML & CSS destiné aux joueurs débutants de League of Legends. Il présente les 20 derniers champions sortis, avec leurs attaques, lore et une vidéo de gameplay pour chacun.", image: "./ProjectStars.png" }
];

const Projects = () => {

  return (
    <div id="projets" className="center">
      <div className="portfolio-header">
        <h2>PROJETS</h2>
        <p>Ci-dessous, quelques exemples de réalisations effectuées durant ma formation :</p>
      </div>
      <div className="wrapper">
        <div className="inner">
          {slides.map((slide, index) => (
            <div key={index} className="card">
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                <h1>{slide.title}</h1>
                <h3>{slide.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
