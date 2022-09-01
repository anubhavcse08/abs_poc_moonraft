import React, { useState } from 'react';
import { foreCastInfo } from '../../apiData/forecastData';
import DataCellLabel from './DataCellLabel';

const getColspanCell = (forecastInfo, dataCell) => {
    let isStatusBar = false;
    for (let i = 0; i < forecastInfo.length; i++) {
        const element = forecastInfo[i];
        if (dataCell.week === element.startWeek) {
            isStatusBar = true;
            break;
        }
    }
    console.log('IIIIIIIIIIIISSSSSSSSss', isStatusBar)
    return { isStatusBar };
}
const renderCellStatusLabel = (isStatusBar, item, dataCell, i) => {
    console.log(isStatusBar, ' ------- ', dataCell.week);
    return <>
        {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
            {item.forecastInfo.map((data) => {
                if (dataCell.week === data.startWeek) {
                    return <DataCellLabel option={data} row={data.$row} />
                }
                return <></>
            })}
        </td>}
        {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
    </>
}
const TableBody = ({item, currentPeriod}) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    return currentQuarterData.map((element, i) => {
        // console.log('IIIIIIIIIIIIIII', element)
        const { isStatusBar } = getColspanCell(item.forecastInfo, element);
        return renderCellStatusLabel(isStatusBar, item, element, i);
    });
}

export default TableBody;