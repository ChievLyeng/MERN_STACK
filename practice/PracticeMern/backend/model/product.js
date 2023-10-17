const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    p_name:{
        type: String
    },
    p_brand:{
        type: String
    },
    price : {
        type: Number
    } ,
    min_sale : {
        type: String
    },
    from : {
        type: String
    }

}, {timestamps: true});

const ProductModel = mongoose.model("Products", ProductSchema);

module.exports = ProductModel