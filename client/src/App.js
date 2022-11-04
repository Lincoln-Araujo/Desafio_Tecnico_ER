import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Components/header/Header';
import VideosPage from './Components/videospage/VideosPage';
import AddNewRoom from './pages/AddNewRoom/AddNewRoom';

import api from './Api';
import axios from 'axios';

function App() {

 /* const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    api.get('/').then(data => {
      console.log(data);
    })
  }, [])*/

  const [addNewRoom, setAddNewRoom] = useState(false);

  function handleClickAddNewRoomTrue () {
    if(addNewRoom === false) {
      setAddNewRoom(true);
    } else if (addNewRoom === true) {
      setAddNewRoom(false);
    }    
  }

  return (
    <div className="app-js">
      {/*só chama o componente se o estado do mesmo for verdadeiro*/}
      {addNewRoom === true &&(<AddNewRoom></AddNewRoom>)}      
      <Header onClick={handleClickAddNewRoomTrue}></Header>
      <VideosPage></VideosPage>
    </div>
  );

};

export default App;