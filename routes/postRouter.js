const express = require('express')
const postsRouter = express.Router()
const Posts = require("../model/Posts.js")

// gets all posts, route will probably need to be updated
postsRouter.get("/posts", (req, res, next) => { 
    Posts.find((err, posts) => { 
        if(err){ 
            res.status(500)
            return(next(err))
        } res.status(200).send(posts)
    })
})
//get posts by user
postsRouter.get("/user", (req, res, next) => { 
    Posts.find({user: req.user._id}, (err, post) => { 
        if(err){ 
            res.status(500)
            return next(err)
        }
            res.status(200).send(post)
    })
})

// add a new post 
postsRouter.post("/", (req, res, next) => { 
    const newPost = new Posts 
    newPost.save((err, savedPost) => { 
        if(err){ 
            res.status(500) 
            return(next(err))
        }
        res.status(201).send(savedPost)
    })
})
// update a post
postsRouter.put("/:postId", (req,res,next) => { 
    Posts.findOneAndUpdate({_id: req.params.postId, user: req.user._id}, 
        req.body, 
        (err, updatedPost) => { 
            if(err){ 
                res.status(500)
                return(next(err))
            } 
            return res.status(200).send(updatedPost)
    })
})
// delete a post
postsRouter.delete("/:postId", (req, res, next) => { 
    Posts.findOneAndDelete({_id: req.params.postId, user: req.user._id}, (err, deletedPost) => { 
        if(err){ 
            res.status(500)
            return(next(err))
        } 
        res.status(200).send(`successfully deleted ${deletedPost.title}`)
    })
})

module.exports = postsRouter