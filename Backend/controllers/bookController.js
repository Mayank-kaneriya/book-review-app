const Book = require('../models/Book');
const Review = require('../models/Review');

// POST /api/books
exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const book = new Book({ title, author, genre, createdBy: req.user.id });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ msg: 'Error adding book' });
  }
};

// GET /api/books?author=&genre=&page=
exports.getAllBooks = async (req, res) => {
  try {
    const { author, genre, page = 1, limit = 5 } = req.query;
    const query = {};
    if (author) query.author = author;
    if (genre) query.genre = genre;

    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const count = await Book.countDocuments(query);

    const booksWithRatings = await Promise.all(
      books.map(async (book) => {
        const reviews = await Review.find({ book: book._id });
        const avgRating =
          reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);
        return { ...book._doc, averageRating: avgRating.toFixed(1) };
      })
    );

    res.json({
      total: count,
      page: Number(page),
      limit: Number(limit),
      books: booksWithRatings
    });
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching books' });
  }
};

// GET /api/books/:id
exports.getBookDetail = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean();
    if (!book) return res.status(404).json({ msg: 'Book not found' });

    const reviews = await Review.find({ book: book._id }).populate('reviewer', 'name');
    const avgRating =
      reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);

    res.json({
      ...book,
      reviews,
      averageRating: avgRating.toFixed(1)
    });
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching book detail' });
  }
};
