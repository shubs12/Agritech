const express = require('express')
const seeds = require('../models/seeds')
const auth = require('../middleware/auth')
const seedRouter = new express.Router()


seedRouter.post('/seed', auth, async (req, res)=>{

  const seed = new seeds({
    ...req.body,
    owner: req.user._id      
  })
  
    try {
      await seed.save()
      res.status(201).send(seed)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  seedRouter.get('/seed/get', auth, async (req, res)=>{
    const id = req.body.id
    try{
      const seed = await seeds.find({ owner: id })

      if(!seed){
        console.log('no seed found')
      }

      res.send(seed)
    } catch(e){      
      res.status(500).send(e)
    }
  })
  

  seedRouter.patch('/seed/:id', auth, async (req, res)=>{
    const Updates = Object.keys(req.body)
    const allowedUpdates = ['quantity']
    const isValidOperation = Updates.every((update) => allowedUpdates.includes(update))
  
    
    if(!isValidOperation) {
      return res.status(400).send({error: 'Invalid Updates'})
  }
  
    try {
        const seed = await seeds.findOne({ _id: req.params.id, owner: req.user._id })
       
      if(!cart){
        return res.status(404).send()
      }
  
      Updates.forEach((update) => cart[update] = req.body[update])

        await seed.save()

      res.send(seed)
    } catch(e){
        res.status(400).send(e)
    }
  })
  
  seedRouter.delete('/seed/:id', auth, async (req,res)=>{
    try {
      const seed = await seeds.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
      
      if(!seed) {
        return res.status(404).send()
      }
  
      res.send(seed)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  module.exports = seedRouter