import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useBreakpointValue } from '@chakra-ui/react';

import '../styles/common.scss';

import Hero from './Hero';
import About from './About';
import Work from './Work';
import SideProjects from './SideProjects';
import Contact from './Contact';
import Footer from './Footer';
import Cursor from './common/Cursor';

import Fonts from '../@chakra-ui/components/fonts';

function App() {
  const showCursor = useBreakpointValue({ base: false, md: true });

  return (
    <LazyMotion features={domAnimation}>
      <Fonts />
      <main style={{ overflow: 'hidden' }}>
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
    </LazyMotion>
  );
}

export default App;
