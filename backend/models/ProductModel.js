const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: String,
    description: String,
    quantity: {
      type: Number,
      default: 0,
    },
    inCart: Boolean
  });
  
  const Product = mongoose.model('product', productSchema);
  
  module.exports = Product;