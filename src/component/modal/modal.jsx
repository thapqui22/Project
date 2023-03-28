import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCartShopping,
  faHeart,
  faStar,
  faMinus,
  faPlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./modal.scss";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(1);
  const [data, setData] = useState("");
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const dataRecieveInModal = props.onClickFaMagnifyingGlass;
  useEffect(() => {
    if (dataRecieveInModal !== undefined) {
      console.log(dataRecieveInModal.dataReceive);
      setShowModal(true);
      setData(dataRecieveInModal);
    }
  }, [dataRecieveInModal]);

  useEffect(() => {
    props.onClickCancel(!showModal);
  }, [showModal]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);

  const handlePlusButton = () => {
    setCount(count + 1);
  };
  const handleMinusButton = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCancelButton = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[1200px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-font-robo">
                    PRODUCT DESCRIPTION
                  </h3>
                  <button
                    className="p-1 ml-auto rounded-lg bg-defaut-color-pink text-xl leading-none "
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-white px-[4.25px]"
                    />
                  </button>
                </div>
                {/*body*/}
                <div className="p-3 flex flex-row">
                  <div className="flex ">
                    <div className="basis-1/2">
                      <div>
                        <img
                          className="card-img-top mb-5 mb-md-0 h-[552px]"
                          src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua-1_600x397.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="flex w-28">
                        <div className="w-48"></div>
                      </div>
                    </div>
                    <div className="basis-1/2 px-3 flex-col">
                      <h1 className="display-6 flex font-normal font-font-robo">
                        {dataRecieveInModal.dataReceive.name}
                      </h1>
                      <div className="star py-3">
                        <span>
                          <FontAwesomeIcon
                            className="pr-1"
                            icon={faStar}
                            style={{ color: "#f6bc3e" }}
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon
                            className="pr-1"
                            icon={faStar}
                            style={{ color: "#f6bc3e" }}
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="pr-1"
                            style={{ color: "#f6bc3e" }}
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="pr-1"
                            style={{ color: "#f6bc3e" }}
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="pr-1"
                            style={{ color: "#f6bc3e" }}
                          />
                        </span>
                        <span>(150 Review)</span>
                      </div>
                      <div className="product_other_info">
                        <p>
                          <span className="text-semibold">Availability:</span>
                          <span className="text-green">In Stock</span>
                        </p>
                        <p>
                          <span className="text-semibold">Brand:</span>Bata
                        </p>
                        <p>
                          <span className="text-semibold ">Category:</span>
                          Clothing
                        </p>
                        <p>
                          <span className="text-semibold">SKU:</span>BE45VGRT
                        </p>
                      </div>
                      <div className="fs-5 pb-2">
                        <span className="text-decoration-line-through text-sm">
                          {new Intl.NumberFormat("ja-JP", {
                            style: "currency",
                            currency: "USD",
                          }).format(dataRecieveInModal.dataReceive.price * 1.2)}
                        </span>
                        <span className="pl-2 font-font-robo text-defaut-color-pink">
                          {new Intl.NumberFormat("ja-JP", {
                            style: "currency",
                            currency: "USD",
                          }).format(dataRecieveInModal.dataReceive.price)}
                        </span>
                      </div>
                      <p className="lead pb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium at dolorem quidem modi. Nam sequi vero? eius
                        blanditiis delectus minima ea iste laborum...
                        <a
                          href="#"
                          className="detail hover:text-defaut-color-pink hover:no-underline "
                        >
                          See more
                        </a>
                      </p>
                      <div className="shop_filter border-bottom-0 pb-0">
                        <div className="radio-toolbar">
                          <h5>Size:</h5>
                          <div className="flex w-52 justify-between items-center">
                            <input
                              type="radio"
                              hidden=""
                              name="size"
                              className="size_inp "
                              id="size-xs"
                            />
                            <label for="size-xs">XS</label>
                            <input
                              type="radio"
                              hidden=""
                              name="size"
                              className="size_inp"
                              id="size-s"
                            />
                            <label for="size-s">S</label>
                            <input
                              type="radio"
                              hidden=""
                              name="size"
                              className="size_inp"
                              id="size-m"
                            />
                            <label for="size-m">M</label>
                            <input
                              type="radio"
                              hidden=""
                              name="size"
                              className="size_inp"
                              id="size-l"
                            />
                            <label for="size-l">L</label>

                            <input
                              type="radio"
                              hidden=""
                              name="size"
                              className="size_inp"
                              id="size-xl"
                            />
                            <label for="size-xl">XL</label>
                          </div>
                        </div>
                        <div className="shop_filter border-bottom-0 pb-0">
                          <div className="radio-toolbar-color">
                            <h5>Color:</h5>
                            <div className="flex w-auto  items-center">
                              <input
                                type="radio"
                                hidden=""
                                name="color"
                                className="size_inp-1"
                                id="color-red"
                              />
                              <label for="color-red">RGB</label>

                              <input
                                type="radio"
                                hidden=""
                                name="color"
                                className="size_inp-1"
                                id="color-red-1"
                              />
                              <label for="color-red-1">WRGB</label>

                              <input
                                type="radio"
                                hidden=""
                                name="color"
                                className="size_inp-1"
                                id="color-red-2"
                              />
                              <label for="color-red-2">WRGB-UV</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="pb-1 font-font-robo text-xl">Quantity</p>
                        <div className="quanlityContainer flex align-items-center w-auto">
                          <button className="minus flex align-items-center justify-center hover:bg-slate-200">
                            <FontAwesomeIcon
                              className="p-2"
                              icon={faMinus}
                              onClick={handleMinusButton}
                            />
                          </button>
                          <div className="inputmp flex align-items-center justify-center p-1">
                            <input
                              className="text-center max-w-[50px] "
                              value={count}
                              readOnly
                            />
                          </div>
                          <button className="plus flex align-items-center justify-cente hover:bg-slate-200">
                            <FontAwesomeIcon
                              className="p-2 "
                              icon={faPlus}
                              onClick={handlePlusButton}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="d-flex pt-4 pb-3 border-b-2">
                        <button className="btnadd" type="button">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="pr-2 hover:text-white"
                          />
                          ADD TO CART
                        </button>
                        <button className="btnwishlist " type="button">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="pr-2 hover:text-defaut-color-pink"
                          />
                          WISHLIST
                        </button>
                      </div>
                      <div className="iconfooter w-44 flex justify-around text-sm pt-2">
                        <a
                          href="#"
                          className="py-2 px-[11px] rounded-full transition ease-in-out  hover:bg-[#e9e4e4] hover:text-black"
                        >
                          <i className="lab la-facebook-f text-sm"></i>
                        </a>
                        <a
                          href="#"
                          className="py-2 px-[12px] rounded-full hover:bg-[#e9e4e4] hover:text-black"
                        >
                          <i className="fa-brands fa-instagram text-sm"></i>
                        </a>
                        <a
                          href="#"
                          className="py-2 px-[11px] rounded-full hover:bg-[#e9e4e4] hover:text-black"
                        >
                          <i className="fa-brands fa-twitter text-sm"></i>
                          {/* <FontAwesomeIcon icon={faInstagram} /> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCancelButton}
                  >
                    Close
                  </button>
                  <button
                    className="bg-defaut-color-red text-white hover:opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
