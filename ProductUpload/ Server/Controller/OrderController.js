const Order = require('../Models/OrderModel')
const mongoose = require('mongoose')

// get all orders
const getOrders = async (req,res) => {
    try{
        const orders = await Order.find({}).populate('Products');
        res.status(200).json(orders)
        // console.log(orders)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getOrders
}