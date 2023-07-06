import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./card.scss";

function Card(props) {
  const recieveData = props.onChangData;
  const [showButton, setShowButton] = useState(false);
  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const onClickCardName = (data) => {
    props.onChangePathData(data);
    // console.log(data);
  };
  const handleClickFaMagnifyingGlass = () => {
    props.onClickFaMagnifyingGlass(recieveData);
  };
  const handleClickFaHeart = () => {
    console.log(props);
  };
  const handleClickAddtoCartButton = () => {
    props.onClickAddtoCartButton(recieveData);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card bg-white w-[276px] h-[350px] m-2 rounded-lg shadow-l"
      >
        <div className="relative flex items-center justify-center">
          <img
            className={`w-auto h-[240px] rounded-t ${
              showButton ? "opacity-80 transition duration-500" : ""
            }`}
            src={recieveData.image}
            alt="img"
          />
          {showButton && (
            <div className="absolute flex gap-4 hover:opacity-100">
              <a
                onClick={handleClickFaMagnifyingGlass}
                className="bg-defaut-color-pink hover:cursor-pointer px-[12px] py-2 rounded-full hover:bg-defaut-color-black transition duration-300  "
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a className="bg-defaut-color-pink hover:cursor-pointer  px-[12px] py-2  rounded-full hover:bg-defaut-color-black transition duration-300 ">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
              </a>
            </div>
          )}
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3">
          <h4 onClick={() => onClickCardName(recieveData)}>
            <Link
              className="title text-lg font-medium hover:text-defaut-color-pink transition duration-150 ease-out hover:ease-in hover:cursor-pointer pb-1 hover:no-underline "
              to="/productreview"
            >
              {recieveData.name}
            </Link>
          </h4>
          {!showButton && (
            <>
              <div className="pricing flex items-center ">
                <div className="price text-defaut-color-pink ">
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "USD",
                  }).format(recieveData.price)}
                </div>
                <div className="ml-2 text-xs ">
                  $<del>1320</del>
                </div>
              </div>
              <div className="star">
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f6bc3e" }} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f6bc3e" }} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f6bc3e" }} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f6bc3e" }} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f6bc3e" }} />
                </span>
                <span>(150)</span>
              </div>
            </>
          )}
        </div>
        {showButton && (
          <div className="animate-fade-in-up text-white pl-3">
            <button
              onClick={handleClickAddtoCartButton}
              className="py-2 border-2 border-defaut-color-pink rounded-sm -translate-y-3 px-3 text-base  bg-defaut-color-pink hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in "
            >
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default Card;
