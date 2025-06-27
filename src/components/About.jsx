import { motion } from "framer-motion";
import { FaNodeJs, FaUserGraduate, FaMapMarkerAlt, FaLanguage, FaLightbulb } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import "../stylesheets/About.css";

const aboutVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About <span className="about-gradient">Me</span>
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={1}
          >
            <p>
              Hi! I’m <span className="about-name">Devkinandan Garg</span>, a <span className="about-highlight">MERN Stack Developer</span> and Computer Science undergraduate at Chandigarh University. I specialize in building scalable, high-performance web applications and thrive on solving real-world challenges with clean, efficient code. My journey blends a strong foundation in data structures and algorithms with hands-on experience in full-stack projects and collaborative teamwork.
            </p>
          </motion.div>
          <motion.div
            className="about-facts"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={2}
          >
            <div className="about-fact">
              <FaMapMarkerAlt className="about-fact-icon" />
              <span>Location: Chandigarh, India</span>
            </div>
            <div className="about-fact">
              <FaLanguage className="about-fact-icon" />
              <span>Languages: English, Hindi</span>
            </div>
            <div className="about-fact">
              <FaLightbulb className="about-fact-icon" />
              <span>
                Hobbies &amp; Interests: Cricket, Badminton, Chess, Coding Challenges (LeetCode, HackerRank), Web Development
              </span>
            </div>
          </motion.div>
          <motion.div
            className="about-highlights-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={3}
          >
            <div className="about-highlight-card">
              <FaNodeJs className="about-highlight-icon node-color" />
              <div>
                <h4>MERN Stack</h4>
                <p>End-to-end web apps using MongoDB, Express, React, and Node.js.</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <SiMongodb className="about-highlight-icon mongodb-color" />
              <div>
                <h4>Database Design</h4>
                <p>Efficient data modeling with MongoDB &amp; MySQL.</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <GiBrain className="about-highlight-icon" />
              <div>
                <h4>Problem Solving</h4>
                <p>400+ LeetCode problems, 5-star HackerRank in Problem Solving.</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <FaUserGraduate className="about-highlight-icon" />
              <div>
                <h4>B.E. CSE, Chandigarh University</h4>
                <p>2022–2026 | CGPA: 7.7/10</p>
              </div>
            </div>
          </motion.div>
          <motion.p
            className="about-mission"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={4}
          >
            I’m passionate about continuous learning, open-source collaboration, and building technology that makes a real-world impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}