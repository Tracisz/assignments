import React, {useState, useEffect} from "react"


function AddItemForm(props){ 
    const initInputs = {"title": "", "price": ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){ 
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        
    }

    function handleSubmit(e){ 
        e.preventDefault()
        console.log(inputs)
        setInputs(initInputs)
        props.addItem(inputs)
    }
    
    return( 
        <form className = "form"> 
            <input 
            className = "inputs"
            type = "text" 
            name = "title" 
            value = {inputs.title} 
            placeholder = "title" 
            onChange = {handleChange}/> 
            <input 
            className = "inputs"
            type = "text"
            name = "price"
            value = {inputs.price} 
            placeholder = "price" 
            onChange = {handleChange} />
            <button className = "button" onClick = {handleSubmit} >Add Item</button>
        </form>
    )
}


export default AddItemForm