const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const random = require('randomstring')
const { sendSmsVerification } = require('../sms/test-sms')


router.post('/users' , async (req,res)=>{

    const rn_number = random.generate({
      length: 8,
      charset: 'alphanumeric'
    })

    console.log(rn_number)
    const pass = { password: rn_number }
    const newObj = Object.assign(req.body,pass)
    const user = new User(newObj)

    try {
        const token = await user.generateAuthToken()
      await user.save()
      sendSmsVerification(req.body.name, req.body.phone_no, rn_number)
      //sendWelcomeEmail(user.email, user.name)
      res.status(201).send({user, token})
    } catch (e) {
      res.status(400).send(e)
    }
  })
  
router.post('/users/login' , async (req, res)=>{
    try {      
        const user = await User.findByCredentials(req.body.phone_no, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout', auth ,async (req, res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
          return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (e) {
      res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
      res.status(500).send()
    }
})

  router.get('/users/me', auth, async (req, res)=>{
    res.send(req.user)
  })
  
  // router.get('/users/:id', async (req, res)=>{
  //   const _id = req.params.id
  
  //   try {
  //     const user = await User.findById(_id)
  //     if (!user) {
  //       return res.status(404).send
  //     }
  //     res.send(user)
  //   } catch(e) {
  //     res.status(500).send(e)
  //   }
  // })
  
  router.patch('/users/me', auth, async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name' , 'password', 'age', 'gender', 'fam', 'aadhar_no', 'dob', 'house', 'village', 'gram', 'district', 'state', 'occupation', 'reg']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
  
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates'})
    }
  
    try {
        // const user = await User.findById(req.params.id)

        updates.forEach((update) =>  req.user[update] = req.body[update])

        await req.user.save()
        //const user = await User.findByIdAndUpdate(req.params.id , req.body , { new: true , runValidators: true })
  
        res.send(req.user)
  
    } catch (e) {
      res.status(400).send(e)
    }
  })
  router.post('/users/insert', auth, async(req, res) => {
    
      try{
        await User.updateMany({ _id: req.user.id } ,{ $push: {crops:req.body}} , { upsert: true })

        res.send()
      } catch(e) {
        console.log(e)
      }
     
})

  router.get('/users/getCrop', auth, async(req, res) => {
    const id = req.user.id

    try{
      const found = await User.findById(id)

      if(!found){
       return res.status(404).send()
      }

      res.send(found.crops)
    } catch(e) {
      console.log(e)
    }

  })

  router.delete('/users/me', auth , async (req,res)=>{
    try{
      //const user = await User.findByIdAndDelete(req.user._id)
      
     await req.user.remove()
     //sendCancelationEmail(req.user.email, req.user.name)
      res.send(req.user)
    }catch(e){
      res.status(500).send(e)
    }
  })

  var storage = multer.diskStorage({
    destination: function(res, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(res, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  const csvFile = multer({
    storage: {
      storage
    }
  })

  router.post('/users/me/csvfile', auth, csvFile.single('csvfile'), async (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      next(error)
    }

    res.send(file)
  })

  const upload = multer({
    limits: {
      fileSize: 1000000
    },
    fileFilter(req, file, cb) {
      if(!file.originalname.match(/\.(jpg|jpeg|png)/)){
        return cb(new Error('Please upload a image.'))
      }

      cb(undefined, true)
    }
  })

  router.post('/users/me/avatar' , auth, upload.single('avatar') , async (req, res) =>{
   const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
   req.user.avatar = buffer 
    await req.user.save() 
    res.send()
  }, (error, req, res,next) =>{
      res.status(400).send({ error: error.message })
  })

  router.delete('/users/me/avatar', auth, async (req, res) =>{
    req.user.avatar = undefined
    await req.user.save()
    res.send()
  })

  router.get('/users/:id/avatar', async (req, res) =>{
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar){
          throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
      res.status(404).send()
    }
  })

module.exports = router


