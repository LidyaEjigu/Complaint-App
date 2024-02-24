import mongoose from 'mongoose'


const postSchema = mongoose.Schema(
    {
        title:{type:String},
        message:{type:String},
        file:{
            type:String
        },
        date:{ type: String,
           default: new Date()
        },
        creator:{type:String}
    }
)
const postModel = mongoose.model('postModelff',postSchema)
export default postModel