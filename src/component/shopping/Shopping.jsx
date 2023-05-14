import React, { useState, useEffect, useRef } from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import "./shopping.scss";
import { useStorage } from "../localstorage/LocalStorage";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "../carousel/Card";
import Modal from "../modal/Modal";
import PaginationShopping from "./PaginationShopping";
const Shopping = () => {
  const [showModal, setShowModal] = useState(true);
  const [changeData, setChangeData] = useState();
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const refPrice = useRef({ min: null, max: null });
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);
  const handleClickChangePage = (data) => {
    setCurrentPage(data);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  function addtocart(product) {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success("Has adding to cart");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success("Has adding to cart");
    }
  }

  const handleChildClick = (dataReceive) => {
    setChangeData({ dataReceive, key: Date.now() });
    setShowModal(false);
  };
  const handlesaveminmax = (min, max) => {
    refPrice.min = min;
    refPrice.max = max;
  };
  const handleChildClickCancel = (modalStatus) => {
    setShowModal(modalStatus);
  };
  const handleSearched = (dataReceive) => {
    console.log(selectedSize + selectedColor);
  };
  return (
    <div className="flex justify-center">
      <div className="containersbox divide-y [&>div]:py-2">
        <div className="filter_list [&>div]:py-1">
          <h4 className="">CATEGORIES</h4>
          <div className="custom_check [&>div]:accent-inherit	">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-women"
              // checked=""
            />
            <label className="" htmlFor="cat-women">
              Women
            </label>
            <p className="">(16)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-men"
            />
            <label htmlFor="cat-men">Men</label>
            <p className="">(9)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-shoes"
            />
            <label htmlFor="cat-shoes">Shoes</label>
            <p className="">(19)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-computer"
            />
            <label htmlFor="cat-computer">Computer</label>
            <p className="">(35)</p>
          </div>
        </div>
        <div className="shop_filter [&>div]:py-1">
          <h4 className="filter_title">BRANDS</h4>
          <div className="filter_list">
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-adidas"
                // checked=""
              />
              <label htmlFor="bnd-adidas">Adidas</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-nike"
              />
              <label htmlFor="bnd-nike">Nike</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-easy"
              />
              <label htmlFor="bnd-easy">Easy</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-arong"
              />
              <label htmlFor="bnd-arong">Arong</label>
            </div>
          </div>
        </div>{" "}
        <div className="price_filter [&>div]:py-1">
          <h4>PRICE</h4>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => handlesaveminmax(min, max)}
          />
        </div>
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
        <div>
          <button onClick={() => handleSearched(123)}>Search</button>
        </div>
      </div>

      <div>
        <Modal
          onClickFaMagnifyingGlass={changeData}
          onClickCancel={handleChildClickCancel}
        />
        <div className="containers">
          <div className="containershop">
            {currentItems.map((item) => (
              <Card
                onChangData={item}
                key={item.id}
                onClickFaMagnifyingGlass={handleChildClick}
              />
            ))}
          </div>
        </div>
        <PaginationShopping onClickChangePage={handleClickChangePage} />
      </div>
    </div>
  );
};

export default Shopping;
