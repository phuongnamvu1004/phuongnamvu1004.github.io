import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './style.css';

export default function SkillCategory({ category, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skill-root">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="skill-button"
      >
        <span>{category}</span>
        {isOpen ? (
          <ChevronDown className="skill-icon" />
        ) : (
          <ChevronRight className="skill-icon" />
        )}
      </button>
      <div className={`skill-panel ${isOpen ? 'skill-open' : 'skill-closed'}`}>
        <ul className="skill-list">
          {list.map(skill => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
