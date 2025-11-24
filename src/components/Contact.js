import react from 'react';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">I'm currently seeking frontend development opportunities. 
          Let's build something amazing together!</p>

          <div className="contact-links">
            <a href="mailto:keandresadler@gmail.com" className="contact-method">
                <span className="icon">📧</span>
                <div className="method-info">
                    <span className="method-label">Email </span>
                    <span className="method-value">keandresadler@gmail.com</span>
                </div>
            </a>
            <a 
            href="https://www.linkedin.com/in/keandre-sadler-b80161112/" 
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">💼</span>
            <div className="method-info">
              <span className="method-label">LinkedIn </span>
              <span className="method-value">Connect with me</span>
            </div>
          </a>
          <a 
            href="https://github.com/keandre8843" 
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">💻</span>
            <div className="method-info">
              <span className="method-label">GitHub </span>
              <span className="method-value">View my code</span>
            </div>
          </a>
          <a 
            href="/resume.pdf" 
            className="contact-method"
            download
          >
            <span className="icon">📄</span>
            <div className="method-info">
              <span className="method-label">Resume </span>
              <span className="method-value">Download PDF</span>
            </div>
          </a>
          </div>
            </div>
            </section>
    );
}

export default Contact;