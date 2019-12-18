import React from "react"
import ReactDOM from "react-dom"
import vacationSpots from "./vacayspots"
import Card from "./vacationspots"

function App () { 
    const vacationComponents = vacationSpots.map(card => <Card key = {vacationSpots.id} place = {vacationSpots.place} price = {vacationSpots.price} timeToGo = {vacationSpots.timeToGo}/>)
    return (
        {vacationComponents}
        
    )
}


export default App