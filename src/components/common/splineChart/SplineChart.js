import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function SplineChart(props) {
    const { isGrowth } = props;
    const colorValue = isGrowth ? 2 : 5;
    const options = {
        chart: {
            type: 'spline'
        },
        plotOptions: {
            areaspline: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[colorValue]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[colorValue]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 1
                },
                lineWidth: 15,
                states: {
                    hover: {
                        lineWidth: 15
                    }
                },
                threshold: null
            }
        },
        series: [
            {
                data: isGrowth ? [0, 16, 8, 21] : [24, 1, 15, 4],
                type: 'areaspline',
                color: isGrowth ? 'green' : 'red'
            }
        ]
    };
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default SplineChart;