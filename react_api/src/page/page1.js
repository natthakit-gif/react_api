import BoxPost from '../component/box';
import MenuHeader from '../component/menu';
import './page1.css';


function Page1() {
    const postList = [
        { head: '1', msg: 'Hello1' },
        { head: '2', msg: 'Hello2' },
        { head: '3', msg: 'Hello3' },
        { head: '4', msg: 'Hello4' },
    ];
    return (
        <div>
            <MenuHeader></MenuHeader>
            <div className='container-post'>
                {postList.map((value, index) => (
                    <BoxPost key={index} text={value.msg} title={value.head}></BoxPost>
                ))}
            </div>
        </div>
    );
}

export default Page1;
