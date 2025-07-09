import "./About.css"

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications using React and
              .NET technologies. My journey in software development started with a curiosity for how things work under
              the hood, which naturally led me to embrace the Arch Linux philosophy of understanding and controlling
              every aspect of my development environment.
            </p>

            <p>
              I specialize in creating scalable, maintainable applications with clean architecture patterns. Whether
              it's crafting responsive user interfaces with React or building robust APIs with .NET Core, I focus on
              writing code that's not just functional, but elegant and efficient.
            </p>

            <p>
              When I'm not coding, you'll find me customizing my Arch Linux setup, exploring new technologies, or
              contributing to open-source projects. I believe in continuous learning and staying up-to-date with the
              latest industry trends and best practices.
            </p>

            <div className="stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="terminal-title">neofetch</span>
              </div>
              <div className="terminal-body">
                <pre className="neofetch-output">
                  {`                   -\`
                  .o+\`                 user@arch
                 \`ooo/                 ---------
                \`+oooo:                OS: Arch Linux x86_64
               \`+oooooo:               Host: Developer Machine
               -+oooooo+:              Kernel: 6.1.0-arch1-1
             \`/:-:++oooo+:             Uptime: 365 days, 24 hours
            \`/++++/+++++++:            Packages: 1337 (pacman)
           \`/++++++++++++++:           Shell: zsh 5.9
          \`/+++ooooooooooooo/\`         Resolution: 1920x1080
         ./ooosssso++osssssso+\`        DE: i3wm
        .oossssso-\`\`\`\`/ossssss+\`       WM: i3
       -osssssso.      :ssssssso.      Theme: Arc-Dark
      :osssssss/        osssso+++.     Icons: Papirus-Dark
     /ossssssss/        +ssssooo/-     Terminal: alacritty
   \`/ossssso+/:-        -:/+osssso+-   CPU: Ryzen 7 (16) @ 3.8GHz
  \`+sso+:-\`                 \`.-/+oso:  GPU: NVIDIA RTX 3070
 \`++:.                           \`-/+/ Memory: 32GB DDR4
 .\`                                 \`/`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
