import './comments.css';
import SecButton from '../buttons/Secbutton';
import ThirdButton from '../buttons/Thirdbutton'

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