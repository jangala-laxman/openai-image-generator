import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connect from './connectDB.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)
app.get('/', (req,res)=>{
    res.send('hello there')
})

const start = async()=>{
    try{
        connect(process.env.MONGODB_URL)
        app.listen(4000, ()=>{
            console.log('server is running on port 4000')
        })
    }catch(err){
        console.log(err)
    }
   
}

start()
