import React, { useContext } from "react"
import "/Users/travisracisz/dev/rockthevote/src/css/styles.css"
import {Link} from "react-router-dom"
import { UserContext } from "../context/UserContext"

function Navbar(){ 
    const {logout} = useContext(UserContext)
    return( 
            <div className = "nav-buttons">
                <Link exact to = "/profile" >Profile</Link>
                <Link exact to = "/public">Public</Link>
                <button onClick = {logout}>Logout</button>
            </div>
        )
}


export default Navbar