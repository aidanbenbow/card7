import express from 'express'
import Datastore from 'nedb'


const app = express(),
db = new Datastore('hiscores.db')

db.loadDatabase()


app.use(express.static('public'))
app.use(express.json())

app.post('/api', (req,res)=>{   
    let dt = req.body
   // console.log(dt)
    db.insert(dt)
})

app.get('/api', (req,res)=>{
    db.find({}).sort({score:1, misses:-1}).limit(3).exec(function (err,data){
       // console.log(data)
        res.json(data)
    }) 
})


app.listen(8000)