const express = require("express")
const fruitRouter = express.Router()
const Fruit = require("../model/fruit")

fruitRouter.get("/", (req, res) => {
    if (req.query.type) {
        Fruit.find({ type: req.query.type }, (err, fruit) => {
            if (err) {
                //
            }
            return res.status(200).send(fruit)
        })
    } else {
        Fruit.find((err, data) => {
            if (err) {
                //handle it
            }
            return res.status(200).send(data)
        })
    }
})

fruitRouter.post("/", (req, res) => {
    const newSchema = new Fruit(req.body)
    newSchema.save((err, fruit) => {
        if (err) {
            //
        }
        return res.status(201).send(fruit)
    })
})

fruitRouter.get("/:id", (req, res) => {
    Fruit.findOne({ _id: req.params.id }, (err, fruit) => {
        if (err) {
            //
        }
        return res.status(200).send(fruit)
    })
})

fruitRouter.put("/:id", (req, res) => {
    Fruit.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true },
        (err, updatedFruit) => {
            if (err) {

            }

            return res.status(202).send(updatedFruit)
        })
})

fruitRouter.delete("/:id", (req, res) => {
    Fruit.findOneAndDelete({ _id: req.params.id }, (err, deleteFruit) => {
        if (err) {

        }
        return res.status(202).send("Delete Sucessfully")
    })
})


module.exports = fruitRouter