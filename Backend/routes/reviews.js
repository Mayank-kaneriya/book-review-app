const express = require('express');
const router = express.Router({ mergeParams: true }); // enables :id from books route

const {
  addReview,
  getReviews
} = require('../controllers/reviewController');

// POST /api/books/:id/reviews
router.post('/:id/reviews', addReview);

// GET /api/books/:id/reviews
router.get('/:id/reviews', getReviews);

module.exports = router;
