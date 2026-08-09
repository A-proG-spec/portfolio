import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces using React, Next.js, CSS3, and Tailwind CSS with a focus on performance and user experience.',
      icon: '⟨/⟩'
    },
    {
      title: 'Backend Development',
      description: 'Developing scalable server-side applications using Node.js, Express.js, MongoDB, PostgreSQL, and NestJS with robust API design and database optimization.',
      icon: '⚙'
    },
    {
      title: 'Full Stack Development (MERN)',
      description: 'End-to-end web development using MongoDB, Express.js, React, and Node.js — building complete applications from database to user interface.',
      icon: '❖'
    },
    {
      title: 'Full Stack Development (Next.js)',
      description: 'Building modern full-stack applications with Next.js, combining server-side rendering, API routes, and React for seamless user experiences.',
      icon: '▲'
    },
    {
      title: 'System Design',
      description: 'Designing scalable, maintainable system architectures including microservices, database design, caching strategies, and cloud infrastructure planning.',
      icon: '⎘'
    },
    {
      title: 'Database Design & Optimization',
      description: 'Designing efficient database schemas, writing optimized queries, and implementing data modeling for MongoDB, PostgreSQL, and other databases.',
      icon: '⛁'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const items = grid.querySelectorAll('.service-item');

    if (!items.length) return;

    // Set initial state - hidden to the left
    gsap.set(items, {
      opacity: 0,
      x: -150,
    });

    // Create timeline for services sliding in from left
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });

    // Services slide in from left with wave cascade
    tl.to(items, {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Icons pop with bounce
    const icons = section.querySelectorAll('.service-icon');
    if (icons.length) {
      gsap.set(icons, {
        scale: 0,
        rotation: -20,
      });

      tl.to(icons, {
        scale: 1,
        rotation: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(2)',
      }, '-=0.4');
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
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            My <span>Services</span>
          </h2>
          <p className="section-subtitle">
            Full-stack development expertise across the entire technology spectrum — 
            from frontend to backend to system architecture.
          </p>
        </div>
        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;