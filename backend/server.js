const express = require('express');
const cors = require("cors");
require('dotenv').config()

//express app
const app = express()
const workoutRouters = require('./route/workouts');
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(cors());

// app.use((req,res, next) => {
//     console.log(req.path, req.method);
//     console.log(Date.now());
//     next()
// })

//routes
// app.get('/', (req, res) => {
//     res.json({mssg : 'welcome to the app'})
// })

app.use('/api/workouts', workoutRouters)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ",process.env.PORT,'!!!');
        })
    })
    .catch((error) => {
        console.log(error)
    })






