const express = require('express')
const router = express.Router()

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

//delet a new product
router.delete('/:id',(req,res) => {
    res.json({mssg : 'Delete a singe product'})
})

//updata a new product
router.patch('/:id', (req,res) => {
    res.json({mssg : 'Updated a product'})
})

module.exports = router