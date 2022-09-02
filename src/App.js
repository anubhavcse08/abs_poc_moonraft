import React, { useEffect, useState } from "react";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/header/header";
import Form from "./components/Form/form";
import Abs_MetricsCard from "./components/metrics/Abs_MetricsCard";
import Abs_MetricsDataTable from "./components/dashboard/Abs_MetricsDataTable";
import { header } from "./apiData/header";
import { pageData } from "./apiData/metrics";
import "./App.css";

const App = () => {
  const [selectStatus, setselectStatus] = useState('All');
  const [resultShow, setResultShow] = useState(0);
  const [currentQuater, setCurrentQuater] = useState('This Quarter');
  const [currentQuaterData, setCurrentQuaterData] = useState([]);

  const onSelectStatus = (event) => {
    setselectStatus(event.target.value);
  }
  const onShowResult = (numberOfData) => {
    setResultShow(numberOfData);
  }
  useEffect(() => {
    const currentQuaterDataValue = pageData.metricDetails.find(data => data.quarter === currentQuater);
    setCurrentQuaterData(currentQuaterDataValue);
  }, [currentQuater]);

  const getCurrentQuater = (currentQuaterValue) => {
    setCurrentQuater(currentQuaterValue);
  }

  return (
    <div className="App">
      <TopHeader header={header} />
      <Header />
      <Form />
      <Abs_MetricsCard
        getCurrentQuater={getCurrentQuater}
        currentQuaterData={currentQuaterData}
      />
      <Abs_MetricsDataTable
        onSelectStatus={onSelectStatus}
        currentQuaterData={currentQuaterData}
        resultShow={resultShow}
        selectStatus={selectStatus}
        onShowResult={onShowResult}
      />
    </div >
  );
};

export default App;
