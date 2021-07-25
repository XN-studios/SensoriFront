import React from 'react'
import Button from './Button'

const ChartHeader = ({ title, onClick }) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <h2 style={{display: 'inline'}}>{title}</h2><Button text="Back to all entries" onClick={onClick} buttonStyle={{display: 'inline', backgroundColor: 'rgb(64, 168, 50)'}}/>
        </div>
    )
}

export default ChartHeader
