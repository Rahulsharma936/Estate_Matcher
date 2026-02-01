const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Simple Route
app.get('/', (req, res) => {
    res.send('AI Consulting API is running...');
});

// Import Routes
const inquiryRoutes = require('./routes/inquiry');
const propertyRoutes = require('./routes/properties');

app.use('/api/inquiries', inquiryRoutes);
app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
