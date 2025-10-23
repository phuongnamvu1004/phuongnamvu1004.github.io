import './style.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}
