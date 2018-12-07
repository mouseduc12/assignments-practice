const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.get("/helloworld", (req, res) =>{
    res.send("hello world")
})

// URL: www.google.com/photos?type=nike&size=9
// ENDPOINT: /photo
// QUERY: ?key=value
// parrams: Request a specific item from db

//Collection: Todos
//Resource: Todo













app.listen(8000, () => {
    console.log("Server is running on Port 8000");
})