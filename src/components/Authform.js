import React from "react"


function Authform(props){ 
    const {handleChange, handleSubmit, btnText, inputs: {
        username, password
    } ,errMsg} = props

    
    
    return (
        
        <div className = "auth">
            <form onSubmit = {handleSubmit} className = "auth-form">
            <h1>Rock The Vote!</h1>
                <input 
                    type = "text"
                    placeholder = "Username"
                    name = "username" 
                    value = {username}
                    onChange ={handleChange} />

                <input 
                    type = "password"
                    placeholder = "Password"
                    name = "password"
                    value = {password}
                    onChange = {handleChange} />
                    <button onClick = {handleSubmit}>{btnText}</button>
                    <p style = {{color: "red"}}>{errMsg}</p>
            </form>
            
        </div>
    )
}

export default Authform