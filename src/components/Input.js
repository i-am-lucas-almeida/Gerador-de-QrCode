import './sass/Input.scss';

const Input = (props) => {

    return (

        <>

            <label>

                <input type="color" value={props.value} onChange={props.event} />

                <span>{props.title}</span>

            </label>

        </>

    );
    
}

export default Input;