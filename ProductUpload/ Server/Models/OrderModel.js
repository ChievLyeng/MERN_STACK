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
    ]
    
})

const Order = mongoose.model('Order',OrderProduct);
module.exports = Order;