const mongoose = require('mongoose')
const express = require('express')
const app = express()
const morgan = require('morgan')
const Item = require('/Users/student/dev/assignments/module5/crud_store/inventory.js')


app.use('/inventory', express.json())
app.use(morgan('dev'))

// server running on port 9000
app.listen(9000,() => { 
    console.log("server is running on port 9000")
})

//get all
app.get('/inventory', (req, res, next) => { 
    Item.find((err, item) => { 
        if(err){ 
            res.status(500)
            return(next(err))
        } else { 
           return res.status(200).send(item)
        }
    })
})

// get one 
app.get('/inventory/:title', (req, res, next) => { 
    Item.find({title: req.params.title}, (err, item) => { 
        if(err){ 
            res.status(500)
            return(next(err))
        } else { 
            return res.status(200).send(item)
        }
    })
})

app.post('/inventory', (req, res, next) => { 
     const newItem = new Item(req.body)
     newItem.save((err, savedItem) => { 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return(next(error))
        } else { 
            return res.status(201).send(savedItem)
        }
     })
})

app.delete('/inventory/:itemid', (req, res, next) => { 
    Item.findOneAndDelete({_id: req.params.itemid}, (err, deleteditem)=>{ 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return(next(error))
        } else { 
            return res.status(200).send(`succesfully deleted ${deleteditem.title}`)
        }
    })
})

app.put('/inventory/:itemid', (req, res, next) => { 
    Item.findOneAndUpdate({_id: req.params.itemid}, req.body , {new: true}, (err, updatedItem) => { 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return(next(error))
        } else { 
            return res.status(200).send(updatedItem)
        }
    })
})



mongoose.connect('mongodb://localhost:27017/moviesdb', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}, () => console.log("connected to database")
)

app.use((err, req, res, next) => { 
    console.log(err)
    return res.send({ 
        errMsg: err.message,
    })
})

module.exports = app