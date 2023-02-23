import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import MenuBar from "./component/menubar/MenuBar";
import Mainboard from "./component/mainboard/Mainboard";
import Shopping from "./page/shopping/Shopping";
import TankModel from "./component/tankmodel/TankModel";
import ManageProducts from "./component/manageproducts/ManageProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Mainboard />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/shoppingcart" element={<Shopping />} />
        <Route path="/tankmodel" element={<TankModel />} />
        <Route path="/manage" element={<ManageProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
