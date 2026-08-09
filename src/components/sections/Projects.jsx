import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const cards = grid.querySelectorAll('.project-card');

    if (!cards.length) return;

    // Set initial state - hidden to the right
    gsap.set(cards, {
      opacity: 0,
      x: 200,
      scale: 0.9,
      rotation: 5,
    });

    // Create timeline for projects sliding in from right
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });

    // Cards slide in from right with cascade effect
    tl.to(cards, {
      opacity: 1,
      x: 0,
      scale: 1,
      rotation: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Also animate project links with slight delay
    const links = section.querySelectorAll('.project-link');
    if (links.length) {
      gsap.set(links, {
        opacity: 0,
        x: 20,
      });

      tl.to(links, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

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
        <div className="projects-grid" ref={gridRef}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span></span>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
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