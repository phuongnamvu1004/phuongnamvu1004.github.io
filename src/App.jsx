import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import colors from './config/colors';
import './styles/colors.css';

export default function App() {
  return (
    <div
      className="font-sans antialiased"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
        // expose CSS variables to children
        ['--color-background']: colors.background,
        ['--color-card']: colors.card,
        ['--color-text-primary']: colors.textPrimary,
        ['--color-text-secondary']: colors.textSecondary,
        ['--color-accent']: colors.accent,
        ['--color-light']: colors.light,
        ['--color-lighter']: colors.lighter,
        ['--color-muted']: colors.muted,
        ['--color-blue']: colors.blue,
        ['--color-muted-2']: colors.muted2,
      }}
    >
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
