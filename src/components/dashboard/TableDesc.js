import React, { useState } from "react";
import { weekWiseData } from "../../apiData/forecastData";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const TableDesc = () => {
    const [weekWiseDetails, setWeekWiseDetails] = useState(weekWiseData);

    const renderTableHeader = () => {
        return (
            <>
                <TableHeader headerTitle='Weeks' />
                <TableHeader headerTitle='Forecast' />
            </>
        )
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
                <TableBody item={item} />
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
