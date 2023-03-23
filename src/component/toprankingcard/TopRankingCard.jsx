import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TopRankingCardChild from "./TopRankingCardChild";

const TopRankingCard = () => {
  return (
    <div className="toprankingcontainer">
      <h4 className="title text-3xl font-bold p-[10px] pb-2 text-defaut-color-red hover:cursor-default">
        Top Ranking
      </h4>
      <div className="cardcontainers max-w-[1200px] flex justify-around h-[400px]  ">
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-red hover:cursor-default">
            FISH
          </h4>
          <TopRankingCardChild />
          <TopRankingCardChild />
          <TopRankingCardChild />
        </div>
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-red hover:cursor-default">
            LIGHT
          </h4>
          <TopRankingCardChild />
          <TopRankingCardChild />
          <TopRankingCardChild />
        </div>{" "}
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-red hover:cursor-default">
            TANK
          </h4>
          <TopRankingCardChild />
          <TopRankingCardChild />
          <TopRankingCardChild />
        </div>{" "}
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-red hover:cursor-default">
            MEDICILLIN
          </h4>
          <TopRankingCardChild />
          <TopRankingCardChild />
          <TopRankingCardChild />
        </div>
      </div>
    </div>
  );
};

export default TopRankingCard;
