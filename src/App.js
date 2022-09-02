import React from "react";
import PromotionManagement from "./pages/promotionManagement/PromotionManagement";
import Header from "./components/common/header/Header";
import { header } from "./apiData/header";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Header header={header} />
      <PromotionManagement />
    </div >
  );
};

export default App;
