import React, { useState, useEffect, useRef } from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import "./shopping.scss";
import { useStorage } from "../localstorage/LocalStorage";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "../carousel/Card";
import Modal from "../modal/Modal";
import PaginationShopping from "./PaginationShopping";
import LoadingModal from "../loadingmodal/LoadingModal";
const Shopping = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [changeData, setChangeData] = useState();
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const paramSearch = {
    categories: {},
    brands: {},
    price: { min: Number, max: Number },
  };
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const refPrice = useRef({ min: null, max: null });
  const [selectedSizeSearch, setSelectedSizeSearch] = useState("");
  const [selectedColorSearch, setSelectedColorSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [dataStatus, setDataStatus] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const paramCategory = {
    phone: ["IPHONE", "SAMSUNG", "HUAWEI", "OPPO", "VIVO", "REALME"],
    laptop: ["ACER", "LENOVO", "HP", "DELL", "ASUS", "SAMSUNG", "XIAOMI"],
    tablet: ["SAMSUNG", "XIAOMI"],
    watch: ["SAMSUNG", "XIAOMI", "HUAWEI"],
  };
  const handleCategoryChange = (category) => {
    setSelectedBrands([]);
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setDropdownVisible(true);
    } else {
      setSelectedCategory("");
      setDropdownVisible(false);
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(url);
  //     const filteredData = handleSearched(response.data);
  //     setData(filteredData);
  //   };
  //   fetchData();
  // }, [dataStatus]);
  useEffect(() => {
    let requestResolved = false; // Flag to track if request has resolved
    const fetchData = async () => {
      const startTime = Date.now(); // Store the start time
      try {
        const response = await axios.get(url);
        requestResolved = true; // Request resolved successfully
        const filteredData = handleSearched(response.data);
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!requestResolved) {
          // If request hasn't resolved after 10 seconds, set isLoading to false
          setTimeout(() => {
            setIsLoading(false);
            toast.dismiss();
            toast.error("Network problem.Please check your network!");
          }, 10000); // 10000 milliseconds = 10 seconds
        }
        const endTime = Date.now(); // Calculate the end time
        const timeDiff = endTime - startTime; // Calculate the loading time
        setLoadingTime(timeDiff);
      }
    };
    fetchData();
  }, [dataStatus]);

  const handleClickChangePage = (data) => {
    setCurrentPage(data);
  };
  const handleSizeChange = (e) => {
    setSelectedSizeSearch(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColorSearch(e.target.value);
  };
  const handleAddToCart = (newData) => {
    const data = newData.length + 1; // Replace with the actual data to be passed
    props.onClickAddToCart(data); // Call the callback function with the data
  };
  const handleOnClickChangePath = (data) => {
    props.handleOnClickChangePath(data);
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
      toast.dismiss();
      toast.success("The quantity has increased");
    } else {
      toast.dismiss();
      toast.success("Has adding to cart");
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      handleAddToCart(cartItems);
    }
  }
  const handleChildClick = (dataReceive) => {
    setChangeData({ dataReceive, key: Date.now() });
    setShowModal(false);
  };

  const handleSaveMinMax = (min, max) => {
    refPrice.current.min = min;
    refPrice.current.max = max;
  };
  const handleChildClickCancel = (modalStatus) => {
    setShowModal(modalStatus);
  };
  const handleOnClickCheckBoxBrands = (input) => {
    if (selectedBrands.includes(input)) {
      // If the brand is already selected, remove it from the array
      setSelectedBrands(selectedBrands.filter((brand) => brand !== input));
    } else {
      // If the brand is not selected, add it to the array
      setSelectedBrands([...selectedBrands, input]);
    }
  };

  const handleSearched = (dataReceive) => {
    paramSearch.categories = selectedCategory;
    paramSearch.brands = selectedBrands;
    paramSearch.price.min = refPrice.current.min;
    paramSearch.price.max = refPrice.current.max;

    const filteredData = dataReceive.filter((item) => {
      if (paramSearch.categories !== "") {
        if (item.category == paramSearch.categories.toUpperCase()) {
          if (paramSearch.brands.length === 0) {
            if (item.price <= paramSearch.price.min) {
              return false;
            }
            if (item.price >= paramSearch.price.max) {
              return false;
            }
            return true;
          } else {
            if (paramSearch.brands.includes(item.brand)) {
              if (item.price <= paramSearch.price.min) {
                return false;
              }
              if (item.price >= paramSearch.price.max) {
                return false;
              }
              return true;
            }
          }
          return false;
        }
        return false; // Item matches all selected search parameters
      }
      return true;
    });
    return filteredData;
  };

  return (
    <div className="flex justify-center">
      <div className=" w-[1224px] flex">
        <div className="containersbox  w-1/4 ml-2 border rounded pl-3 divide-y [&>div]:py-2">
          <div className="filter_list py-1">
            <h4>CATEGORIES</h4>
            {Object.keys(paramCategory).map((item) => (
              <div
                className={`custom_check ${
                  selectedCategory === "" ? "" : "active"
                }`}
                key={`cat-${item}`}
              >
                <input
                  type="checkbox"
                  className="check_inp"
                  hidden=""
                  id={`cat-${item}`}
                  checked={selectedCategory === item}
                  readOnly
                  onClick={() => handleCategoryChange(item)}
                />
                <label htmlFor={`cat-${item}`}>{item.toUpperCase()}</label>
                <p>{paramCategory[item].length}</p>
              </div>
            ))}
          </div>
          <div className="shop_filter [&>div]:py-1">
            <h4 className="custom_check ">
              BRANDS
              {selectedCategory ? (
                <i className="las la-angle-down"></i>
              ) : (
                <i className="las la-angle-up "></i>
              )}
            </h4>
            <div
              className={`filter_list_brands ${dropdownVisible ? "show" : ""}`}
            >
              {selectedCategory !== ""
                ? paramCategory[selectedCategory].map((item) => (
                    <div className="custom_check ">
                      <input
                        type="checkbox"
                        className="check_inp"
                        hidden=""
                        id={`bnd-${item}`}
                        checked={selectedBrands.includes(item)}
                        readOnly
                        onClick={() => handleOnClickCheckBoxBrands(item)}
                      />
                      <label htmlFor={`bnd-${item}`}>{item}</label>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="price_filter [&>div]:py-2">
            <h4>PRICE</h4>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => handleSaveMinMax(min, max)}
            />
          </div>
          <div className="shop_filter border-bottom-0 pb-0">
            <div className="radio-toolbar-search">
              <h5>Size:</h5>
              <div className="flex w-52 justify-between items-center">
                <input
                  type="radio"
                  disabled
                  name="size-search"
                  value="XS"
                  className="size_inp"
                  id="size-xs-search"
                  onChange={handleSizeChange}
                  checked={selectedSizeSearch === "XS"}
                />
                <label htmlFor="size-xs-search">XS</label>

                <input
                  type="radio"
                  disabled
                  name="size-search"
                  value="S"
                  className="size_inp"
                  id="size-s-search"
                  onChange={handleSizeChange}
                  checked={selectedSizeSearch === "S"}
                />
                <label htmlFor="size-s-search">S</label>

                <input
                  type="radio"
                  disabled
                  name="size-search"
                  value="M"
                  className="size_inp"
                  id="size-m-search"
                  onChange={handleSizeChange}
                  checked={selectedSizeSearch === "M"}
                />
                <label htmlFor="size-m-search">M</label>

                <input
                  type="radio"
                  disabled
                  name="size-search"
                  value="L"
                  className="size_inp"
                  id="size-l-search"
                  onChange={handleSizeChange}
                  checked={selectedSizeSearch === "L"}
                />
                <label htmlFor="size-l-search">L</label>

                <input
                  type="radio"
                  disabled
                  name="size-search"
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
                    disabled
                    hidden=""
                    name="color-search"
                    value="RGB"
                    className="size_inp-1"
                    id="color-RGB-search"
                    onChange={handleColorChange}
                    checked={selectedColorSearch === "RGB"}
                  />
                  <label htmlFor="color-RGB-search">RGB</label>

                  <input
                    type="radio"
                    disabled
                    hidden=""
                    name="color-search"
                    value="WRGB"
                    className="size_inp-1"
                    id="color-WRGB-search"
                    onChange={handleColorChange}
                    checked={selectedColorSearch === "WRGB"}
                  />
                  <label htmlFor="color-WRGB-search">WRGB</label>

                  <input
                    type="radio"
                    disabled
                    hidden=""
                    name="color-search"
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
            <button
              className="btnsearch"
              onClick={() => setDataStatus(!dataStatus)}
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <div className="containers">
            <div className="containershop">
              {currentItems.map((item) => (
                <Card
                  onChangData={item}
                  key={item.id}
                  onChangePathData={(e) => handleOnClickChangePath(e)}
                  onClickFaMagnifyingGlass={handleChildClick}
                  onClickAddtoCartButton={(e) => addtocart(e)}
                />
              ))}
            </div>
          </div>
          {isLoading ? <LoadingModal /> : <div />}
          <Modal
            onClickFaMagnifyingGlass={changeData}
            onClickCancel={handleChildClickCancel}
          />
          <PaginationShopping
            onClickChangePage={handleClickChangePage}
            onChangeData={data}
            onChangeDataItemToShow={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shopping;
