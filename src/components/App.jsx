import React from 'react';
import '../styles/common.scss'

import Hero from './Hero';
import About from './About';
import Work from './Work';
import SideProjects from './SideProjects';
import Contact from './Contact';
import Footer from './Footer';
import Cursor from './common/Cursor';

import { useBreakpointValue } from '@chakra-ui/react'
import Fonts from "../@chakra-ui/components/fonts";

function App() {
  const showCursor = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <Fonts />
      <main style={{overflow: 'hidden'}}>
        <Hero />
        <About />
        <Work />
        <SideProjects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      {showCursor && <Cursor />}
    </>
  );
}

export default App;
