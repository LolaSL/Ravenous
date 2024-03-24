import React from 'react';
import './Business.css'; // corresponding CSS file for styling

const Business = () => {
  // Static data for now, you can later replace this with props or state data
  const businessInfo = {
    imageUrl: "URL_OF_THE_RESTAURANT_IMAGE",
    name: "Restaurant Name",
    address: "1234 Street Rd",
    city: "City",
    state: "ST",
    zipcode: "12345",
    category: "Category",
    rating: "4.5 stars",
    reviewCount: "99 reviews"
  };

  return (
    <div className="business">
      <div className="image-container">
        <img src={businessInfo.imageUrl} alt={businessInfo.name} />
      </div>
      <h2>{businessInfo.name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{businessInfo.address}</p>
          <p>{businessInfo.city}</p>
          <p>{businessInfo.state} {businessInfo.zipcode}</p>
        </div>
        <div className="business-reviews">
          <h3>{businessInfo.category}</h3>
          <h3 className="rating">{businessInfo.rating}</h3>
          <p>{businessInfo.reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;