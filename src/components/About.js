import React from 'react';
import useScrollAnimation from '../Hooks/useScrollAnimation';

function About() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 
                    ref={titleRef}
                    className={`section-title slide-down ${titleVisible ? 'visible' : ''}`}
                >
                    Who is KeAndre
                </h2>
                <div 
                    ref={contentRef}
                    className={`about-content slide-up ${contentVisible ? 'visible' : ''}`}
                >
                    <p>
                        I'm a frontend developer focused on building modular, accessible 
                        interfaces with strategic UX and polished performance. I specialize 
                        in React, semantic HTML, and test-driven development - crafting user 
                        journeys that scale and convert.
                    </p>
                    <p>
                        I built this portfolio from scratch using React, implementing custom 
                        scroll animations and accessible design patterns to create a smooth, 
                        engaging experience. Every project I build reflects my commitment to 
                        clean code, thoughtful UX, and technical excellence.
                    </p>
                    <p>
                        Long-term, I'm working toward becoming a senior frontend engineer 
                        or software developer, leading impactful projects that blend 
                        technical excellence with real-world usability.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;