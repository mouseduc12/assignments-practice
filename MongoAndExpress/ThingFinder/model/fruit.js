const mongoose = require("mongoose")


const fruitSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true      
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("FruitSchema", fruitSchema)