import React from 'react'
import Dropdown from '../common/dropdown/Dropdown';

const TableFilter = ({currentQuaterData, onSelectStatus}) => {
  const dataElemets = ["All", "Approved", "Draft", "Executed", "Planning", "Pending"];
  return (
    <div class="card-header flex flex-wrap gap-y-2 gap-x-4 md:gap-0 items-center p-4 border-b border-slate-300 text-xs">
      <div className="inline-flex md:contents order-1 items-center gap-4">
        <div className="relative border rounded p-1 md:py-2 md:px-4">
          <i class="bi bi-calendar4 pr-2"></i>{currentQuaterData && currentQuaterData.period}
        </div>
        <div className="border w-px mx-4 py-4 hidden md:block order-3"></div>
        <div className="forecast md:ml-0 order-4">
          <span>Forecast: <span className="font-medium">$8,081.00</span></span>
          <span className="text-red-500 ml-2 font-semibold">
            <i class="bi bi-arrow-down"></i><span id="growth-perc">3.1</span>%
          </span>
        </div>
      </div>
      <div className="inline-flex items-center md:contents">
        <div className="border w-px mx-4 py-4 hidden md:block order-1"></div>
        <div className="search-box-2 md:ml-0 w-40 md:w-0 relative order-2 ">
          <div class="flex absolute inset-y-0 right-2 md:right-4 items-center pl-3 pointer-events-none text-slate-400">
            <i class="bi bi-search"></i>
          </div>
          <input type="search" className="border-2 rounded p-1 md:p-2 border-stone-300 focus:border-stone-400 w-full" placeholder="Search" required />
        </div>
        <div class="filterby mt-1 ml-4 md:ml-auto order-5">
          <label className="text-gray-500">Filter by:</label>
          <Dropdown onSelectValue={onSelectStatus} data={dataElemets} classProperties="font-medium ml-1 pr-1" />
        </div>
      </div>
      <div class="icons items-center gap-3 md:gap-4 ml-auto md:ml-4 text-xs md:text-base hidden md:flex order-6">
        <span className="icon"><i class="bi bi-calendar4"></i></span>
        <span className="icon"><i class="bi bi-fullscreen-exit"></i></span>
      </div>
    </div>
  )
}

export default TableFilter;