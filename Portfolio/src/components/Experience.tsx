import "../styles/Experience.css";
import { FaAndroid, FaReact, FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import { SiMysql, SiElementor, SiExpo, SiVercel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const experiences = [
    {
    badge: "2025",
    period: "Novembre 2025 - Janvier 2026",
    title: "Développeur Mobile PWA",
    company: "SARL SAGYR, Cavaillon",
    description:
        "Lors de cette expérience, j'ai participé au développement d'une application de diagnostic de peau pensée pour guider les clientes à travers un arbre à choix multiples. L'objectif était d'identifier leur type de peau, puis de leur proposer un soin ainsi que des produits adaptés. Ce projet m'a amené à travailler sur la sauvegarde des données, à prendre en compte les contraintes liées au RGPD, et à m'adapter à un domaine que je ne connaissais pas du tout au départ : celui de la peau, du soin et du conseil client. J'ai dû comprendre précisément les besoins métier, échanger avec l'équipe pour transformer une logique métier en parcours utilisateur clair, et proposer une solution technique cohérente. Cette expérience m'a permis de renforcer ma capacité d'adaptation, de collaborer efficacement en équipe, et de développer une approche plus centrée utilisateur et métier.",
    techs: [
        <FaReact className="tech-icon" key="react" />,
        <SiExpo className="tech-icon" key="expo" />,
        <FaAndroid className="tech-icon" key="android" />,
    ],
    },
    {
    badge: "2024",
    period: "Décembre 2024",
    title: "Développeur Front-end",
    company: "SARL SAGYR, Cavaillon",
    description:
        "J'ai développé une application de tirage au sort utilisée dans le cadre d'une opération de Noël organisée par l'entreprise. Pendant tout le mois de décembre, les clients pouvaient être inscrits dans l'application, puis un gagnant était tiré au sort chaque jour pour remporter un cadeau. Mon rôle a été de concevoir une interface simple et efficace permettant d'enregistrer les participants, puis de lancer un tirage aléatoire fiable en fin de journée. Ce projet m'a demandé de bien comprendre un besoin client très concret, de m'adapter à une logique événementielle et commerciale, et de proposer une solution rapide, claire et utilisable facilement au quotidien. J'ai également travaillé en lien avec l'équipe pour ajuster le fonctionnement de l'application aux attentes réelles du terrain. Cette expérience m'a appris à traduire un besoin métier simple en outil fonctionnel, tout en restant attentif à l'ergonomie, à la fiabilité et à l'usage final.",
    techs: [
        <FaHtml5 className="tech-icon" key="html" />,
        <FaCss3Alt className="tech-icon" key="css" />,
        <IoLogoJavascript className="tech-icon" key="js" />,
        <SiVercel className="tech-icon" key="vercel" />,
        <SiMysql className="tech-icon" key="mysql" />,

    ],
    },
  {
    badge: "2023",
    period: "Avril 2023 - Septembre 2023",
    title: "Développeur Front-end",
    company: "CPTS Pays d'Arles, Saint-Rémy-de-Provence",
    description:
      "Stage de 6 mois durant lequel j'étais le seul développeur en charge du site web. Mes missions comprenaient la création de nouvelles pages, l'intégration de contenus, la maintenance du site, la correction de dysfonctionnements, la mise à jour des articles et l'amélioration du visuel et de l'ergonomie. Cette expérience m'a permis de gagner en autonomie, de prendre des décisions techniques adaptées aux besoins du projet, et de développer ma capacité à résoudre des problèmes de manière concrète dans une structure où polyvalence et réactivité étaient essentielles.",
    techs: [
      <FaWordpress className="tech-icon" key="wordpress" />,
      <SiElementor className="tech-icon" key="elementor" />,
      <FaHtml5 className="tech-icon" key="html" />,
      <FaCss3Alt className="tech-icon" key="css" />,
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="timeline-cover">
      <div className="timeline-title">
        <h2>EXPÉRIENCE</h2>
        <p>
          Mes principales expériences en développement, réalisées en entreprise
          durant ma formation.
        </p>
      </div>

      <div className="timeline">
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <div className="timeline-content">
                <div className="timeline-badge">{experience.badge}</div>
                <div className="timeline-period">{experience.period}</div>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>

                <div className="timeline-techs">{experience.techs}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;