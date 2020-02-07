const express = require('express')
const uuid = require(`uuid/v4`)
const app = express()


const fruit = [ 
    { 
        type: "apple", 
        brand: "gala",
        cost: "$2 / lbs"
    }, 
    {
        type: "banana", 
        brand: "dole", 
        cost: "$1.5 / lbs"
    }, 
    {
        type: "kiwi", 
        brand: "star",
        cost: "$5 / lbs"
    }
    

]


app.listen(9000, () => { 
    console.log("server is up and running on port 9000")
})

app.get("/fruit", (req, res) => { 
    res.send(fruit)
})

app.get("/search/type", (req, res) => { 
    const fruitType = req.query.type
    const filteredType = fruit.filter(fruit => fruit.type === fruitType)
    res.send(filteredType)
})

