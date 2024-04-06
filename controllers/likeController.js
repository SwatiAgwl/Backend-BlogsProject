const like= require('../models/likeSchema')
const post= require('../models/postSchema')

exports.likingPost = async(req,res)=>{
    try{
        const { user, postId}= req.body;
        const newLike= await like.create({user,postId});
        const updatedPost= await post.findByIdAndUpdate(postId, {$push: {likes: newLike._id}}, {new: true})
                            .populate('likes').exec();
        res.send(updatedPost);

    }
    catch(error){
        console.log(error);
        res.send("error in liking post")
    }
}



exports.dislikingPost= async(req,res)=>{
    try{
        const{likeId, postId}= req.body;
        const updatedLikes= await like.findByIdAndDelete({postId: postId, _id: likeId});
        const updatedPost= await post.findByIdAndUpdate(postId, {$pull: {likes: likeId}}, {new: true})
                            .populate('likes').exec();
        res.send(updatedPost);
    }
    catch(error){
        console.log(error);
        res.send("error in disliking post")
    }
}