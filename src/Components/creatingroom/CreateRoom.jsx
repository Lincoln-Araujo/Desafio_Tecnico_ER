import './createRoom.css';
import BlankForm from '../form/BlankForm';
import SecButton from '../buttons/Secbutton';
import ThirdButton from '../buttons/Thirdbutton';

const CreateRoom = (props) => {
    return (
        <div className="create-room-screen">
            <div className="create-room-bg"></div>
            <div className="create-room-container">
                <div className="title-screen">Crie uma sala</div>
                <BlankForm 
                    titleform="nome da sala" 
                    nameinput="nome da sala" 
                    placeholderform="Dê um nome para a sala"
                    idform="room-name">
                </BlankForm>
                <BlankForm 
                    titleform="url do vídeo" 
                    nameinput="url do vídeo" 
                    placeholderform="Cole aqui a url do link do vídeo"
                    idform="room-url">
                </BlankForm>
                <div className="create-room-buttons">
                    <ThirdButton>cancelar</ThirdButton>
                    <SecButton>confirmar</SecButton>
                </div>
            </div>
        </div>         
    )
};

export default CreateRoom;