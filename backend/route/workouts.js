const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req,res) => {
    res.json({mssg : 'GET all workouts'})
})

//get single workout
router.get('/:id', (req,res) => {
    res.json({mssg : 'GET a single workout'})
})

//post a new workout
router.post('/', (req,res) => {
    res.json({mssg : 'GET a single workout'})
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