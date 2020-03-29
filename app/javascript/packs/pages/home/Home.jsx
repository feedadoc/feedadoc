import React from "react";
import SplitSection from "./SplitSection";
import Hero from "./Hero";
import VolunteerCallout from "./VolunteerCallout";
import HelpCallout from "./HelpCallout";
import About from "./About";
import Contributors from "./Contributors";

const Home = () => (
  <>
    <Hero />
    <SplitSection />
    <VolunteerCallout />
    <HelpCallout />
    <About />
    <Contributors />
  </>
);

export default Home;
