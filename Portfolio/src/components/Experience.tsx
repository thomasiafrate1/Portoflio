import "../styles/Experience.css";
import { FaReact, FaHtml5, FaCss3Alt, FaWordpress, FaElementor } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Experience = () => {
  return (
    <div id="experiences" className="container-experience-container">
        <div className="experience-container">
            <h2 className="experience-title">EXPERIENCE</h2>
                <div className="experience-timeline">
                    <div className="experience-item">
                    <div className="experience-year">Août 2024 - Novembre 2024</div>
                    <div className="trait-timeline"></div>
                    <div className="point-timeline"></div>
                    <div className="experience-content">
                        <h3 className="experience-position">Développeur Mobile</h3>
                        <h4 className="experience-company">SARL SAGYR, Cavaillon</h4>
                        <p>
                        J’ai réalisé un stage de 4 mois où j’ai eu l’opportunité de développer deux applications : <br />
                        <br />
                        - Une application de gestion des stocks permettant d’optimiser le suivi et la disponibilité des produits, conçue en React. <br />
                        - Une application de tirage au sort sous forme d’arbre à choix, conçue en PWA (Progressive Web App)<br />
                        <br />
                        Ce stage m’a permis d’approfondir mes compétences en React et plus largement en développement d’applications. 
                        J’ai également découvert l’importance de suivre un cahier des charges, de structurer un projet selon les besoins métiers, et de mieux comprendre les enjeux d’un environnement professionnel. 
                        Cette expérience m’a aidé à développer une approche plus rigoureuse et efficace dans mon travail.
                        </p>
                        <div className="experience-techs">
                            <FaReact className="tech-icon" />
                            <SiTypescript className="tech-icon" />
                            <IoLogoJavascript className="tech-icon" />
                            <SiMysql className="tech-icon" />
                            <FaHtml5 className="tech-icon" />
                            <FaCss3Alt className="tech-icon" />
                        </div>
                    </div>
                    </div>

                    <div className="experience-item">
                    <div className="experience-year">Avril 2023 - Septembre 2023</div>
                    <div className="trait-timeline2"></div>
                    <div className="point-timeline2"></div>
                    <div className="experience-content">
                        <h3 className="experience-position">Développeur Front-end</h3>
                        <h4 className="experience-company">CPTS Pays d'Arles, Saint-Rémy-de-Provence</h4>
                        <p>
                        Lors de mon stage de 6 mois au sein de la CPTS Pays d’Arles, j’étais le seul développeur en charge de la gestion du site web. Mes missions étaient variées : <br />
                        <br />
                        - Création de nouvelles pages et intégration de contenus. <br />
                        - Maintenance du site et correction des éventuels dysfonctionnements. <br />
                        - Mise à jour des articles et du contenu afin de garantir une information toujours actuelle. <br />
                        - Amélioration du visuel et de l’ergonomie pour une meilleure expérience utilisateur. <br />
                        <br />
                        Ce stage m’a permis de gagner en autonomie, de prendre des décisions techniques en fonction des besoins et contraintes du projet, 
                        et de mieux appréhender le rôle d’un développeur dans une structure où il doit être polyvalent et réactif. 
                        Travailler en solo sur le projet m’a également aidé à développer ma capacité à résoudre des problèmes et à prendre des initiatives techniques adaptées aux attentes de l’entreprise.
                        </p>
                        <div className="experience-techs">
                            <FaWordpress className="tech-icon" />
                            <FaElementor className="tech-icon" />
                            <FaHtml5 className="tech-icon" />
                            <FaCss3Alt className="tech-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Experience;