const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const UserModel = require('./model/Users')

const app = express()

//middle ware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb+srv://lyengChiev:Lyeng12345@mernapp.q1anbjw.mongodb.net/')

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null,'public/Images')
    },
    filename: (req,file,cb) => {
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload',upload.single('file'),(req,res) => {
    UserModel.create({image: req.file.filename})
    .then(result => res.json(result),console.log("Uploaded"))
    .catch((err) => console.log(err))
})

app.get('/getImage',(req,res) => {
    UserModel.find()
    .then((users => res.json(users)))
    .catch((err) => res.json(err))
})


app.listen(3001,() => {
    console.log("server is running on port 3001!!");
})
