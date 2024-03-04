import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{type:String, required:true},
    propmpt:{type:String, required:true},
    photo:{type:String, required:true},
})

const Post = mongoose.model('Post', postSchema)

export default Post