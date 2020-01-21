const express = require('express')
const crops = require('../models/market')
const auth = require('../middleware/auth')
const cropRouter = new express.Router()


cropRouter.post('/market', auth, async (req, res)=>{
    const crop = new crops({
      ...req.body,
      owner: req.user._id      
    })

    try {
      await crop.save()
      res.status(201).send(crop)
    } catch(e) {
      res.status(400).send(e)
    }
  })
  
  cropRouter.get('/market', auth, async (req, res)=>{
  const crop = await crops.find()
      res.send(crop)
  })
  
  cropRouter.get('/market/get', auth, async (req, res)=>{
  //  const _id = req.params.id
  const id = req.body.id
    try{
      const crop = await crops.find({ owner: id })

      if(!crop) {
        res.status(404).send()
      }

      res.send(crop)
    } catch(e) {
      res.status(500).send(e)
    }
  })
  
  cropRouter.patch('/market/:id', auth, async (req, res)=>{
    const Updates = Object.keys(req.body)
    const allowedUpdates = ['item' , 'cost']
    const isValidOperation = Updates.every((update) => allowedUpdates.includes(update))
  
    
    if(!isValidOperation) {
      return res.status(400).send({error: 'Invalid Updates'})
  }
  
    try {
        const crop = await crops.findOne({ _id: req.params.id, owner: req.user._id })
       
        
      //const task = await tasks.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators:true})
  
      if(!crop){
        return res.status(404).send()
      }
  
      Updates.forEach((update) => crop[update] = req.body[update])

        await crop.save()

      res.send(crop)
    } catch(e){
        res.status(400).send(e)
    }
  })
  
  cropRouter.delete('/market/:id', auth, async (req,res)=>{
    try {
      const crop = await crops.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
      
      if(!crop) {
        return res.status(404).send()
      }
  
      res.send(crop)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  module.exports = cropRouter