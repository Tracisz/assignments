const express = require ('express')
const app = express()
const uuid = require('uuid/v4')

app.use("/bounties", express.json())

const bounties = [
    {
        firstName: "sonic",
        lastName: "the hedgehog", 
        bounty: "$10,000",
        living: true,
        type: "jedi", 
        _id: uuid()

    },
    {
        firstName: "Obi Wan",
        lastName: 'Kenobi', 
        bounty: "$100,000", 
        living: true, 
        type: "jedi", 
        _id: uuid()
    },
    { 
        firstName: "Mace", 
        lastName: "Windu", 
        bounty: "$50,000", 
        living: true, 
        type: "jedi", 
        _id: uuid()
    }, 
    { 
        firstName: "Shiv", 
        lastName: "Palpatine", 
        bounty: "$1,000,000",
        living: true, 
        type: "sith", 
        _id: uuid()
    }
]

app.listen(9000, () => { 
    console.log("server is running on port 9000")
})

app.get("/bounties", (req, res) => { 
    res.send(bounties)
})

app.post("/bounties", (req, res) => { 
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    console.log(bounties)
    res.send(`you have added ${newBounty.firstName} ${newBounty.lastName} to the data base`)
})

app.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("succesfully deleted bounty")
})

app.put("/bounties/:bountyId", (req, res) => { 
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})


module.exports = app