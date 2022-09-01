import React, { useState } from "react";
import { foreCastInfo, weekWiseData } from "../../apiData/forecastData";
import DataCellLabel from "./DataCellLabel";

const TableDesc = () => {

    const [foreCastDetails, setForeCastDetails] = useState(foreCastInfo);
    const [weekWiseDetails, setWeekWiseDetails] = useState(weekWiseData);

    const getForecastStatus = (targetType) => {
        let bgColor = 'bg-sky-600';
        switch (targetType) {
            case "Good":
                bgColor = "bg-sky-600";
                break;
            case "Average":
                bgColor = "bg-sky-300";
                break;
            case "Low":
                bgColor = "bg-sky-100";
                break;
            default:
                break;
        }
        return bgColor;
    }
    const renderTableHeaderCell = (headerTitle) => {
        return <tr>
            <th className='py-2 border border-slate-300 bg-white font-semibold w-96 px-2 text-left'>{headerTitle}</th>
            {foreCastDetails.map((item, index) => {
                return <th key={index} className={`${headerTitle === 'Weeks' ? 'py-1' : 'py-3'} border border-slate-300 bg-white font-semibold text-center w-24`}>
                    {headerTitle === 'Weeks' ?
                        <><p className="whitespace-no-wrap text-gray-500 text-xs text-custom-small">{item.week}</p>
                            <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.weekNumber}</p></> : <>
                            <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.target}</p>
                            <p className={`${getForecastStatus(item.targetType)} py-3 w-full`}></p>
                        </>}
                </th>
            })}
        </tr>
    }
    const renderTableHeader = () => {
        return (
            <>
                {renderTableHeaderCell('Weeks')}
                {renderTableHeaderCell('Forecast')}
            </>
        )
    }
    const getColspanCell = (forecastInfo, dataCell) => {
        let week = 0, isStatusBar = false;
        for (let i = 0; i < forecastInfo.length; i++) {
            const element = forecastInfo[i];
            if (dataCell.week === element.startWeek) {
                week = element.weeks;
                isStatusBar = true;
                break;
            }
        }
        return { week, isStatusBar };
    }
    const renderCellStatusLabel = (isStatusBar, item, dataCell, i) => {
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-24 relative`} key={i}>
                {item.forecastInfo.map((data) => {
                    if (dataCell.week === data.startWeek) {
                        return <DataCellLabel option={data} row={data.$row} />
                    }
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-x-slate-300 bg-white w-24 relative`} key={i}></td>}
        </>
    }
    const renderElement = (item) => {
        return foreCastDetails.map((element, i) => {
            const { isStatusBar } = getColspanCell(item.forecastInfo, element);
            return renderCellStatusLabel(isStatusBar, item, element, i);
        });
    }

    const renderTableData = () => {
        return weekWiseDetails.data.map((item, index) => {
            return <tr key={index} className="border-dotted border-t-2 border-y-slate-300">
                <td className='py-2 border border-x-slate-300 bg-white font-semibold w-96 px-2'>
                    <div className='flex flex-row items-baseline'>
                        <input type="checkbox" class="checked:bg-blue-500 cursor-pointer" />
                        <p className='whitespace-no-wrap text-gray-900 text-sm ml-1'>{item.Title}</p>
                    </div>
                </td>
                {renderElement(item)}
            </tr>
        });
    }

    return (
        <React.Fragment>
            <div className="container mx-auto px-4">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md overflow-hidden">
                        <table className="min-w-full leading-normal border-collapse border border-slate-400">
                            <thead>
                                {renderTableHeader()}
                            </thead>
                            <tbody>
                                {renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TableDesc;
