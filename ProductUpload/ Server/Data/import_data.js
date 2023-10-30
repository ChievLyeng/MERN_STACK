const fs = require('fs');
const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('../Models/ProductModel')


//connect to db
mongoose.connect(process.env.DB,{
    useUnifiedTopology: true, useNewUrlParser: true
  })
  .then((con) => {
    console.log("Connected to Database!!!");
    // console.log(con);
    
  })
  .catch((error) => {
    console.log("Failed to connect to the database!",error);
  })
  
  // read json file
  const products = JSON.parse(fs.readFileSync(`${__dirname}/data.json`,'utf-8'));
  
  //import data into db
  const importData = async () => {
    try{
        await Product.create(products);
        console.log("Data successfully loaded!");
    }catch(err){
      console.log(err)
    }
  }
  
  // delete all data from collection
  const deleteData = async () => {
    try{
      await Product.deleteMany();
      console.log("Data successfully Deleted!");
    }catch(err){
      console.log(err)
    }
    process.exit();
  }
  
  if (process.argv[2] === '--import'){
    importData();
  }
  else if(process.argv[2] === '--delete'){
    deleteData();
  }
  
  // node Data/import_data.js
  // node Data/import_data.js --import
  // node Data/import_data.js --delete
  console.log(process.argv);