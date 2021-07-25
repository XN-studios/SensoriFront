import React from 'react'
import ChartHeader from './ChartHeader'
import LineChart from './LineChart'


const ChartPage = ({title, onClick, dates, times, oxy, co2, temp}) => {
    return (
        <div>
          <ChartHeader title = {title} onClick = {onClick} />
          <LineChart dates = {dates} times = {times} oxy = {oxy} 
          co2 = {co2} temp = {temp} />
        </div> 
    )
}

export default ChartPage
