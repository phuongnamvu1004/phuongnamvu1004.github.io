import './style.css';

export default function Header() {
  return (
    <header className="header-root">
      <nav className="header-nav">
        <div className="header-brand">
          <a href="#">Nam Vu</a>
        </div>
        <div className="header-links">
          <a href="#about" className="header-link">About</a>
          <a href="#experience" className="header-link">Experience</a>
          <a href="#projects" className="header-link">Projects</a>
          <a href="#contact" className="header-link">Contact</a>
        </div>
      </nav>
    </header>
  );
}
