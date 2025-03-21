// routes/aboutRoutes.js
const express = require('express');
const router = express.Router();

// Define the new route
router.get('/products', (req, res) => {
  res.render('web/products', { title: 'Contact Us' });
});

module.exports = router;
