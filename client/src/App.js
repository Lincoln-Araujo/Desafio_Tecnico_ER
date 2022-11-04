import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Components/header/Header';
import VideosPage from './Components/videospage/VideosPage';
import AddNewRoom from './pages/AddNewRoom/AddNewRoom';
import VideoRoomPage from './pages/VideoRoomPage/VideoRoomPage';

function App() {

  const [addNewRoom, setAddNewRoom] = useState(false);
  const [videoRoomPage, setVideoRoomPage] = useState(true);

  function handleClickAddNewRoom () {
    if(addNewRoom === false) {
      setAddNewRoom(true);
    } else if (addNewRoom === true) {
      setAddNewRoom(false);
    }    
  }

  function handleClickVideoRoomPage () {
    if(videoRoomPage === false) {
      setVideoRoomPage(true);
    } else if (videoRoomPage === true) {
      setVideoRoomPage(false);
    }   
  }

  return (
    <div className="app-js">
      {/*só chama o componente se o estado do mesmo for verdadeiro*/}
      {addNewRoom === true &&(<AddNewRoom onClick={handleClickAddNewRoom}></AddNewRoom>
      )}      
      {/*só chama o componente se o estado do mesmo for verdadeiro*/}
      {videoRoomPage === true &&(<VideoRoomPage onClick={handleClickVideoRoomPage} roomname="Nome da sala" roomlink="link da sala"></VideoRoomPage>
      )} 
      <Header onClick={handleClickAddNewRoom}></Header>
      <VideosPage onClick={handleClickVideoRoomPage}></VideosPage>
    </div>
  );

};

export default App;