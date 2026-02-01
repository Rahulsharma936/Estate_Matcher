const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST a new inquiry
router.post('/', async (req, res) => {
    try {
        const { name, email, budget, location, message } = req.body;

        const newInquiry = new Inquiry({
            name,
            email,
            budget,
            location,
            message
        });

        const savedInquiry = await newInquiry.save();
        res.status(201).json(savedInquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all inquiries (for admin use)
router.get('/', async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
