import React, { Component, Fragment } from "react";
import { foreCastInfo, weekWiseData } from "../../apiData/forecastData";
import DataCellLabel from "./DataCellLabel";

class TableDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foreCastDetails: foreCastInfo,
            weekWiseDetails: weekWiseData
        }
    }
    getForecastStatus = (targetType) => {
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
    renderTableHeaderCell = (headerTitle) => {
        return <tr>
            <th className='py-2 border border-slate-300 bg-white font-semibold w-96 px-2 text-left'>{headerTitle}</th>
            {this.state.foreCastDetails.map((item, index) => {
                return <th key={index} className='py-2 border border-slate-300 bg-white font-semibold text-center w-24'>
                    {headerTitle === 'Weeks' ?
                        <><p className="whitespace-no-wrap text-gray-500 text-xs text-custom-small">{item.week}</p>
                            <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.weekNumber}</p></> : <>
                            <p className='whitespace-no-wrap text-gray-600 text-xs'>{item.target}</p>
                            <p className={`${this.getForecastStatus(item.targetType)} py-3 w-full`}></p>
                        </>}
                </th>
            })}
        </tr>
    }
    renderTableHeader = () => {
        return (
            <>
                {this.renderTableHeaderCell('Weeks')}
                {this.renderTableHeaderCell('Forecast')}
            </>
        )
    }
    getColspanCell = (forecastInfo, dataCell) => {
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
    renderCellStatusLabel = (isStatusBar, week, item, dataCell, i, count) => {
        return <>
            {isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-slate-300 bg-white w-24 relative`} key={i}>
                {item.forecastInfo.map((data) => {
                    if (dataCell.week === data.startWeek) {
                        return <DataCellLabel option={data} row={data.$row} />
                    }
                    return <></>
                })}
            </td>}
            {!isStatusBar && <td className={`py-2 custom-height-${item.noOfRows} border border-slate-300 bg-white w-24 relative`} key={i}></td>}
            {/* {!isStatusBar && count <= i && <td className='py-2 border border-slate-300 bg-white w-24' key={i}></td>} */}
        </>
    }
    renderElement = (item) => {
        let count = 0;
        return this.state.foreCastDetails.map((element, i) => {
            const { week, isStatusBar } = this.getColspanCell(item.forecastInfo, element);
            // count = isStatusBar ? i + week : count;
            return this.renderCellStatusLabel(isStatusBar, week, item, element, i, count);
        });
    }

    renderTableData = () => {
        return this.state.weekWiseDetails.data.map((item, index) => {
            return <tr key={index}>
                <td className='py-2 border border-slate-300 bg-white font-semibold w-96 px-2'>
                    <div className='flex flex-row items-baseline'>
                        <input type="checkbox" class="checked:bg-blue-500" />
                        <p className='whitespace-no-wrap text-gray-900 text-sm ml-1'>{item.Title}</p>
                    </div>
                </td>
                {this.renderElement(item)}
            </tr>
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto px-4">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md overflow-hidden">
                            <table className="min-w-full leading-normal border-collapse border border-slate-400">
                                <thead>
                                    {this.renderTableHeader()}
                                </thead>
                                <tbody>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TableDesc;
