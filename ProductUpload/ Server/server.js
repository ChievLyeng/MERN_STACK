const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoutes = require('./Route/ProductsRoute')
const OrderRoutes = require('./Route/OrderRoute')

require('dotenv').config()

// app
const app = express()


//middleware
app.use(express.json()); // use to parse the jason data from request
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// app.get('/product', (req,res) => {
//     res.json({mssg: "Welcome to post product page"})
// })




//route
app.use('/',ProductRoutes)
app.use('/',OrderRoutes)

// connect db
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected!");
        app.listen(process.env.PORT, () => {
            console.log("Server is running on Port", process.env.PORT, "!!!");
        });
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });
