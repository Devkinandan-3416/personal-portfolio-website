import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "../stylesheets/Hero.css";

// Simple typing animation hook
function useTypingAnimation(words, typingSpeed = 150, pauseDuration = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const roles = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "Aspiring Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const typedText = useTypingAnimation(roles);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="hero-welcome"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
          >
            Welcome to my Portfolio
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            I'm <span className="gradient-text">Devkinandan Garg</span>
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            {typedText}
            <span className="typing-cursor">|</span>
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          >
            MERN Stack developer and Computer Science undergrad at Chandigarh University, experienced in building scalable, user-centric web applications. Strong foundation in data structures, algorithms, and backend integration. Proven track record with real-time multiplayer apps and e-commerce platforms. Eager to solve real-world problems through clean, efficient code and collaborative teamwork.
          </motion.p>

          {/* Circular Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://linkedin.com/in/devkinandangarg"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/devkinandan-3416"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/devkinandangarg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://codolio.com/profile/Devkinandan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Codestudio"
            >
              <FaEarlybirds />
            </a>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
          >
            <a href="mailto:gargdevji3416@gmail.com" className="hero-button">
              <FaEnvelope /> Contact Me
            </a>
            <a
              href="/Documents/Full Stack Web Developer(MERN)_Resume.pdf"
              download="Resume_Devkinandan_Garg.pdf"
              className="hero-button secondary"
            >
              <FaFileDownload /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Floating profile image */}
        <motion.div
          className="hero-image-container"
          initial={{ y: 0 }}
          animate={{ y: -16 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <div className="image-wrapper">
            <img
              src="/images/MyPhoto.jpg"
              alt="Devkinandan Garg"
              className="hero-image"
              draggable="false"
            />
            <div className="image-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}