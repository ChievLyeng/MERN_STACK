const mongoose = require('mongoose');

// const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
    p_Name:{
        type: String,
        required: [true, "Product mush have a name"],
        unique: true
    },
    p_Type: {
        type: String,
    },
    p_price: {
        type: Number,
        required: [true,"Product must have price"]
    },
    // Unit_Price: {
    //     type: Number
    // },
    // Unit_Wieght: {
    //     type: Number
    // },
    Quantity: {
        type: Number,
        required: [true,'Producte must have quantity']
    },
    Source: {
        type: String,
    },
    min_Order:{
        type: Number,
        required: true
    },
    Nutrition_Fact: {
        type: String
    },
    Description: {
        type: String
    },
    Other: {
        type: String
    },
    Note: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Products',productSchema)



