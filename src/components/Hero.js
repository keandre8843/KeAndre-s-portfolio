import react from 'react';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
          Hi, I'm <span className="highlight">KeAndre</span>
        </h1>
        <h2 className="hero-subtitle">
          Frontend Developer building accessible, scalable web experiences
        </h2>
        <p className="hero-description">
          I specialize in React, semantic HTML, and test-driven development—crafting 
          user interfaces that convert and scale. Currently seeking frontend engineering 
          opportunities to build impactful products.
        </p>
        <div classname="hero-cta">
            <a href='#projects' className="btn-primary">View My Work</a>
            <a href='#contact' className="btn-secondary">Get In Touch</a>
        </div>
        <div className="hero-stats">
            <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passion</span>
            </div>
        </div>
            </div>
            
        </section>
    );
}

export default Hero;