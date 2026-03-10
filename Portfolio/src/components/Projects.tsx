import "../styles/Projects.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Echo Memories",
    subtitle:
      "Application PWA de mémoire basée sur la mémorisation espacée, avec page d'accueil, notifications, calendrier et catégories. Chaque catégorie contient des thèmes et des cartes de révision personnalisables.",
    image: "./EchoMemories.png",
    lien: "https://github.com/thomasiafrate1/Memory-Project",
    techno: "React • PWA",
    badge: "Projet fort",
    schoolLevel: "Bachelor 3",
  },
  {
    title: "RunYnov",
    subtitle:
      "Application de running codée en React Native avec authentification, écran d'accueil, suivi de course en temps réel et historique des courses.",
    image: "./RunYnov.png",
    lien: "https://github.com/thomasiafrate1/mobile-runningApp",
    techno: "React Native",
    badge: "Mobile",
    schoolLevel: "Bachelor 3",
  },
  {
    title: "SpotYnov",
    subtitle:
      "Site web utilisant l'API Spotify avec authentification et dashboard. Création de groupe, liaison Spotify, goûts musicaux et synchronisation de plusieurs utilisateurs sur un même Jam.",
    image: "./SpotYnov.png",
    lien: "https://github.com/HugoGarrigues/SpotYnov",
    techno: "React • API Spotify",
    badge: "API",
    schoolLevel: "Bachelor 3",
  },
  {
    title: "Toma's Adventure",
    subtitle:
      "Jeu développé sur Unity en C#. Un platformer type Mario Bros où le but est d'atteindre le drapeau final sans perdre de vie, tout en récoltant un maximum de pièces.",
    image: "./TomasAdventure.png",
    lien: "https://github.com/thomasiafrate1/MARIOBROS_IAFRATE",
    techno: "Unity • C#",
    badge: "Jeu",
    schoolLevel: "Bachelor 2",
  },
  {
    title: "Bape To Sell",
    subtitle:
      "Site e-commerce développé en JavaScript, HTML et CSS. Tri des vêtements, promotions, ajout au panier et navigation type boutique en ligne.",
    image: "./BapeToSell.png",
    lien: "https://github.com/Nemomul/IAFRATE-MULLER-shopping-app",
    techno: "JS • HTML • CSS",
    badge: "E-commerce",
    schoolLevel: "Bachelor 1",
  },
  {
    title: "Project Stars",
    subtitle:
      "Site vitrine en HTML et CSS destiné aux joueurs débutants de League of Legends. Présentation des champions, de leurs attaques, de leur lore et d'une vidéo de gameplay.",
    image: "./ProjectStars.png",
    lien: "https://github.com/titan1g/CRETTEUR_IAFRATE_PROJET_WEB",
    techno: "HTML • CSS",
    badge: "Site vitrine",
    schoolLevel: "Bachelor 1",
  },
  {
    title: "SpeakFree",
    subtitle:
      "Projet personnel autour d'un réseau social d'expression libre avec modération. Les messages publiés sont automatiquement supprimés après 24 heures.",
    image: "./speakfree.png",
    lien: "https://speakfree-two.vercel.app/",
    techno: "React • TypeScript • JavaScript • Vercel • Supabase",
    badge: "Projet perso",
    schoolLevel: "Master 1",
  },
  {
    title: "VueJS / Nuxt",
    subtitle:
      "Projet de formation réalisé en autonomie pour approfondir Vue.js et Nuxt. J'y ai développé plusieurs mini-projets, dont une boutique en ligne et une app de gestion d'habitude.",
    image: "./vuejsnuxt.png",
    lien: "https://projets-vue-nuxt.vercel.app/",
    techno: "Vue.js • Nuxt",
    badge: "Formation",
    schoolLevel: "Master 1",
  },
  {
    title: "IAFLIX",
    subtitle:
      "Projet personnel de plateforme de streaming permettant d'explorer un large catalogue de films et séries en plusieurs langues. ",
    image: "./logoiaflix.png",
    lien: "https://github.com/thomasiafrate1/testflix",
    techno: "React • TypeScript • SCSS • APIs • Vercel",
    badge: "Projet perso",
    schoolLevel: "Master 1",
  },
  {
    title: "YMeal",
    subtitle:
      "Projet de groupe mené dans le cadre de l'école autour d'une application de nutrition destinée aux étudiants d'Ynov. Le projet comprend à la fois une application mobile et un site web, avec authentification, gestion de profil, suivi nutritionnel et recommandations personnalisées.",
    image: "./yMeal.png",
    lien: "https://github.com/Nico13M/Ymeal-frontApp",
    techno: "React Native • Expo • Android Studio • React • CSS • Figma",
    badge: "En cours",
    schoolLevel: "Master 1",
  }
];

const Projects = () => {
  return (
    <section id="projets" className="projects-section">
      <div className="portfolio-header">
        <h2>PROJETS</h2>
        <p>
          Ci-dessous, quelques exemples de réalisations effectuées durant ma
          formation :
        </p>
      </div>

      <div className="projects-carousel">
        <button className="projects-nav projects-nav-prev" aria-label="Projet précédent">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
            <path
              d="M14 26L2 14L14 2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
  modules={[Navigation, Pagination]}
  className="projects-swiper"
  slidesPerView={1}
  centeredSlides={true}
  initialSlide={0}
  loop={true}
  watchSlidesProgress={true}
  spaceBetween={20}
  speed={700}
  navigation={{
    prevEl: ".projects-nav-prev",
    nextEl: ".projects-nav-next",
    disabledClass: "disabled",
  }}
  pagination={{
    el: ".projects-pagination",
    clickable: true,
    bulletClass: "projects-pagination-bullet",
    bulletActiveClass: "active",
  }}
  breakpoints={{
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 28,
    },
  }}
>
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="projects-slide">
              <a
                href={project.lien}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-card-badges">
                  <div className="project-card-badge">{project.badge}</div>
                  <div className="project-card-level">{project.schoolLevel}</div>
                </div>

                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-card-content">
                  <div className="project-card-top">
                    <span className="project-card-techno">{project.techno}</span>
                  </div>

                  <div className="project-card-info">
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>

                  <div className="project-card-footer">
                    <span className="project-card-link">
                      Voir le projet
                      <span className="project-card-link-icon">↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="projects-nav projects-nav-next" aria-label="Projet suivant">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
            <path
              d="M2 26L14 14L2 2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="projects-pagination"></div>
    </section>
  );
};

export default Projects;