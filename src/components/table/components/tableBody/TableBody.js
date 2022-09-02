import React from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const renderTableRows = (isStatusBar, item, dataCell, i) => {
    return <>
        {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
            {item.forecastInfo.map((data, index) => {
                if (dataCell.week === data.startWeek) {
                    return <EventStatus key={index} option={data} row={data.$row} />
                }
                return <></>
            })}
        </td>}
        {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
    </>
}
const TableBody = ({ item, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    return currentQuarterData.map((element, i) => {
        const isStatusBar = item.forecastInfo.some((weekData) => element.week === weekData.startWeek);
        return renderTableRows(isStatusBar, item, element, i);
    });
}

export default TableBody;