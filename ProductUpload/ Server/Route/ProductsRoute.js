const express = require('express')

const {
    getProducts
} = require('../Controller/ProductsController')

const router = express.Router()

// get all products
router.get('/',getProducts);


module.exports = router