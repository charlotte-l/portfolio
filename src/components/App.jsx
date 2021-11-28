import React from 'react';
import '../styles/common.scss'

import Hero from './Hero';
import About from './About';
import Work from './Work';
import SideProjects from './SideProjects';
import Contact from './Contact';
import Footer from './Footer';
import Cursor from './Cursor';

import Fonts from "../@chakra-ui/components/fonts";

function App() {
  return (
    <div className="app">
      <Fonts />
      <main>
        <Hero />
        <About />
        <Work />
        <SideProjects />
        <Contact />
        <Cursor />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
