import express from 'express'
import Datastore from 'nedb'


const app = express(),

db = new Datastore('hiscores.db')

db.loadDatabase()

app.use(express.static('public'))
app.use(express.json())

app.post('/api', async (req,res)=>{   
    let dt = req.body
         db.insert(dt)
 
})

app.get('/api', async (req,res)=>{
    db.find({ }).sort({ score: -1 }).limit(3).exec(function (err, data) {
       // console.log(data)
        res.json(data)
      });
     
})

app.get('/comments', async (req,res)=>{
    db.find({ }).sort({ com: -1 }).exec(function (err, data) {
        
        res.json(data)
      });
     
})


app.listen(8000)