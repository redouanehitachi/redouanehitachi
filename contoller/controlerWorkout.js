const Workout=require('../models/workoutmodel')
const mongoose=require('mongoose')



//get all workout
const getworkouts=async(req,res)=>{
  const  allworkout= await Workout.find({})
  res.status(200).json(allworkout)
}

//get single workout
const getsingleworkout=async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
//create single workout

const createworkout=async(req,res)=>{
    const {title,reps,load}=req.body
    try {
        const workout = await Workout.create({title,reps,load})
        res.status(400).json(workout)
    } catch (error) {
        res.status(404).json({error:error.mssg})
        
    }
    
}
//delete workout
//update workout
module.exports={createworkout,getworkouts,getsingleworkout}