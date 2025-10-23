import TimelineItem from '../TimelineItem';
import { EXPERIENCE } from '../../data/siteData';
import './style.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>

        <div className="experience-timeline">
          <div className="experience-line" />
          <div className="experience-items">
            {EXPERIENCE.map((job, index) => (
              <TimelineItem key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
