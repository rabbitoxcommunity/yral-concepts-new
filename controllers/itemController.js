const Item = require('../models/Item');

// Get all items
exports.getHome = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.render('web/index', { title: 'All Items', items });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { 
      title: 'Server Error', 
      message: 'Error retrieving items' 
    });
  }
};

