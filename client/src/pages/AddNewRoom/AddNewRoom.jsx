import './addNewRoom.css';
import { useState } from 'react';
import CreateRoom from '../../Components/creatingroom/CreateRoom';

const AddNewRoom = (props) => {

    const [screen, setScreen] = useState(true);

    function handleClickAddNewRoomFalse() {
      if(screen === false) {
        setScreen(true);
      } else if (screen === true) {
        setScreen(false);
      } 
    }

    if (screen === true) {
      return (
        <div className="add-new-room" >
          <div className="bg-new-room" onClick={handleClickAddNewRoomFalse}></div>
          <CreateRoom onClick={handleClickAddNewRoomFalse}></CreateRoom>
        </div>      
      )
    }    
};

export default AddNewRoom;