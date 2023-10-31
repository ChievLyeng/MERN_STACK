const express = require('express')
const multer = require('multer')

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/ProductsController')

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null,'public/Images')
    },
    filename: (req,file,cb) => {
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


// get all products
router.get('/products',getProducts);

// get single product
router.get('/products/:id',getProduct)

// create product
router.post('/',createProduct)

// update single product
router.patch('/:id',upload.single('file'),updateProduct)

// delte single proudct
router.delete('/:id',deleteProduct)


module.exports = router