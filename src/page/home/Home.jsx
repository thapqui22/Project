import CarouselImage from "../../component/carousel/CarouselImage";
import Iconadss from "../../component/iconads/IconAdss";
import React, { useState } from "react";

import CarouselTest from "../../component/carousel/CarouselTest";

const Home = (props) => {
  const onClickChangeData = (data) => {
    props.onChangeData(data);
  };
  return (
    <div>
      <CarouselImage />
      <Iconadss />
      <CarouselTest handleOnClickChangePath={onClickChangeData} />
    </div>
  );
};

export default Home;
