import React, { useEffect } from 'react';
import handleResize from '../../../common/handleResize';

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
  const { option: { startWeek, Forecast, status, weeks }, row, weekNumber, eventIndex, dragAction: { draggable, onDragStart, onDragEvent, rowIndex } } = props;
  const { bgColor, borderColor, textStatusColor } = getStatusColor(status);
  const eventId = `event-cell-label-${rowIndex}-${eventIndex}`;

  // useEffect(() => {
  //   handleResize(eventId)
  // }, [rowIndex, eventIndex])

  // console.log('weeksweeks ', props.option)
  const classProps = `resize horizontal absolute z-10 ${row > 1 ? `top-cell-${row}` : 'top-2'} ${weeks === 1 ? 'sm-line-height' : 'leading-3'}  py-1 ${bgColor} flex flex-row flex-wrap justify-left items-center ${borderColor} text-custom-small cursor-ew-resize cell-width-${weeks}`;
  return (
    <><div id={eventId} className={classProps} draggable={draggable}
      onDrag={(e) => onDragEvent(e, eventIndex, startWeek, rowIndex, weekNumber)}
      onDragStart={(e) => onDragStart(e, eventIndex, rowIndex)}
    >
      {status === 'Approved' || status === 'Executed' ? <p className='code-icon'>&#8414;</p> : <p className='code-icon'>&#8413;</p>}
      <p className={`status-label m-0.5 p-px font-medium text-${textStatusColor}`}>{status}</p>
      <p className={`status-zone-label m-0.5 p-px font-medium text-white bg-${textStatusColor} rounded-sm`}>4A</p>
      <p className='status-amount-label m-0.5 p-px font-medium'>{Forecast}</p>
    </div>
      {/* <div id="ghostpane"></div> */}
    </>
  );
};

export default EventStatus;
