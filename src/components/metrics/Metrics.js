import React from 'react'
import MetricCard from "../common/metricCard/MetricCard";
import Tabs from '../common/tabs/Tabs';

const Metrics = ({ getCurrentQuater, currentQuaterData }) => {
    return (
        <section>
            <div className="card">
                <div className="card-header flex items-center p-4 border-b border-slate-300 font-semibold">
                    <div className="text-base "><i className="bi bi-chevron-contract mr-1"></i>Metrics</div>
                    <button className="button-more text-sky-600 text-xs md:text-sm ">More</button>
                </div>
                <div className="card-body py-3 px-4">
                    <Tabs getCurrentQuater={getCurrentQuater} />
                    <div className="card-graph-container item-flex-row gap-3">
                        {currentQuaterData && currentQuaterData.metrics && currentQuaterData.metrics.map((data, index) => {
                            return <MetricCard key={index} options={data} isGrowth={data.isTrendPositive} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Metrics;