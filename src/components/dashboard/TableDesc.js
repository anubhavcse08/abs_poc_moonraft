import React, { Component } from 'react'

class TableDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // rowData: [
            //     { title: 'Weeks', a: 40, b: 41, c: 42, d: 43, e: 44, f: 45, g: 46, h: 47, i: 48, j: 49, k: 50, l: 51, m: 52 },
            //     {
            //         title: 'Forecast', a: '$800.87', b: '$800.87', c: '$800.87', d: '$800.87', e: '$800.87', f: '$800.87',
            //         g: '$800.87', h: '$800.87', i: '$800.87', j: '$800.87', k: '$800.87', l: '$800.87', m: '$800.87'
            //     }
            // ],
            data: ['Weeks', 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
            Forecast: ['Forecast', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87', '$800.87'],
            // : {isApproved: 'Approved'}
        }
    }
    renderTableHeader = () => {
        return this.state.data.map((item, index) => {
            return (
                // <th key={index} className={`py-2 border border-slate-300 text-left text-xs font-semibold text-gray-700 ${index === 0 ? 'w-1/6 px-3' : 'text-center'}`}>
                //     {/* {item} */}
                //     <p className={`whitespace-no-wrap ${index === 0 ? 'text-gray-900 text-sm' : 'text-gray-600 text-xs'}`}>{item}</p>
                //     {index !== 0 && <p className="bg-sky-600 py-3 w-full"></p>}
                // </th>
                <th key={index} className={`py-2 border border-slate-300 bg-white font-semibold ${index === 0 ? 'w-1/6 px-2' : 'text-center'}`}>
                    {index !== 0 && <p className="whitespace-no-wrap text-gray-500 text-xs text-custom-small">12/12/2022</p>}
                    <p className={`whitespace-no-wrap ${index === 0 ? 'text-gray-900 text-sm text-left' : 'text-gray-600 text-xs'}`}>{item}</p>
                </th>)
        });
    }
    renderTableSecondHeader = () => {
        return this.state.Forecast.map((item, index) => {
            return (
                <td key={index} className={`py-2 border border-slate-300 bg-white font-semibold ${index === 0 ? 'w-1/6 px-2' : 'text-center'}`}>
                    <p className={`whitespace-no-wrap ${index === 0 ? 'text-gray-900 text-sm' : 'text-gray-600 text-xs'}`}>{item}</p>
                    {index !== 0 && <p className="bg-sky-600 py-3 w-full"></p>}
                </td>
            );
        });
    }
    renderTableData = () => {
        return this.state.Forecast.map((item, index) => {
            return (
                <td key={index} className={`py-2 border border-slate-300 bg-white font-semibold ${index === 0 ? 'w-1/6 px-2' : 'text-center'}`}>
                    {index === 0 && <p className={`whitespace-no-wrap ${index === 0 ? 'text-gray-900 text-sm' : 'text-gray-600 text-xs'}`}>{item}</p>}
                </td>
            );
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
                                    <tr>{this.renderTableHeader()}</tr>
                                    <tr>{this.renderTableSecondHeader()}</tr>
                                </thead>
                                <tbody>
                                    <tr>{this.renderTableData()}</tr>
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
