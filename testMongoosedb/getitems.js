import React, {useState, useEffect} from "react"
import AddItemForm from "./addItemForm"
import axios from 'axios'

function Items(){
  const [items, setItems] = useState([])

    function getItems(){ 
        axios.get("/events")
        .then(res => setItems(res.data))
        .catch(err => console.log(err))
    }
    function addItem(newItem){ 
        axios.post('/events', newItem)
            .then(res => {setItems(prevItems => 
                [...prevItems, res.data]
            )})
            .catch(err => console.log(err))
    }
    function deleteItem(itemId){ 
        axios.delete(`/events/${itemId}`)
            .then(res => {
                setItems(prevItems => prevItems.filter(item => item._id !== itemId))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => { 
        getItems()
    }, [])

//   postCall = () =>{ 
//       axios.post("/events")
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//   }
    return(
        <>
            <h1 className = "title"> Tonys shopping List</h1>
            <AddItemForm addItem = {addItem}/>
            {items.map(item => ( 
                <div   className = "items">
                    <h2 className = "text" key = {item._id}>Item name: {item.title} </h2>
                    <p className = "text">  Item Price: ${item.price}</p>
                    <button onClick = {() => deleteItem(item._id)} className = "delete-btn">Delete</button>
                </div>
            ))}
            
            
        </>
    )
}


export default Items