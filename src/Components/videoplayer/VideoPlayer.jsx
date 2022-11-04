import './videoplayer.css';
import PlayButton from '../buttons/PlayButton'

const VideoPlayer = () => {
    return (
        <div className="video-player">
            <div className="video-screen"></div>
            <PlayButton></PlayButton>           
        </div>
    )
};

export default VideoPlayer;