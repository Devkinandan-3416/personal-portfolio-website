import "../stylesheets/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
        <div className="footer-name">
          &copy; {new Date().getFullYear()} Devkinandan Garg. All Rights Reserved.
        </div>
        <div className="footer-tagline">
          Building digital experiences with passion, precision, and purpose.
        </div>
        <div className="footer-links">
          <a
            href="mailto:gargdevji3416@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/devkinandan-garg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/devkinandan-3416"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}