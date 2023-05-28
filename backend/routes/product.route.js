const express = require('express');
const router = express.Router();

const Product=require("../models/ProductModel");

// to get product data from all users

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

// to add product data from all users

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

// Route to retrieve a single product by ID

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to update a product's quantity and remove from cart if quantity becomes zero
// app.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { quantity } = req.body;
//     let updatedProduct;

//     if (quantity === 0) {
//       updatedProduct = await Product.findByIdAndUpdate(
//         id,
//         { quantity, inCart: false },
//         { new: true }
//       );
//     } else {
//       updatedProduct = await Product.findByIdAndUpdate(
//         id,
//         { quantity },
//         { new: true }
//       );
//     }

//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Route to add a product to the cart
router.put('/:id/add-to-cart', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { inCart: true },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to remove a product from the cart
router.put('/:id/remove-from-cart', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { inCart: false },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get all products in the cart
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({ inCart: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





// to delete product data from all users

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;