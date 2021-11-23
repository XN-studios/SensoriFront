import React from 'react'
import ChartHeader from './ChartHeader'
import LineChart from './LineChart'


const ChartPage = ({title, onClick, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10}) => {
    return (
      <>
        <div className="chart">
          <LineChart onClick = {onClick} val1 = {val1} val2 = {val2} val3 = {val3} val4 = {val4} 
          val5 = {val5} val6 = {val6} val7 = {val7} val8 = {val8} 
          val9 = {val9} val10 = {val10} />
        </div>
      </>
    )
}

export default ChartPage
