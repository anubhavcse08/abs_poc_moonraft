import React, { useEffect, useState } from "react";
import "./App.css";
import TableDesc from "./components/dashboard/TableDesc";
import TopHeader from "./components/TopHeader/TopHeader";
import GraphCard from "./components/metrics/GraphCard";
import TimeButtonMenu from "./components/metrics/TimeButtonMenu";
import Header from "./components/header/header";
import Form from "./components/Form/form";
import { header } from "./apiData/header";
import { pageData } from "./apiData/metrics";
import TitleForecastStatus from "./components/dashboard/TitleForecastStatus";

const App = () => {

  const [selectStatus, setselectStatus] = useState('Status');
  const [resultShow, setResultShow] = useState(0);
  const [currentQuater, setCurrentQuater] = useState('This Quarter');
  const [currentQuaterData, setCurrentQuaterData] = useState([]);

  const options = {
    title: "FORECAST",
    actualAmount: "$20.5M",
    tagetAmount: "$19.5M",
    growthPercent: "3.5%",
  };
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
    // const currentQuaterDataValue = pageData.metricDetails.find(data => data.quarter === currentQuaterValue);
    // setCurrentQuaterData(currentQuaterDataValue);
  }
  // function findSubsets(subset, nums, output, index) {
  //   console.log(output, 'BBBBBBBBBB ', index)
  //   // Base Condition
  //   if (index === nums.length) {
  //     subset.push(output);
  //     return;
  //   }

  //   // Not Including Value which is at Index
  //   findSubsets(subset, nums, [...output], index + 1);
  //   console.log(output, ' Afterrrrrrrrr ', index)
  //   // Including Value which is at Index
  //   output.push(nums[index]);
  //   findSubsets(subset, nums, [...output], index + 1);
  // }
  // let subset = [];
  // console.log("subsettttttttttttttttttttttttttttttttttttttt");
  // findSubsets(subset, [1, 2, 3], [], 0);
  console.log("currentQuaterData", currentQuaterData)
  return (
    <div className="App">
      <TopHeader header={header}></TopHeader>
      <Header></Header>
      <Form></Form>
      <section>
        <div class="card">
          <div class="card-header flex items-center p-4 border-b border-slate-300 font-semibold">
            <div className="text-base ">
              <i class="bi bi-chevron-contract mr-1"></i>Metrics
            </div>
            <button class="button-more text-sky-600 text-xs md:text-sm ">
              More
            </button>
          </div>
          <div class="card-body py-3 px-4">
            <TimeButtonMenu getCurrentQuater={getCurrentQuater} />
            <div className="card-graph-container item-flex-row gap-3">
              {currentQuaterData && currentQuaterData.metrics && currentQuaterData.metrics.map(data => {
                return <GraphCard options={data} isGrowth={data.isTrendPositive} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="card">
          <div class="card-header flex flex-wrap gap-y-2 gap-x-4 md:gap-0 items-center p-4 border-b border-slate-300 text-xs">
            <div className="inline-flex md:contents order-1 items-center gap-4">
              <div className="relative border rounded p-1 md:py-2 md:px-4">
                <i class="bi bi-calendar4 pr-2"></i>{currentQuaterData.period}
              </div>

              <div className="border w-px mx-4 py-4 hidden md:block order-3"></div>
              <div className="forecast md:ml-0 order-4">
                <span>
                  Forecast: <span className="font-medium">$8,081.00</span>
                </span>
                <span className="text-red-500 ml-2 font-semibold">
                  <i class="bi bi-arrow-down"></i>
                  <span id="growth-perc">3.1</span>%
                </span>
              </div>
            </div>
            <div className="inline-flex items-center md:contents">
              <div className="border w-px mx-4 py-4 hidden md:block order-1"></div>
              <div className="search-box-2 md:ml-0 w-40 md:w-0 relative order-2 ">
                <div class="flex absolute inset-y-0 right-2 md:right-4 items-center pl-3 pointer-events-none text-slate-400">
                  <i class="bi bi-search"></i>
                </div>
                <input
                  type="search"
                  className="border rounded p-1 md:p-2 border-stone-300 focus:border-stone-400 w-full"
                  placeholder="Search"
                  required
                ></input>
              </div>
              <div class="filterby mt-1 ml-4 md:ml-auto order-5">
                <label className="text-gray-500">Filter by:</label>
                <select class="font-medium ml-1 pr-1" onChange={onSelectStatus}>
                  <option value="Status" selected>Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Draft">Draft</option>
                  <option value="Planning">Planning</option>
                  <option value="Executed">Executed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            <div class="icons items-center gap-3 md:gap-4 ml-auto md:ml-4 text-xs md:text-base hidden md:flex order-6">
              <span className="icon">
                <i class="bi bi-calendar4"></i>
              </span>
              <span className="icon">
                <i class="bi bi-fullscreen-exit"></i>
              </span>
            </div>
          </div>
          <div class="card-body py-3 px-4">
            <TitleForecastStatus resultShow={resultShow} />
            <TableDesc selectStatus={selectStatus} onShowResult={onShowResult} />
            <div className="flex justify-center">
              <button className="px-3 py-1.5 text-sky-600 mx-auto rounded border md:border-2 border-sky-600 md:rounded-md text-xs">
                Load More
              </button>
            </div>
            {/* <Bar options={chartOptions} data={data} /> */}
          </div>
        </div >
      </section >
    </div >
  );
};

export default App;
