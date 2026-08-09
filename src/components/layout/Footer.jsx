import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-logo">Anteneh Wondwosen</span>
          <div className="footer-social">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={portfolioData.social.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;