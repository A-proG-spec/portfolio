import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
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

        <form className="contact-form">
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
            <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;