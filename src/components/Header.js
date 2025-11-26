import React from 'react';

function Header() {
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
            block: 'start'
         });
        }
}
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <a href="#hero"
                    onClick={(e) => handleNavClick(e, 'hero')}
                    className="logo-link">
                        <h1>KeAndre's Digital Workshop</h1>
                    </a>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <a href="#about" 
                            onClick={(e) => handleNavClick(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects"
                            onClick={((e) => handleNavClick(e, 'projects'))}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills"
                            onClick={(e) => handleNavClick(e, 'skills')}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
)};

export default Header;