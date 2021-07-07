import React from 'react'
import { Line } from 'react-chartjs-2'


const LineChart = ({ times, oxy, co2, temp }) => {

    // const times = values.results.map((elem) => {
    //     return elem.time;
    // });

    return (
        <div>
            <Line 
            data= {{
                labels: times,
                datasets: [
                    {
                        label: "{oxygen}",
                        data: oxy,
                        backgroundColor: 'blue',
                        bordercolor: 'black',
                        borderWidth: 2,
                    },
                    {
                        label: "{CO2}",
                        data: co2,
                        backgroundColor: 'dark grey',
                        bordercolor: 'black',
                        borderWidth: 2,
                    },
                    {
                        label: "{temperature}",
                        data: temp,
                        backgroundColor: 'red',
                        bordercolor: 'black',
                        borderWidth: 2,
                    },
                    
                ]
            }}
            height={400}
            width={500}
            options={{
                maintainAspectRatio: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            },
                        }
                    ]
                }
            }}
            />
        </div>
    )
}

export default LineChart
