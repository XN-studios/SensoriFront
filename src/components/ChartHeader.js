import React from 'react'
import Button from './Button'

const ChartHeader = ({ title, onClick }) => {
    return (
        <div>
            <h2 style={{display: 'inline'}}>{title}</h2><Button text="Back to all entries" onClick={onClick} buttonStyle={{display: 'inline', float: "right", backgroundColor: 'rgb(64, 168, 50)'}}/>
        </div>
    )
}

export default ChartHeader
