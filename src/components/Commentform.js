import React, { useState } from "react"


function Commentform(props){ 


    [inputs, setInputs] = useState({comments: ""})


    function handleChange(e){ 
      const  {name, value} = e.target

}

    return(
        <div>
            <input type = "text" placeholder = "comment" name = "comment"></input>
        </div> 
    )
}

export default Commentform