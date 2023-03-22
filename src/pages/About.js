import React from "react";
import Banner from "../components/Banner";
import CollapseCard from "../components/Collapse";
import Collapse from "../data/Collapse.json";

const About = () => {
  return (
    <div className="aboutCard">
      <Banner title="" classBanner="about_banner" />
      <CollapseCard collapse={Collapse} />
    </div>
  );
};

export default About;
