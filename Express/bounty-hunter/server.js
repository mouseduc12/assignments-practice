const express = require("express");
const uuid = require("uuid");
const app = express()

let bounties = [
    {
        firstName: "Darth",
        lastName: "Vader",
        isLiving: true,
        bountyAmount: 40000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "Alan",
        lastName: "Skywalker",
        isLiving: true,
        bountyAmount: 40000,
        type: "Jedi",
        id: uuid()
    }
]

//Middleware is where handle request before sending them to the routes
app.use(express.json())

//Routes where displays the information
app.get("/", (req,res) => {
    res.send("Hey there, welcome");
})
app.get("/bounty", (req,res) =>{
    res.send(bounties)
})
app.post("/bounty", (req,res) => {
    const newBounty = req.body
    newBounty.id = uuid()
    bounties.push(newBounty)
    res.send(bounties)
})
app.get("/bounty/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const returnData = bounties.find(each => each.id === bountyId)
    console.log(bountyId)
    res.send(returnData);
})
app.delete("/bounty/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    bounties.filter(each => each.id !== bountyId)
    res.send(bounties)
})
app.put("/bounty/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const changeData = bounties.map(each => each.id === bountyId ? req.body : each)
    res.send(changeData)
})

app.listen(8000, ()=>{
    console.log("it's running") 
})