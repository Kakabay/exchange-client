import React from 'react';
// Components
import GalleryItem from '../components/GalleryItem';
// Images
import materialOne from '../assets/images/material-1.png';
import materialTwo from '../assets/images/material-2.png';
import materialThree from '../assets/images/material-3.png';
import materialFour from '../assets/images/material-4.png';

const Gallery = ({ activeTab }) => {
  return (
    <div className="gallery-wrapper">
      {activeTab === 1 ? (
        <div className="gallery">
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialThree} />
          <GalleryItem img={materialFour} />
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialThree} />
          <GalleryItem img={materialFour} />
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialThree} />
          <GalleryItem img={materialFour} />
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialThree} />
          <GalleryItem img={materialFour} />
        </div>
      ) : null}
      {activeTab === 2 ? (
        <div className="gallery">
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialThree} />
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialFour} />
          <GalleryItem img={materialOne} />
          <GalleryItem img={materialTwo} />
          <GalleryItem img={materialFour} />
          <GalleryItem img={materialThree} />
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
