import './videospage.css';
import SearchBar from '../searchbar/SearchBar';
import RoomsVideo from '../rooms/Roomsvideo';

const VideosPage = (props) => {
    return (
        <div className="videos-page">
           <SearchBar>BUSQUE POR UMA SALA</SearchBar>
           <div className="container-videos">
                <RoomsVideo room="nome da sala" watchers="X"></RoomsVideo>
           </div>
        </div>         
    )
};

export default VideosPage;