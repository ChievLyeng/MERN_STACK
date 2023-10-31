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

const getImage = async (req,res) => {
    const image = await UserModel.find()
    res.status(200).json(image)
    // console.log(image)
}

app.get('/getImage',getImage)


app.listen(3001,() => {
    console.log("server is running on port 3001!!");
})
