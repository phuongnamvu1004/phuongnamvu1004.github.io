import { Mail, Linkedin, Github, Code } from 'lucide-react';
import './style.css';

const ContactIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="contact-icon"
  >
    <Icon className="h-6 w-6" />
  </a>
);

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-copy">I'm always open to discussing new opportunities, interesting projects, or just chatting about technology. Feel free to reach out!</p>

        <div className="contact-actions">
          <a
            href="mailto:your.email@example.com"
            className="contact-cta"
          >
            <Mail className="h-5 w-5" />
            <span className="ml-2">Email Me</span>
          </a>

          <div className="contact-icons">
            <ContactIcon href="https://linkedin.com/in/your-profile" Icon={Linkedin} label="LinkedIn" />
            <ContactIcon href="https://github.com/your-username" Icon={Github} label="GitHub" />
            <ContactIcon href="https://leetcode.com/your-username" Icon={Code} label="LeetCode" />
          </div>
        </div>
      </div>
    </section>
  );
}
