const mongoose = require('mongoose')
const express = require ('express')
const app = express()
const Movie = require("../mongoose intro/moviedb.js")
const morgan = require('morgan')


app.use("/movies", express.json())
app.use(morgan('dev'))




app.listen(9000, () => { 
    console.log("server is running on port 9000")
})

app.get("/movies", (req, res, next) => { 
    Movie.find((err, movies) => { 
        if(err){ 
            res.status(500)
            return next(err)
        } else { 
            return res.status(200).send(movies)
        }
    })
})

app.post("/movies", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => { 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return next(error)
        } else { 
            return res.status(201).send(savedMovie)
        }
    })
})

app.delete("/movies/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => { 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return next(error)
        } return res.status(200).send(`succesfully deleted ${deletedItem.title}`)

    })
   
})

app.put("/movies/:movieId", (req, res, next) => { 
    Movie.findOneAndUpdate({_id: req.params.movieId},
         req.body,
         {new: true},  
          (err, updatedItem) => { 
        if(err){ 
            const error = new Error(err.message)
            res.status(500)
            return next(error)
        } return res.status(200).send(`succesfully updated ${updatedItem.title}`)
    })
})



mongoose.connect('mongodb://localhost:27017/moviesdb', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}, () => console.log("connected to database")
)

// error handler
app.use((err, req, res, next) => { 
    console.log(err)
    return res.send({ 
        errMsg: err.message,
    })
})

module.exports = app