import React, { useState } from "react";
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
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card bg-white w-[275px] h-[350px] m-2 rounded-lg shadow-l"
      >
        <div className="relative flex items-center justify-center ">
          <img
            className={`w-auto h-[240px] rounded-t ${
              showButton ? "opacity-80 transition duration-500" : ""
            }`}
            src={recieveData.image}
            alt="img"
          />
          {showButton && (
            <div className="absolute flex gap-4 hover:opacity-100">
              <a className="bg-defaut-color-red hover:cursor-pointer px-2 py-1.5 rounded-full hover:bg-defaut-color-black transition duration-300  ">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a className="bg-defaut-color-red hover:cursor-pointer px-2 py-1.5 rounded-full hover:bg-defaut-color-black transition duration-300 ">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
              </a>
            </div>
          )}
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3">
          <h4 className="title text-lg font-medium hover:text-defaut-color-red transition duration-150 ease-out hover:ease-in hover:cursor-pointer pb-1">
            {recieveData.name}
          </h4>
          {!showButton && (
            <>
              <div className="pricing flex items-center ">
                <div className="price text-defaut-color-red ">
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
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>(150)</span>
              </div>
            </>
          )}
        </div>
        {showButton && (
          <div className="animate-fade-in-up text-white pl-3">
            <button className="py-2 border-2 border-defaut-color-red rounded-sm -translate-y-3 px-3 text-base  bg-defaut-color-red hover:text-defaut-color-red hover:bg-white transition duration-300 ease-out hover:ease-in ">
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default Card;
