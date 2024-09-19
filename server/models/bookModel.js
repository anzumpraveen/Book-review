const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    imageUrl: { type: String }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
