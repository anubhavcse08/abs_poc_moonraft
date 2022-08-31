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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const chartOptions = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: { offset: true, drawBorder: true },
    },
    y: {
      stacked: true,
      max: "April",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, [200, 400], 400, 500, 600],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [100, [400, 600], 300, 400, 500, 600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      stack: "Stack 0",
    },
  ],
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anubhav",
    };
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
            <div class="card-header flex items-center p-4 border-b border-slate-300">
              <div className="text-sm font-semibold">
                <i class="bi bi-chevron-contract mr-2"></i>Metrics
              </div>
              <button class="button-more text-sky-600 text-sm">More</button>
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
          <div class="card">
            <div class="card-header flex flex-wrap items-center p-4 border-b border-slate-300 text-xs">
              <div className="relative border rounded py-2 px-4">
                <i class="bi bi-calendar4 pr-2"></i>Q4,2022
              </div>
              <div className="border w-px mx-4 py-4 hidden md:block"></div>
              <div className="search-box-2 relative hidden md:block">
                <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none text-slate-400">
                  <i class="bi bi-search"></i>
                </div>
                <input
                  type="search"
                  className="border rounded p-2 border-stone-300 focus:border-stone-400 w-full"
                  placeholder="Search"
                  required
                ></input>
              </div>
              <div className="border w-px mx-4 py-4 hidden md:block"></div>
              <div className="forecast ml-auto md:ml-0">
                <span>
                  Forecast: <span className="font-medium">$8,081.00</span>
                </span>
                <span className="text-red-500 ml-2 font-semibold">
                  <i class="bi bi-arrow-down"></i>
                  <span id="growth-perc">3.1</span>%
                </span>
              </div>
              <div class="filterby mt-1 md:ml-auto">
                <label>Filter by:</label>
                <select class="font-medium ml-1 pr-1">
                  <option value="1" selected>
                    Status
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="icons flex items-center gap-3 md:gap-4 ml-auto md:ml-4 text-xs md:text-base">
                <span className="icon">
                  <i class="bi bi-search"></i>
                </span>
                <span className="icon">
                  <i class="bi bi-calendar4"></i>
                </span>
                <span className="icon">
                  <i class="bi bi-fullscreen-exit"></i>
                </span>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <TableDesc></TableDesc>
              {/* <Bar options={chartOptions} data={data} /> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
