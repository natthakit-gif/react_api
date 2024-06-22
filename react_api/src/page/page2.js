import { useEffect, useRef, useState } from 'react';
import MenuHeader from '../component/menu';
import './page2.css'

function Page2() {
    const [count, setCount] = useState(0);
    const [msg, setmsg] = useState('');
    const text = useRef(null);
    useEffect(() => {
        if (count)
            setmsg("555555555555 " + count);
    }, [count])
    return (
        <div>
            <MenuHeader />
            <h1>Page2</h1>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1);
                console.log(count);
            }}>Press</button>
            <br></br>
            <input ref={text} onChange={() => {
                console.log(text.current.value)
            }}></input>
            {msg}
        </div>
    );
}

export default Page2;