import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../stylesheets/Projects.css";

const projects = [
  // Major Projects
  {
    title: "Chess Website",
    description: "A fully interactive chess platform featuring move validation, multiplayer support, and elegant UI. Built with React and Node.js.",
    tech: ["React", "Node.js", "Socket.io", "CSS"],
    demo: "#",
    github: "https://github.com/devkinandan-3416",
    image: "/images/chess.jpg",
    category: "Major"
  },
  {
    title: "E-commerce Web App (Myntra Clone)",
    description: "A full-stack e-commerce platform with user authentication, shopping cart, payment integration, and admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "#",
    github: "https://github.com/devkinandan-3416",
    image: "/images/myntra-clone.png",
    category: "Major"
  },
  {
    title: "Spotify Clone",
    description: "A music streaming web app featuring playlist management, real-time playback, and Spotify API integration.",
    tech: ["React", "Redux", "Spotify API", "CSS"],
    demo: "https://devspotify.vercel.app",
    github: "https://github.com/devkinandan-3416",
    image: "/images/spotify-clone.webp",
    category: "Major"
  },
  {
    title: "Social Media Web App",
    description: "A scalable social media platform with authentication, real-time posts, and modern UI/UX.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "https://connect-social-media-web-app.vercel.app/",
    github: "https://github.com/devkinandan-3416",
    image: "/images/social-media.jpg",
    category: "Major"
  },
  {
    title: "Portfolio Web App",
    description: "My personal portfolio built with React and Framer Motion to showcase my projects, skills, and resume.",
    tech: ["React", "Framer Motion", "CSS"],
    demo: "https://devkinandangarg-portfolio.vercel.app/",
    github: "https://github.com/devkinandan-3416",
    image: "/images/portfolio.jpg",
    category: "Major"
  },
  // Minor Projects
  {
    title: "Calculator App",
    description: "A responsive calculator with advanced functions and keyboard support.",
    tech: ["React", "CSS"],
    demo: "https://dev-calculator-react-app.vercel.app/",
    github: "https://github.com/devkinandan-3416",
    image: "/images/calculator.png",
    category: "Minor"
  },
  {
    title: "Todo App",
    description: "A minimalistic todo app with persistent storage and intuitive UI.",
    tech: ["React", "LocalStorage", "CSS"],
    demo: "https://todo-react-web-app.vercel.app/",
    github: "https://github.com/devkinandan-3416",
    image: "/images/todo-list.png",
    category: "Minor"
  },
  {
    title: "Rock Paper Scissors Game",
    description: "A classic game with animations and score tracking.",
    tech: ["React", "CSS"],
    demo: "#",
    github: "https://github.com/devkinandan-3416",
    image: "/images/rock-paper-scissors.jpg",
    category: "Minor"
  },
  {
    title: "Tic Tac Toe Game",
    description: "A multiplayer tic tac toe game with AI opponent and modern design.",
    tech: ["React", "CSS"],
    demo: "#",
    github: "https://github.com/devkinandan-3416",
    image: "/images/tic-tac-toe.webp",
    category: "Minor"
  }
];

const categories = ["All", "Major", "Minor"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Browse my major and minor projects. Use the filter to view featured work or explore smaller apps that demonstrate my learning journey and versatility.
        </motion.p>
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 * idx }}
            >
              <div className="project-image-wrapper">
                <img
                  src={proj.image}
                  alt={proj.title + " screenshot"}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span className="project-tech-item" key={i}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}