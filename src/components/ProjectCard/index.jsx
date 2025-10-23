import { ExternalLink } from 'lucide-react';
import './style.css';

export default function ProjectCard({ project }) {
  return (
    <div className="pc-root">
      <div className="pc-content">
        <h3 className="pc-title">{project.title}</h3>
        <p className="pc-desc">{project.description}</p>
        <div className="pc-tags">
          {project.tags.map(tag => (
            <span key={tag} className="pc-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="pc-footer">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="pc-link">
          View Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
