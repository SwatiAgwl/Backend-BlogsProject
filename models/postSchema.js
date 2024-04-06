const mongoose= require('mongoose');
const like = require('./likeSchema');
const comment = require('./commentSchema');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type:String,
        required:true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

module.exports= mongoose.model('post', postSchema);