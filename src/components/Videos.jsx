import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import VideoPlayer from '../components/VideoPlayer';

const Videos = ({ videoTabIndex }) => {
  const [multimediaVideosData, setMultimediaVideosData] = useState();

  useEffect(() => {
    const MultimediaVideosData = new Api(
      `http://tmex.gov.tm:8765/api/medias/${videoTabIndex}`,
      multimediaVideosData,
      setMultimediaVideosData,
    ).get();
  }, [videoTabIndex]);

  console.log(videoTabIndex);

  return (
    <div className="videos-wrapper">
      {multimediaVideosData
        ? multimediaVideosData.data.map((multimediaVideo) => {
            return <VideoPlayer key={multimediaVideo.id} videoUrl={multimediaVideo.media} />;
          })
        : null}
      {/* <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} />
      <VideoPlayer videoUrl={'https://www.youtube.com/'} /> */}
    </div>
  );
};

export default Videos;
