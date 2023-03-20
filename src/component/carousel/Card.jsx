import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
function Card() {
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  return (
    <>
      {/* <div className="card bg-white w-[230px] h-[380px] m-2 rounded-lg shadow-l">
        <div className="top">
          <img
            className="w-[230px] h-[230px] object-cover  p-2"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
            Apple iPhone 13 (128GB) - Midnight
          </div>
          <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div>

          <div className="pricing flex items-center">
            <div className="price ">$1000</div>
            <div className="ml-2 text-xs ">
              $<del>1320</del>
            </div>
          </div>
          <div className="flex items-center my-2">
            <button className="border px-3 py-1  text-xs rounded-l-full rounded-r-full mr-2 hover:bg-defaut-color hover:text-white ">
              Buy Now
            </button>
            <button className="border px-3 py-1 text-xs rounded-l-full rounded-r-full ml-1 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div> */}

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card bg-white w-[230px] h-[360px] m-2 rounded-lg shadow-l"
      >
        <div className="relative flex items-center justify-center">
          <img
            className="w-auto h-[230px]"
            src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg"
            alt="img"
          />
          <div className="absolute flex  gap-4 ">
            <a className="bg-defaut-color hover:cursor-pointer px-2 py-1.5 rounded-full hover:bg-white">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a className="bg-defaut-color hover:cursor-pointer px-2 py-1.5 rounded-full hover:bg-white">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        </div>

        <div className="bottom flex flex-col justify-center items-start p-3 ">
          <div className="title font-sans text-xl my-1 font-medium hover:text-defaut-color transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            King Neon fish
          </div>
          {showButton && (
            <div className="buttondiv text-white border rounded-lg">
              <button className="px-3 py-1 text-xl  bg-defaut-color hover:text-defaut-color hover:bg-white hover:border-rose-500 transition duration-300 ease-out hover:ease-in ">
                Add to Cart
              </button>
            </div>
          )}

          {!showButton && (
            <>
              <div className="pricing flex items-center">
                <div className="price text-defaut-color ">$1000</div>
                <div className="ml-2 text-xs ">
                  $<del>1320</del>
                </div>
              </div>
              <div className="star ">
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
      </div>
    </>
  );
}
export default Card;
