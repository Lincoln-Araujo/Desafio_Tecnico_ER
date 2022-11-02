import './Buttons.css';

const ThirdButton = (props) => {
    return (
        <button className='third-button'>
            <span className="btn-text">{props.children}</span>
        </button>
    )
};

export default ThirdButton;