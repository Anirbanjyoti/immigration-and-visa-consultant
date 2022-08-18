import React from "react";
import Countries from "./Countries";
import Services from "./Services";
import Carousel from "./Sheared/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <Countries></Countries>
    </div>
  );
};

export default Home;
