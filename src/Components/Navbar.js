import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import './Navbar.css'
import LoginModel from './LoginModel/LoginModel';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Slices/UserSlice';
import supabase from '../supabase';

const Navbar = () => {
    const [search, setSearchVal] = useState('');
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const getUserDetails = useSelector(state => state.user.user)

    useEffect(() => {
        if (getUserDetails) {
            setOpen(false)
        }
    }, [getUserDetails])

    const handleSearch = (event) => {
        setSearchVal(event.target.value)
    }
    const handleCloseModel = (flag) => {
        setOpen(flag)
    }
    //Logout handler
    const handleLogout = () => {
        const { error } = supabase.auth.signOut();
        if (!error) {
            dispatch(removeUser())
        }
    }
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar'>
                    <Link to={'/'}>
                        <img
                            src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg'
                            alt='logo'
                            title='logo' />
                    </Link>

                    <div className='navbar-searchbar'>
                        <input
                            type='text'
                            placeholder='Search for products brands and many more...'
                            onChange={handleSearch}
                            value={search}
                        />
                        <button className='navbar-btn'> <IoSearch /></button>
                    </div>
                    {getUserDetails == null ? (<button className='navbar-login-btn' onClick={() => setOpen(true)}> Login</button>) : (<></>)
                    }
                    <div className='cart-wrapper'>
                        <div className='become-sellar'>
                            <h3>Become a sellar</h3>
                        </div>
                        <div className='navbar-more'>
                            <span>More</span>
                            <MdKeyboardArrowDown className='moreArrow' />
                        </div>
                        <div className='navbar-cart'>
                            <div className='navbar-cart-icons'>
                                <Link to={'/cart'}>
                                    <FaShoppingCart /> <span>Cart</span>
                                </Link>
                            </div>
                        </div>
                        <div className='user-details'>
                            {getUserDetails && <h3>Welcome {getUserDetails?.email.slice(0, 10)} </h3>}
                        </div>
                        <div className='logout-wrapper'>
                           <h3> <FaSignOutAlt onClick={handleLogout} /></h3>
                        </div>
                    </div>
                    {/* <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link> */}
                </div>
            </div>
            <LoginModel isOpen={isOpen} setOpen={setOpen} handleCloseModel={handleCloseModel} />
        </>
    )
}

export default Navbar
