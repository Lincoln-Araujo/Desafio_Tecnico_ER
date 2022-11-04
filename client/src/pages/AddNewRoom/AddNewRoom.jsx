import './addNewRoom.css';
import CreateRoom from '../../Components/creatingroom/CreateRoom';

const AddNewRoom = (props) => {

  return (
    <div className="add-new-room" >
      <div className="bg-new-room" onClick={props.onClick}></div>
      <CreateRoom onClick={props.onClick}></CreateRoom>
    </div>      
  )
 
};

export default AddNewRoom;