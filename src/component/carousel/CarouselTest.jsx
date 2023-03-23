import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";
import axios from "axios";
import "./Card.scss";
import TopRankingCard from "../toprankingcard/TopRankingCard";
const CarouselTest = () => {
  const [showModal, setShowModal] = useState(false);
  // const [changeData, setChangeData] = useState();
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleChildClick = (data) => {
    console.log(data);
    setShowModal(true);
  };
  const handleChildClickCancel = (data) => {
    setShowModal(false);
  };
  return (
    <div className="container max-w-[1200px] h-auto">
      {/* onClickFaMagnifyingGlass={showModal} */}
      <Modal
        onClickFaMagnifyingGlass={showModal}
        onClickCancel={handleChildClickCancel}
      />
      <TopRankingCard />
      <div className="cardcontainer max-w-[1200px]">
        <div className="containers flex items-center justify-between">
          <h4 className="title text-3xl font-bold p-2  text-defaut-color-red hover:cursor-default">
            New Arrivals
          </h4>
          <a
            href="#"
            className="title hover:no-underline font-normal hover:text-defaut-color-red text-sm p-[10px] pb-2 text-defaut-color-red hover:cursor-pointer"
          >
            See more
            <FontAwesomeIcon
              icon={faChevronRight}
              className="color-defaut-color-red pl-2"
            />
          </a>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="item"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={4}
          swipeable
        >
          {data.map((i) => (
            <Card
              onChangData={i}
              key={i.id}
              onClickFaMagnifyingGlass={handleChildClick}
            />
          ))}
        </Carousel>
      </div>
      <div className="cardcontainer max-w-[1200px]">
        <div className="containers flex items-center justify-between">
          <h4 className="title text-3xl font-bold p-2 text-defaut-color-red hover:cursor-default">
            Recomended For You
          </h4>
          <a
            href="#"
            className="title hover:no-underline font-normal hover:text-defaut-color-red text-sm p-[10px] pb-2 text-defaut-color-red hover:cursor-pointer"
          >
            See more
            <FontAwesomeIcon
              icon={faChevronRight}
              className="color-defaut-color-red pl-2"
            />
          </a>
        </div>
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="item "
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={4}
          swipeable
        >
          {data.slice(4, 8).map((i) => (
            <Card onChangData={i} key={i.id} />
          ))}
        </Carousel>
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="item"
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={4}
          swipeable
        >
          {data.slice(0, 4).map((i) => (
            <Card onChangData={i} key={i.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTest;
