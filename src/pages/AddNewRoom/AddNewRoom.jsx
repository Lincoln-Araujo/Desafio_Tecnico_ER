import './addNewRoom.css';
import CreateRoom from '../../Components/creatingroom/CreateRoom';

const AddNewRoom = (props) => {
    return (
      <div className="add-new-room">
        <CreateRoom></CreateRoom>
      </div>      
    )
};

export default AddNewRoom;