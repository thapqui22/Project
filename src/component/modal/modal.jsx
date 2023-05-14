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
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("RGB");
  const refParamSearch = useRef();
  const param = {};
  const images = [
    {
      original:
        "https://thuysinhxanh.vn/wp-content/uploads/2021/07/ca-neon-1.jpg",
      thumbnail:
        "https://thuysinhxanh.vn/wp-content/uploads/2021/07/ca-neon-1.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
      loading: "lazy",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://product.hstatic.net/200000416355/product/ca-neon-4_10a242b82b9046e693343108cf645e4c_master.jpg",
      thumbnail:
        "https://product.hstatic.net/200000416355/product/ca-neon-4_10a242b82b9046e693343108cf645e4c_master.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/344/954/products/ca-neon-vua.jpg?v=1632300654103",
      thumbnail:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/344/954/products/ca-neon-vua.jpg?v=1632300654103",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://bizweb.dktcdn.net/100/424/759/products/b883b447-b381-495d-b11c-05c663380601-jpeg.jpg?v=1624550921120",
      thumbnail:
        "https://bizweb.dktcdn.net/100/424/759/products/b883b447-b381-495d-b11c-05c663380601-jpeg.jpg?v=1624550921120",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg",
      thumbnail:
        "https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg",
      description: "Cas neon vua",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
  ];
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const dataRecieveInModal = props.onClickFaMagnifyingGlass;
  useEffect(() => {
    if (dataRecieveInModal !== undefined) {
      console.log(dataRecieveInModal.dataReceive);
      setShowModal(true);
    }
  }, [dataRecieveInModal]);

  useEffect(() => {
    setSelectedColor("RGB");
    setSelectedSize("XS");
    props.onClickCancel(!showModal);
  }, [showModal]);

  const handlePlusButton = () => {
    setCount(count + 1);
  };
  const handleMinusButton = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleWishListButton = () => {
    // console.log(selectedSize + "..." + selectedColor);
  };
  const handleAddToCartButton = () => {
    console.log(selectedSize + "..." + selectedColor);
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

                <div className="p-3 flex flex-row">
                  <div className="flex ">
                    <div className="basis-1/2 px-2">
                      <ImageGallery
                        items={images}
                        showIndex
                        additionalClass="ImageGalleryContainer"
                      />
                    </div>
                    <div className="basis-1/2 px-2 flex-col">
                      <h1 className="display-6 flex font-normal font-font-robo">
                        {dataRecieveInModal.dataReceive.name}
                      </h1>
                      <div className="star py-2">
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
                          <span className="text-[green]">In Stock</span>
                        </p>
                        <p>
                          <span className="text-semibold">Brand:</span>Amazon
                        </p>
                        <p>
                          <span className="text-semibold ">Category:</span>
                          Fish
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
                              name="size"
                              value="XS"
                              className="size_inp"
                              id="size-xs"
                              onChange={handleSizeChange}
                              checked={selectedSize === "XS"}
                            />
                            <label htmlFor="size-xs">XS</label>

                            <input
                              type="radio"
                              name="size"
                              value="S"
                              className="size_inp"
                              id="size-s"
                              onChange={handleSizeChange}
                              checked={selectedSize === "S"}
                            />
                            <label htmlFor="size-s">S</label>

                            <input
                              type="radio"
                              name="size"
                              value="M"
                              className="size_inp"
                              id="size-m"
                              onChange={handleSizeChange}
                              checked={selectedSize === "M"}
                            />
                            <label htmlFor="size-m">M</label>

                            <input
                              type="radio"
                              name="size"
                              value="L"
                              className="size_inp"
                              id="size-l"
                              onChange={handleSizeChange}
                              checked={selectedSize === "L"}
                            />
                            <label htmlFor="size-l">L</label>

                            <input
                              type="radio"
                              name="size"
                              value="XL"
                              className="size_inp"
                              id="size-xl"
                              onChange={handleSizeChange}
                              checked={selectedSize === "XL"}
                            />
                            <label htmlFor="size-xl">XL</label>
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
                                value="RGB"
                                className="size_inp-1"
                                id="color-RGB"
                                onChange={handleColorChange}
                                checked={selectedColor === "RGB"}
                              />
                              <label htmlFor="color-RGB">RGB</label>

                              <input
                                type="radio"
                                hidden=""
                                name="color"
                                value="WRGB"
                                className="size_inp-1"
                                id="color-WRGB"
                                onChange={handleColorChange}
                                checked={selectedColor === "WRGB"}
                              />
                              <label htmlFor="color-WRGB">WRGB</label>

                              <input
                                type="radio"
                                hidden=""
                                name="color"
                                value="WRGB-UV"
                                className="size_inp-1"
                                id="color-WRGB-UV"
                                onChange={handleColorChange}
                                checked={selectedColor === "WRGB-UV"}
                              />
                              <label htmlFor="color-WRGB-UV">WRGB-UV</label>
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
                        <button
                          className="btnadd"
                          type="button"
                          onClick={handleAddToCartButton}
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="pr-2 hover:text-white"
                          />
                          ADD TO CART
                        </button>
                        <button
                          className="btnwishlist "
                          type="button"
                          onClick={handleWishListButton}
                        >
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
