import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect, useRef } from "react";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import TankModel from "./component/tankmodel/TankModel";
import ShoppingCart from "./component/shoppingcart/ShoppingCart";
import ManageProducts from "./component/manageproducts/ManageProducts";
import Shopping from "./component/shopping/Shopping";
import ReactQuillJs from "./component/reactquilljs/ReactQuillJs";
import ReactQuillTest from "./component/reactquilljs/ReactQuillTest";
import NewMenuBar from "./component/menubar/NewMenuBar";
import Header from "./component/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { useStorage } from "./component/localstorage/LocalStorage";

function App() {
  const [cartItems] = useStorage("cartItems", []);
  const [data, setData] = useState(cartItems.length);
  const [checkRefresh, setCheckRefresh] = useState(true);
  const [dataQuill, setDataQuill] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setCheckRefresh(!checkRefresh);
    };
    fetchData();
  }, []);

  const handleDataQuillChange = (newData) => {
    setDataQuill(newData);
  };

  const handleAddToCart = (data) => {
    setData(data);
  };
  const handleOnClickClearAll = (data) => {
    setData(data);
  };
  const handleOnClickRemove = (data) => {
    setData(data);
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <NewMenuBar onChangeDataRefresh={data} />
      <div className="py-3  flex justify-center items-center">
        <div className="flex w-[1140px] items-center [&>*]:pr-1">
          <img
            src="https://img.icons8.com/material-outlined/24/home--v2.png"
            alt="home--v2"
            className="h-[20px] flex"
          />
          <i className="las la-angle-right "></i>
          <span className="ml-1 text-xl">Home</span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route
          path="/shopping"
          element={<Shopping onClickAddToCart={handleAddToCart} />}
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              onClickClearAll={handleOnClickClearAll}
              onClickRemove={handleOnClickRemove}
            />
          }
        />
        <Route path="/tankmodel" element={<TankModel />} />
        <Route path="/manage" element={<ManageProducts />} />
        <Route
          path="/createandeditblog"
          element={
            <ReactQuillJs
              onClickPreview={handleDataQuillChange}
              handleReceiveDataQuillChange={dataQuill}
            />
          }
        />
        <Route
          path="/test"
          element={
            <ReactQuillTest
              onClickPublish={handleDataQuillChange}
              onClickBacktoEdit={handleDataQuillChange}
              handleReceiveDataQuillChange={dataQuill}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
