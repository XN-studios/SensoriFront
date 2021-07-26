import { React, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Form } from 'react-bootstrap'
import Button from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'


const LineChart = ({ dates, times, oxy, co2, temp }) => {

    const firstValRef = useRef()
    const lastValRef = useRef()
    const [firstVal, setFirstVal] = useState()
    const [lastVal, setLastVal] = useState()

    function setBoundaries(e) {
        e.preventDefault();
        e.stopPropagation();

        let firstIndex = 0;
        let lastIndex = times.length;

        if (firstValRef.current.value !== "") {
            firstIndex = times.indexOf(firstValRef.current.value);
        }
        if (lastValRef.current.value !== "") {
            lastIndex = times.indexOf(lastValRef.current.value) + 1;
        }

        setFirstVal(firstIndex)
        setLastVal(lastIndex)
    }

    function setDefault(e) {
        e.preventDefault();
        e.stopPropagation();

        firstValRef.current.value = '';
        lastValRef.current.value = '';

        setFirstVal(0)
        setLastVal(times.length)
    }

    return (
        <>
            <div className="canvas-container">
                <Line 
                    data= {{
                        labels: times.slice(firstVal, lastVal),
                        datasets: [
                            {
                                label: "Oxygen",
                                data: oxy.slice(firstVal, lastVal),
                                backgroundColor: 'blue',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "CO₂",
                                data: co2.slice(firstVal, lastVal),
                                backgroundColor: 'black',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "Temperature",
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
                        responsive: true,
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
            </div>
            <div className="chart-settings">
                <Form >
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <h5>Display values</h5>
                    <Form.Group id="first-value">
                        <Form.Label>from:</Form.Label>
                        <Form.Control type="text" ref={firstValRef} />
                    </Form.Group>
                    <Form.Group id="last-value">
                        <Form.Label>to:</Form.Label>
                        <Form.Control type="text" ref={lastValRef} />
                    </Form.Group>
                    <MdKeyboardArrowRight style={{ color: 'grey', marginRight: '0'}}/>
                    <button className="show-all" onClick={setDefault}>Show all</button>
                    <br></br>
                    <Button text="Render" onClick={setBoundaries} buttonStyle={{backgroundColor: 'rgb(64, 168, 50)', float: "right"}} />
                </Form>
            </div>
        </>
    )
}

export default LineChart
