const express = require('express');
require('dotenv').config()

//express app
const app = express()

//middleware
app.use((req,res, next) => {
    console.log(req.path, req.method);
    console.log(Date.now());
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg : 'welcome to the app'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000!!");
})


