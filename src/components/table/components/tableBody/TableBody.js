import React, { useEffect, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';
import EventStatus from '../eventStatus/EventStatus';

const TableBody = ({ item, rowIndex, currentPeriod }) => {
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentForecastData, setCurrentForecastData] = useState([]);

    // Minimum resizable area
    var minWidth = 60;
    var minHeight = 40;

    // Thresholds
    var MARGINS = 4;

    // End of what's configurable.
    var clicked = null;
    var onRightEdge, onLeftEdge, eventElement;
    var rightScreenEdge;
    var b, x, e;
    var redraw = false;

    useEffect(() => {
        setCurrentForecastData(item.forecastInfo);
    }, [item]);

    // const swapEventStatus = (fromEvent, toEvent) => {
    //     let eventLabels = currentQuarterData.slice();
    //     let currentLabelsData = currentForecastData.slice();
    //     let fromIndex = -1;
    //     let toIndex = -1;
    //     let currentLabels = 0;

    //     for (let i = 0; i < eventLabels.length; i++) {
    //         if (eventLabels[i].week === fromEvent.startWeek) {
    //             fromIndex = i;
    //         }
    //         if (eventLabels[i].week === toEvent.startWeek) {
    //             toIndex = i;
    //         }
    //     }
    //     for (let i = 0; i < currentLabelsData.length; i++) {
    //         const data = currentLabelsData[i];
    //         if (data.startWeek === fromEvent.startWeek) {
    //             currentLabels = i;
    //         }
    //     }
    //     if (fromIndex !== -1 && toIndex !== -1 && fromEvent.index === rowIndex) {
    //         currentLabelsData[currentLabels].startWeek = toEvent.startWeek;
    //         setCurrentForecastData(currentLabelsData);
    //     }
    // };
    // const onDragStart = (e, startWeek, index) => {
    //     let fromEvent = JSON.stringify({ startWeek, index });
    //     e.dataTransfer.setData("dragContent", fromEvent);
    // }
    // const onDragOver = (e) => {
    //     e.preventDefault(); // Necessary. Allows us to drop.
    //     return false;
    // }
    // const onDrop = (e, startWeek, index) => {
    //     e.preventDefault();
    //     let fromEvent = JSON.parse(e.dataTransfer.getData("dragContent"));
    //     let toEvent = { startWeek, index };
    //     // swapEventStatus(fromEvent, toEvent);
    //     return false;
    // }
    function animate() {
        requestAnimationFrame(animate);
        if (!redraw) return;
        redraw = false;
        if (clicked && clicked.isResizing) {
            if (clicked.onRightEdge) eventElement.style.width = Math.max(x, minWidth) + 'px';
            if (clicked.onLeftEdge) {
                var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
                if (currentWidth > minWidth) {
                    eventElement.style.width = currentWidth + 'px';
                    eventElement.style.left = e.clientX + 'px';
                }
            }
            return;
        }
        if (clicked && clicked.isMoving) {
            // moving
            eventElement.style.left = (e.clientX - clicked.x) + 'px';
            return;
        }
        // This code executes when mouse moves without clicking
        // style cursor
    }
    const calc = (e, eventId) => {
        // console.log(e, eventId);
        eventElement = document.getElementById(eventId);
        b = eventElement.getBoundingClientRect();
        x = e.clientX - b.left;
        onLeftEdge = x < MARGINS;
        onRightEdge = x >= b.width - MARGINS;
        rightScreenEdge = window.innerWidth - MARGINS;
    }
    const canMove = () => {
        return x > 0 && x < b.width;
    }
    const onDown = (e, eventId) => {
        console.log(" onnnn dowwnnnnn");
        calc(e, eventId);
        var isResizing = onRightEdge || onLeftEdge;
        clicked = {
            x: x,
            cx: e.clientX,
            w: b.width,
            isResizing: isResizing,
            isMoving: !isResizing && canMove(),
            onLeftEdge: onLeftEdge,
            onRightEdge: onRightEdge
        };
    }
    const onMove = (ee, eventId) => {
        console.log(" on moveeeee");
        calc(ee, eventId);
        e = ee;
        redraw = true;
        if (onRightEdge || onLeftEdge) {
            eventElement.style.cursor = 'ew-resize';
            // pane.style.cursor = 'move';
        } else {
            eventElement.style.cursor = 'default';
        }

        animate();
    }

    const onUp = (e, eventId) => {
        console.log(" UUUUUUUUPPPPPPP");
        calc(e, eventId);
        clicked = null;
    }
    const onTouchDown = (e, eventId) => {
        console.log(" TouchDownnnn");
        onDown(e.touches[0], eventId);
        e.preventDefault();
    }
    const onTouchMove = (e, eventId) => {
        console.log(" Toucchhhhh moveee");
        onMove(e.touches[0], eventId);
    }
    const onTouchEnd = (e, eventId) => {
        console.log(" Touchhhhh endd");
        if (e.touches.length == 0) onUp(e.changedTouches[0], eventId);
    }
    const onMouseDown = (e, eventId) => {
        console.log(" Mousssseeee downnnn");
        onDown(e, eventId);
        e.preventDefault();
        console.log(redraw, ' clicccc ', clicked);
    }
    const renderTableRows = (isStatusBar, item, dataCell, i) => {
        const dragAction = { draggable: true, onTouchDown, onTouchMove, onTouchEnd, onMouseDown, onMove, onUp, rowIndex };
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-20 relative`} key={i}>
                {currentForecastData.map((data, index) => {
                    if (dataCell.week === data.startWeek) {
                        return <EventStatus key={index} option={data} row={data.$row} eventIndex={index} dragAction={dragAction} />
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
