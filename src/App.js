import { Component } from 'react';
import './App.css';
import TableDesc from './components/dashboard/TableDesc';
import GraphCard from './components/metrics/GraphCard';
import TimeButtonMenu from './components/metrics/TimeButtonMenu';
import SplineChart from './components/SplineChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Anubhav'
    }
  }
  render() {
    const options = {
      title: 'FORECAST',
      actualAmount: '$20.5M',
      tagetAmount: '$19.5M',
      growthPercent: '3.5%'
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

    return <div className="App">
      Hellooo {this.state.name}
      <TimeButtonMenu />
      <div className='card-graph-container item-flex-row'>
        <GraphCard options={options} isGrowth={true} />
        <GraphCard options={options} isGrowth={false} />
        <GraphCard options={options} isGrowth={true} />
        <GraphCard options={options} isGrowth={true} />
        <GraphCard options={options} isGrowth={false} />
      </div>
      {/* <SplineChart  isGrowth={true} /> */}
      <TableDesc />
    </div>
  };
}

export default App;
