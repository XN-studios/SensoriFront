import { React, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Form } from 'react-bootstrap'
import Button from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'


const LineChart = ({ val1, val2, val3, val4, val5, val6, val7, val8, val9, val10}) => {

    const firstValRef = useRef()
    const lastValRef = useRef()
    const [firstVal, setFirstVal] = useState()
    const [lastVal, setLastVal] = useState()

    function setBoundaries(e) {
        e.preventDefault();
        e.stopPropagation();

        let firstIndex = 0;
        let lastIndex = val2.length;

        if (firstValRef.current.value !== "") {
            firstIndex = val2.indexOf(firstValRef.current.value);
        }
        if (lastValRef.current.value !== "") {
            lastIndex = val2.indexOf(lastValRef.current.value) + 1;
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
        setLastVal(val2.length)
    }

    return (
        <>
            <div className="canvas-container">
                <Line 
                    data= {{
                        labels: val2.slice(firstVal, lastVal),
                        datasets: [
                            {
                                label: "Temperature 1",
                                data: val3.slice(firstVal, lastVal),
                                backgroundColor: 'blue',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "T.H.I. 1",
                                data: val4.slice(firstVal, lastVal),
                                backgroundColor: 'black',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "Temperature 2",
                                data: val5.slice(firstVal, lastVal),
                                backgroundColor: 'red',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "T.H.I. 2",
                                data: val6.slice(firstVal, lastVal),
                                backgroundColor: 'green',
                                bordercolor: 'black',
                                borderWidth: 2,
                            },
                            {
                                label: "RH%",
                                data: val7.slice(firstVal, lastVal),
                                backgroundColor: 'green',
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
                    <div>
                        <label htmlFor="from">from:</label>
                        <select ref={firstValRef} id="from" name="from">
                            <option value=""></option>
                            <option value="15:30">15:30</option>
                            <option value="16:30">16:30</option>
                            <option value="17:30">17:30</option>
                            <option value="18:30">18:30</option>
                            <option value="19:30">19:30</option>
                            <option value="20:30">20:30</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="to">to:</label>
                        <select ref={lastValRef} id="to" name="to">
                            <option value=""></option>
                            <option value="15:30">15:30</option>
                            <option value="16:30">16:30</option>
                            <option value="17:30">17:30</option>
                            <option value="18:30">18:30</option>
                            <option value="19:30">19:30</option>
                            <option value="20:30">20:30</option>
                        </select>
                    </div>
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
