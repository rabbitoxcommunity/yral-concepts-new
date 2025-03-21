// routes/aboutRoutes.js
const express = require('express');
const router = express.Router();

// Define the new route
router.get('/contact', (req, res) => {
  res.render('web/contact', { title: 'Contact Us' });
});

module.exports = router;
