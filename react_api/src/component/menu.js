import "./menu.css"
function MenuHeader() {
    return (
        <div>
            <div className='headermenu'>
                <div className='headerweb underlineminiheader'>
                    POST
                </div>
                <div className='menuheaderselect'>
                    <a href='/'>main</a>
                    <a href='/p2'>room</a>
                    <a href='/p3'>name</a>
                </div>
            </div>
        </div>
    );
}

export default MenuHeader;