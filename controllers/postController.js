const post= require('../models/postSchema');

exports.createPost = async(req,res)=>{
    try{
        const{title,body}= req.body;
        const newPost= await post.create({title,body});
        res.send({
            post: newPost,
        })
    }
    catch(error){
        console.log(error);
        res.send("error in creating post")
    }
}

exports.getAllPosts= async(req,res)=>{
    try{
        const posts= await post.find().populate('likes').populate('comments').exec();
        res.send(posts);
    }
    catch(error){
        console.log(error);
        res.send("error in fetching posts")
    }
}