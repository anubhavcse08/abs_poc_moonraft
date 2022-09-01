import { Component } from "react";
import { DatePicker } from "antd";
import "./App.css";
import TableDesc from "./components/dashboard/TableDesc";
import TopHeader from "./components/TopHeader/TopHeader";
import GraphCard from "./components/metrics/GraphCard";
import TimeButtonMenu from "./components/metrics/TimeButtonMenu";
import SplineChart from "./components/SplineChart";
import Header from "./components/header/header";
import Form from "./components/Form/form";
import { header } from "./apiData/header";
import TitleForecastStatus from "./components/dashboard/TitleForecastStatus";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anubhav",
    };
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    const options = {
      title: "FORECAST",
      actualAmount: "$20.5M",
      tagetAmount: "$19.5M",
      growthPercent: "3.5%",
    };
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

    return (
      <div className="App">
        <TopHeader header={header}></TopHeader>
        <Header></Header>
        <Form></Form>
        <section>
          <div class="card">
            <div class="card-header flex items-center p-4 border-b border-sky-600">
              <div className="text-sm font-semibold">
                <i class="bi bi-chevron-contract mr-2"></i>Metrics
              </div>
              <button class="button-more text-sky-500 text-sm">More</button>
            </div>
            <div class="card-body py-3 px-4">
              <TimeButtonMenu />

              <div className="card-graph-container item-flex-row gap-4">
                <GraphCard options={options} isGrowth={true} />
                <GraphCard options={options} isGrowth={false} />
                <GraphCard options={options} isGrowth={true} />
                <GraphCard options={options} isGrowth={true} />
                <GraphCard options={options} isGrowth={false} />
              </div>
            </div>
          </div>
        </section>

        {/* <SplineChart  isGrowth={true} /> */}
        <section>
          <div class="card text-sm">
            <div class="card-header flex items-center p-4 border-b border-sky-600">
              <DatePicker onChange={this.onChange} picker="quarter" />
              <div className="relative">
                <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="text-xs border-2 rounded-lg p-2"
                  placeholder="Search"
                  required
                ></input>
              </div>
              <div class="filterby">
                <label>filter by:</label>
                <select class="font-medium">
                  <option value="1" selected>
                    Status
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="icons flex items-center gap-4 ml-4">
                <span className="icon" href="#">
                  <i class="bi bi-calendar4"></i>
                </span>
                <span className="icon" href="#">
                  <i class="bi bi-fullscreen-exit"></i>
                </span>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <TitleForecastStatus />
              <TableDesc />
              <div className="flex flex-row justify-center">
                <button className="py-1.5 px-3.5 font-medium text-sky-700 border-2 border-sky-700 rounded-lg">Load More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
