import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      icon: "🔧",
      skills: [
        { name: "C# / .NET", level: 90 },
        { name: "ASP.NET Core", level: 85 },
        { name: "Entity Framework", level: 80 },
        { name: "SQL Server", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🐧",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Linux (Arch)", level: 85 },
        { name: "Azure", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Nginx", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02.</span>
            Skills & Technologies
          </h2>
          <p className="section-description">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Technologies</h3>
          <div className="tech-tags">
            {[
              "Redux",
              "GraphQL",
              "MongoDB",
              "Redis",
              "RabbitMQ",
              "Microservices",
              "Clean Architecture",
              "SOLID Principles",
              "TDD",
              "Agile/Scrum",
              "Vim",
              "i3wm",
              "Bash/Zsh",
              "Webpack",
              "Vite",
              "Jest",
            ].map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
