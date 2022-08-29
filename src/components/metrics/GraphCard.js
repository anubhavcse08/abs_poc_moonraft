import React, { useEffect } from "react";
import { windowResizable } from "../../utils/common";
import SplineChart from "../SplineChart";

const GraphCard = (props) => {
  const {
    options: { title, actualAmount, tagetAmount, growthPercent },
    isGrowth,
  } = props;
  // useEffect(() => {
  //     windowResizable();
  // //   return () => {
  // //     second
  // //   }
  // }, []);

  return (
    <div className="card-layout flex-1">
      <div className="card-title item-flex-row">
        <div className="title">{title}</div>
        <div
          className={`growth-amount ${isGrowth ? "growth-up" : "growth-down"}`}
        >
          {isGrowth ? (
            <span className="arrow-up">&#8593; </span>
          ) : (
            <span className="arrow-down">&#8595; </span>
          )}
          {growthPercent}
        </div>
      </div>
      <div className="graph-amount-label item-flex-row">
        <div className="amount-details item-flex-column">
          <div className="actual-amount">{actualAmount}</div>
          <div className="target-amount">
            {tagetAmount} <span className="target-label">Target</span>
          </div>
        </div>
        <div className="spline-graph">
          <SplineChart isGrowth={isGrowth} />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
