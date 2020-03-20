import React from "react"

function Publicposts(props){ 
const {title, description, username, editPost} = props
    return( 
        <div className = "posts"> 
            <p>posted by</p> 
            <h2>{username}</h2>
            <h1>{title}</h1>
            <h4>{description}</h4>
            
            <button onClick = {() => editPost}>Comment</button>
            <button>Like</button>
        </div>
    )
}

export default Publicposts