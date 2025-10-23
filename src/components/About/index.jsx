import { useState, useEffect } from 'react';
import SkillCategory from '../SkillCategory';
import { SKILLS } from '../../data/siteData';
import './style.css';

export default function About() {
  const title = 'My name is Nam Vu';
  const name = 'Nam Vu';

  function TypingTitle({ text, highlight, speed = 80 }) {
    const [pos, setPos] = useState(0);

    useEffect(() => {
      if (pos < text.length) {
        const t = setTimeout(() => setPos(p => p + 1), speed);
        return () => clearTimeout(t);
      }
      return undefined;
    }, [pos, text.length, speed]);

    const displayed = text.slice(0, pos);
    const start = text.indexOf(highlight);
    const end = start + highlight.length;

    const before = displayed.slice(0, Math.max(0, Math.min(displayed.length, start)));
    const mid = displayed.length > start ? displayed.slice(start, Math.min(displayed.length, end)) : '';
    const after = displayed.length > end ? displayed.slice(end) : '';

    return (
      <h1 className="about-title" aria-live="polite">
        <span>{before}</span>
        <span className="about-accent">{mid}</span>
        <span>{after}</span>
        <span className="typing-cursor" aria-hidden="true" />
      </h1>
    );
  }

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <p className="about-intro">Hi,</p>
        <TypingTitle text={title} highlight={name} speed={80} />
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
