import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Publicposts from "./Publicposts"


function Publicpostlists(){ 
    const {allPosts, editPost} = useContext(UserContext)
    return (
        <div className = "profile"> 
            {allPosts.map(post => <Publicposts {...post} key = {post._id} editPost = {editPost} />)}
        </div>
    )
}


export default Publicpostlists