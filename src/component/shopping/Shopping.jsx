import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
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

  const handleChildClickCancel = (modalStatus) => {
    setShowModal(modalStatus);
  };
  return (
    <div className="flex justify-center">
      <div className="containersbox">
        <h4>CATEGORIES</h4>
        <div className="filter_list">
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-women"
              checked=""
            />
            <label for="cat-women">Women</label>
            <p className="mb-0 ms-auto">(16)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-men"
            />
            <label for="cat-men">Men</label>
            <p className="mb-0 ms-auto">(9)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-shoes"
            />
            <label for="cat-shoes">Shoes</label>
            <p className="mb-0 ms-auto">(19)</p>
          </div>
          <div className="custom_check ">
            <input
              type="checkbox"
              className="check_inp"
              hidden=""
              id="cat-computer"
            />
            <label for="cat-computer">Computer</label>
            <p className="mb-0 ms-auto">(35)</p>
          </div>
        </div>
        <div className="shop_filter">
          <h4 className="filter_title">Brands</h4>
          <div className="filter_list">
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-adidas"
                checked=""
              />
              <label for="bnd-adidas">Adidas</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-nike"
              />
              <label for="bnd-nike">Nike</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-easy"
              />
              <label for="bnd-easy">Easy</label>
            </div>
            <div className="custom_check ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="bnd-arong"
              />
              <label for="bnd-arong">Arong</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          onClickFaMagnifyingGlass={changeData}
          onClickCancel={handleChildClickCancel}
        />
        {/* <div>
          <div> */}
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
