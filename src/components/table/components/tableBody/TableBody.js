import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentForecastData, setCurrentForecastData] = useState([]);
    const [initialPos, setInitialPos] = React.useState(null);
    const [initialSize, setInitialSize] = React.useState(null);

    useEffect(() => {
        setCurrentForecastData(item.forecastInfo);
    }, [item]);

    const swapEventStatus = (startWeek, expandableWeeks, currentWeekNumber) => {
        let eventLabels = currentQuarterData.slice();
        let currentLabelsData = currentForecastData.slice();
        let fromIndex = -1;
        let firstWeekNumber = 1;
        // let toIndex = -1;
        let currentLabels = 0;
        if (expandableWeeks >= 1) {
            for (let i = 0; i < eventLabels.length; i++) {
                if (eventLabels[i].week === startWeek) {
                    fromIndex = i;
                    firstWeekNumber = eventLabels[i].weekNumber;
                }
                // if (eventLabels[i].week === toEvent.startWeek) {
                //     toIndex = i;
                // }
            }
            // console.log(firstWeekNumber, ' -1111-- ', fromIndex)
            if (fromIndex !== -1) {
                firstWeekNumber = firstWeekNumber + (expandableWeeks);
            }
            // console.log(firstWeekNumber, ' -2222-- ', fromIndex)
            for (let i = 0; i < currentLabelsData.length; i++) {
                const data = currentLabelsData[i];
                if (data.startWeek === startWeek) {
                    currentLabels = i;
                }
            }
            // console.log(firstWeekNumber, ' -3333-- ', currentLabels)
            for (let i = 0; i < currentLabelsData.length; i++) {
                // if (eventLabels[i].week !== startWeek) {
                // if(firstWeekNumber >= eventLabels[i].weekNumber) {
                //     console.log(firstWeekNumber, ' -4444-- ', eventLabels[i].weekNumber)
                // currentLabelsData[currentLabels].$row = currentLabelsData[currentLabels].$row + 1;
                // }
                // }
                if (i === currentLabels) {
                    console.log("reeeeeecheddddd", currentLabelsData.length)
                    i++;
                    // continue;
                } else {
                    console.log("reeeeeecheddddd", i)
                    for (let index = 0; index < eventLabels.length; index++) {
                        if (firstWeekNumber === eventLabels[index].weekNumber) {
                            // currentLabelsData[currentLabels].$row = currentLabelsData[currentLabels].$row + 1;
                        }
                    }
                    // if(firstWeekNumber >= )
                }
            }
            // for (let i = 0; i < currentLabelsData.length; i++) {
            //     const data = currentLabelsData[i];
            //     if (data.startWeek === startWeek) {
            //         currentLabels = i;
            //     }
            // }
            console.log(currentLabelsData, ' === ', eventLabels)

            currentLabelsData[currentLabels].weeks = expandableWeeks;
            setCurrentForecastData(currentLabelsData);
        }
    };
    const onDragStart = (e, eventIndex, rowIndex) => {
        // e.preventDefault();
        let resizable = document.getElementById(`event-cell-label-${rowIndex}-${eventIndex}`);
        // console.log(eventIndex, ' startttt ', resizable)
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
    }
    const onDragEvent = (e, eventIndex, startWeek, rowIndex, currentWeekNumber) => {
        // e.preventDefault();
        // let currentLabelsData = currentForecastData.slice();
        let resizable = document.getElementById(`event-cell-label-${rowIndex}-${eventIndex}`);
        let calculateWidth = Math.round((parseInt(initialSize) + parseInt(e.clientX - initialPos)) / 16);
        let expandableWidth = (Math.round(calculateWidth / 5) || 1);
        expandableWidth = expandableWidth > 13 ? 13 : expandableWidth;
        // console.log(initialSize, ' ----', e.clientX, '=====-', initialPos, ' +++ ', calculateWidth, "EEEEEEEEEEEEEEE ", expandableWidth)
        calculateWidth = expandableWidth * 5;
        swapEventStatus(startWeek, expandableWidth, currentWeekNumber);
        // currentLabelsData[currentLabels].startWeek = toEvent.startWeek;
        // console.log(eventIndex, "Ondrag Event ", resizable, ' === ', expandableWidth, ' +++ ', calculateWidth);
        resizable.style.cursor = 'ew-resize';
        // resizable.style.lineHeight = calculateWidth > 5 ? '12px' : '5px';
        // resizable.style.left = `${calculateWidth}rem`;
        resizable.style.width = `${calculateWidth}rem`;
    }
    // console.log(' --- ', currentForecastData);
    const renderTableRows = (isStatusBar, item, dataCell, i) => {
        const dragAction = { draggable: true, onDragStart, onDragEvent, rowIndex };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
                {currentForecastData.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} row={data.$row} dragAction={dragAction} weekNumber={dataCell.weekNumber} eventIndex={index} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}></td>}
        </>
    }

    return currentQuarterData.map((element, i) => {
        const isStatusBar = currentForecastData.some((weekData) => element.week === weekData.startWeek);
        return renderTableRows(isStatusBar, item, element, i);
    });
}

export default TableBody;
