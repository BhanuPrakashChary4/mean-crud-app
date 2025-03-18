const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

module.exports = router;
