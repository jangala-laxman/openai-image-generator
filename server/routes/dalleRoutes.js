import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import {OpenAI} from 'openai'

dotenv.config()

const router = express.Router()


const openai = new OpenAI({
    apikey:process.env.OPENAI_API_KEY
})


router.get('/', (req,res)=>{
    res.send('hello from Dalle')
})

router.post('/', async(req,res)=>{
    try{
        const {prompt} = req.body;
        const aiResponse = await openai.images.generate({
            prompt,
            n:1,
            size:'1024x1024',
            // response_format:'b64_json'
        })
        const image = aiResponse.data[0].url;
        res.status(200).json({photo:image})
    }catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }
})


export default router