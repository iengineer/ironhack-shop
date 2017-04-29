// require the databse (this is how we store stuff.)
const mongoose = require('mongoose');

// preparing database for additional info to store
const Schema = mongoose.Schema;

// configure how we will store the data in our database.
const reviewSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Please tell us more about your review.'], // basic validation
    minlength: [50, 'Please write atleast 50 characters.'],
    maxlength: [400, 'Thank you, but this is too much. Reduce it to 400 characters.'] // we can limit the amount of characters
  },
  stars: {
    type: Number,
    required: [true, 'Please rate the product 1-5.'], // We can validate and request a min:max
    min: [1, 'Minimum ratings can be no lower than 1 stars.'],
    max: [5, 'Rating can be no better than 5 stars.']
  },
  author: {
    type: String,
    required: [true, 'Please provide your name.']
  },
  // BY REFERENCE INSTEAD OF SUBDOCUMENTS
  // product: { type: Schema.Types.ObjectId }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
