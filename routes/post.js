const express = require('express');
const router = express.Router();

const User = require('../models/post');

// @route POST api/auth/post
// @desc add user
// @access public
router.post('/', async (req, res) => {
    const {name, gmail, context} = req.body

    //
    if(!name)
    return res.status(400).json({success: false, message: 'Name is require'})

    try {
        const newPost = new Post({name, gmail, context, stat: 'Wait'})

        await newPost.save()

        res.json({success: true, message: 'Sent success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
});

module.exports = router;