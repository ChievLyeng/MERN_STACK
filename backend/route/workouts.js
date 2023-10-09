const express = require('express')
const router = express.Router()
const Workout = require('../models/WorkoutModel')

// get all workouts
router.get('/', (req,res) => {
    res.json({mssg : 'GET all workouts'})
})

//get single workout
router.get('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})

//post a new workout
router.post('/', async (req,res) => {
    const {title,load,reps} = req.body
    
    try{
        const workout = await Workout.create(({title,load,reps}))
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELET a new workout
router.delete('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})

//update a new workout
router.patch('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})



module.exports = router