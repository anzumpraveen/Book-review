const Book = require('../models/bookModel');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books)
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get single book details
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
