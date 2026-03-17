function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Java Full Stack Developer</p>
          <h1>Hi, I am Bala...</h1>
          <p className="hero-intro">
            I build scalable backend systems and intuitive frontend experiences.
            I am focused on creating reliable and user-centered software with
            modern Java full stack technologies.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://github.com/Bala-techdev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="hero-panel reveal">
          <h2>Tech Stack</h2>
          <p>Java, Spring Boot & AI, ReactJS, MySQL, HTML, CSS, JavaScript, Git, Postman</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
