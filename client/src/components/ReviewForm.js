// src/component/ReviewForm.js
import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ bookId, addReview }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { rating, comment };
    // Post review to API
    fetch(`/api/books/${bookId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })
      .then(response => response.json())
      .then(data => addReview(data));

    setRating(1);
    setComment('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a review..."
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
