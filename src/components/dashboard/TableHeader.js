import React, { useState } from "react";
import { foreCastInfo } from "../../apiData/forecastData";

const getForecastStatus = (targetType) => {
    let bgColor = 'bg-sky-600';
    switch (targetType) {
        case "Good":
            bgColor = "bg-sky-600";
            break;
        case "Average":
            bgColor = "bg-sky-300";
            break;
        case "Low":
            bgColor = "bg-sky-100";
            break;
        default:
            break;
    }
    return bgColor;
}
const TableHeader = ({headerTitle}) => {
    const [foreCastDetails, setForeCastDetails] = useState(foreCastInfo);
    return <tr>
        <th className='py-2 border border-slate-300 bg-white font-semibold w-60 px-2 text-left text-xs'>{headerTitle}</th>
        {foreCastDetails.map((item, index) => {
            return <th key={index} className={`${headerTitle === 'Weeks' ? 'py-1' : 'py-3'} border border-slate-300 bg-white font-semibold text-center w-20`}>
                {headerTitle === 'Weeks' ?
                    <><p className="whitespace-no-wrap text-gray-500 text-xs text-custom-small">{item.week}</p>
                        <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.weekNumber}</p></> : <>
                        <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.target}</p>
                        <p className={`${getForecastStatus(item.targetType)} py-3 w-full`}></p>
                    </>}
            </th>
        })}
    </tr>
}

export default TableHeader;