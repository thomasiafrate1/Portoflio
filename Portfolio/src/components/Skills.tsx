import "../styles/Skills.css";

const skillsData = [
  {
    category: "FRONT",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "VueJS", level: 65 },
    ],
  },
  {
    category: "BACK",
    skills: [
      { name: "Python", level: 60 },
      { name: "PHP", level: 65 },
      { name: "TypeScript", level: 55 },
    ],
  },
  {
    category: "BASE DE DONNÉES",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 55 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    category: "CMS",
    skills: [
      { name: "WordPress", level: 80 },
      { name: "Elementor", level: 80 },
      { name: "Strapi", level: 55 },
      { name: "Webflow", level: 65 },
    ],
  },
  {
    category: "IA",
    skills: [
      { name: "ChatGPT", level: 90 },
      { name: "Copilot", level: 80 },
      { name: "Grok", level: 65 },
    ],
  },
  {
    category: "UX/UI",
    skills: [{ name: "Figma", level: 85 }],
  },
];

const Skills = () => {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((mouseX - centerX) / centerX) * 8;
    const rotateX = -((mouseY - centerY) / centerY) * 8;

    element.style.setProperty("--rotateX", `${rotateX}deg`);
    element.style.setProperty("--rotateY", `${rotateY}deg`);
    element.style.setProperty("--glowX", `${mouseX}px`);
    element.style.setProperty("--glowY", `${mouseY}px`);
  };

  const handleMouseLeave = (element: HTMLDivElement) => {
    element.style.setProperty("--rotateX", `0deg`);
    element.style.setProperty("--rotateY", `0deg`);
    element.style.setProperty("--glowX", `50%`);
    element.style.setProperty("--glowY", `50%`);
  };

  return (
    <section id="competences" className="skills-container">
      <div className="skills-header">
        <h2>COMPÉTENCES</h2>
        <p>Un aperçu des outils et technologies que j'utilise.</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div
            key={index}
            className="skills-card"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <h3>{group.category}</h3>

            <div className="skills-list">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-top">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cv-block">
        <div className="cv-preview">
          <img src="./CVPortfolio.jpg" alt="Aperçu du CV de Thomas Iafrate" />
        </div>

        <div className="cv-content">
          <h3>Télécharger mon CV</h3>
          <p>
            Retrouvez une version complète de mon parcours, de mes expériences
            et de mes compétences dans mon CV téléchargeable.
          </p>

          <a
            href="./CVPortfolio.pdf"
            download
            className="cv-download-button"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;