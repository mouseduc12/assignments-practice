const express = require("express")
const inventoryRoute = express.Router()
const Inventory = require("../model/inventory")

inventoryRoute.get("/", (req, res) =>{
    Inventory.find((err, data) =>{
        if(err){
            console.log(err)
        }
        return res.status(200).send(data)
    })
})

inventoryRoute.get("/:id", (req,res) =>{
    Inventory.findOne({_id: req.params.id}, (err, inventory) =>{
        if(err){
            console.log(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRoute.post("/", (req,res) =>{
    const newSchema = new Inventory(req.body)
    newSchema.save((err, inventory) => {
        if(err){
            console.log(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRoute.delete("/:id", (req, res) =>{
    Inventory.findOneAndDelete({_id: req.params.id}, (err, deletedInventory) =>{
        if(err){
            console.log(err)
        }
        return res.status(202).send("Delete Successfully")
    })
})

inventoryRoute.put("/:id", (req,res) =>{
    Inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
     (err, updatedInventory) =>{
        if(err){
            console.log(err)
        }
        return res.status(202).send(updatedInventory)
    })
})

module.exports = inventoryRoute