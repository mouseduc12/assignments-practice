const express = require("express")
const app = express()
const uuid = require("uuid")

let todoList = [
    {
        title: "Do something",
        description: "The description",
        imageUrl: "your image",
        completed: false,
        _id: uuid()
    }
]

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Welcome to your todo")
})

app.get("/todolist/:id", (req, res) => {
    const userId = req.params.id
    const findTheData = todoList.find(each => each._id === userId)
    res.send(findTheData)
})

app.get("/todoList", (req,res) => {
    res.send(todoList);
})

app.post("/todoList/", (req,res) => {
    const userText = req.body
    userText._id = uuid()
    todoList.push(userText)
    res.send(todoList)
})

app.put("/todoList/:id", (req, res) => {
    const userPath = req.params.id
    const userChange = req.body;
    const newTodo = todoList.map(each => each._id === userPath ? userChange : each)
    res.send(newTodo)
})

app.delete("/todoList/:id", (req, res) =>{
    const userPath = req.params.id
    const remainTodo = todoList.filter(each => each._id !== userPath)
    res.send(remainTodo)
})

app.listen(5000, () =>{
    console.log("I'm running")
})