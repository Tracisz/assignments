const express = require('express')
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

const movies = [
    {title: "rambo", _id: uuid()}, 
    {title: "boondocks-saints", _id: uuid()}, 
    {title: "intersteller", _id: uuid() }, 
    {title: "IP man", _id: uuid()}
]
app.get("/", (req, res) => { 
    res.send(movies)
})




app.listen(9000, () => { 
    console.log("server is running on port 9000")
})

