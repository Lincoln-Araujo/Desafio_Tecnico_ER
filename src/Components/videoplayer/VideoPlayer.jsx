import './videoplayer.css';
import PlayButton from '../buttons/Playbutton'

const VideoPlayer = (props) => {
    return (
        <div className="video-player">
            <div className="video-screen"></div>
            <PlayButton></PlayButton>           
        </div>
    )
};

export default VideoPlayer;