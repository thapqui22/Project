import React from "react";
import style from "./iconads.module.scss";

const Iconadss = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navContainerMenu}>
        <div className="row flex justify-center w-1200">
          <div className="flex justify-around w-[1000px] flex-grow">
            <div className="flex flex-grow justify-center">
              <div className="border-solid border-2 border-defaut-color-red w-[333px] flex justify-center">
                <div className="flex py-3 px-4">
                  <div className="feature_icon p-2 flex items-center">
                    <img
                      className="image object-cover"
                      loading="lazy"
                      src="https://themes.rslahmed.dev/rafcart/assets/images/svg/delivery-van.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature_content p-1 grid grid-rows-1">
                    <h4 className="title text-xl text-defaut-color-red hover:cursor-default">
                      Free shipping
                    </h4>
                    <p>Orders over $200</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow justify-center">
              <div className="border-solid border-2 border-defaut-color-red w-[333px] flex justify-center">
                <div className="flex py-3 px-4">
                  <div className="feature_icon p-2">
                    <img
                      loading="lazy"
                      src="https://themes.rslahmed.dev/rafcart/assets/images/svg/money-back.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature_content p-1 grid grid-rows-1">
                    <h4 className="title text-xl text-defaut-color-red hover:cursor-default">
                      Money Returns
                    </h4>
                    <p>30 Days money return</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow justify-center">
              <div className="border-solid border-2 border-defaut-color-red w-[333px] flex justify-center">
                <div className="flex py-3 px-4">
                  <div className="feature_icon p-2">
                    <img
                      loading="lazy"
                      src="https://themes.rslahmed.dev/rafcart/assets/images/svg/service-hours.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature_content p-1 grid grid-rows-1">
                    <h4 className="title text-xl text-defaut-color-red hover:cursor-default">
                      24/7 Support
                    </h4>
                    <p>Customer support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iconadss;
