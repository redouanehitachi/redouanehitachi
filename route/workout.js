const express=require('express')
const router =express.Router()
const Workout=require('../models/workoutmodel')
const {createworkout,getworkouts,getsingleworkout}=require('../contoller/controlerWorkout')

// GET all workouts
router.get('/', getworkouts)
 
// GET a single workout
  router.get('/:id', getsingleworkout)
  
// POST a new workout
  router.post('/',createworkout)
  
// DELETE a workout
  router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
  })
  
// UPDATE a workout
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
  })



module.exports=router