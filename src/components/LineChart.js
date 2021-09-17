import { React, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Form } from 'react-bootstrap'
import Button from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'


const LineChart = ({ val1, val2, val3, val4, val5, val6, val7, val8, val9, val10}) => {

    const firstDayRef = useRef()
    const lastDayRef = useRef()
    const firstTimRef = useRef()
    const lastTimRef = useRef()
    const [firstVal, setFirstVal] = useState()
    const [lastVal, setLastVal] = useState()

    function setBoundaries(e) {
        e.preventDefault();
        e.stopPropagation();

        let firstIndex = 0;
        let lastIndex = val1.length;

        if (firstDayRef.current.value !== "") {
            firstIndex = val1.indexOf(firstDayRef.current.value);
        }
        if (lastDayRef.current.value !== "") {
            lastIndex = val1.lastIndexOf(lastDayRef.current.value) + 1;
        }
        if (firstTimRef.current.value !== "") {
            firstIndex += val2.slice(firstIndex, lastIndex).indexOf(firstTimRef.current.value);
        }
        if (lastTimRef.current.value !== "") {
            lastIndex = val2.slice(firstIndex, lastIndex).lastIndexOf(lastTimRef.current.value) + firstIndex + 1;
        }
        setFirstVal(firstIndex)
        setLastVal(lastIndex)

    }

    function setDefault(e) {
        e.preventDefault();
        e.stopPropagation();

        firstDayRef.current.value = '';
        lastDayRef.current.value = '';
        firstTimRef.current.value = '';
        lastTimRef.current.value = '';

        setFirstVal(0)
        setLastVal(val2.length)
    }

    const zipper = (a1, a2) => a1.map((x, i) => x + ' ' + a2[i]);
    const labels = zipper(val1.slice(firstVal, lastVal), val2.slice(firstVal, lastVal))

    return (
        <>
            <div className="canvas-container">
                <Line 
                    data= {{
                        labels: labels,
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
                    <h5>Selezione periodo</h5>
                    <div>
                        <label htmlFor="day-from">Dal giorno:</label>
                        <select ref={firstDayRef} id="day-from" name="day-from">
                            <option value=""></option>
                            <option value="02 Lug">02 Lug</option>
                            <option value="03 Lug">03 Lug</option>
                            <option value="04 Lug">04 Lug</option>
                            <option value="05 Lug">05 Lug</option>
                            <option value="06 Lug">06 Lug</option>
                            <option value="07 Lug">07 Lug</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="day-to">al giorno:</label>
                        <select ref={lastDayRef} id="day-to" name="day-to">
                            <option value=""></option>
                            <option value="02 Lug">02 Lug</option>
                            <option value="03 Lug">03 Lug</option>
                            <option value="04 Lug">04 Lug</option>
                            <option value="05 Lug">05 Lug</option>
                            <option value="06 Lug">06 Lug</option>
                            <option value="07 Lug">07 Lug</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="time-from">Dalle ore:</label>
                        <select ref={firstTimRef} id="time-from" name="time-from">
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
                        <label htmlFor="time-to">alle ore:</label>
                        <select ref={lastTimRef} id="time-to" name="time-to">
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
