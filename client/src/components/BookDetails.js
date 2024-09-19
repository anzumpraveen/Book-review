// src/component/BookDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './BookDetails.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));

    fetch(`http://localhost:5000/api/books/${id}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [id]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="book-details-page">
      {book && (
        <>
          <h1>{book.title}</h1>
          <img src={book.imageUrl} alt={book.title} className="book-cover" />
          <h3>{book.author}</h3>
          <p>{book.description}</p>
          <ReviewList reviews={reviews} />
          <ReviewForm bookId={id} addReview={addReview} />
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
