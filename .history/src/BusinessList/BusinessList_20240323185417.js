import React from 'react';
import Business from './Business'; // Import the Business component
import './BusinessList.css'; // Make sure to create a corresponding CSS file for styling

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-list">
      {
        businesses.map((business) => (
          <Business key={business.id} {...business} />
        ))
      }
    </div>
  );
};

export default BusinessList;