const express = require('express')
const {
    getOrders,
    createOrder
}= require('../Controller/OrderController')


const router = express.Router()

// get all orders
router.get('/orders',getOrders);

// get all orders
router.post('/orders',createOrder);

module.exports = router