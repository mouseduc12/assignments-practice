const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))


app.use("/inventory",require("./routes/inventories"))

mongoose.connect('mongodb://localhost:27017/storedata', {useNewUrlParser: true}, () =>{
    console.log("Connect to the db")
})

app.listen(8000, () =>{
    console.log("I'm running")
})