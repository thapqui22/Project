import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TopRankingCardChild from "./TopRankingCardChild";
import Modal from "../modal/Modal";
import axios from "axios";

const TopRankingCard = () => {
  const [data, setData] = useState([]);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);
  const handleChildClick = (dataReceive) => {
    setChangeData({ dataReceive, key: Date.now() });
    setShowModal(false);
  };
  return (
    <div className="toprankingcontainer">
      <h4 className="title text-3xl font-bold p-[10px] pb-2 text-defaut-color-pink hover:cursor-default">
        Top Ranking
      </h4>
      <div className="cardcontainers max-w-[1200px] flex justify-around h-[400px]  ">
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-pink hover:cursor-default">
            FISH
          </h4>
          {data.slice(0, 3).map((i) => (
            <TopRankingCardChild key={i.id} onChangeData={i} />
          ))}
        </div>
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-pink hover:cursor-default">
            LIGHT
          </h4>
          {data.slice(6, 9).map((i) => (
            <TopRankingCardChild key={i.id} onChangeData={i} />
          ))}
        </div>{" "}
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-pink hover:cursor-default">
            TANK
          </h4>
          {data.slice(10, 13).map((i) => (
            <TopRankingCardChild key={i.id} onChangeData={i} />
          ))}
        </div>{" "}
        <div className="cardcontainer grid grid-cols-1 w-[300px]">
          <h4 className="title text-xl font-bold p-[10px] pb-2 text-defaut-color-pink hover:cursor-default">
            MEDICILLIN
          </h4>
          {data.slice(20, 23).map((i) => (
            <TopRankingCardChild key={i.id} onChangeData={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRankingCard;
