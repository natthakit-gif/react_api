/* eslint-disable no-undef */
import axios from 'axios';
import './box.css'

function BoxPost({id, title, text}) {
    const deleteDataApi = async() => {
        try {
            const responseData = await axios.delete("http://localhost:3244/api/deleteData?id=" + id)
            alert(responseData.data)
        } catch (error) {
            alert(error.responseData.data)
        }
        window.location.reload();
    }
    
    return (
        <div className='box'>
            <h1>{title}</h1>
            {text}
            <br></br>
            <button style={{fontSize:30}} onClick={() => {deleteDataApi();}}>Delete</button>
        </div>
    );
}

export default BoxPost;