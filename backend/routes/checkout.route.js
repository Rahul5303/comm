const express = require('express');
const router = express.Router();
const Checkout = require('../models/CheckoutModel');

// Route to handle checkout
router.post('/', async (req, res) => {
  try {
    const { name, email, password, address,phone} = req.body;

    // Create a new product instance
    const product = new Checkout({
      name,
      email,
      password,
      address,
      phone
    });

    // Save the product to the database
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

  