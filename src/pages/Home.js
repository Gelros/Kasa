import React from "react";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import Data from "../data/Logement";

const Home = () => {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        classBanner="home_banner"
      />
      <Cards data={Data} />
    </div>
  );
};

export default Home;
