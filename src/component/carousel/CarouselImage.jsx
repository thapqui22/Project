import React from "react";
import "./carousel.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselImage = () => {
  return (
    <div className="divImg w-[100%]">
      <div className="w-[1140px] flex">
        <div className="sub_categories w-[200px] max-w-[200px] flex flex-col shadow-md">
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-shoe-prints"></i>
            </span>
            <span className="txt">Shoes</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-female"></i>
            </span>
            <span className="txt">Women</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-plug"></i>
            </span>
            <span className="txt">Electronisc</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-headphones"></i>
            </span>
            <span className="txt">Headphones</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-mobile"></i>
            </span>
            <span className="txt">Mobile</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-mobile"></i>
            </span>
            <span className="txt">Mobile</span>
          </a>
          <div href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-plug"></i>
            </span>
            <span className="txt">Electronisc</span>
          </div>

          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-plug"></i>
            </span>
            <span className="txt">Electronisc</span>
          </a>
          <a href="#" className="singlecats">
            <span className="img_wrp">
              <i className="las la-headphones"></i>
            </span>
            <span className="txt">Headphones</span>
          </a>
        </div>
        <div className="divImgContainer pl-2">
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
    </div>
  );
};

export default CarouselImage;
