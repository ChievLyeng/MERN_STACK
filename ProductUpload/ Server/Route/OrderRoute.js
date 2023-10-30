const express = require('express')
const {
    getOrders
}= require('../Controller/OrderController')


const router = express.Router()

// get all orders
router.get('/orders',getOrders);

module.exports = router