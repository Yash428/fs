import express from "express"
import { Router } from "express"
import fs from 'fs'


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

app.get('/fileReader', (req,res)=>{
    fs.readFile('./src/1.txt', 'utf8', (err, data)=>{
        if(err){
            console.error(err)
            return
        }
        res.send(data)
    })
})

app.listen(8000 , ()=>{
    console.log(`Server is running on port  8000`)
})


