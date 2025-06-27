import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers } from "react-icons/fa";
import "../stylesheets/Experience.css";

const experienceData = [
  {
    role: "Self-Employed Developer",
    company: "Personal Projects",
    period: "2023 – Present",
    description: "Designed and developed 5+ full-stack MERN applications with 100% project completion rate. Implemented features like user authentication, real-time updates, and responsive UI while maintaining clean, scalable code architecture.",
    icon: <FaLaptopCode className="exp-icon" />,
    achievements: [
      "Solved 400+ DSA problems on LeetCode/HackerRank",
      "Achieved 5-star rating in problem solving",
      "Maintained 100% code documentation coverage"
    ]
  },
  {
    role: "Team Lead & Full-Stack Developer",
    company: "Academic Projects | Chandigarh University",
    period: "2022 – 2025",
    description: "Led 3+ cross-functional teams in developing academic web applications from concept to deployment. Established agile workflows and code review processes that improved team productivity by 40%.",
    icon: <FaUsers className="exp-icon" />,
    achievements: [
      "Reduced project delivery time by 25% through task automation",
      "Implemented CI/CD pipelines for academic projects",
      "Mentored 5+ junior developers in web technologies"
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Professional Experience
        </motion.h2>
        <div className="experience-list">
          {experienceData.map((item, idx) => (
            <motion.div
              className="experience-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              {item.icon}
              <div className="exp-main">
                <div className="exp-role">{item.role}</div>
                <div className="exp-company">{item.company}</div>
                <div className="exp-desc">{item.description}</div>
                <ul className="exp-achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-period-badge">{item.period}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}