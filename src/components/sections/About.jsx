import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    // Get all direct children of the grid
    const gridChildren = grid.children;

    // First, set initial state - hidden behind
    gsap.set(gridChildren, {
      opacity: 0,
      y: 80,
      scale: 0.85,
    });

    // Create timeline for About emerging from behind
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 1.5,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    // About emerges from behind - like a curtain lift
    tl.to(gridChildren, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.12,
      duration: 1.2,
      ease: 'power3.out',
    }, 0.2);

    // Also animate skill tags with bounce
    const skillTags = section.querySelectorAll('.skill-tag');
    if (skillTags.length) {
      gsap.set(skillTags, {
        opacity: 0,
        scale: 0.8,
      });

      tl.to(skillTags, {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.5');
    }

    // Parallax effect on scroll (subtle float)
    tl.to(gridChildren, {
      y: -20,
      duration: 2,
      ease: 'none',
    }, 0);

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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid" ref={gridRef}>
          {/* Left Column - Label & Title */}
          <div className="about-left">
            <span className="about-label">ABOUT ME</span>
            <h2 className="about-title">
              Crafting Meaningful Brands &amp; Intuitive Experiences
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="about-right">
            <p className="about-greeting">
              Hey, I'm Anteneh, a Fullstack Developer passionate about creating scalable and user-friendly digital experiences.
            </p>
            
            <p className="about-bio">
              With a keen eye for clean code and a deep understanding of user behavior, I build applications that not only perform well but also resonate with users. Whether it's developing a full-stack application from the ground up or optimizing a digital product for seamless usability, I blend strategy, creativity, and functionality to bring ideas to life. Let's collaborate and make something extraordinary.
            </p>

            <div className="about-cta">
              <button 
                className="btn-secondary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together →
              </button>
            </div>

            {/* Skills */}
            <div className="about-skills">
              <span className="about-skills-label">Skills</span>
              <div className="about-skills-grid">
                {portfolioData.about.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;