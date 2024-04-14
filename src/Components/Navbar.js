import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import './Navbar.css'
import LoginModel from './LoginModel/LoginModel';

const Navbar = () => {
    const [search, setSearchVal] = useState('');
    const [isOpen, setOpen] = useState(false);
    const handleSearch = (event) => {
        setSearchVal(event.target.value)
    }
    const handleCloseModel = (flag) =>{
        setOpen(flag)
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
                    <button className='navbar-login-btn' onClick={() => setOpen(true)}> Login</button>
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
                    </div>
                    {/* <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link> */}
                </div>
            </div>
            <LoginModel isOpen={isOpen} setOpen={setOpen} handleCloseModel={handleCloseModel}/>
        </>
    )
}

export default Navbar
