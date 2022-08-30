import React from 'react'

const DataCellLabel = (props) => {
    const { startWeek, Forecast, status, weeks } = props.option;
    // cell-width-${weeks}
  return (
    <div className={`data-cell-label p-1 flex flex-row flex-wrap justify-center items-center bg-emerald-100 border border-l-4 border-green-500 text-custom-small `}>
        <p className='status-label m-0.5 p-px font-medium text-sky-700'>{status}</p>
        <p className='status-zone-label m-0.5 p-px font-medium text-white bg-sky-700 rounded-sm'>4A</p>
        <p className='status-amount-label m-0.5 p-px font-medium'>{Forecast}</p>
    </div>
  )
}

export default DataCellLabel