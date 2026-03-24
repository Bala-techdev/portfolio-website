import { useEffect, useState } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'My Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 140
      let current = navLinks[0].id

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)
        if (section && section.offsetTop <= offset) {
          current = link.id
        }
      })

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeOnDesktop)
    return () => {
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [])

  const handleNavClick = (event, targetId) => {
    event.preventDefault()
    const section = document.getElementById(targetId)
    if (!section) {
      return
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(targetId)
    setMenuOpen(false)
    window.history.replaceState(null, '', `#${targetId}`)
  }

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="#home" className="brand" onClick={(event) => handleNavClick(event, 'home')}>
          Portfolio
        </a>
        <div className="nav-controls">
          <button
            type="button"
            className={`nav-menu-button ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-actions ${menuOpen ? 'nav-actions-open' : ''}`}>
          <nav id="main-navigation" aria-label="Main navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => handleNavClick(event, link.id)}
                    className={activeSection === link.id ? 'nav-link-active' : ''}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24">
                  <path d="M12 4.8 14 8.6l4.3.6-3.1 3 .7 4.3-3.9-2.1-3.9 2.1.7-4.3-3.1-3 4.3-.6 2-3.8Zm0-2.8-.8 1.5-1.6 3-3.4.5-1.8.3.3 1.8.6 3.4-2.5 2.4-1.3 1.2 1.7.9 3.1 1.7-.6 3.4-.3 1.8 1.8-.3 3.4-.5 3.1 1.7 1.6.9.3-1.8.6-3.4 3.1-1.7 1.7-.9-1.3-1.2-2.5-2.4.6-3.4.3-1.8-1.8-.3-3.4-.5-1.6-3L12 2Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M12 3.5A1 1 0 0 1 13 4.5v1.8a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1Zm0 13.2a4.7 4.7 0 1 0 0-9.4 4.7 4.7 0 0 0 0 9.4Zm0 2a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4Zm7.5-7.7a1 1 0 1 1 0 2h-1.8a1 1 0 1 1 0-2h1.8ZM7.3 12a1 1 0 0 1-1 1H4.5a1 1 0 1 1 0-2h1.8a1 1 0 0 1 1 1Zm10.2 5.4a1 1 0 0 1 0 1.4l-1.3 1.3a1 1 0 1 1-1.4-1.4l1.3-1.3a1 1 0 0 1 1.4 0ZM9.2 9.2a1 1 0 0 1 0 1.4L7.9 11.9a1 1 0 1 1-1.4-1.4l1.3-1.3a1 1 0 0 1 1.4 0Zm8.3 0 1.3 1.3a1 1 0 1 1-1.4 1.4l-1.3-1.3a1 1 0 0 1 1.4-1.4ZM9.2 14.8a1 1 0 0 1 0 1.4l-1.3 1.3a1 1 0 1 1-1.4-1.4l1.3-1.3a1 1 0 0 1 1.4 0ZM12 17.7a1 1 0 0 1 1 1v1.8a1 1 0 1 1-2 0v-1.8a1 1 0 0 1 1-1Z" />
                </svg>
              )}
            </span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
