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
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
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
