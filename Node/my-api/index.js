require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

const User = require('./models/User');

// GET all users
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// GET one user
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

// POST create user
app.post('/api/users', async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.status(201).json(user);
});

// PUT update user
app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name },
            { new: true }
        );
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});
