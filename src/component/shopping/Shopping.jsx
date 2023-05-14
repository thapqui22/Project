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
  const param = {
    categories: String,
    brands: String,
    price: { min: Number, max: Number },
    size: String,
    color: String,
  };
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const refPrice = useRef({ min: null, max: null });
  const [selectedSizeSearch, setSelectedSizeSearch] = useState("");
  const [selectedColorSearch, setSelectedColorSearch] = useState("");
  const refSizeSearch = useRef("");
  const refColorSearch = useRef("");
  const refParamSearch = useRef(param);
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
    // refSizeSearch.current = e.target.value;
    setSelectedSizeSearch(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColorSearch(e.target.value);
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
    console.log(refSizeSearch.current + selectedSizeSearch);
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
              id="cat-women-search"
              // checked=""
            />
            <label className="" htmlFor="cat-women-search">
              Women
            </label>
            <p className="">(16)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-men-search"
            />
            <label htmlFor="cat-men-search">Men</label>
            <p className="">(9)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-shoes-search"
            />
            <label htmlFor="cat-shoes-search">Shoes</label>
            <p className="">(19)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-computer-search"
            />
            <label htmlFor="cat-computer-search">Computer</label>
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
                id="bnd-adidas-search"
                // checked=""
              />
              <label htmlFor="bnd-adidas-search">Adidas</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-nike-search"
              />
              <label htmlFor="bnd-nike-search">Nike</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-easy-search"
              />
              <label htmlFor="bnd-easy-search">Easy</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-arong-search"
              />
              <label htmlFor="bnd-arong-search">Arong</label>
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
          <div className="radio-toolbar-search">
            <h5>Size:</h5>
            <div className="flex w-52 justify-between items-center">
              <input
                type="radio"
                name="size"
                value="XS"
                className="size_inp"
                id="size-xs-search"
                onChange={handleSizeChange}
                checked={selectedSizeSearch === "XS"}
              />
              <label htmlFor="size-xs-search">XS</label>

              <input
                type="radio"
                name="size"
                value="S"
                className="size_inp"
                id="size-s-search"
                onChange={handleSizeChange}
                checked={selectedSizeSearch === "S"}
              />
              <label htmlFor="size-s-search">S</label>

              <input
                type="radio"
                name="size"
                value="M"
                className="size_inp"
                id="size-m-search"
                onChange={handleSizeChange}
                checked={selectedSizeSearch === "M"}
              />
              <label htmlFor="size-m-search">M</label>

              <input
                type="radio"
                name="size"
                value="L"
                className="size_inp"
                id="size-l-search"
                onChange={handleSizeChange}
                checked={selectedSizeSearch === "L"}
              />
              <label htmlFor="size-l-search">L</label>

              <input
                type="radio"
                name="size"
                value="XL"
                className="size_inp"
                id="size-xl-search"
                onChange={handleSizeChange}
                checked={selectedSizeSearch === "XL"}
              />
              <label htmlFor="size-xl-search">XL</label>
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
                  id="color-RGB-search"
                  onChange={handleColorChange}
                  checked={selectedColorSearch === "RGB"}
                />
                <label htmlFor="color-RGB-search">RGB</label>

                <input
                  type="radio"
                  hidden=""
                  name="color"
                  value="WRGB"
                  className="size_inp-1"
                  id="color-WRGB-search"
                  onChange={handleColorChange}
                  checked={selectedColorSearch === "WRGB"}
                />
                <label htmlFor="color-WRGB-search">WRGB</label>

                <input
                  type="radio"
                  hidden=""
                  name="color"
                  value="WRGB-UV"
                  className="size_inp-1"
                  id="color-WRGB-UV-search"
                  onChange={handleColorChange}
                  checked={selectedColorSearch === "WRGB-UV"}
                />
                <label htmlFor="color-WRGB-UV-search">WRGB-UV</label>
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
