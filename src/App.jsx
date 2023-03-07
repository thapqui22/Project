import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import MenuBar from "./component/menubar/MenuBar";
import SearchBar from "./component/SearchBar/SearchBar";
import TankModel from "./component/tankmodel/TankModel";
import ShoppingCart from "./component/shoppingcart/ShoppingCart";
import ManageProducts from "./component/manageproducts/ManageProducts";
import Shopping from "./component/shopping/Shopping";
import ReactQuillJs from "./component/reactquilljs/ReactQuillJs";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
function App() {
  const [data, setData] = useState("initial value");
  const handleDataChange = (newData) => {
    setData(newData);
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route
          path="/shopping"
          element={<Shopping data={data} onDataChange={handleDataChange} />}
        />
        <Route
          path="/shoppingcart"
          element={<ShoppingCart data={data} onDataChange={handleDataChange} />}
        />
        <Route path="/tankmodel" element={<TankModel />} />
        <Route path="/manage" element={<ManageProducts />} />
        <Route path="/createandeditblog" element={<ReactQuillJs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
