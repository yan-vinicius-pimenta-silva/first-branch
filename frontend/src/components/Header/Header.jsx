"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-bracket">{"<"}</span>
            <span className="logo-text">yanvps01</span>
            <span className="logo-bracket">{"/>"}</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
