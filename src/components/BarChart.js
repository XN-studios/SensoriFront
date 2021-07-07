import React from 'react'
import { Bar } from 'react-chartjs-2'


const BarChart = () => {
    return (
        <div>
            <Bar 
            data= {{
                labels: ['REd', 'Blue', 'ok', 'green'],
                datasets: [
                    {
                        label: "# of votes",
                        data: [3, 4, 5, 6],
                        backgroundColor: [
                            'rgba: 252, 186, 3, 0.2',
                            'rgba: 252, 186, 3, 0.2',
                            'rgba: 252, 186, 3, 0.2',
                            'rgba: 252, 186, 3, 0.2',
                        ],
                        bordercolor: [
                            'rgba: 116, 44, 199, 0.2',
                            'rgba: 116, 44, 199, 0.2',
                            'rgba: 116, 44, 199, 0.2',
                            'rgba: 116, 44, 199, 0.2'
                        ],
                        borderWidth: 2,
                    },
                    {
                        label: 'Quantity',
                        data: [4, 5, 6, 7],
                        backgroundColor: 'orange',
                        borderColor: 'red'
                    }
                ]
            }}
            height={400}
            width={500}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        }
                    ]
                }
            }}
            />
        </div>
    )
}

export default BarChart
