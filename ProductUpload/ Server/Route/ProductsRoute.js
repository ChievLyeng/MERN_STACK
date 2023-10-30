const express = require('express')

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/ProductsController')

const router = express.Router()

// get all products
router.get('/products',getProducts);

// get single product
router.get('/products/:id',getProduct)

// create product
router.post('/',createProduct)

// update single product
router.patch('/:id',updateProduct)

// delte single proudct
router.delete('/:id',deleteProduct)


module.exports = router