import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import MenuBar from "./component/menubar/MenuBar";
import SearchBar from "./component/SearchBar/SearchBar";
import TankModel from "./component/tankmodel/TankModel";
import ShoppingCart from "./component/shoppingcart/ShoppingCart";
import ManageProducts from "./component/manageproducts/ManageProducts";
import ManageProductClone from "./component/manageproducts/ManageProductClone";
import Shopping from "./component/shopping/Shopping";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
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
        <Route path="/manage" element={<ManageProductClone />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
