function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">© {currentYear} Bala. All rights reserved.</p>
        <div className="footer-links" aria-label="Footer social links">
          <a href="https://github.com/Bala-techdev" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/BALA" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:balatkm2007@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
