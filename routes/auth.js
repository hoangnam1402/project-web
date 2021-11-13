const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/user');

// @route POST api/auth/register
// @desc register user
// @access Public
router.post('/register', async (req, res) => {
    const {username, password} = req.body

    if(!username || !password)
    return res.status(400).json({success: false, message: 'Missing username or password'})

    try{
        //check use exist
        const user = await User.findOne({username})
        if(user)
        return res.status(400).json({success: false, message: 'Username exist'})

        //good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({username, password: hashedPassword})
        await newUser.save()

        //return token
        const accessToken = jwt.sign({userID: newUser._id}, process.env.token)
        res.json({success: true, message: 'User create success', accessToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

// @route POST api/auth/login
// @desc login user
// @access Public
router.post('/login', async(req, res) => {
    const {username, password} = req.body

    if(!username || !password)
    return res.status(400).json({success: false, message: 'Missing username or password'})

    try {
        //check use exist
        const user = await User.findOne({username})
        if(!user)
        return res.status(400).json({success: false, message: 'Incorrect username or password'})

        //username found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
        return res.status(400),json({success: false, message: 'Incorrect username or password'})

        //good
        const accessToken = jwt.sign({userID: user._id}, process.env.token)
        res.json({success: true, message: 'Login success', accessToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

module.exports = router;