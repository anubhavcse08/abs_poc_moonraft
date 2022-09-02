import React, { useEffect, useState } from "react";
import WeeklyForecastDetails from "../../components/weeklyForecastDetails/WeeklyForecastDetails";
import PageHeader from "../../components/pageHeader/PageHeader";
import PageFilter from "../../components/pageFilter/PageFilter";
import Metrics from "../../components/metrics/Metrics";
import { header } from "../../apiData/header";
import { pageData } from "../../apiData/metrics";

const PromotionManagement = () => {
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
    <>
      <PageHeader header={header} />
      <PageFilter />
      <Metrics
        getCurrentQuater={getCurrentQuater}
        currentQuaterData={currentQuaterData}
      />
      <WeeklyForecastDetails
        onSelectStatus={onSelectStatus}
        currentQuaterData={currentQuaterData}
        resultShow={resultShow}
        selectStatus={selectStatus}
        onShowResult={onShowResult}
      />
    </>
  );
};

export default PromotionManagement;
