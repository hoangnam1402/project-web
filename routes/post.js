const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')

const Post = require('../models/post');

// @route GET api/auth/post
// @desc add user
// @access private
router.get('/', verifyToken,  async (req, res) =>{
    try {
        const post = await Post.find({})
        res.json({success: true, post})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

// @route POST api/auth/post
// @desc add user
// @access public
router.post('/', async (req, res) => {
    const {name, gmail, context} = req.body

    //
    if(!gmail)
    return res.status(400).json({success: false, message: 'Gmail is require'})

    try {
        const newPost = new Post({name, gmail, context, stat: 'Wait'})

        await newPost.save()

        res.json({success: true, message: 'Sent success', post: newPost})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
});

// @route PUT api/auth/post
// @desc add user
// @access private
router.put('/:id', verifyToken, async (req, res) => {
    const {name, gmail, context, stat} = req.body
    
    if(!gmail)
    return res.status(400).json({success: false, message: 'Gmail is require'})

    try {
        let updatePost = {name, gmail, context, stat}

        const postUpdateCondition = {_id: req.params.id}

        updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {new: true})

        //user not authorised to update postUpdateCondition
        if (!updatePost)
        return res.status(401).json({success: false, message: 'Post not found or user not authorised'})
        
        //good
        res.json({success: true, message: 'Update success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

module.exports = router;