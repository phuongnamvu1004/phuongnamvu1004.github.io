import SkillCategory from '../SkillCategory';
import { SKILLS } from '../../data/siteData';
import './style.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <p className="about-intro">Hi,</p>
        <h1 className="about-title">
          My name is <span className="about-accent">Nam Vu</span>
        </h1>
        <p className="about-desc">
          I am a backend engineer passionate about building scalable, reliable, and efficient systems. 
          I thrive on solving complex distributed systems challenges and enjoy working with modern 
          cloud-native technologies to bring robust solutions to life.
        </p>
      </div>

      <div className="about-skills">
        <h3 className="about-skills-title">Technical Skills</h3>
        <div className="about-skills-grid">
          {Object.entries(SKILLS).map(([category, list]) => (
            <SkillCategory key={category} category={category} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
}
