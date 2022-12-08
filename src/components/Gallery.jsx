import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import GalleryItem from '../components/GalleryItem';
// Images
import materialOne from '../assets/images/material-1.png';
import materialTwo from '../assets/images/material-2.png';
import materialThree from '../assets/images/material-3.png';
import materialFour from '../assets/images/material-4.png';

const Gallery = ({ imageTabIndex }) => {
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    const GalleryApi = new Api(
      `http://tmex.gov.tm:8765/api/medias/${imageTabIndex}`,
      galleryData,
      setGalleryData,
    ).get();
  }, [imageTabIndex]);
  console.log(imageTabIndex);

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {galleryData
          ? galleryData.data.map((image) => {
              return <GalleryItem img={image.media} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Gallery;
