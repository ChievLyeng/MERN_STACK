const mongoose = require('mongoose')

const OrderProduct = new mongoose.Schema({
    User:{
        type: String
    },
    Product:{
        type: String
    }
    
})

const Order = mongoose.model('Order',OrderProduct);
module.exports = Order;