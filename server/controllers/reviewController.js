const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

exports.submitReview = async (req, res) => {
    const { id } = req.params;
    const { user, reviewText, rating } = req.body;

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const review = new Review({
            book: id,
            user,
            reviewText,
            rating
        });

        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
