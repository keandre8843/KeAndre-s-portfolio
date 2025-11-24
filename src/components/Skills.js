import react from 'react';

function Skills() {
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
            <h2>Technical Skills</h2>
            <p>Technologies I use to build web applications</p>

            <div className="skills-badges">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                        {skill}
                    </span>
                ))}
            </div>
            </section>
    )
}

export default Skills;