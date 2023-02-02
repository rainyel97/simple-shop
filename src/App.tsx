import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import data from "./assets/itemData";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

export type ItemType = {
  itemId: number;
  itemName: string;
  itemImg: string;
  discription: string;
  price: number;
};

export type CartType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

function App() {
  const [itemData, setItemData] = useState<ItemType[]>([]);
  /*
  useEffect를 사용하여 상품 데이터 가져오기
  json server를 사용하여 3001번 포트에 서버를 만들고 RestfulAPI처럼 사용가능
  fetch 대신 자동으로 json형 변환을 해주는 axios 이용
  */
  useEffect(() => {
    //서버를 상시로 켜놓지 않았을 시 에러 요청을 받아오는 문제로 인한 로딩 속도 저하 문제 발생.
    //해당 코드 주석화
    // axios
    //   .get("http://localhost:3001/goods")
    //   .then((res) => {
    //     console.log(res.data);
    //     setItemData(res.data);
    //   })
    //   .catch(() => {
    //     console.log("data load fail");
    setItemData(data); //서버가 닫혀있을 경우를 위해 기본 데이터 유지
    //   });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home data={itemData} />} />
      <Route path="/Detail/:id" element={<Detail data={itemData} />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/*" element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  );
}

export default App;
