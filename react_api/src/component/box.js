/* eslint-disable no-undef */
import './box.css'

function BoxPost(props) {
    return (
        <div className='box'>
            <h1>{props.title}</h1>
            {props.text}
        </div>
    );
}

export default BoxPost;