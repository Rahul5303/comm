const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  // existing fields for the product model

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  // other fields as needed
});

const Checkout= mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
