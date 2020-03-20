import React, { useState } from "react"



function Postform(props){ 
    const user = JSON.parse(localStorage.getItem('user'))

    const initialInputs = { 
        title: "", 
        description: "",
        username: user.username, 
        date: user.datePosted
    }

    
    const [inputs, setInputs] = useState(initialInputs)
 

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  const {addPost, toggle, handleEdit, _id} = props

  function handleSubmit(e){ 
      e.preventDefault()
      addPost(inputs)
      setInputs(initialInputs)
  }

  const {title, description} = inputs


     return (
     <div className = "profile">
         {/* <h1>Welcome {user.username}</h1> */}
         <div className = "auth-form">
             {/* <h2>add new post!</h2> */}
             <input type = "text" placeholder = "title" value = {title} name = "title" onChange = {handleChange} ></input>
             <input type = "text" placeholder = "description" value = {description} name = "description" onChange = {handleChange} ></input>
             {!toggle ? 
             <button onClick = {handleSubmit}>Submit</button>
             :
             <>
             <button onClick = {() => handleEdit(_id, inputs)}>Submit edit</button>
             </>
            }
         </div>
     </div>
     )
}

export default Postform