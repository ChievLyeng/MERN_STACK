const express = require('express');
const getProducts = require('../controller/productController');

const router = express.Router();

// router.get('/products', (req,res) => {
//     res.json({mssg: "ProudctRoute"})
// })

router.get('/products',getProducts.getProducts)

module.exports = router;