import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/menubar/Header";
import Mainboard from "./component/mainboard/Mainboard";
import Shopping from "./page/shopping/Shopping";
import TankModel from "./component/tankmodel/TankModel";
import AddProduct from "./component/addproducts/AddProduct";
import UpdateProduct from "./component/updateproducts/UpdateProduct";
import FakeData from "./component/data/FakeData";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Mainboard />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/shoppingcart" element={<Shopping />} />
        <Route path="/tankmodel" element={<TankModel />} />
        <Route path="/manage" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
