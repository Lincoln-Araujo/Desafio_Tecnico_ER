import './form.css';

const BlankForm = (props) => {
    return (
        <form method="post" action="#" className='blank-form'>
            <div className="title-form">{props.titleform}</div>
            <input type="text" name={props.nameinput} placeholder={props.placeholderform} id={props.idform} className="input-form"/>
        </form>          
    )
};

export default BlankForm;