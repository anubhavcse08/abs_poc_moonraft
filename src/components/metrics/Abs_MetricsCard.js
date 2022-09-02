import React from 'react'
import GraphCard from './GraphCard';
import TimeButtonMenu from './TimeButtonMenu';

const Abs_MetricsCard = ({ getCurrentQuater, currentQuaterData }) => {
    return (
        <section>
            <div class="card">
                <div class="card-header flex items-center p-4 border-b border-slate-300 font-semibold">
                    <div className="text-base "><i class="bi bi-chevron-contract mr-1"></i>Metrics</div>
                    <button class="button-more text-sky-600 text-xs md:text-sm ">More</button>
                </div>
                <div class="card-body py-3 px-4">
                    <TimeButtonMenu getCurrentQuater={getCurrentQuater} />
                    <div className="card-graph-container item-flex-row gap-3">
                        {currentQuaterData && currentQuaterData.metrics && currentQuaterData.metrics.map(data => {
                            return <GraphCard options={data} isGrowth={data.isTrendPositive} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abs_MetricsCard;