// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');


const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;
