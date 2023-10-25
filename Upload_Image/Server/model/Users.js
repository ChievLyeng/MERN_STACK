const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    image: {
        type: String,
        require : true
    }
},{timestamps: true})

module.exports = UserModel = mongoose.model('users',UserSchema)  