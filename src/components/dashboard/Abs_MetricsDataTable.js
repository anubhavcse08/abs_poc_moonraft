import React from 'react'
import Abs_FilterStatus from '../Abs_table_filter/Abs_FilterStatus';
import TableDesc from './TableDesc';
import TitleForecastStatus from './TitleForecastStatus';

const Abs_MetricsDataTable = (props) => {
    const { onSelectStatus, currentQuaterData, resultShow, selectStatus, onShowResult } = props;
    return (
        <section>
            <div class="card">
                <Abs_FilterStatus onSelectStatus={onSelectStatus} currentQuaterData={currentQuaterData} />
                <div class="card-body py-3 px-4">
                    <TitleForecastStatus resultShow={resultShow} currentPeriod={currentQuaterData.period} />
                    <TableDesc selectStatus={selectStatus} onShowResult={onShowResult} currentPeriod={currentQuaterData.period} />
                    <div className="flex justify-center">
                        <button className="px-3 py-1.5 text-sky-600 mx-auto rounded border md:border-2 border-sky-600 md:rounded-md text-xs">Load More</button>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Abs_MetricsDataTable;