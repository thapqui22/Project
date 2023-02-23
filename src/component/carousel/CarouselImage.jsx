import React from "react";
import style from "./carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselImage = () => {
  return (
    <div className={style.divImg}>
      <div className={style.divImgContainer}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_1.png?1672232161194"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_2.png?1672232161194"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_5.png?1672232161194"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImage;
