import React, { useEffect, useRef, useState } from 'react';
import { foreCastInfo } from '../../../../apiData/forecastData';

const getStatusColor = (status) => {
  let bgColor = '', borderColor = '', textStatusColor = 'default-status';
  switch (status) {
    case "Approved":
      bgColor = 'bg-emerald-200';
      borderColor = 'border border-l-4 border-emerald-500';
      break;
    case "Draft":
      bgColor = 'bg-teal-50';
      borderColor = 'border border-l-1 border-teal-500';
      break;
    case "Planning":
      bgColor = 'bg-emerald-100';
      borderColor = 'status-planning-border border-dotted border-l-2 border-emerald-500';
      break;
    case "Executed":
      bgColor = 'bg-blue-100';
      borderColor = 'border border-l-4 border-blue-500';
      break;
    case "Pending with Vendor":
      bgColor = 'bg-yellow-100';
      borderColor = 'border border-l-4 border-yellow-500';
      textStatusColor = 'status-planning-yellow';
      break;
    default:
      break;
  }
  return { bgColor, borderColor, textStatusColor };
}
const EventStatus = (props) => {
  let { option: { startWeek, Forecast, status, weeks, $row },
    updateWeeksData, eventIndex, dragAction: { selectStatus, rowIndex, currentPeriod }
  } = props;
  const { bgColor, borderColor, textStatusColor } = getStatusColor(status);
  const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
  const [currentItemWidth, setCurrentItemWidth] = useState(80);
  const refCellLabel = useRef(null);
  const refLeft = useRef(null);
  const refRight = useRef(null);

  // useEffect(() => {
  //   // setweekState(weeks);
  //   // updateWeeksData();
  // }, [weeks, updateWeeksData])

  useEffect(() => {
    const resizableElement = refCellLabel.current;
    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10);
    // let height = parseInt(styles.height, 10);
    let x = 0;
    // let y = 0;
    // resizableElement.style.top = '0px';
    // resizableElement.style.left = '0px';
    const labelWidth = (width) => {
      let calculateWidth = Math.round(width / 16);
      let expandableWidth = (Math.round(calculateWidth / 5) || 1);
      expandableWidth = expandableWidth <= 13 ? expandableWidth : 13;
      return expandableWidth;
    }
    const updateNumberOfWeeks = (width, moveType) => {
      const expandableWidth = labelWidth(width);
      if (expandableWidth >= 1) {
        const options = {
          expandableWidth, startWeek, rowIndex,
          selectStatus, eventIndex, moveType
        };
        updateWeeksData(options);
      }
    }
    const updatePossibleMove = (width, moveType) => {
      let possibleLeftMove = 0, totalWidth = width;
      if (currentQuarterData[0].week !== startWeek) {
        for (let i = 0; i < currentQuarterData.length; i++) {
          const element = currentQuarterData[i];
          if (element.week === startWeek) {
            console.log(i, ' --- ', labelWidth(width), ' === ', moveType, ' +++ ', weeks);
            possibleLeftMove = (i + labelWidth(currentItemWidth)) * 80;
          }
        }
      }
      totalWidth = possibleLeftMove >= width ? width : possibleLeftMove;
      return totalWidth;
    }
    const calculateExactWidth = (width) => {
      return `${(labelWidth(width) || 1) * 5}rem`;
    }
    //Right move
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      width = width <= 80 ? 80 : width;
      // width = updatePossibleMove(width, 'rightmove');
      updateNumberOfWeeks(width, 'rightmove');
      resizableElement.style.width = `${width}px`;
    }
    const onMouseUpRightResize = () => {
      resizableElement.style.width = calculateExactWidth(width);
      setCurrentItemWidth((labelWidth(width) || 1) * 5);
      document.removeEventListener('mousemove', onMouseMoveRightResize)
    }
    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener('mousemove', onMouseMoveRightResize);
      document.addEventListener('mouseup', onMouseUpRightResize);
    }
    //Left move
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      width = width <= 80 ? 80 : width;
      // width = updatePossibleMove(width, 'leftmove');
      updateNumberOfWeeks(width, 'leftmove');
      resizableElement.style.width = `${width}px`;
    }
    const onMouseUpLeftResize = () => {
      resizableElement.style.width = calculateExactWidth(width);
      setCurrentItemWidth((labelWidth(width) || 1) * 5);
      document.removeEventListener('mousemove', onMouseMoveLeftResize)
    }
    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener('mousemove', onMouseMoveLeftResize);
      document.addEventListener('mouseup', onMouseUpLeftResize);
    }

    // Add mouse down event listner
    const resizerRight = refRight.current;
    resizerRight.addEventListener('mousedown', onMouseDownRightResize);
    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
      resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize);
    }
  }, [])
  // console.log('currentItemWidthcurrentItemWidth ---->>>> ', currentItemWidth)
  const classProps = `data-cell-label absolute z-10 ${$row > 1 ? `top-cell-${$row}` : 'top-2'} ${weeks === 1 ? 'sm-line-height' : ''} left-0.2 py-1 ${bgColor} flex flex-row flex-wrap justify-left items-center ${borderColor} text-custom-small cell-width-${weeks}`;
  return (
    <div ref={refCellLabel} className={classProps}>
      <div ref={refLeft} className='resizer resizer-l'></div>
      {status === 'Approved' || status === 'Executed' ? <p className='code-icon'>&#8414;</p> : <p className='code-icon'>&#8413;</p>}
      <p className={`status-label m-0.5 p-px font-medium text-${textStatusColor}`}>{status}</p>
      <p className={`status-zone-label m-0.5 p-px font-medium text-white bg-${textStatusColor} rounded-sm`}>4A</p>
      <p className='status-amount-label m-0.5 p-px font-medium'>{Forecast}</p>
      <div ref={refRight} className='resizer resizer-r'></div>
    </div>
  );
};

export default EventStatus;
