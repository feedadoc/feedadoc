import React from 'react';
import SplitSection from './SplitSection';
import Hero from './Hero';
import VolunteerCallout from './VolunteerCallout';
import HelpCallout from './HelpCallout';
import About from './About';
import Contributors from './Contributors';
import Contact from './Contact';

const Home = () => (
  <>
    <Hero />
    <SplitSection />
    <VolunteerCallout />
    <HelpCallout />
    <About />
    <Contributors />
    <Contact />
  </>
);

export default Home;
