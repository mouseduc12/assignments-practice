const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    inventoryName: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        min: 10,
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)