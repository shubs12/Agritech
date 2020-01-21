const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/crop', (req,res) =>{

    var a = req.body.a
    var b = req.body.b
    var c = req.body.c
    var d = req.body.d
    var e = req.body.e
    var f = req.body.f
    var g = req.body.g

    console.log(req.body)
     const process = spawn('python', ['cropped.py',a,b,c,d,e,f,g]);

    process.stdout.on('data', function(data) {

       const temp = data.toString().replace(/[^a-zA-Z ]/g, "")
        
       res.send(`The best crop suited for the conditions is ${temp}.`)
        
    })
    
    })

    app.post('/test', (req,res) =>{

        var a = req.body.a
        var b = req.body.b
        var c = req.body.c
        var d = req.body.d
        var e = req.body.e
        var f = req.body.f
        var g = req.body.g
        var h = req.body.h
        var i = req.body.i
        const process = spawn('python', ['fertilizerpred.py',a,b,c,d,e,f,g,h,i]);

        process.stdout.on('data', function(data) {

               var newData =  Buffer.from(data.toString().replace(/[^a-zA-Z|0-9 ]/g, ""))
                var one = Buffer.from('1')
                var two = Buffer.from('2')
                var three = Buffer.from('3')
                var four = Buffer.from('4')
                if(Buffer.compare(newData, one) == 0) {
                    res.send('Nitrogeous Fertilizer')
                }
                else if(Buffer.compare(newData, two) == 0) {
                    res.send('phosphatic Fertilizer')
                }
                else if(Buffer.compare(newData, three) == 0) {
                    res.send('potassic Fertilizer')
                }
                else if(Buffer.compare(newData, four) == 0){
                    res.send('complex Fertilizer')
                }
        })
        
        })
        
app.get('/scraping', (req, res) => {
    const process = spawn('python', ['latest_latest_scrapping.py']);

    process.stdout.on('data', function(data) {
        res.send(data)
    })
})

app.listen(5000, ()=>{
    console.log('Server is running!')
})
