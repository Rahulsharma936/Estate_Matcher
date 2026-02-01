const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new property
router.post('/', async (req, res) => {
    try {
        const property = new Property(req.body);
        const savedProperty = await property.save();
        res.status(201).json(savedProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET recommended properties (AI Mock)
router.post('/match', async (req, res) => {
    try {
        const { style, focus, location, budget } = req.body;
        // Simple mock matching logic
        const properties = await Property.find({
            $or: [
                { type: { $regex: style.split(' ')[0], $options: 'i' } },
                { location: { $regex: location.split(' ')[0], $options: 'i' } }
            ]
        }).limit(3);

        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
