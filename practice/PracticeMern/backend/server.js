const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config()
const path = require("path");
const productRoute = require('./route/proudctRoute');

//express app
const app = express()

//middleware
app.use(express.json());
app.use(cors());

app.use('/',productRoute);

//connect to db
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
        console.log("Server is running on port",process.env.PORT,"!!!");
    })
    

  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });




