import React from 'react';
import '../styles/common.scss'

import Hero from './Hero';
import About from './About';
import Work from './Work';
import SideProjects from './SideProjects';
import Contact from './Contact';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Work />
        <SideProjects />
      </main>
      <footer>
        <Contact />
      </footer>
      </>
  );
}

export default App;
