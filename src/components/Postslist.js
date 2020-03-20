import React from "react"
import Posts from "./Posts"


function Postlist(props){ 
    const {posts} = props
    return (
    <div className = "profile"> 
        <h1>Your Posts</h1>
        {posts.map(post => <Posts {...post} key = {post._id} />)}
    </div>
    )
}

export default Postlist