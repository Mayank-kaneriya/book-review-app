const Review = require('../models/Review');
const Book = require('../models/Book');

// POST /api/books/:id/reviews
exports.addReview = async (req, res) => {
  const { review_text, rating } = req.body;
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ msg: 'Book not found' });

    const existingReview = await Review.findOne({
      book: bookId,
      reviewer: req.user.id
    });

    if (existingReview)
      return res.status(400).json({ msg: 'You already reviewed this book' });

    const review = new Review({
      book: bookId,
      reviewer: req.user.id,
      review_text,
      rating
    });

    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ msg: 'Error adding review' });
  }
};

// GET /api/books/:id/reviews
exports.getReviews = async (req, res) => {
  const bookId = req.params.id;
  try {
    const reviews = await Review.find({ book: bookId })
      .populate('reviewer', 'name email')
      .sort({ _id: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching reviews' });
  }
};
