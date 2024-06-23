import { useRef } from "react";
import MenuHeader from "../component/menu";
import './page3.css'

function Page3() {
    const title = useRef(null);
    const text = useRef(null);
    return (
        <div>
            <MenuHeader />
            <h1>Hello Page3</h1>
            <div className="page3-headerweb">
                <h1>Post</h1>
                <form>
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