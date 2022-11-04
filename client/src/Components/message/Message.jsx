import './message.css';

const Message = (props) => {
    return (
        <div className="message-user">
            <div className="message-text">{props.message}</div>
            <div className="user-picture">{/* aqui viria a foto de um usuario */}</div>
        </div>
    )
};

export default Message;