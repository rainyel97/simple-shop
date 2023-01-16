import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import data from "./assets/itemData";
import { useState } from "react";

function App() {
  const [itemData, setItemData] = useState<object>(data);
  return <Home data={data} />;
}

export default App;
