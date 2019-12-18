import React from "react"
import ReactDOM from "react-dom"
import vacationSpots from "./vacayspots"

function Card(props){ 
    return (
        <div>
            
        <p> place: {props.place} </p>
        <p>price: {props.price}</p>
        <p>Time to go: {props.timeToGo}</p>
        </div>
    )
}

export default Card
