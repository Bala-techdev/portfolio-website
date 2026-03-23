function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-card reveal">
        <h2>Contact</h2>
        <p>Feel free to connect for collaborations or opportunities.</p>
        <div className="contact-socials" role="list" aria-label="Social media links">
          <a
            className="contact-social"
            role="listitem"
            href="https://github.com/Bala-techdev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <span className="contact-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.4 6.9 9.7.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1 3 .8.1-.7.4-1 .7-1.2-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.2 6.9-9.7C22 6.6 17.5 2 12 2Z" />
              </svg>
            </span>
            <span>GitHub</span>
          </a>

          <a
            className="contact-social"
            role="listitem"
            href="https://linkedin.com/in/BALA"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <span className="contact-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4.9 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.3 8.9h3.2V21H3.3V8.9Zm5.2 0h3.1v1.7h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.3V21h-3.2v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H8.5V8.9Z" />
              </svg>
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            className="contact-social"
            role="listitem"
            href="mailto:balatkm2007@gmail.com"
            aria-label="Email Bala"
          >
            <span className="contact-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2 .3v.4l7 4.8 7-4.8v-.4a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.9-6.4 4.3a1 1 0 0 1-1.2 0L5 9.7v7.8c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V9.7Z" />
              </svg>
            </span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
