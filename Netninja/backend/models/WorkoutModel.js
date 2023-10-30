const mongoose = require('mongoose');


const workoutSchema = mongoose.Schema({
    title: {
        type : String,
        require : true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

