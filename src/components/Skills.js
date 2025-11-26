import React from 'react';
import useScrollAnimation from '../Hooks/useScrollAnimation';

function Skills() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation({ threshold: 0.2 });

    const skills = [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Git",
        "GitHub",
        "Responsive Design",
        "REST APIs",
        "Figma"
    ];

    return (
        <section id="skills" className="skills-section">
            <div 
                ref={headerRef}
                className={`slide-down ${headerVisible ? 'visible' : ''}`}
            >
                <h2>Technical Skills</h2>
                <p>Technologies I use to build web applications</p>
            </div>

            <div 
                ref={badgesRef}
                className={`skills-badges stagger-children ${badgesVisible ? 'visible' : ''}`}
            >
                {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;