import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TopRankingCardChild from "./TopRankingCardChild";
import Modal from "../modal/Modal";
import DummyCardTopRankingCard from "./DummyCardTopRankingCard";
import axios from "axios";

const TopRankingCard = () => {
  const [data, setData] = useState([]);
  const [hideDummy, setHideDummy] = useState(false);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";

  useEffect(() => {
    setHideDummy(false);
    let requestResolved = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        requestResolved = true;
        setData(response.data);
        setHideDummy(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!requestResolved) {
          setTimeout(() => {
            setHideDummy(false);
            setData(response.data);
          }, 5000);
        }
      }
    };
    fetchData(); // Fetch data immediately
  }, [data]); // Include url and data in dependencies array

  const handleChildClick = (dataReceive) => {
    setChangeData({ dataReceive, key: Date.now() });
    setShowModal(false);
  };

  return (
    <div className="toprankingcontainer">
      <h4 className="title text-3xl font-bold text-defaut-color-pink hover:cursor-default">
        Top Ranking
      </h4>
      <div className="cardcontainers w-[1200px] flex justify-around h-[350px] ">
        <div className="cardcontainer">
          <h4 className="title text-xl font-bold px-[10px] pt-2 text-defaut-color-pink hover:cursor-default">
            FISH
          </h4>{" "}
          {hideDummy === true ? (
            data
              .slice(0, 3)
              .map((i) => <TopRankingCardChild key={i.id} onChangeData={i} />)
          ) : (
            <DummyCardTopRankingCard />
          )}
        </div>
        <div className="cardcontainer">
          <h4 className="title text-xl font-bold px-[10px] pt-2 text-defaut-color-pink hover:cursor-default">
            LIGHT
          </h4>{" "}
          {hideDummy === true ? (
            data
              .slice(0, 3)
              .map((i) => <TopRankingCardChild key={i.id} onChangeData={i} />)
          ) : (
            <DummyCardTopRankingCard />
          )}
        </div>{" "}
        <div className="cardcontainer">
          <h4 className="title text-xl font-bold px-[10px] pt-2 text-defaut-color-pink hover:cursor-default">
            TANK
          </h4>{" "}
          {hideDummy === true ? (
            data
              .slice(0, 3)
              .map((i) => <TopRankingCardChild key={i.id} onChangeData={i} />)
          ) : (
            <DummyCardTopRankingCard />
          )}
        </div>{" "}
        <div className="cardcontainer">
          <h4 className="title text-xl font-bold px-[10px] pt-2 text-defaut-color-pink hover:cursor-default">
            MEDICILLIN
          </h4>{" "}
          {hideDummy === true ? (
            data
              .slice(0, 3)
              .map((i) => <TopRankingCardChild key={i.id} onChangeData={i} />)
          ) : (
            <DummyCardTopRankingCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRankingCard;
