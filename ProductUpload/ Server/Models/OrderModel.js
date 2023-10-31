const mongoose = require('mongoose')
const {Schema} = mongoose

const OrderProduct = new mongoose.Schema({
    User:{
        type: String
    },
    Product:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Products'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    }
    
})

const Order = mongoose.model('Order',OrderProduct);
module.exports = Order;