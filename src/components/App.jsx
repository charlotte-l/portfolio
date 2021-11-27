import React from 'react';
import '../styles/common.scss'

import Hero from './Hero';
import About from './About';
import Work from './Work';
import SideProjects from './SideProjects';
import Contact from './Contact';
import Footer from './Footer';

import Fonts from "../@chakra-ui/components/fonts";

function App() {
  return (
    <>
      <Fonts />
      <main>
        <Hero />
        <About />
        <Work />
        <SideProjects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
  );
}

export default App;
