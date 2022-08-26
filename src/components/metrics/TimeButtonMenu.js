import React from 'react'

const TimeButtonMenu = () => {
  return (
    <div className='time-button-menu item-flex-row'>
        <p className='first-btn btnPadding'>This Quarter</p>
        <p className='second-btn btnPadding'>Next Quarter</p>
        <p className='third-btn btnPadding'>YTD</p>
        <p className='fourth-btn btnPadding'>1 Year</p>
    </div>
  )
}

export default TimeButtonMenu