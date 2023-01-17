import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import data from "./assets/itemData";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function App() {
  const [itemData, setItemData] = useState<object>(data);
  return (
    <Routes>
      <Route path="/" element={<Home data={itemData} />} />
      <Route path="/Detail" element={<Detail />} />{" "}
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
