const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


app.use(express.json())
app.use(morgan("dev"))
app.use("/fruits", require("./routes/fruits"))

mongoose.connect("mongodb://localhost:27017/fruits", {useNewUrlParser: true}, () =>{
    console.log("Connect with mongo")
})


app.listen(8000, () => {
    console.log("I'm running")
})