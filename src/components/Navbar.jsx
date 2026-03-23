const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'My Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="#home" className="brand">Portfolio</a>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
