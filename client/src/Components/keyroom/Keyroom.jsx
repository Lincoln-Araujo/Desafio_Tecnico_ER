import './key.css'

const KeyRoom = (props) => {
    return (
        <div className="key-content">
            <div className="key-room">{props.keyroom}</div>
            <span>CHAVE DA SALA</span>
        </div>
    )
};

export default KeyRoom;