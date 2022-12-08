// Modules
import ReactPlayer from 'react-player';
// import { hosting } from '../../links';

// Components
// import PlayIcon from './PlayIcon';

const VideoPlayer = ({ videoUrl }) => {
  console.log(typeof videoUrl);
  return (
    <div className="video-player">
      <ReactPlayer
        // url={hosting + videoUrl}
        url={videoUrl}
        controls
        // playIcon={videoUrl.length > 0 ? <PlayIcon /> : undefined}
        volume={1}
        light={true}
        height={'100%'}
        width={'100%'}
      />
    </div>
  );
};

export default VideoPlayer;
