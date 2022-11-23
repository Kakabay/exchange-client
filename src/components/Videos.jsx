import React from 'react';
// Components
import VideoPlayer from '../components/VideoPlayer';

const Videos = () => {
  return (
    <div className="videos-wrapper">
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
    </div>
  );
};

export default Videos;
