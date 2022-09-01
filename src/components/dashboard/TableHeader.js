import React, { useState } from "react";
import { foreCastInfo } from "../../apiData/forecastData";

const getForecastStatus = (targetType) => {
    let bgColor = 'bg-sky-600';
    switch (targetType) {
        case "Good":
            bgColor = "bg-sky-600";
            break;
        case "Average":
            bgColor = "bg-sky-400";
            break;
        case "Low":
            bgColor = "bg-sky-200";
            break;
        default:
            break;
    }
    return bgColor;
}
const TableHeader = ({headerTitle}) => {
    const [foreCastDetails, setForeCastDetails] = useState(foreCastInfo);
    return <tr className={`${headerTitle === 'Weeks' ? 'bg-white': 'bg-sky-50'}`}>
        <th className={`py-2 border border-slate-300 font-semibold w-96 px-2 text-left`}>{headerTitle}</th>
        {foreCastDetails.map((item, index) => {
            return <th key={index} className={`${headerTitle === 'Weeks' ? 'py-1' : 'py-3'} border border-slate-300 font-semibold text-center w-24`}>
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