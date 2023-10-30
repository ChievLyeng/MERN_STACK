const Order = require('../Models/OrderModel');
const mongoose = require('mongoose');

// get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('Product')
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }

}

// create order
const createOrder = async (req, res) => {
    try {
        
        console.log(req.body)

        // Create a new order with the associated product IDs
        const newOrder = new Order({
            ...req.body
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Failed to create order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
}


module.exports = {
    getOrders,
    createOrder
}
