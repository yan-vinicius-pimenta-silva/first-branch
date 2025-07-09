"use client"

import { useEffect, useState } from "react"
import "./Hero.css"

const Hero = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Full Stack Developer", "React Specialist", ".NET Developer", "Arch Linux Enthusiast"]

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="terminal-header">
              <span className="terminal-user">yanvps01@archlinux</span>
              <span className="terminal-separator">:</span>
              <span className="terminal-path">~</span>
              <span className="terminal-prompt">$</span>
            </div>

            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name text-gradient">Yan Vinícius Pimenta Silva</span>
            </h1>

            <div className="typing-container">
              <span className="typing-text">{text}</span>
              <span className="cursor pulse">|</span>
            </div>

            <p className="hero-description">
              Crafting robust web applications with React frontends and .NET backends. Passionate about clean code,
              system architecture, and the Arch way of computing.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">portfolio.cs</span>
              </div>
              <div className="code-content">
                <pre>
                  {`public class Developer
{
    public string Name { get; set; } = "YourName";
    public string[] Skills { get; set; } = {
        "React", "TypeScript", "C#",
        ".NET Core", "SQL", "Docker"
    };
    
    public void Code()
    {
        while (true)
        {
            Learn();
            Build();
            Deploy();
        }
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
