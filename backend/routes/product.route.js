const express = require('express');
const router = express.Router();

const Product=require("../models/ProductModel");

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
      const { name, image, price, description, quantity } = req.body;
      const product = new Product({ name, image, price, description, quantity });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;