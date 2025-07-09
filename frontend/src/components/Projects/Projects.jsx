"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with React and .NET Core, featuring real-time inventory management, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure"],
      category: "fullstack",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Microservices API Gateway",
      description:
        "Scalable API gateway built with .NET Core, implementing authentication, rate limiting, and service discovery.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [".NET Core", "Docker", "Redis", "PostgreSQL", "RabbitMQ"],
      category: "backend",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for monitoring application metrics with real-time data visualization and alerting system.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "WebSocket", ".NET Core", "InfluxDB"],
      category: "fullstack",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "DevOps Automation Scripts",
      description:
        "Collection of Bash scripts and Docker configurations for automating deployment pipelines and server management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Bash", "Docker", "Nginx", "Linux", "CI/CD"],
      category: "devops",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Mobile-First PWA",
      description:
        "Progressive Web App with offline capabilities, push notifications, and native-like user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "PWA", "Service Workers", "IndexedDB", "Workbox"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "devops", label: "DevOps" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span>
            Featured Projects
          </h2>
          <p className="section-description">A showcase of my recent work and personal projects</p>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View source code">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href={project.demo} className="project-link" aria-label="View live demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
