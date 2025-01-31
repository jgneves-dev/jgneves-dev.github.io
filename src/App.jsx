import React from 'react';
import { Navigation } from './components/Layout/Navigation';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { ContactForm } from './components/Contact/ContactForm';
import { Footer } from './components/Layout/Footer';
import styles from './App.module.css';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Career from './components/Career/Career';

const App = () => {
  return (
    <div className={styles.portfolio}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills/>
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
