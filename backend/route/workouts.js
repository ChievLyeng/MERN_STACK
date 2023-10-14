const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}  = require('../controllers/WorkoutController')

// get all workouts
router.get('/', getWorkouts)


//get single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//DELET a new workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)

module.exports = router