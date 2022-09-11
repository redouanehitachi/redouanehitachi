const express=require('express')
const mongoose = require('mongoose');


const workroute= require('./route/workout')
require('dotenv').config()
const app= express()
//midleware

app.use(express.json())
//route
app.use('/api/workout',workroute)
//connect to db 
//TODO:coonect to db

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err.message)
  }) 
    



//connect to server
//app.listen(process.env.PORT, () => {console.log('connected')})