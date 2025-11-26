import React, { useState } from 'react';
import { projects } from '../data/ProjectsData';
import ProjectsCards from './ProjectsCards';
import useScrollAnimation from '../Hooks/useScrollAnimation';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: filterRef, isVisible: filterVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

    const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.technologies.includes(activeFilter));
    
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div ref={headerRef} className={`slide-down ${headerVisible ? 'visible' : ''}`}>
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Building scalable, accessible web applications with modern technologies</p>
                </div>

                {projects.length > 1 && (
                    <div 
                        ref={filterRef}
                        className={`filter-buttons slide-up ${filterVisible ? 'visible' : ''}`}
                    >
                        <button 
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All Projects
                        </button>
                        {allTechnologies.map((tech, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                                onClick={() => setActiveFilter(tech)}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                )}

                <div 
                    ref={gridRef}
                    className={`projects-grid stagger-children ${gridVisible ? 'visible' : ''}`}
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectsCards key={project.id} project={project} />
                        ))
                    ) : (
                        <p className="no-projects">No projects found with that technology.</p>
                    )}
                </div>

                {projects.length === 1 && (
                    <div className="coming-soon">
                        <p>More projects coming soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;