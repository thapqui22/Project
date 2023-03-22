import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const CarouselProductCartSlider = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  return (
    <div className="flex justify-content-center ">
      <div className="relative w-1140">
        <div className="text-center py-4  text-xl font-bold">
          Recomended For You
        </div>
        <div className="absolute right-0 top-5 ">
          <button onClick={scrollLeft} className="p-2 m-2 ">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <button onClick={scrollRight} className="p-2 m-2 ">
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
        <div
          id="content"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProductCartSlider;
