import React, { useState } from 'react';
import { foreCastInfo } from '../../apiData/forecastData';
import DataCellLabel from './DataCellLabel';

const getColspanCell = (forecastInfo, dataCell) => {
    let week = 0, isStatusBar = false;
    for (let i = 0; i < forecastInfo.length; i++) {
        const element = forecastInfo[i];
        if (dataCell.week === element.startWeek) {
            week = element.weeks;
            isStatusBar = true;
            break;
        }
    }
    return { week, isStatusBar };
}
const renderCellStatusLabel = (isStatusBar, item, dataCell, i) => {
    return <>
        {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-24 relative`} key={i}>
            {item.forecastInfo.map((data) => {
                if (dataCell.week === data.startWeek) {
                    return <DataCellLabel option={data} row={data.$row} />
                }
                return <></>
            })}
        </td>}
        {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-24 relative`} key={i}></td>}
    </>
}
const TableBody = ({item}) => {
    const [foreCastDetails, setForeCastDetails] = useState(foreCastInfo);

    return foreCastDetails.map((element, i) => {
        const { isStatusBar } = getColspanCell(item.forecastInfo, element);
        return renderCellStatusLabel(isStatusBar, item, element, i);
    });
}

export default TableBody;