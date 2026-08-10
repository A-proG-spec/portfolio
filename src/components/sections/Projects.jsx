import { useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Projects I've <span>Built</span>
          </h2>
          <p className="section-subtitle">
            A collection of full-stack applications built with the MERN stack and modern technologies.
          </p>
        </div>
        <div className="projects-shelf">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-shelf-item ${hoveredIndex === index ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="project-shelf-content">
                <div className="project-shelf-glow"></div>
                <span className="project-shelf-category">{project.category}</span>
                <h3 className="project-shelf-title">{project.title}</h3>
                <p className="project-shelf-description">{project.description}</p>
                <a href={project.github || project.link || '#'} target="_blank" rel="noopener noreferrer" className="project-shelf-link">
                  View Project 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;