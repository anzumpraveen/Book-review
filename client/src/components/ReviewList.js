// src/component/ReviewList.js
import React from 'react';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <div className="review-rating">Rating: {review.rating} stars</div>
            <div className="review-comment">{review.comment}</div>
            <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
