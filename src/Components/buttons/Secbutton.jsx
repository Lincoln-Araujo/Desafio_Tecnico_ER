import './Buttons.css';

const SecButton = (props) => {
    return (
        <button className='sec-button'>
            <span className="btn-text">{props.children}</span>
        </button>
    )
};

export default SecButton;