import React from 'react';

function ProjectsCards({ project }) {
  const isComingSoon = project.status === 'coming-soon';

  return (
    <article className={`project-card ${isComingSoon ? 'coming-soon' : ''}`}>
      {/* Project Image */}
      <div className="project-image-container">
        {project.image ? (
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className="project-image"
          />
        ) : (
          // Placeholder for projects without images
          <div className="project-image-placeholder">
            <span className="placeholder-icon">🚀</span>
            <span className="placeholder-text">Coming Soon</span>
          </div>
        )}
        {project.featured && !isComingSoon && (
          <span className="featured-badge">Featured</span>
        )}
        {isComingSoon && (
          <span className="coming-soon-badge">Coming Soon</span>
        )}
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technology Stack */}
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}

        {/* Expected Date for Coming Soon Projects */}
        {isComingSoon && project.expectedDate && (
          <p className="expected-date">Expected: {project.expectedDate}</p>
        )}

        {/* Action Links - Show only for completed projects */}
        {!isComingSoon ? (
          <div className="project-links">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live-demo"
            >
              Live Demo →
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              View Code →
            </a>
          </div>
        ) : (
          <div className="project-links coming-soon-links">
            <span className="coming-soon-text">🚀 Currently in development</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectsCards;