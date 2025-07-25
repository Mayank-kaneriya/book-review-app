const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  addBook,
  getAllBooks,
  getBookDetail
} = require('../controllers/bookController');

// Add new book
router.post('/', auth, addBook);

// Get all books with filters + pagination
router.get('/', getAllBooks);

// Get one book with reviews + avg rating
router.get('/:id', getBookDetail);

module.exports = router;
