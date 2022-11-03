import './header.css';
import CtaButton from '../buttons/CtaButton';

const Header = (props) => {
    return (
        <div className="header-page">
           <svg id='play-logo-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>
           <div className="add-room-field">
                <span className="title-page">CLIQUE AQUI E CRIE UMA NOVA SALA</span>
                <CtaButton>criar sala</CtaButton>
           </div>
        </div>         
    )
};

export default Header;