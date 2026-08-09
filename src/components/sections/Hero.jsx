import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';
import profileImage from '../../assets/file_00000000635881f4be6321195f704a7e.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const imageRef = useRef(null);
  const rightRef = useRef(null);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Happy Clients' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const image = imageRef.current;
    const right = rightRef.current;

    if (!section || !left || !image || !right) return;

    // Get all child elements of left column
    const leftChildren = left.querySelectorAll('.hero-animated');
    const statItems = right.querySelectorAll('.hero-stat');

    // Create timeline for hero fly-away
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        markers: false,
      },
    });

    // Left column flies UP and fades
    tl.to(leftChildren, {
      y: -150,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
    }, 0);

    // Image scales down and flies LEFT
    tl.to(image, {
      x: -200,
      scale: 0.6,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      rotation: -10,
    }, 0);

    // Stats fly RIGHT and fade
    tl.to(statItems, {
      x: 200,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: 'power2.out',
    }, 0);

    // Background color shifts
    tl.to(section, {
      backgroundColor: '#FFFFFF',
      duration: 0.8,
      ease: 'power1.out',
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
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column - Content */}
          <div className="hero-left" ref={leftRef}>
            <div className="hero-brand hero-animated">
              <span className="dot"></span>
              ANTENEH WONDWOSEN
            </div>

            <p className="hero-greeting hero-animated">Hey. I'm Anteneh,</p>

            <h1 className="hero-name hero-animated">ANTENEH</h1>

            <div className="hero-title-line hero-animated">
              <span className="hero-title-bold">A Fullstack</span>
              <span className="hero-title-serif">&amp; Product</span>
              <span className="hero-title-bold">DEVELOPER</span>
            </div>

            <p className="hero-description hero-animated">
              Building scalable web applications with the MERN stack. 
              Software Engineering student at AASTU.
            </p>

            <div className="hero-cta hero-animated">
              <button 
                className="btn-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="hero-center">
            <div className="hero-image-wrapper" ref={imageRef}>
              <div className="hero-image">
                <img src={profileImage} alt={portfolioData.name} />
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="hero-right" ref={rightRef}>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="hero-stat-number">{stat.number}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;