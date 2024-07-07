import { useRef } from "react";
import MenuHeader from "../component/menu";
import './page3.css'
import axios from "axios";

function Page3() {
    const title = useRef(null);
    const text = useRef(null);
    const insertdata = async()=> {
        try {
            const responseData = await axios.post("http://localhost:3244/api/insertData", {tt: title.current.value, tx: title.current.value})
            alert(responseData.data);
        } catch (error) {
            alert(error.response.data)
        }
        
    }
    return (
        <div>
            <MenuHeader />
            <h1>Hello Page3</h1>
            <div className="page3-headerweb">
                <h1>Post</h1>
                <form onSubmit={(e)=> {e.preventDefault();insertdata()}}>
                    <label>Title</label>
                    <input ref={title}></input>
                    <label>Text</label>
                    <input ref={text}></input>
                    <button type="sumit">Post Text</button>
                </form>
            </div>
        </div>
    );
}

export default Page3;