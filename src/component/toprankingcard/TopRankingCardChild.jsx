import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const TopRankingCardChild = () => {
  return (
    <div className="cardcontainer flex flex-row  w-[300px] p-2">
      <div className="topimage grid grid-cols-1 content-center">
        <img
          className="image object-cover h-24 w-24 rounded hover:cursor-pointer hover:opacity-80"
          src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg"
        />
      </div>
      <div className="bottom flex flex-col justify-center items-start p-2">
        <h4 className="title text-lg font-medium hover:text-defaut-color-red transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
          Cá neon vua
        </h4>
        <>
          <div className="pricing flex items-center ">
            <div className="price text-defaut-color-red ">
              {new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "USD",
              }).format(1111)}
            </div>
            <div className="ml-2 text-xs ">
              $<del>1320</del>
            </div>
          </div>
          <div className="star text-xs pt-1">
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
            <span className="text-xs ">(150)</span>
          </div>
        </>
      </div>{" "}
    </div>
  );
};

export default TopRankingCardChild;
