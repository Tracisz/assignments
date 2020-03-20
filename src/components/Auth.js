import React, { useContext, useState } from "react"
import Authform from "./Authform.js"
import { UserContext } from "../context/UserContext"


function Auth(){ 
    const initalInputs = {username: "", password: ""}
    const {signUp, login, errMsg} = useContext(UserContext)
    const [inputs, setInputs] = useState(initalInputs)
    const [toggle, setToggle] = useState(true)
    function handleToggle(){ 
        setToggle(prev => !prev)
    }
    function handleLogin(e){ 
        e.preventDefault()
        login(inputs)
      
    }

    function handleSignUp(e){ 
        e.preventDefault()
        signUp(inputs)
    }

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }
    
    return(
        <div>
        {!toggle ? 
        <>
        <Authform
            handleSubmit = {handleSignUp}
            handleChange = {handleChange}
            btnText = {"sign up"}
            inputs = {inputs}
            errMsg = {errMsg}    
        />
        <p onClick = {handleToggle}>already a member? login</p>
        </>
        : 
        <>
        <Authform 
            handleSubmit = {handleLogin}
            handleChange = {handleChange}
            btnText = {"login"}
            inputs = {inputs}
            errMsg = {errMsg}
                />
        <p onClick = {handleToggle}>not a member? sign up </p>
        </>
        }
    </div>
    )
}

export default Auth