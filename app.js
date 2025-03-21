// app.js - Main application file
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

// Import database connection
const connectDB = require('./config/database');

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');
const productRoutes = require('./routes/productRoutes');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); // For PUT and DELETE requests from forms
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

// Routes
app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes);
app.use('/', productRoutes);

// Home route
app.get('/', (req, res) => { res.redirect('/'); });

// 404 Handler
app.use((req, res) => {
  res.status(404).render('error', { 
    title: '404 Not Found',
    message: 'The page you are looking for does not exist.' 
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Server Error',
    message: 'Something went wrong on our side.' 
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});