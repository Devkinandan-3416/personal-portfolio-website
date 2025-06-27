import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython, FaDatabase, FaNetworkWired, FaUsers, FaRegClock, FaProjectDiagram } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiExpress, SiBootstrap, SiTailwindcss, SiEjs, SiPostman, SiCplusplus } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import "../stylesheets/Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus className="cpp-color" /> },
      { name: "Java", icon: <FaJava className="java-color" /> },
      { name: "Python", icon: <FaPython className="python-color" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="js-color" /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="react-color" /> },
      { name: "HTML5", icon: <FaHtml5 className="html-color" /> },
      { name: "CSS3", icon: <FaCss3Alt className="css-color" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="bootstrap-color" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="tailwind-color" /> },
      { name: "EJS", icon: <SiEjs className="ejs-color" /> },
      { name: "Responsive Design", icon: <FaProjectDiagram className="figma-color" /> },
      { name: "Cross-Browser Compatibility", icon: <FaProjectDiagram className="figma-color" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="node-color" /> },
      { name: "Express.js", icon: <SiExpress className="express-color" /> },
      { name: "RESTful APIs", icon: <SiExpress className="express-color" /> },
      { name: "Authentication (JWT)", icon: <FaRegClock className="pm-color" /> },
      { name: "Socket.io (Real-Time Apps)", icon: <FaRegClock className="pm-color" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="mongodb-color" /> },
      { name: "MySQL", icon: <SiMysql className="mysql-color" /> },
      { name: "Database Design", icon: <FaDatabase className="db-color" /> },
      { name: "CRUD Operations", icon: <FaDatabase className="db-color" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="git-color" /> },
      { name: "Postman", icon: <SiPostman className="postman-color" /> },
      { name: "npm", icon: <FaNodeJs className="node-color" /> },
      { name: "VS Code", icon: <DiVisualstudio className="vscode-color" /> },
    ],
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FaProjectDiagram className="figma-color" /> },
      { name: "OOP", icon: <FaJava className="java-color" /> },
      { name: "DBMS", icon: <FaDatabase className="db-color" /> },
      { name: "Computer Networks", icon: <FaNetworkWired className="network-color" /> },
      { name: "Operating Systems", icon: <FaRegClock className="pm-color" /> },
    ],
  },
  {
    title: "Interpersonal Skills",
    skills: [
      { name: "Communication", icon: <FaUsers className="team-color" /> },
      { name: "Project Management", icon: <FaRegClock className="pm-color" /> },
      { name: "Problem Solving", icon: <FaProjectDiagram className="figma-color" /> },
      { name: "Teamwork", icon: <FaUsers className="team-color" /> },
      { name: "Time Management", icon: <FaRegClock className="pm-color" /> },
      { name: "Adaptability", icon: <FaProjectDiagram className="figma-color" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map(({ title, skills }, idx) => (
            <motion.div
              className="skills-category"
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <h3>{title}</h3>
              <ul className="skills-list">
                {skills.map(({ name, icon }) => (
                  <li key={name} className="skill-row">
                    <span className="skill-icon">{icon}</span>
                    <span className="skill-name">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}