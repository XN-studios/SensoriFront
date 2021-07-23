import { React, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Form } from 'react-bootstrap'
import Button from './Button'

const LineChart = ({ times, oxy, co2, temp }) => {

    const firstValRef = useRef()
    const lastValRef = useRef()
    const [firstVal, setFirstVal] = useState(0)
    const [lastVal, setLastVal] = useState(6)

    function setBoundaries(e) {
        e.preventDefault();
        e.stopPropagation();
        const firstIndex = times.indexOf(firstValRef.current.value)
        const lastIndex = times.indexOf(lastValRef.current.value) + 1
        setFirstVal(firstIndex)
        setLastVal(lastIndex)
    }

    return (
        <div className="chart">
            <Line 
                data= {{
                    labels: times.slice(firstVal, lastVal),
                    datasets: [
                        {
                            label: "{oxygen}",
                            data: oxy.slice(firstVal, lastVal),
                            backgroundColor: 'blue',
                            bordercolor: 'black',
                            borderWidth: 2,
                        },
                        {
                            label: "{CO2}",
                            data: co2.slice(firstVal, lastVal),
                            backgroundColor: 'dark grey',
                            bordercolor: 'black',
                            borderWidth: 2,
                        },
                        {
                            label: "{temperature}",
                            data: temp.slice(firstVal, lastVal),
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
                    },
                    legend: {
                        labels: {
                        fontSize: 50,
                        },
                    },
                }}
            />
            <div className="chart-settings">
                <Form >
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    Display values
                    <Form.Group id="first-value">
                        <Form.Label>From:</Form.Label>
                        <Form.Control type="text" ref={firstValRef} />
                    </Form.Group>
                    <Form.Group id="last-value">
                        <Form.Label>To:</Form.Label>
                        <Form.Control type="text" ref={lastValRef} />
                    </Form.Group>
                    <Button text="Render" onClick={setBoundaries} buttonStyle={{backgroundColor: 'rgb(64, 168, 50)'}} />
                </Form>
            </div>
        </div>
    )
}

export default LineChart
