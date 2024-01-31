import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Home, HomeOutlined, Add, AddOutlined, Search, SearchOutlined, AccountCircle, AccountCircleOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

function Header() {
    const [tab, setTab] = useState(window.location.pathname);

    const { userLoadData } = useSelector((state) => state.User);
    const user = userLoadData?.user;


    return (
        <div className='header'>

            <Link to={"/"} onClick={() => setTab('/')}>
                {
                    tab === '/' ? <Home style={{ color: "black" }} /> : <HomeOutlined />
                }
            </Link>
            <Link to={"/newpost"} onClick={() => setTab('/newpost')}>
                {
                    tab === '/newpost' ? <Add style={{ color: "black" }} /> : <AddOutlined />

                }
            </Link>
            <Link to={"/search"} onClick={() => setTab('/search')}>
                {
                    tab === '/search' ? <Search style={{ color: "black" }} /> : <SearchOutlined />
                }
            </Link>
            <Link to={"/account"} onClick={() => setTab('/account')} >

                {/* {
                    tab === '/account' ? <AccountCircle style={{ color: "black" }} /> : <AccountCircleOutlined />
                } */}

                <Avatar src={user.avatar.url} sx={{width:"1.7rem",height:"1.7rem"}} />
            </Link>

        </div>
    )
}

export default Header;