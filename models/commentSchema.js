const mongoose= require('mongoose');
const post = require('./postSchema');

const commentSchema= new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    body: {
        type: String,
        required: true,
    }

})

module.exports= mongoose.model('comment',commentSchema);