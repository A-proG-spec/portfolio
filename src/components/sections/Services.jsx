import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces using React, Next.js, CSS3, and Tailwind CSS.',
      icon: '</>'
    },
    {
      title: 'Backend Development',
      description: 'Developing scalable server-side apps using Node.js, Express.js, MongoDB, and NestJS.',
      icon: '⚙'
    },
    {
      title: 'Full Stack (MERN)',
      description: 'End-to-end web development using MongoDB, Express.js, React, and Node.js.',
      icon: '❖'
    },
    {
      title: 'Full Stack (Next.js)',
      description: 'Building modern full-stack apps with Next.js combining SSR, API routes, and React.',
      icon: '▲'
    },
    {
      title: 'System Design',
      description: 'Designing scalable, maintainable architectures including microservices and caching strategies.',
      icon: '⎘'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient schemas, optimized queries, and data modeling for MongoDB & PostgreSQL.',
      icon: '⛁'
    }
  ];

  // Duplicate the array for the infinite scroll effect
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            My Services
          </h2>
          <p className="section-subtitle">
            Full-stack development expertise across the entire technology spectrum — 
            from frontend to backend to system architecture.
          </p>
        </div>
        
        <div className="services-scroll-wrapper">
          <div className="services-scroll-track">
            {duplicatedServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;