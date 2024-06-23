import { useEffect, useRef, useState } from 'react';
import MenuHeader from '../component/menu';

function Page2() {
    const [count, setCount] = useState(0);  // to request  to change something
    const [msg, setmsg] = useState('');
    const text = useRef(null); // to create object can change in round of render
    useEffect(() => { // to spector action have condition in "if"
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