import React from 'react'
import ForecastStatus from '../table/components/foreCastStatus/ForecastStatus';
import Table from '../table/Table';
import TableFilter from '../tableFilter/TableFilter';

const WeeklyForecastDetails = (props) => {
    const { onSelectStatus, currentQuaterData, resultShow, selectStatus, onShowResult } = props;
    return (
        <section>
            <div class="card">
                <TableFilter onSelectStatus={onSelectStatus} currentQuaterData={currentQuaterData} />
                <div class="card-body py-3 px-4">
                    <ForecastStatus resultShow={resultShow} currentPeriod={currentQuaterData.period} />
                    <Table selectStatus={selectStatus} onShowResult={onShowResult} currentPeriod={currentQuaterData.period} />
                    <div className="flex justify-center">
                        <button className="px-3 py-1.5 text-sky-600 mx-auto rounded border md:border-2 border-sky-600 md:rounded-md text-xs">Load More</button>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default WeeklyForecastDetails;