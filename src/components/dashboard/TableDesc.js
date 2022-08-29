import React, { Component } from 'react';
import { foreCastInfo, weekWiseData } from '../../apiData/forecastData';
import DataCellLabel from './DataCellLabel';

class TableDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foreCastDetails: foreCastInfo,
            weekWiseDetails: weekWiseData
        }
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
                            <p className="bg-sky-600 py-3 w-full"></p>
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
        // forecastInfo.map((data, index) => {
        //     if(dataCell.week === data.startWeek) {
        //         week = data.weeks;
        //         isStatusBar = true;
        //         return {week, isStatusBar};
        //     }
        // })
    }
    renderCellStatusLabel = (isStatusBar, week, item, dataCell, i) => {
        // console.log('WWWWWWWWWWWWWWWWWWW', week)
        return <>
            {isStatusBar && <td colSpan={week} className='py-2 border border-slate-300 bg-white w-24 px-2 overflow-hidden' key={i}>
                {item.forecastInfo.map((data, indexValue) => {
                    if (dataCell.week === data.startWeek) {
                        return <DataCellLabel option={data} />
                    }
                })}
            </td>}
            {!isStatusBar && <td className='py-2 border border-slate-300 bg-white w-24 px-2 overflow-hidden' key={i}></td>}
            </>
    }
    renderElement = (item) => {
        for (let i = 0; i < this.state.foreCastDetails.length; i++) {
            const element = this.state.foreCastDetails[i];

            const { totalReserveCell, week, isStatusBar } = this.getColspanCell(item.forecastInfo, element);
            console.log(i);
            // i = isStatusBar ? i + week : i;

            console.log(i, ' --- ', week);

            return this.renderCellStatusLabel(isStatusBar, week, item, element, i);
        }
        // return this.state.foreCastDetails.map((dataCell, i) => {
        //     // let totalReserveCell = 0;
        //     // return item.forecastInfo.map((data, index) => {
        //     //     // totalReserveCell += data.weeks;
        //     //     if(dataCell.week === data.startWeek) {
        //     //         // i += data.weeks;
        //     //         return <>
        //     //             <td colSpan={data.weeks} className='py-2 border border-slate-300 bg-white w-24 px-2' key={i}>
        //     //                 <DataCellLabel option={data} />
        //     //             </td>
        //     //         </>
        //     //     }
        //     // })
        //     const { totalReserveCell, week, isStatusBar } = this.getColspanCell(item.forecastInfo, dataCell);
        //     i = isStatusBar ? i + week : i;
        //     console.log(i, ' --- ', this.getColspanCell(item.forecastInfo, dataCell))
        //     return this.renderCellStatusLabel(isStatusBar, week, item, dataCell, i);
        // })
    }
    renderTableData = () => {
        return this.state.weekWiseDetails.data.map((item, index) => {
            return <tr key={index}>
                <td className='py-2 border border-slate-300 bg-white font-semibold w-96 px-2'>
                    <p className='whitespace-no-wrap text-gray-900 text-sm'>{item.Title}</p>
                </td>
                {this.renderElement(item)}
        </tr>
    });
    // return this.state.Forecast.map((item, index) => {
    //     return (
    //         <td colspan={(index === 2 || index === 8) ? '2' : '0'} key={index} className={`py-2 border border-slate-300 bg-white font-semibold ${index === 0 ? 'w-96 px-2' : 'text-center w-24'}`}>
    //             {index === 0 && <p className={`whitespace-no-wrap ${index === 0 ? 'text-gray-900 text-sm' : 'text-gray-600 text-xs'}`}>{item}</p>}
    //             {(index === 2 || index === 8) && <DataCellLabel />}
    //         </td>
    //     );
    // });
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
