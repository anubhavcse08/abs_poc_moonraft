import React, { useEffect, useState } from "react";
import { foreCastInfo, weekWiseData } from "../../apiData/forecastData";
import TableBody from "./components/tableBody/TableBody";
import TableHeader from "./components/tableHeader/TableHeader";
import "./Table.css";

const Table = (props) => {
    const { selectStatus, onShowResult, currentPeriod } = props;
    const currentQuarterData = foreCastInfo.filter(data => data.quarter === currentPeriod);
    const [currentQuarterTableData, setCurrentQuarterTableData] = useState([]);

    // useEffect(() => {
    //     setCurrentQuarterTableData(selectedStatusData(selectStatus));
    // }, [currentPeriod, selectStatus]);

    const selectedStatusData = (currentSelectedStatus) => {
        let filterData = [];
        const currentQuarterDataValue = weekWiseData.data.filter(data => data.quarter === currentPeriod);
        currentQuarterDataValue && currentQuarterDataValue.map((item) => {
            for (let i = 0; i < item.forecastInfo.length; i++) {
                const data = item.forecastInfo[i];
                const status = data.status === "Pending with Vendor" ? "Pending" : data.status;
                if (status === currentSelectedStatus) {
                    filterData.push(item);
                    break;
                }
            }
        });
        if (currentSelectedStatus === 'All' && filterData.length === 0) {
            filterData = currentQuarterDataValue;
        }
        // console.log(currentSelectedStatus, 'Filterrrrrr', filterData)
        onShowResult(filterData.length);
        return filterData;
    }


    const updateWeeksData = (options) => {
        const { expandableWidth, startWeek, selectStatus, rowIndex, eventIndex, moveType } = options;
        let currentForecastLabels = selectedStatusData(selectStatus);
        // console.log(selectStatus, 'currentQuarterTableData ++++ ', rowIndex)
        let collectExistWeekStart = [], collectAllWeekStart = [];
        let currentForecastInfo = currentForecastLabels[rowIndex].forecastInfo;
        // console.log('currentForecastInfo ', currentForecastInfo)
        for (let i = 0; i < currentForecastInfo.length; i++) {
            collectExistWeekStart.push(currentForecastInfo[i].startWeek)
        }
        for (let i = 0; i < currentQuarterData.length; i++) {
            collectAllWeekStart.push(currentQuarterData[i].week);
        }
        let flag = false, addOne = false, substractOne = false, maxNumberOfRow = 1;
        const currentRowValue = currentForecastInfo[eventIndex];
        let movedLabelUptoWeekStart = collectAllWeekStart.indexOf(currentRowValue.startWeek);
        movedLabelUptoWeekStart = (movedLabelUptoWeekStart - 1) + expandableWidth;
        if (currentForecastInfo[eventIndex + 1]) {
            if (currentRowValue.$row === currentForecastInfo[eventIndex + 1].$row) {
                if (collectAllWeekStart[movedLabelUptoWeekStart] >= currentForecastInfo[eventIndex + 1].startWeek) {
                    flag = true;
                    addOne = true;
                    substractOne = false;
                } else {
                    addOne = false;
                    substractOne = true;
                }
            }

        }
        for (let i = eventIndex + 1; i < currentForecastInfo.length; i++) {
            if ((addOne || substractOne) && flag && collectExistWeekStart[i] === currentForecastInfo[i].startWeek) {
                console.log('flag', flag)
                if (addOne) {
                    currentForecastInfo[i].$row += 1;
                }
                if (substractOne) {
                    const rowValue = currentForecastInfo[i].$row;
                    if (rowValue > 1) {
                        currentForecastInfo[i].$row -= 1;
                    }
                }
            }
        }
        for (let i = 0; i < currentForecastInfo.length; i++) {
            const element = currentForecastInfo[i];
            if (maxNumberOfRow < element.$row) {
                maxNumberOfRow = element.$row;
            }
        }
        currentForecastLabels[rowIndex].noOfRows = maxNumberOfRow;
        currentForecastInfo[eventIndex].weeks = expandableWidth;
        setCurrentQuarterTableData(currentForecastLabels);
        // console.log(currentForecastLabels[rowIndex], " +++++ ", maxNumberOfRow, " --- ", moveType, ' === ', eventIndex);
    }

    const renderTableHeader = () => {
        return (
            <>
                <TableHeader headerTitle='Weeks' currentPeriod={currentPeriod} />
                <TableHeader headerTitle='Forecast' currentPeriod={currentPeriod} />
            </>
        )
    }

    const renderTableData = () => {
        return selectedStatusData(selectStatus) && selectedStatusData(selectStatus).map((item, index) => {
            return <tr key={index} className="border-dotted border-b-2 border-y-slate-300">
                <td className='first-cell py-2 border border-x-slate-300 bg-white font-semibold w-60 px-2'>
                    <div className='flex flex-row items-center'>
                        <input type="checkbox" className="checked:bg-blue-500 cursor-pointer" />
                        <p className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-900 text-xs ml-1'>{item.Title}</p>
                    </div>
                </td>
                <TableBody 
                    item={item} 
                    rowIndex={index} 
                    currentPeriod={currentPeriod} 
                    selectStatus={selectStatus}
                    updateWeeksData={updateWeeksData} 
                    />
            </tr>
        });
    }

    return (
        <React.Fragment>
            <div className="container mx-auto px-4">
                <div id="scrollable-table" className="-mx-4 py-3 overflow-x-auto hide-scrollbars">
                    <div className="inline-block min-w-full shadow-md overflow-hidden">
                        <table className="min-w-full leading-normal border-collapse border border-slate-400">
                            <thead>{renderTableHeader()}</thead>
                            <tbody>{renderTableData()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Table;
