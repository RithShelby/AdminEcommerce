
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RadarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const data = {
            labels: ['Eating', 'Coding', 'Cardio','Sleeping'],
            datasets: [
                {
                    label: 'Last Year Activities',
                    borderColor: documentStyle.getPropertyValue('--gray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--gray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--gray-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--gray-400'),
                    data: [60, 70, 85, 85]
                },
                {
                    label: 'This Year Activities',
                    borderColor: documentStyle.getPropertyValue('--blue-700'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    pointBorderColor: documentStyle.getPropertyValue('--blue-700'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--blue-700'),
                    data: [70, 90, 80, 60]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="flex justify-content-center border border-1 rounded-4">
            <p className="fs-5 fw-bold m-3">My Activities</p>
            <hr/>
            <Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
