import React from "react";
import SplitSection from "./SplitSection";
import Hero from "./Hero";
import VolunteerCallout from "./VolunteerCallout";
import HelpCallout from "./HelpCallout";
import About from "./About";
import Contributors from "./Contributors";
import Volunteers from "./Volunteers";
import Press from "./Press";

const Home = () => (
  <>
    <Hero />
    <SplitSection />
    <VolunteerCallout />
    <Volunteers />
    <HelpCallout />
    <Press />
    <About />
    <Contributors />
  </>
);

export default Home;
