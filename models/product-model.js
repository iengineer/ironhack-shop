const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number, default: 0 },
  imageUrl: { type: String, default: '/images/box.gif' },
  description: { type: String }
});

// Model -> Structure (fields)
const Product = mongoose.model('Product', productSchema);
modules.exports = Product;
