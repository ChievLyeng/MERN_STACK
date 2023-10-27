const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoutes = require('./Route/ProductsRoute')

require('dotenv').config()

// app
const app = express()

//middleware
app.use(express.json()); // use to parse the jason data from request
app.use(cors());


// app.get('/product', (req,res) => {
//     res.json({mssg: "Welcome to post product page"})
// })
//route
app.use('/products',ProductRoutes)

// connect db
mongoose.connect(process.env.DB)
.then(() => {
    console.log("Database is connected!");
    //listen for request
    app.listen(process.env.PORT, () => {
        console.log("Server is running on Port",process.env.PORT,"!!!");
    })
})
.catch((err) => {
    console.log(err);
})