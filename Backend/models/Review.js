const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  review_text: String,
  rating: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Review', ReviewSchema);
