import express from "express"
import fs from 'fs'
import ejs from 'ejs'
import bodyParser from "body-parser"


const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res)=>{
    res.render('index')
})

app.post("/add", (req,res)=>{
    const { num1, num2 } = req.body
    const sum = parseInt(num1)+parseInt(num2)
    res.render('result', { sum });
})



app.listen(8000 , ()=>{
    console.log(`Server is running on port  8000`)
})


