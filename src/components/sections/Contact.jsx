import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    // Get all form elements
    const formElements = form.querySelectorAll('input, textarea, button');
    const headerElements = section.querySelectorAll('.contact-header > *');

    // Set initial state - hidden with scale
    gsap.set(form, {
      opacity: 0,
      scale: 0.8,
      y: 50,
    });

    gsap.set(formElements, {
      opacity: 0,
      y: 30,
    });

    gsap.set(headerElements, {
      opacity: 0,
      y: 30,
    });

    // Create timeline for contact bounce in
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });

    // Header elements fade in
    tl.to(headerElements, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Form bounces in with elastic effect
    tl.to(form, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.2');

    // Form elements stagger in
    tl.to(formElements, {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.4');

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
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Available for <span>projects</span>
          </h2>
          <p className="section-subtitle">
            Share a few details, and I'll get back with a clear direction.
          </p>
        </div>

        <form className="contact-form" ref={formRef}>
          <div className="form-grid">
            <div className="form-left">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-right">
              <textarea rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;