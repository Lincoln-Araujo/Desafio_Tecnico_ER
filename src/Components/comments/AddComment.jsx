import './comments.css';
import SecButton from '../buttons/SecButton';
import ThirdButton from '../buttons/ThirdButton'

const AddComment = (props) => {
    return (
        <div className="comment-field">
            <div className="comments-background"></div>
            <div className="container">
                <textarea name="comment" id="comment-input" placeholder='Deixe seu comentário' maxLength={300}></textarea>
                <div className="comments-buttons">
                    <ThirdButton>Cancelar</ThirdButton>
                    <SecButton>Enviar</SecButton>
                </div>
            </div>
        </div>
    )
};

export default AddComment;