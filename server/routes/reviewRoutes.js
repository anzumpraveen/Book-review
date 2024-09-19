

const express = require('express');
const { submitReview } = require('../controllers/reviewController');

const router = express.Router();

// This will match POST requests to /api/books/:id/reviews
// router.post('/:id/reviews', submitReview);
router.post('/books/:id/reviews', submitReview); // Adjusted endpoint


module.exports = router;
