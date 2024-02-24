import express from 'express'
import postModel from '../models/postModel.js'

const postRouter = express.Router()
postRouter.post('/', async (req, res) =>{
    try {
        const post = req.body
    const newPost = new postModel(post)
    await newPost.save()
    res.json(newPost)
        
    } catch (error) {
        console.log(error)
    }
}
)
postRouter.get('/', async (req, res) =>{
    const post = await postModel.find()
    res.json(post)
}
)
postRouter.delete('/:id', async (req, res) =>{
    try{
        const {id} = req.params
        const deletePost = await postModel.findByIdAndDelete(id)
        
        if(deletePost){
           return res.json(deletePost)
        }
        res.json("no post")
    }
    catch(error)
    {console.log(error)}
})
postRouter.patch('/:id', async (req, res) =>{
    try {
        const {id} = req.params
        const post = req.body

        const updatePost = await postModel.findByIdAndUpdate(
            id, post,{new:true})
            if(!updatePost)
                return res.json("no post y this id")
            res.json(updatePost)
    } catch (error) {
        console.log(error)
    }
}
)
export default postRouter