// require the databse (this is how we store stuff.)
const mongoose = require('mongoose');

// preparing database for additional info to store
const Schema = mongoose.Schema;

// configure how we will store the data in our database.
const reviewSchema = new Schema({
  content: { type: String },
  stars: { type: Number },
  author: { type: String },
  product: { type: Schema.Types.ObjectId }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
