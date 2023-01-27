import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
//import data from "./assets/itemData";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

export type ItemType = {
  itemId: number;
  itemName: string;
  itemImg: string;
  discription: string;
  price: number;
  inCart: boolean;
};

function App() {
  const [itemData, setItemData] = useState<ItemType[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/goods")
      .then((res) => {
        console.log(res.data);
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home data={itemData} />} />
      <Route path="/Detail/:id" element={<Detail data={itemData} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/*" element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  );
}

export default App;
