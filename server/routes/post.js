const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')

const Post = require('../models/post');

// @route GET api/auth/post
// @desc view post
// @access private
router.get('/', verifyToken,  async (req, res) =>{
    try {
        const posts = await Post.find({})
        res.json({success: true, posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

// @route POST api/auth/post
// @desc add post
// @access public
router.post('/', async (req, res) => {
    const {name, gmail, content} = req.body

    //
    if(!gmail)
    return res.status(400).json({success: false, message: 'Gmail is require'})

    if(!content)
    return res.status(400).json({success: false, message: 'Content is require'})

    try {
        const newPost = new Post({name, gmail, content, stat: 'Wait'})

        await newPost.save()

        res.json({success: true, message: 'Sent success', post: newPost})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
});

// @route PUT api/auth/post
// @desc update post
// @access private
router.put('/:id', verifyToken, async (req, res) => {
    const {name, gmail, content, stat} = req.body
    
    if(!gmail)
    return res.status(400).json({success: false, message: 'Gmail is require'})

    if(!content)
    return res.status(400).json({success: false, message: 'Content is require'})

    try {
        let updatePost = {name, gmail, content, stat}

        const postUpdateCondition = {_id: req.params.id}

        updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {new: true})

        //user not authorised to update post or post not found
        if (!updatePost)
        return res.status(401).json({success: false, message: 'Post not found or user not authorised'})
        
        //good
        res.json({success: true, message: 'Update success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

// @route DELETE api/auth/post
// @desc delete post
// @access private
router.delete('/:id', verifyToken, async (req, res) => {    
    try {
        const postDeleteCondition = {_id: req.params.id}
        const deletePost = await Post.findOneAndDelete(postDeleteCondition)

        //user not authorised to delete post or post not found
        if (!deletePost)
        return res.status(401).json({success: false, message: 'Post not found or user not authorised'})
        
        //good
        res.json({success: true, message: 'Delete success', post: deletePost})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

module.exports = router;