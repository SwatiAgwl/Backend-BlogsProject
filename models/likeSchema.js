const mongoose= require('mongoose');
const post = require('./postSchema');

const likeSchema= new mongoose.Schema({
    user: {
        type:String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'post',
    }
})

module.exports= mongoose.model('like',likeSchema);