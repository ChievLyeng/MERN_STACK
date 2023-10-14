const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts
}  = require('../controllers/WorkoutController')

// get all workouts
router.get('/', getWorkouts)


//get single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//DELET a new workout
router.delete('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})

//update a new workout
router.patch('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})

module.exports = router