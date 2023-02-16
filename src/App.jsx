import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import Knowledge from "./page/knowledge/Knowledge";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Mainboard from "./component/mainboard/Mainboard";
import Shopping from "./page/shopping/Shopping";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
