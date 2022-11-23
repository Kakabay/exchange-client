import React from 'react';

const GalleryItem = ({ img }) => {
  return (
    <div className="gallery-item">
      <img src={img} alt="image" />
    </div>
  );
};

export default GalleryItem;
