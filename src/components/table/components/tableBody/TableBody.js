import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        setCurrentItem(item);
    }, [item]);

    const updateWeeksData = (options) => {
        const { expandableWidth, startWeek, rowIndex, eventIndex, moveType } = options;
        let currentForecastLabels = {...currentItem};
        let collectExistWeekStart = [], collectAllWeekStart = [];
        for (let i = 0; i < currentForecastLabels.forecastInfo.length; i++) {
            collectExistWeekStart.push(currentForecastLabels.forecastInfo[i].startWeek)
        }
        for (let i = 0; i < currentQuarterData.length; i++) {
            collectAllWeekStart.push(currentQuarterData[i].week);
        }
        let flag = false, addOne = false, substractOne = false, maxNumberOfRow = 1;
        const currentRowValue = currentForecastLabels.forecastInfo[eventIndex];
        let movedLabelUptoWeekStart = collectAllWeekStart.indexOf(currentRowValue.startWeek);
        movedLabelUptoWeekStart = (movedLabelUptoWeekStart - 1) + expandableWidth;
        if (currentForecastLabels.forecastInfo[eventIndex + 1]) {
            if (currentRowValue.$row === currentForecastLabels.forecastInfo[eventIndex + 1].$row) {
                if (collectAllWeekStart[movedLabelUptoWeekStart] >= currentForecastLabels.forecastInfo[eventIndex + 1].startWeek) {
                    flag = true;
                    addOne = true;
                    substractOne = false;
                } else {
                    addOne = false;
                    substractOne = true;
                }
            }

        }
        for (let i = eventIndex + 1; i < currentForecastLabels.forecastInfo.length; i++) {
            if ((addOne || substractOne) && flag && collectExistWeekStart[i] === currentForecastLabels.forecastInfo[i].startWeek) {
                if(addOne) {
                    currentForecastLabels.forecastInfo[i].$row += 1;
                } 
                if(substractOne) {
                    const rowValue = currentForecastLabels.forecastInfo[i].$row;
                    if(rowValue > 1) {
                        currentForecastLabels.forecastInfo[i].$row -= 1;
                    }
                }
            }
        }
        for (let i = 0; i < currentForecastLabels.forecastInfo.length; i++) {
            const element = currentForecastLabels.forecastInfo[i];
            if(maxNumberOfRow < element.$row) {
                maxNumberOfRow = element.$row;
            }
        }
        currentForecastLabels.noOfRows = maxNumberOfRow;
        currentForecastLabels.forecastInfo[eventIndex].weeks = expandableWidth;
        setCurrentItem(currentForecastLabels);
        // console.log(currentForecastLabels.forecastInfo[eventIndex], " +++++ ", maxNumberOfRow, " --- ", moveType, ' === ', eventIndex);
    }

    const renderTableRows = (isStatusBar, dataCell, i) => {
        // const dragAction = { draggable: true, onDragStart, rowIndex };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${currentItem.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
                {currentItem.forecastInfo.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} eventIndex={index} updateWeeksData={updateWeeksData} rowIndex={rowIndex} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${currentItem.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
        </>
    }

    return currentQuarterData.map((element, i) => {
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>PPPPPPP ', currentItem)
        if (currentItem && currentItem.forecastInfo) {
            const isStatusBar = currentItem.forecastInfo.some((weekData) => element.week === weekData.startWeek);
            return renderTableRows(isStatusBar, element, i);
        }
        return null;
    });
}

export default TableBody;
