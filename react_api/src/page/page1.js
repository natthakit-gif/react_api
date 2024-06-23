import axios from 'axios';
import BoxPost from '../component/box';
import MenuHeader from '../component/menu';
import './page1.css';
import { useEffect, useState } from 'react';


function Page1() {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        const getapi = async () => {
            try {
                const responseData = await axios.get('http://localhost:3244/api/data');
                setDataApi(responseData.data)
                console.log(responseData.data)
            } catch (error) {
                alert(error.response.data);
            }
        }
        getapi();
    }, []);
    return (
        <div>
            <MenuHeader></MenuHeader>
            <div className='container-post'>
                {dataApi.length === 0 ? <div></div> : dataApi.map((value, index) =>
                    <BoxPost id={value.id} title={value.title} text={value.text}></BoxPost>
                )}
            </div>
        </div>
    );
}

export default Page1;
