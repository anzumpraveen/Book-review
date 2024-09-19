const express = require('express');
const { getAllBooks, getBookById } = require('../controllers/bookController');

const router = express.Router();

// router.get('/', getAllBooks);
// router.get('/:id', getBookById);
router.get('/books', getAllBooks); // Adjusted endpoint
router.get('/books/:id', getBookById);

module.exports = router;



