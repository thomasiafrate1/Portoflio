import "../styles/Skills.css";

const skills = [
  { category: "FRONT-END", skills: [
      { name: "HTML", level: 8 },
      { name: "CSS", level: 8 },
      { name: "JAVASCRIPT", level: 7 },
      { name: "REACTJS", level: 7 },
    ]
  },
  { category: "BACK-END", skills: [
      { name: "PHP", level: 6 },
      { name: "GOLANG", level: 6 },
      { name: "PYTHON", level: 6.5 },
      { name: "MYSQL", level: 7 },
    ]
  },
  { category: "CMS", skills: [
      { name: "WORDPRESS", level: 7 },
      { name: "ELEMENTOR", level: 7 },
    ]
  },
  { category: "DESIGN", skills: [
      { name: "FIGMA", level: 7.5 },
    ]
  }
];

const Skills = () => {
  return (
    <div id="competences" className="skills-container">
      <h1 className="skills-title">COMPETENCES</h1>
      <div className="skills-content">
        <div className="skills-list">
          {skills.map((section, index) => (
            <div key={index} className="skills-section">
              <h3 className="skills-category">{section.category}</h3>
              {section.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${(skill.level / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CV Section */}
      <div className="cv-section">
        <img src="/CV.jpg" alt="Mon CV" className="cv-image" />
        <a href="/CV.pdf" download className="cv-download">Télécharger CV</a>
      </div>
    </div>
  );
};

export default Skills;
