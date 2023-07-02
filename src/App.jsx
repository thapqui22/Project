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
import SearchBar from "./component/searchbar/SearchBar";
import MenuBar from "./component/menubar/MenuBar";
import ProductReview from "./component/productreview/ProductReview";
import TestPage from "./component/testpage/TestPage";
import PageNotFound from "./component/404pagenotfound/PageNotFound";
import LoginPage from "./component/loginpage/LoginPage";
import ForgotPasswordPage from "./component/forgotpasswordpage/ForgotPasswordPage";
import Registerpage from "./component/registerpage/RegisterPage";

import TermAndConditionsPage from "./component/registerpage/TermAndConditionsPage";
import OrderCompeted from "./component/ordercompeted/OrderCompeted";

import MyAccountPage from "./component/managemyaccount/MyAccountPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { useStorage } from "./component/localstorage/LocalStorage";
import FAQ from "./component/faq/FAQ";

function App() {
  const [cartItems] = useStorage("cartItems", []);
  const [dataForPreview, setDataForPreview] = useState(null);
  const [data, setData] = useState(cartItems.length);
  const [pathManageMyAccount, setPathManageMyAccount] =
    useState("ManageMyAccount");
  const [pathManageMyAccount1, setPathManageMyAccount1] = useStorage(
    "pathManageMyAccount",
    []
  );
  const [dataQuill, setDataQuill] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });

  const handleDataQuillChange = (newData) => {
    setDataQuill(newData);
  };
  const undateCartNumber = (newData) => {
    setData(newData);
  };
  const handleOnClickChangePathCard = (newData) => {
    setDataForPreview(newData);
  };
  const handleOnClickChangePath = (path) => {
    setPathManageMyAccount1(path);
  };
  return (
    <>
      <ToastContainer />
      <MenuBar />
      <SearchBar
        onChangeDataRefresh={data}
        handleOnClickChangePath={handleOnClickChangePath}
      />
      <div className="py-3 flex justify-center items-center">
        <div className="flex w-[1200px] items-center [&>*]:pr-1">
          <img
            src="https://img.icons8.com/material-outlined/24/home--v2.png"
            alt="home--v2"
            className="h-[20px] flex"
          />
          <i className="las la-angle-right "></i>
          <span className="ml-1 text-lg">Home</span>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home onChangeData={handleOnClickChangePathCard} />}
        />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route
          path="/shopping"
          element={
            <Shopping
              onClickAddToCart={undateCartNumber}
              handleOnClickChangePath={handleOnClickChangePathCard}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              onClickClearAll={undateCartNumber}
              onClickRemove={undateCartNumber}
            />
          }
        />
        <Route path="/tankmodel" element={<TankModel />} />
        <Route path="/manage" element={<ManageProducts />} />
        <Route path="/404pagenotfound" element={<PageNotFound />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/productreview/"
          element={<ProductReview onChangeData={dataForPreview} />}
        />
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
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/forgotpasswordpage" element={<ForgotPasswordPage />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route
          path="/termandconditionspage"
          element={<TermAndConditionsPage />}
        />
        <Route path="/ordercompeted" element={<OrderCompeted />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route
          path="/managemyaccount"
          element={<MyAccountPage onChangeData={pathManageMyAccount1} />}
        />
      </Routes>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
