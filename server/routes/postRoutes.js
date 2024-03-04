import express from 'express'
import * as dotenv from 'dotenv'
import {OpenAI} from 'openai'
import Post from '../models/posts.js'
import {v2 as cloudinary} from 'cloudinary';
dotenv.config()
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET

});


const router = express.Router()
router.get('/', async(req,res)=>{
    try{
        const post = await Post.find({})
        res.status(200).json({success:true, data:post})
    }catch(err){
        res.status(500).json({success:false, message:err})
    }
})
router.post('/', async(req,res)=>{
    try{
        const {name, prompt, photo} = req.body
        const phototUrl = await cloudinary.uploader.upload(photo)
        const newPost = await Post.create({
            name, prompt, photo:phototUrl
        })    

        res.status(200).json({success:true, data:newPost});
    }catch(err){
        res.status(500).json({success:false, data:err})
    }
})



export default router
