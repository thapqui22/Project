import React, { useState } from "react";
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
        className="card bg-white w-[230px] h-[340px] m-2 rounded-lg shadow-l"
      >
        <div className="top">
          <img
            className="w-auto h-[230px]  "
            src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg"
            alt="img"
          />
        </div>

        <div className="bottom flex flex-col justify-center items-start p-3">
          <div className="title font-semibold text-xl my-1">
            King Neon fish - Live In Herd
          </div>
          {showButton && (
            <button className="border px-3 py-1 text-xl hover:bg-red-600 hover:text-white rounded-lg ">
              Add to Cart
            </button>
          )}
          {!showButton && (
            <div className="pricing flex items-center ease-out">
              <div className="price ">$1000</div>
              <div className="ml-2 text-xs ">
                $<del>1320</del>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Card;
