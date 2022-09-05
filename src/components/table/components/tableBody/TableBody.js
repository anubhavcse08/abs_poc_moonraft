import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentForecastData, setCurrentForecastData] = useState([]);

    useEffect(() => {
        setCurrentForecastData(item.forecastInfo);
    }, [item]);

    const swapEventStatus = (fromEvent, toEvent) => {
        let eventLabels = currentQuarterData.slice();
        let currentLabelsData = currentForecastData.slice();
        let fromIndex = -1;
        let toIndex = -1;
        let currentLabels = 0;

        for (let i = 0; i < eventLabels.length; i++) {
            if (eventLabels[i].week === fromEvent.startWeek) {
                fromIndex = i;
            }
            if (eventLabels[i].week === toEvent.startWeek) {
                toIndex = i;
            }
        }
        for (let i = 0; i < currentLabelsData.length; i++) {
            const data = currentLabelsData[i];
            if (data.startWeek === fromEvent.startWeek) {
                currentLabels = i;
            }
        }
        if (fromIndex !== -1 && toIndex !== -1 && fromEvent.index === rowIndex) {
            currentLabelsData[currentLabels].startWeek = toEvent.startWeek;
            setCurrentForecastData(currentLabelsData);
        }
    };
    const onDragStart = (e, startWeek, index) => {
        let fromEvent = JSON.stringify({ startWeek, index });
        e.dataTransfer.setData("dragContent", fromEvent);
    }
    const onDragOver = (e) => {
        e.preventDefault(); // Necessary. Allows us to drop.
        return false;
    }
    const onDrop = (e, startWeek, index) => {
        e.preventDefault();
        let fromEvent = JSON.parse(e.dataTransfer.getData("dragContent"));
        let toEvent = { startWeek, index };
        swapEventStatus(fromEvent, toEvent);
        return false;
    }

    const renderTableRows = (isStatusBar, item, dataCell, i) => {
        const dragAction = { draggable: true, onDragStart, rowIndex };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}
                onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, dataCell.week, rowIndex)}>
                {currentForecastData.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} row={data.$row} dragAction={dragAction} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}
                onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, dataCell.week, rowIndex)}></td>}
        </>
    }

    return currentQuarterData.map((element, i) => {
        const isStatusBar = currentForecastData.some((weekData) => element.week === weekData.startWeek);
        return renderTableRows(isStatusBar, item, element, i);
    });
}

export default TableBody;
