import './Room.css';

const RoomsVideo = (props) => {
    return (
        <div className="room">
            <span className="room-name">{props.room}</span>
            <div className="room-video">
                <div className="video-cover"></div>
                <svg id="play-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>
            </div>
            <div className="room-watchers">
                <div className="number-watchers">{props.watchers}</div> 
                <span>pessoas assistindo</span> 
            </div>
        </div>
    )
};

export default RoomsVideo;