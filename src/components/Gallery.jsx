import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import GalleryItem from '../components/GalleryItem';

const Gallery = ({ imageTabIndex }) => {
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    const GalleryApi = new Api(
      `http://tmex.gov.tm:8765/api/medias/${imageTabIndex}`,
      galleryData,
      setGalleryData,
    ).get();
  }, []);

  useEffect(() => {
    const GalleryApi = new Api(
      `http://tmex.gov.tm:8765/api/medias/${imageTabIndex}`,
      galleryData,
      setGalleryData,
    ).get();
  }, [imageTabIndex]);

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {galleryData
          ? galleryData.data.map((image) => {
              return <GalleryItem key={image.id} img={image.media} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Gallery;
