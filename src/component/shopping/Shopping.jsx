import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import style from "./shopping.module.scss";
import { useStorage } from "../localstorage/LocalStorage";
import axios from "axios";
import { toast } from "react-toastify";
import PaginationShopping from "./PaginationShopping";
const Shopping = () => {
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
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

  return (
    <div>
      <div className={style.containers}>
        <div className={style.container}>
          {currentItems.map((item) => (
            <MDBCard className={style.box} key={item.id}>
              {item.image ? (
                <MDBCardImage src={item.image} className={style.Image} />
              ) : (
                <MDBCardImage
                  src="https://media.istockphoto.com/id/1368239780/photo/clown-fish.jpg?b=1&s=170667a&w=0&k=20&c=mBdC45x6navTxLRmA7_k7srPFGvbQmaBf6HINhwkE-Q="
                  className={style.Image}
                />
              )}
              <MDBCardBody>
                <MDBCardTitle className={style.textname}>
                  {item.name}
                </MDBCardTitle>
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${item.price}</h4>
                  <span className="text-danger">
                    <s>$25.99</s>
                  </span>
                </div>
                <MDBCardText className={style.textdes}>
                  {item.description}
                </MDBCardText>
                {item.cart == false && (
                  <button
                    className="btn btn-primary"
                    onClick={() => addtocart(item)}
                  >
                    Add to cart
                  </button>
                )}
                {item.cart == true && (
                  <button
                    disabled="true"
                    className="btn btn-success"
                    onClick={() => addtocart(item)}
                  >
                    Added
                  </button>
                )}
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>
      <PaginationShopping onClickChangePage={handleClickChangePage} />
    </div>
  );
};

export default Shopping;
