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

import useMousePosition from 'hooks/useMousePosition';

function App() {
  const [ref, mousePosition] = useMousePosition();

  React.useEffect(() => {
  }, [mousePosition]);

  return (
    <div className="app" ref={ref}>
      <Fonts />
      <main>
        <Hero />
        <About />
        <Work />
        <SideProjects />
        <Contact />
        <Cursor mousePosition={mousePosition} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
