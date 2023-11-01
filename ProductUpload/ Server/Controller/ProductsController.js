const Product = require('../Models/ProductModel')
const mongoose = require('mongoose')
const multer = require('multer')
const validateProductData = require('./Validation') // validation function


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
// const createProduct = async (req, res) => {
//     const productData = req.body; // Get product data from the request body


//     try {
//         // Validate the product data against the schema (you can customize this validation)
//         // const isValid = validateProductData(productData);
        
//         // if (!isValid) {
//         //     // Return an error response
//         //     res.status(400).json({ error: "Invalid product data" });
//         //     return;
//         // }

//         // If the data is valid, create the product
//         const product = await Product.create(productData);
//         res.status(200).json(product);
//     } catch (error) {
//         // Handle other unexpected errors
//         console.error("Error creating a product:", error); // Log the error for debugging
//         res.status(500).json({ error: "Internal server error" });
//     }
// }
// };

// 3 
const createProduct =  async (req,res) => {
    
    try {
        // Access form fields and uploaded file through `req.body` and `req.file`
        const { p_Name, p_Type, p_price, Quantity, Source, min_Order, Nutrition_Fact, Description, Other, Note } = req.body;
        
        // Create a new product instance
        const newProduct = new Product({
          p_Name,
          p_Type,
          p_price,
          Quantity,
          Source,
          min_Order,
          Nutrition_Fact,
          Description,
          Other,
          Note
        });
    
        if (req.file) {
          newProduct.Image.data = req.file.buffer; // Get file data from multer
          newProduct.Image.contentType = req.file.mimetype; // Get file content type from multer
        }
    
        await newProduct.save();
    
        // Prepare a simplified response for the photo data
        const simplifiedPhotoData = {
          contentType: newProduct.Image.contentType,
          data: "Photo data has been uploaded successfully",
        };
    
        res.status(200).json({
          message: "Product created successfully",
          success: true,
          product: {
            _id: newProduct._id,
            p_Name: newProduct.p_Name,
            p_Type: newProduct.p_Type,
            p_price: newProduct.p_price,
            Image: simplifiedPhotoData,
            Quantity: newProduct.Quantity,
            Source: newProduct.Source,
            min_Order: newProduct.min_Order,
            Nutrition_Fact: newProduct.Nutrition_Fact,
            Description: newProduct.Description,
            Other: newProduct.Other,
            Note: newProduct.Note,
            createdAt: newProduct.createdAt,
            updatedAt: newProduct.updatedAt,
          },
        });
      } catch (error) {
        console.error("Error in creating product:", error);
        res.status(500).json({ error: error, message: "Error in creating product" });
      }
}

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


// Get photo controller

const getProductImage = async (req, res) => {
    try {
      const P_Image = await Product.findById(req.params.id);
      if (P_Image.Image.data) {
        res.set("Content-Type", P_Image.Image.contentType);
        return res.status(200).send(P_Image.Image.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
        message: "Error while getting photo",
        success: false,
      });
    }
  };

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductImage
}