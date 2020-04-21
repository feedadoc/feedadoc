import React from "react";
import SplitSection from "./SplitSection";
import Hero from "./Hero";
import VolunteerCallout from "./VolunteerCallout";
import HelpCallout from "./HelpCallout";
import About from "./About";
import Contributors from "./Contributors";
import Volunteers from "./Volunteers";

const Home = () => (
  <>
    <Hero />
    <SplitSection />
    <VolunteerCallout />
    <Volunteers />
    <HelpCallout />
    <About />
    <Contributors />
  </>
);

export default Home;
