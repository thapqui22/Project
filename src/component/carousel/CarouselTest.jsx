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
const CarouselTest = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [changeData, setChangeData] = useState();
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

  const handleOnClickChangePath = (data) => {
    props.handleOnClickChangePath(data);
  };

  const handleChildClick = (dataReceive) => {
    setChangeData({ dataReceive, key: Date.now() });
    setShowModal(false);
  };

  const handleChildClickCancel = (modalStatus) => {
    setShowModal(modalStatus);
  };
  return (
    <div className="container max-w-[1200px] h-auto">
      <Modal
        onClickFaMagnifyingGlass={changeData}
        onClickCancel={handleChildClickCancel}
      />
      <TopRankingCard />
      <div className="cardcontainer max-w-[1200px]">
        <div className="containers flex items-center justify-between">
          <h4 className="title text-3xl font-bold p-2  text-defaut-color-pink hover:cursor-default">
            New Arrivals
          </h4>
          <a
            href="#"
            className="title hover:no-underline font-normal hover:text-defaut-color-pink text-sm p-[10px] pb-2 text-defaut-color-pink hover:cursor-pointer"
          >
            See more
            <FontAwesomeIcon
              icon={faChevronRight}
              className="color-defaut-color-pink pl-2"
            />
          </a>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows={showModal}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName="item"
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
          sliderclassName=""
          slidesToSlide={4}
          swipeable
        >
          {data.map((i) => (
            <Card
              onChangePathData={(e) => handleOnClickChangePath(e)}
              onChangData={i}
              key={i.id}
              onClickFaMagnifyingGlass={handleChildClick}
            />
          ))}
        </Carousel>
      </div>
      <div className="cardcontainer max-w-[1200px] py-[30px]">
        <a href="/">
          <img
            className="hover:cursor-pointer px-2"
            src="https://themes.rslahmed.dev/rafcart/assets/images/offer-3.jpg"
            alt="imgads"
          />
        </a>
      </div>
      <div className="cardcontainer max-w-[1200px]">
        <div className="containers flex items-center justify-between">
          <h4 className="title text-3xl font-bold p-2 text-defaut-color-pink hover:cursor-default">
            Recomended For You
          </h4>
          <a
            href="#"
            className="title hover:no-underline font-normal hover:text-defaut-color-pink text-sm p-[10px] pb-2 text-defaut-color-pink hover:cursor-pointer"
          >
            See more
            <FontAwesomeIcon
              icon={faChevronRight}
              className="color-defaut-color-pink pl-2"
            />
          </a>
        </div>
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName="item "
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
          sliderclassName=""
          slidesToSlide={4}
          swipeable
        >
          {data.slice(4, 8).map((i) => (
            <Card
              onChangePathData={(e) => handleOnClickChangePath(e)}
              onChangData={i}
              key={i.id}
              onClickFaMagnifyingGlass={handleChildClick}
            />
          ))}
        </Carousel>
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName="item "
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
          sliderclassName=""
          slidesToSlide={4}
          swipeable
        >
          {data.slice(4, 8).map((i) => (
            <Card
              onChangePathData={(e) => handleOnClickChangePath(e)}
              onChangData={i}
              key={i.id}
              onClickFaMagnifyingGlass={handleChildClick}
            />
          ))}
        </Carousel>
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName="item"
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          shouldResetAutoplay
          sliderclassName=""
          slidesToSlide={4}
          swipeable
        >
          {data.slice(0, 4).map((i) => (
            <Card
              onChangePathData={(e) => handleOnClickChangePath(e)}
              onChangData={i}
              key={i.id}
              onClickFaMagnifyingGlass={handleChildClick}
            />
          ))}
        </Carousel>
      </div>
      <div className="max-w-[1200px] w-[100%] py-[30px]">
        <div className="cardcontainer max-w-[1200px] w-[100%] flex bg-[#f3f3f3]">
          <div className="flex-1 flex justify-center">
            <a href="/">
              <img
                className="hover:cursor-pointer px-2  h-[500px]"
                src="https://themes.rslahmed.dev/rafcart/assets/images/mobile-view.png"
                alt="imgads"
              />
            </a>
          </div>
          <div className="flex-1 flex items-center">
            <div className="h-[250px]">
              <h2 className="text-2xl pb-3 font-semibold">
                Download RAFCART App Now!
              </h2>
              <p className="pb-3 text-sm">
                Shopping fastly and easily more with our app. Get a link to
                <br className="" /> download the app on your phone
              </p>
              <form className="subscribe_form">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="border-2 border-defaut-color-pink border-r-0 rounded-l-lg px-3"
                />
                <button className="rounded-r-lg border-2 border-defaut-color-pink text-base  bg-defaut-color-pink hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in ">
                  Subscribe
                </button>
              </form>

              <div className="flex">
                <a href="/">
                  <img
                    className="rounded h-[40px] pr-3"
                    loading="lazy"
                    src="https://themes.rslahmed.dev/rafcart/assets/images/download-1.png"
                    alt="download"
                  />
                </a>
                <a href="#">
                  <img
                    className="rounded h-[40px]"
                    loading="lazy"
                    src="https://themes.rslahmed.dev/rafcart/assets/images/download-2.png"
                    alt="download"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselTest;
