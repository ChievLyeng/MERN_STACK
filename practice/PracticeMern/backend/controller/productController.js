const { json } = require('express');
const Products = require('../model/product')
const mongoose = require('mongoose')

// const proudctController = {
//     product : async (req,res) => {
//         const {
//             p_name,
//             p_brand,
//             price,
//             min_sale,
//             from
//         } = req.body
//     }
// }

const getProducts = async (req,res) => {
    const products = await Products.find({}).sort({createdAt: -1})
    res.status(200).json(products);
}

module.exports = {
    getProducts
};