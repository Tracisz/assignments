const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PostSchema = new Schema({ 
    title:{ 
        type: String, 
        required: true, 
    }, 
    description:{ 
        type: String, 
        required: true, 
    }, 
    datePosted: { 
        type: Date, 
        default: Date.now
    }, 
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    username: { 
        type: String, 
        required:true
    }, 
    comments: { 
        type: Array, 
        required: false, 
    }
})


module.exports = mongoose.model("Posts", PostSchema)