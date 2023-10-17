const express = require('express')
const router = express.Router()
const Product = require('../models/ProductModel')

//get all products
router.get('/',(req,res) => {
    res.json({mssg: 'Get all products'})
})

//get single product
router.get('/:id',(req,res) => {
    res.json({mssg:'Get a single product'})
})

//post a new product
router.post('/',(req,res) => {
    res.json({mssg: 'Post a new product'})
})

router.post('/', async (req,res) => {
    const {title,brand,stock,price} = req.body
    try{
        const product = await Product.create(({title,brand,stock,price}))
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error : error.message})
    }
})

//delet a new product
router.delete('/:id',(req,res) => {
    res.json({mssg : 'Delete a singe product'})
})

//updata a new product
router.patch('/:id', (req,res) => {
    res.json({mssg : 'Updated a product'})
})

module.exports = router