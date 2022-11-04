import './Buttons.css';

const ThirdButton = (props) => {
    return (
        <button className='third-button'onClick={props.onClick}>
            <span className="btn-text">{props.children}</span>
        </button>
    )
};

export default ThirdButton;