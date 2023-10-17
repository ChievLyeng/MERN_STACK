const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title : {
        type : String,
        require : true 
    },
    brand: {
        type : String,
    },
    stock : {
        type : Number,
        requried: true
    },
    price : {
        type : Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Products',productSchema)