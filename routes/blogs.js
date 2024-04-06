const express= require('express');
const router= express.Router();

// import controllers
const {createPost,getAllPosts}= require('../controllers/postController');
const {createComment}= require('../controllers/commentController')
const {likingPost, dislikingPost}= require('../controllers/likeController')

// define routes
router.post('/createPost',createPost);
router.get('/getAllPosts',getAllPosts);
router.put('/createComment', createComment);
router.put('/likes/like', likingPost);
router.put('/likes/dislike', dislikingPost);

module.exports= router;