import './comments.css';
import MinimizeButton from '../buttons/MinimizeButton';
import KeyRoom from '../keyroom/Keyroom';
import Message from '../message/Message';

const Comments = (props) => {
    return (
        <div className="comments-wall">
            <div className="comments-bg"></div>
            <div className="content-wall">
                <div className="title">
                    <div className="title-comment-wall">
                        <span className='title-text'>Comentários</span>
                        <KeyRoom keyroom="XXXXXXXXXXXX"></KeyRoom>
                    </div>                    
                    <MinimizeButton></MinimizeButton>
                </div>
                <div className="line"></div>
                <div className="container-messages">
                    <Message message="um mensagem foi mandada para o chat"></Message>
                </div>
            </div>
        </div>
    )
};

export default Comments;