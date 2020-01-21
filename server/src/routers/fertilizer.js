const express = require('express')
const tasks = require('../models/fertilizer')
const auth = require('../middleware/auth')
const routers = new express.Router()


routers.post('/fertilizer', auth, async (req, res)=>{
    const task = new tasks({
      ...req.body,
      owner: req.user._id      
    })

    try {
      await task.save()
      res.status(201).send(task)
    } catch(e) {
      res.status(400).send(e)
    }
  })
  // GET /tasks?completed=true
  //GET /tasks?limit=10&skip=20
  // GET /tasks?sortBy=createdAt:desc
  routers.get('/fertilizer', auth, async (req, res)=>{
   const match = {} 
    const sort = {}
   if (req.query.completed) {
      match.completed = req.query.completed === 'true'
   }
   
   if (req.query.sortBy) {
     const parts = req.query.sortBy.split(':')
     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1 
   }
    try {
      await req.user.populate({
        path: 'tasks',
        match,
        options: {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
      }).execPopulate()
      res.send(req.user.tasks)
    } catch(e) {
      res.status(500).send(e)
    }
  })
  
  routers.get('/fertilizer/get', auth, async (req, res)=>{
    const id = req.body.id
    try{
      const task = await tasks.find({ owner: id })

      if(!task) {
        res.status(404).send()
      }

      res.send(task)
    } catch(e) {
      res.status(500).send(e)
    }
  })
  
  routers.patch('/fertilizer/:id', auth, async (req, res)=>{
    const Updates = Object.keys(req.body)
    const allowedUpdates = ['item' , 'cost']
    const isValidOperation = Updates.every((update) => allowedUpdates.includes(update))
  
    
    if(!isValidOperation) {
      return res.status(400).send({error: 'Invalid Updates'})
  }
  
    try {
        const task = await tasks.findOne({ _id: req.params.id, owner: req.user._id })
       
        
      //const task = await tasks.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators:true})
  
      if(!task){
        return res.status(404).send()
      }
  
      Updates.forEach((update) => task[update] = req.body[update])

        await task.save()

      res.send(task)
    } catch(e){
        res.status(400).send(e)
    }
  })
  
  routers.delete('/fertilizer/:id', auth, async (req,res)=>{
    try {
      const task = await tasks.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
      
      if(!task) {
        return res.status(404).send()
      }
  
      res.send(task)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  module.exports = routers