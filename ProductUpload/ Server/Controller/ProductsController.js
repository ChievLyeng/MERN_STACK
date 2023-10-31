const Product = require('../Models/ProductModel')
const mongoose = require('mongoose')
const validateProductData = require('./Validation') // validation function


// get all products
const getProducts = async (req,res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
    // console.log(products)
}

// get single product
const getProduct = async ( req, res) =>{
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
}

// create new product

// 1) first method
// const createProduct = async (req,res) => {
//     const {p_Name,p_Tpye,p_price,Quantity,Source,min_Order,Nutrition_Fact,Description,Other,Note} = req.body

//     try{
//         const product = await Product.create(({p_Name,p_Tpye,p_price,Quantity,Source,min_Order,Nutrition_Fact,Description,Other,Note}))
//         res.status(200).json(product)
//     }catch(error){
//         res.status(400).json({error: error.message})
//     }
// }

// 2) second method
const createProduct = async (req, res) => {
    const productData = req.body; // Get product data from the request body


    try {
        // Validate the product data against the schema (you can customize this validation)
        // const isValid = validateProductData(productData);
        
        // if (!isValid) {
        //     // Return an error response
        //     res.status(400).json({ error: "Invalid product data" });
        //     return;
        // }

        // If the data is valid, create the product
        const product = await Product.create(productData);
        res.status(200).json(product);
    } catch (error) {
        // Handle other unexpected errors
        console.error("Error creating a product:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
}


// updata single product
const updateProduct = async (req,res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }

    const product = await Product.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!product){
        res.status(404).json({error : "No such workout"})
    }

    res.status(200).json({product})
    console.log(product)
}

// delete single product
const deleteProduct = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "This product does not in our shop"})
    }

    const product = await Product.findOneAndDelete({_id:id})

    if(!product){
        res.status(404).json({error: "This product does not in our shop"})
    }

    res.status(200).json({product})
    console.log(product)
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}