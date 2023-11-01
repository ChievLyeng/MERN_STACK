const express = require('express')
const multer = require('multer');
const path = require('path');

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductImage
} = require('../Controller/ProductsController')

const router = express.Router()

const storage = multer.memoryStorage(); // Use memory storage for file data
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // You can add custom file filtering logic here if needed
    cb(null, true);
  },
});

// create product
router.post('/upload', upload.single('Image'),createProduct)
  
// get all products
router.get('/products',getProducts);

// get single product
router.get('/products/:id',getProduct)

// get single product
router.get('/getImage/:id',getProductImage)

// update single product
router.patch('/:id',updateProduct)

// delte single proudct
router.delete('/:id',deleteProduct)


module.exports = router