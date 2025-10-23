import { MapPin } from 'lucide-react';
import './style.css';
 
export default function TimelineItem({ job, index }) {
  const isRightSide = index % 2 === 0;

  return (
    <div className={`timeline-root ${isRightSide ? 'timeline-right' : ''}`}>
      <div className="timeline-dot-wrapper">
        <div className="timeline-dot" />
      </div>

      <div className="timeline-card">
        <span className="timeline-date">{job.date}</span>
        <h3 className="timeline-role">{job.role}</h3>
        <h4 className="timeline-company">{job.company}</h4>
        <div className="timeline-location">
          <MapPin className="timeline-pin" />
          {job.location}
        </div>
        <p className="timeline-desc">{job.description}</p>
      </div>
    </div>
  );
}
