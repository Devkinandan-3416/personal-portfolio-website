import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "../stylesheets/Contact.css";

const SERVICE_ID = "service_ssy9l7o";
const TEMPLATE_ID = "template_po2o0v8";
const PUBLIC_KEY = "Nt_42I7US1TE7d2iD";

const EMAIL = "gargdevji3416@gmail.com";
const LINKEDIN = "https://linkedin.com/in/devkinandan-garg";
const GITHUB = "https://github.com/devkinandan3416";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setError("");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setSubmitted(true);
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => setSubmitted(false), 3500);
          e.target.reset();
        },
        () => {
          setError("Failed to send message. Please try again later.");
          toast.error('Failed to send message. Please try again later.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Interested in collaborating, hiring, or just want to say hello? Fill out the form below or connect with me on LinkedIn and GitHub. I look forward to hearing from you!
        </motion.p>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <form
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <div className="form-row">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                autoComplete="off"
                aria-label="Your Name"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                autoComplete="off"
                aria-label="Your Email"
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                autoComplete="off"
                aria-label="Your Message"
              />
            </div>
            <button type="submit" className="contact-send" aria-label="Send Message">
              <LuSend /> Send Message
            </button>
            {submitted && (
              <div className="contact-success" role="status">
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="contact-error" role="alert">
                {error}
              </div>
            )}
          </form>

          <div className="contact-socials">
            <a href={`mailto:${EMAIL}`} className="contact-social-btn" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}