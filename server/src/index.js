const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/fertilizer')
const cropRouter = require('./routers/market')
const cartRouter = require('./routers/cart')
const app = express()
const port = process.env.PORT

// app.use((req, res, next) =>{
//         res.send('Site Under maintainence try again soon.')
// })

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use(userRouter)
app.use(taskRouter)
app.use(cropRouter)
app.use(cartRouter)


app.listen(port , ()=>{
    console.log('Server is up on port ' + port)
})