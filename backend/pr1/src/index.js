import express from "express"
import dotenv from "dotenv"
import { Router } from "express"


const app = express()
const router = Router()

dotenv.config({
    path: './env'
})

const middleware = async(req, _, next)=>{
    console.log('Middleware called')
    next()
}

// app.get('/', (req,res)=>{
//     res.send('Hello world!')
// })

// app.get('/about', (req,res)=>{
//     res.send('About Page')
// })

app.get('/about', (req,res)=>{
    res.send('About Page')
})
router.route('/').get((req,res)=>{
    res.send('Hello world!')
})

router.route('/about').get( middleware, (req,res)=>{
    res.send('About Page')
})




app.use("/",router)

app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`)
})


