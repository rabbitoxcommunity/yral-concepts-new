// routes/aboutRoutes.js
const express = require('express');
const router = express.Router();

// Define the new route
router.get('/about', (req, res) => {
  res.render('web/about', { title: 'About Us' });
});

module.exports = router;
