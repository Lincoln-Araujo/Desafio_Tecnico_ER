import './videoRoomPage.css';
import CloseButton from '../../Components/buttons/CloseButton';
import VideoPlayer from '../../Components/videoplayer/VideoPlayer';
import AddComment from '../../Components/comments/AddComment';
import Comments from '../../Components/comments/Comments';

const VideoRoomPage = (props) => {
    return (
      <div className="container-player">
        
        <div className="player-video">

          <div className="background-player"></div>

          <div className="main">

            <div className="header">

              <div className="title-room">

                <span className="room-name">{props.roomname}</span>

                <div className="url-link">

                  <div className="link">{props.roomlink}</div>

                  <svg id="share-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"></path></g></svg>
                
                </div>

              </div> 

              <CloseButton></CloseButton>  

            </div>

            <div className="line"></div>

            <VideoPlayer></VideoPlayer>

            <AddComment></AddComment>

            <Comments></Comments>

          </div> 

        </div>

      </div>         
    )
};

export default VideoRoomPage;