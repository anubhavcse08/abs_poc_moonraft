import React from "react";
import { weekWiseData } from "../../apiData/forecastData";

const TitleForecastStatus = () => {
  const forecastStatus = [
    { title: "Good", bgColor: "bg-sky-600" },
    { title: "Average", bgColor: "bg-sky-400" },
    { title: "Low", bgColor: "bg-sky-200" },
  ];
  return (
    <div className="flex flex-row justify-between item-center">
      <div className="text-xss">
        Showing <span className="font-semibold">22</span> of{" "}
        <span className="font-semibold">{weekWiseData.data.length}</span>
      </div>
      <div className="flex flex-row text-xs gap-3 md:gap-4">
        {forecastStatus.map(({ title, bgColor }) => {
          return (
            <div className="flex flex-column justify-center items-center gap-1 md:gap-2">
              <p className={`rounded-sm w-4 h-3.5 ${bgColor}`}></p>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleForecastStatus;
