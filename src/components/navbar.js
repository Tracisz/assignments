import React from "react"
import "/Users/travisracisz/dev/rockthevote/src/css/styles.css"
import {Link} from "react-router-dom"

function Navbar(){ 
    return( 
        <div className = "nav-buttons">
            <Link to = "/" >Profile</Link>
            <span>Public</span>
            <span>Logout</span>
        </div>
        )
}


export default Navbar