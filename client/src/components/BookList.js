// src/component/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch list of books from API
    fetch('http://localhost:5000/api/books')
    .then(response => response.json())
      .then(data => setBooks(data));
  }, []);
  return (
    <div className="home-page">
      <h1>Book List</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book._id} className="book-item">
            <img src={book.imageUrl} alt={book.title} className="book-cover" />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <Link to={`/books/${book._id}`} className="view-reviews-button">
              View Reviews
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


