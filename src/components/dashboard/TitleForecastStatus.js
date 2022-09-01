import React from 'react';
import { weekWiseData } from '../../apiData/forecastData';

const TitleForecastStatus = () => {
    const forecastStatus = [{ title: "Good", bgColor: "bg-sky-600" }, { title: "Average", bgColor: "bg-sky-400" }, { title: "Low", bgColor: "bg-sky-200" }];
    return <div className="flex flex-row justify-between item-center px-4">
        <div className='text-sm'>Showing <span className='font-medium'>22</span> of <span className='font-medium'>{weekWiseData.data.length}</span></div>
        <div className="flex flex-row">
            {forecastStatus.map(({ title, bgColor }) => {
                return <div className="flex flex-column justify-center"><p className={`mr-2 ml-3 mt-0.5 mb-0.5 p-2 rounded ${bgColor}`}></p><p className='text-sm'>{title}</p></div>
            })}
        </div>
    </div>
}

export default TitleForecastStatus;