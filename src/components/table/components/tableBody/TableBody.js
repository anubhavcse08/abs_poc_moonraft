import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        setCurrentItem(item);
        // setCurrentForecastData(item.forecastInfo);
    }, [item]);

    const updateWeeksData = (options) => {
        const { expandableWidth, startWeek, rowIndex, eventIndex } = options;
        let currentForecastLabels = currentItem;
        console.log('currentItemcurrentItemcurrentItem11111111111', currentForecastLabels)
        // currentForecastLabels = currentForecastLabels.forecastInfo;
        console.log('currentItemcurrentItemcurrentItem', currentForecastLabels.forecastInfo)
        // for (let i = eventIndex + 1; i < currentForecastLabels.forecastInfo.length; i++) {
        //     if (startWeek === currentForecastLabels.forecastInfo[i].startWeek) {
        //         currentForecastLabels.forecastInfo[i].$row += 1;
        //     }
        // }
        currentForecastLabels.forecastInfo[eventIndex].weeks = expandableWidth;
        setCurrentItem(currentForecastLabels);
        console.log(currentForecastLabels.forecastInfo[eventIndex], " +++++ ", expandableWidth, " --- ", rowIndex, ' === ', eventIndex);
    }

    const renderTableRows = (isStatusBar, item, dataCell, i) => {
        // const dragAction = { draggable: true, onDragStart, rowIndex };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
                {currentItem.forecastInfo.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} eventIndex={index} updateWeeksData={updateWeeksData} rowIndex={rowIndex} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
        </>
    }

    return currentQuarterData.map((element, i) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>PPPPPPP ', currentItem)
        if (currentItem && currentItem.forecastInfo) {
            const isStatusBar = currentItem.forecastInfo.some((weekData) => element.week === weekData.startWeek);
            return renderTableRows(isStatusBar, item, element, i);
        }
        return null;
    });
}

export default TableBody;
