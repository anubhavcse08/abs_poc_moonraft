import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod, selectStatus, updateWeeksData }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        setCurrentItem(item);
    }, [item]);

    const renderTableRows = (isStatusBar, dataCell, i) => {
        const dragAction = { selectStatus, rowIndex, currentPeriod };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
                {item.forecastInfo.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} eventIndex={index} updateWeeksData={updateWeeksData} dragAction={dragAction} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
        </>
    }

    return currentQuarterData.map((element, i) => {
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>PPPPPPP ', currentItem)
        // if (currentItem && currentItem.forecastInfo) {
            const isStatusBar = item.forecastInfo.some((weekData) => element.week === weekData.startWeek);
            return renderTableRows(isStatusBar, element, i);
        // }
        // return null;
    });
}

export default TableBody;
