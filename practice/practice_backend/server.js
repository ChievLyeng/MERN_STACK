const express = require('express')
const productRouters = require('./route/product')
require('dotenv').config()
const mongoose = require('mongoose');

const app = express()

//middleware
app.use(express.json())


// app.use((req,res,next) => {
//     console.log(req.params,req.method)
//     console.log(Date.now())
//     next()
// })

app.use('/api/products',productRouters)

//route
app.get('/',(req,res) => {
    res.json({mssg : 'Welcome to the first node pracitce' })
})

//listen for request
// app.listen(process.env.PORT, () => {
//     console.log("Listening on port",process.env.PORT,'!!!');
// })

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ",process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    }) 

