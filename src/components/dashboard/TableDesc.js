import React, { useEffect, useState } from "react";
import { weekWiseData } from "../../apiData/forecastData";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./TableDesc.css";

const TableDesc = (props) => {
    const { selectStatus, onShowResult, currentPeriod } = props;
    const [currentQuarterTableData, setCurrentQuarterTableData] = useState([]);

    const selectedStatusData = () => {
        let filterData = [];
        const currentQuarterDataValue = weekWiseData.data.filter(data => data.quarter === currentPeriod);
        currentQuarterDataValue && currentQuarterDataValue.map((item) => {
            for (let i = 0; i < item.forecastInfo.length; i++) {
                const data = item.forecastInfo[i];
                const status = data.status === "Pending with Vendor" ? "Pending" : data.status;
                if (status === selectStatus) {
                    filterData.push(item);
                    break;
                }
            }
        });
        if (selectStatus === 'All' && filterData.length === 0) {
            filterData = currentQuarterDataValue;
        }
        onShowResult(filterData.length);
        return filterData;
    }

    useEffect(() => {
        setCurrentQuarterTableData(selectedStatusData());
    }, [currentPeriod, selectStatus]);

    const renderTableHeader = () => {
        return (
            <>
                <TableHeader headerTitle='Weeks' currentPeriod={currentPeriod}/>
                <TableHeader headerTitle='Forecast' currentPeriod={currentPeriod}/>
            </>
        )
    }

    const renderTableData = () => {
        return currentQuarterTableData && currentQuarterTableData.map((item, index) => {
            return <tr key={index} className="border-dotted border-b-2 border-y-slate-300">
                <td className='py-2 border border-x-slate-300 bg-white font-semibold w-60 px-2'>
                    <div className='flex flex-row items-center'>
                        <input type="checkbox" class="checked:bg-blue-500 cursor-pointer" />
                        <p className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-900 text-xs ml-1'>{item.Title}</p>
                    </div>
                </td>
                <TableBody item={item} currentPeriod={currentPeriod} />
            </tr>
        });
    }

  return (
    <React.Fragment>
      <div className="container mx-auto px-4">
        <div className="-mx-4 py-3 overflow-x-auto hide-scrollbars">
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

export default TableDesc;
