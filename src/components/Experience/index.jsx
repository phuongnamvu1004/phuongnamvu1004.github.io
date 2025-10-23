import { useEffect, useRef, useState } from 'react';
import TimelineItem from '../TimelineItem';
import { EXPERIENCE } from '../../data/siteData';
import './style.css';

export default function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return undefined;

    let rafId = null;

    const update = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = rect.height;

      // progress from 0 -> 1 while the timeline moves through the viewport
      const raw = (window.scrollY - containerTop + window.innerHeight) / (containerHeight + window.innerHeight);
      const progress = Math.min(Math.max(raw, 0), 1);

      const line = el.querySelector('.experience-line');
      if (line) {
        line.style.setProperty('--progress', `${progress * 100}%`);
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // run once to initialize
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>

        <div ref={timelineRef} className="experience-timeline">
          <div className="experience-line"><div className="experience-line-fill" /></div>
          <div className="experience-items">
            {EXPERIENCE.map((job, index) => (
              <TimelineItem
                key={index}
                job={job}
                index={index}
                open={openIndex === index}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
