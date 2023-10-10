const mongoose = require('mongoose')

const productSchema = mongoose({
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

module.exports = mogoose.model('Products',productSchema)