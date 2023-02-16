import React from "react";
import CarouselImage from "../../component/carousel/CarouselImage";
import Iconads from "./Iconads";
import Productbox from "../../component/productbox/Productbox";
const Home = () => {
  return (
    <div>
      <CarouselImage />
      <Iconads />
      <Productbox />
      <Productbox />
      <Productbox />
      <Productbox />
      <Productbox />
    </div>
  );
};

export default Home;
