import { motion } from "framer-motion";
import { FaFileDownload, FaEye } from "react-icons/fa";
import "../stylesheets/Resume.css";

const keySkills = [
  "Full Stack Web Development (MERN Stack)",
  "React.js & Redux",
  "Node.js & Express.js",
  "MongoDB & SQL",
  "RESTful APIs & Integration",
  "Data Structures & Algorithms",
  "Problem Solving (400+ LeetCode, 5★ HackerRank)",
  "Version Control (Git, GitHub)",
  "Responsive & Accessible UI/UX"
];

const experienceSummary = [
  "Developed and deployed multiple full-stack MERN applications with real-world features such as authentication, dashboards, and APIs.",
  "Led and collaborated on academic projects, managing teams and delivering solutions under tight deadlines.",
  "Consistently practiced coding and problem-solving, achieving 400+ LeetCode problems and 5-star HackerRank rating."
];

const educationSummary = [
  "B.E. in Computer Science & Engineering, Chandigarh University, Mohali, Punjab (Aug 2022 – Aug 2026) | CGPA: 7.7/10",
  "Senior Secondary (CBSE, Non-Medical Stream), D.A.V. Centenary Public School, Rohtak, Haryana (Apr 2021 – Apr 2022) | 77.4% | Physics, Chemistry, Mathematics, English, Information Practices",
  "Secondary (CBSE, X), D.A.V. Centenary Public School, Rohtak, Haryana (Apr 2019 – Apr 2020) | 88.8%"
];

const resumeUrl = "https://drive.google.com/file/d/1JYEobvcpU7WK0e11oUr3Arq-pavkwD3B/view?usp=drive_link";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <motion.h2
          className="resume-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Resume
        </motion.h2>
        <motion.p
          className="resume-desc"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Download my latest resume for a detailed overview of my technical skills, project experience, and education.
        </motion.p>

        <motion.div
          className="resume-actions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <a
            href="/Documents/Full Stack Web Developer(MERN)_Resume.pdf"
            className="resume-download"
            download="Resume_Devkinandan_Garg.pdf"
          >
            <FaFileDownload /> Download Resume (PDF)
          </a>
          <a
            href={resumeUrl}
            className="resume-view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEye /> View Resume
          </a>
        </motion.div>

        <motion.div
          className="resume-section-sub"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="resume-subsection">
            <h3>Key Skills</h3>
            <ul>
              {keySkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="resume-subsection">
            <h3>Experience Highlights</h3>
            <ul>
              {experienceSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="resume-subsection">
            <h3>Education</h3>
            <ul>
              {educationSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}