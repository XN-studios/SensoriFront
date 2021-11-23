import { React, useState, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { Form, Alert } from 'react-bootstrap'
import Button from './Button'
import { MdKeyboardArrowRight } from 'react-icons/md'


const LineChart = ({ onClick, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10}) => {

    const firstDayRef = useRef()
    const lastDayRef = useRef()
    const firstTimRef = useRef()
    const lastTimRef = useRef()
    const [firstVal, setFirstVal] = useState()
    const [lastVal, setLastVal] = useState()
    const [error, setError] = useState('')

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

        try {
            setFirstVal(firstIndex)
            setLastVal(lastIndex)
        } catch {
            setError('C\'è stato un problema nei termini inseriti.')
        }

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
                                label: "Temperatura 1",
                                data: val3.slice(firstVal, lastVal),
                                backgroundColor: 'blue',
                                borderColor: 'rgb(2, 0, 99)',
                                borderWidth: 1,
                            },
                            {
                                label: "T.H.I. 1",
                                data: val4.slice(firstVal, lastVal),
                                backgroundColor: 'dark grey',
                                borderColor: 'grey',
                                borderWidth: 1,
                            },
                            {
                                label: "Temperatura 2",
                                data: val5.slice(firstVal, lastVal),
                                backgroundColor: 'red',
                                borderColor: 'rgb(99, 0, 0)',
                                borderWidth: 1,
                            },
                            {
                                label: "T.H.I. 2",
                                data: val6.slice(firstVal, lastVal),
                                backgroundColor: 'green',
                                borderColor: 'rgb(3, 89, 0)',
                                borderWidth: 1,
                            },
                            {
                                label: "RH%",
                                data: val7.slice(firstVal, lastVal),
                                backgroundColor: 'blue',
                                borderColor: 'rgb(2, 155, 207)',
                                borderWidth: 1,
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
                    <h5>Selezione periodo</h5>
                    <br></br>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="chart-settings-cont">
                        <label className="sel-lab" htmlFor="day-from">Dal giorno:</label>
                        <select className="sel-form" ref={firstDayRef} id="day-from" name="day-from">
                            <option value=""></option>
                            <option value="02 Lug">02 Lug</option>
                            <option value="03 Lug">03 Lug</option>
                            <option value="04 Lug">04 Lug</option>
                            <option value="05 Lug">05 Lug</option>
                            <option value="06 Lug">06 Lug</option>
                            <option value="07 Lug">07 Lug</option>
                        </select>
                        <label className="sel-lab" htmlFor="day-to">al giorno:</label>
                        <select className="sel-form" ref={lastDayRef} id="day-to" name="day-to">
                            <option value=""></option>
                            <option value="02 Lug">02 Lug</option>
                            <option value="03 Lug">03 Lug</option>
                            <option value="04 Lug">04 Lug</option>
                            <option value="05 Lug">05 Lug</option>
                            <option value="06 Lug">06 Lug</option>
                            <option value="07 Lug">07 Lug</option>
                        </select>
                        <br></br>
                        <label className="sel-lab" htmlFor="time-from">Dalle ore:</label>
                        <select className="sel-form" ref={firstTimRef} id="time-from" name="time-from">
                            <option value=""></option>
                            <option value="15:30">15:30</option>
                            <option value="16:30">16:30</option>
                            <option value="17:30">17:30</option>
                            <option value="18:30">18:30</option>
                            <option value="19:30">19:30</option>
                            <option value="20:30">20:30</option>
                        </select>

                        <label className="sel-lab" htmlFor="time-to">alle ore:</label>
                        <select className="sel-form" ref={lastTimRef} id="time-to" name="time-to">
                            <option value=""></option>
                            <option value="15:30">15:30</option>
                            <option value="16:30">16:30</option>
                            <option value="17:30">17:30</option>
                            <option value="18:30">18:30</option>
                            <option value="19:30">19:30</option>
                            <option value="20:30">20:30</option>
                        </select>
                        <br></br>
                    </div>
                    <MdKeyboardArrowRight style={{ color: 'grey', marginRight: '0'}}/>
                    <button className="show-all" onClick={setDefault}>Mostra tutti</button>
                    <br></br>
                    <Button text="Genera Render" onClick={setBoundaries} buttonStyle={{backgroundColor: 'skyblue', float: "right"}} />
                    <Button text="Indietro" onClick={onClick} buttonStyle={{backgroundColor: 'skyblue', float: "right"}} />
                </Form>
            </div>
        </>
    )
}

export default LineChart
