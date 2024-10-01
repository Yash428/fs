import express from "express"
import { Router } from "express"
import fs from 'fs'
import ejs from 'ejs'
import bodyParser from "body-parser"


const app = express()
const router = Router()

const middleware = async(req, _, next)=>{
    console.log('Middleware called')
    next()
}

router.route('/').get((req,res)=>{
    res.send('Hello world!')
})

router.route('/about').get( middleware, (req,res)=>{
    res.send('About Page')
})

// fs.readFile('./src/1.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })

app.use("/",router)

//Practical 2
app.get('/fileReader', (req,res)=>{
    fs.readFile('./src/1.txt', 'utf8', (err, data)=>{
        if(err){
            console.error(err)
            return
        }
        res.send(data)
    })
})

//Practical-4
app.get("/arithmetic", (req,res)=>{
    const { num1, num2,operation } = req.query
    if(!num1 ||!num2){
        return res.status(400).send("Please provide both numbers")
    }
    if(!["add", "subtract", "multiply", "divide"].includes(operation)){
        return res.status(400).send("Invalid operation")
    }
    switch(operation){
        case "add":
            return res.send(`The sum of ${num1} and ${num2} is ${parseInt(num1) + parseInt(num2)}`)
        case "subtract":
            return res.send(`The difference of ${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}`)
        case "multiply":
            return res.send(`The product of ${num1} and ${num2} is ${parseInt(num1) * parseInt(num2)}`)
        case "divide":
            if(num2 === "0"){
                return res.status(400).send("Cannot divide by zero")
            }
            return res.send(`The quotient of ${num1} and ${num2} is ${parseInt(num1) / parseInt(num2)}`)
        default:
            return res.status(400).send("Invalid operation")
    }
})



app.listen(8000 , ()=>{
    console.log(`Server is running on port  8000`)
})


