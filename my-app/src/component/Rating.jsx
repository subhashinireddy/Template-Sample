import React from 'react';
import '../variables/Rating.scss';

const Rating = () => {
  const ratings = [
    {
      text: "Anonymous",
      customerStatus: "Verified customer",
      reviewText: "The urn is perfect. Service was outstanding.",
      location: "Mulgrave, Australia, 1 month ago",
    },
    {
      text: "Anonymous",
      customerStatus: "Verified customer",
      reviewText: "The urn is perfect. Service was outstanding.",
      location: "Mulgrave, Australia, 1 month ago",
    },
    {
      text: "Anonymous",
      customerStatus: "Verified customer",
      reviewText: "The urn is perfect. Service was outstanding.",
      location: "Mulgrave, Australia, 1 month ago",
    },
  ];

  const renderStars = () => {
    const totalStars = 5;
    const filledStars = 4;

    return Array.from({ length: totalStars }, (v, i) => (
      <i
        key={i}
        className={`fa-solid fa-star ${i < filledStars ? 'filled-star' : 'different-star'}`}
      ></i>
    ));
  };

  return (
    <div className='Review'>
      <div className='Review-tag'>
        <h3 className='Review-tag__excellent'>Excellent</h3>
        <div className='Review-stars'>
          {renderStars()}
        </div>
        <h4 className='Review-tag__average'>4.94 average</h4>
        <h4 className='Review-tag__reviews'>120 reviews</h4>
        <i className="fa-solid fa-star"></i>
        <span>REVIEWS.<sub>io</sub></span>
        <h2 className='Review-tag__text'></h2>
      </div>

      {ratings.map((rating, index) => (
        <div className='rating-tag' key={index}>
          <div className='rating-info'>
            <h3 className='rating-tag__text'>{rating.text}  {renderStars()}</h3>
            <h5 className='rating-tag__customer'><i className="fa-solid fa-circle-check"></i> {rating.customerStatus}</h5>
          </div>
          <h4 className='rating-tag__review'>{rating.reviewText}</h4>
          <h5 className='rating-tag-viewed'>{rating.location}</h5>
        </div>
      ))}
    </div>
  );
};

export default Rating;
