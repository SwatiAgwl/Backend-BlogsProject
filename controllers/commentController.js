const comment= require('../models/commentSchema')
const post= require('../models/postSchema')

exports.createComment = async(req,res)=>{
    try{
        const {user,postId,body}= req.body;
        const newComment= await comment.create({user,postId,body});
        
        const updatedPost= await post.findByIdAndUpdate(postId, {$push: {comments: newComment._id}}, {new:true})
                            .populate('comments').exec();

        res.send({
            updatedpost:updatedPost,
        });
    }
    catch(error){
        console.log(error);
        res.send("error in creating comment");
    }
}