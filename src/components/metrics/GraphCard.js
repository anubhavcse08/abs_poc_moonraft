import React from "react";
import SplineChart from "../SplineChart";

const GraphCard = (props) => {
  const {
    options: { title, actualAmount, tagetAmount, growthPercent },
    isGrowth,
  } = props;

  return (
    <div className="card-layout w-60 shrink-0 px-2 py-1">
      <div className="card-title item-flex-row items-center">
        <div className="title font-semibold text-xs">{title}</div>
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
          <div className="actual-amount text-xl font-bold">{actualAmount}</div>
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
