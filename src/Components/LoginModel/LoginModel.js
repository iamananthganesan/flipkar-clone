import React, { useState } from 'react'
import './LoginModel.css'
import { RxCross2 } from "react-icons/rx";
const LoginModel = ({ isOpen, setClose, handleCloseModel }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState(true)
    const handleEmailaddress = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleCloseLoginModel = () => {
        handleCloseModel(false);
    }
    return (
        <>
            {isOpen &&
                <div className='overlay'>
                    <div className='login-model'>
                        <div className='left'>
                            <div className='left-container'>
                                <div className='login-title'>Login</div>
                                <div className='login-description'>Get access to your Orders, Wishlist and Recommendations</div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='form-control'>
                                <label htmlFor="email"></label>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                    name='email'
                                    id='email'
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="password"></label>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                    name='password'
                                    id='password'
                                />
                            </div>
                            <div className='terms-condition'>
                                By continue you agree to Flipkart's<span>Term of use</span> <span>Privacy and Policy</span>
                            </div>
                            <div className='form-control'>
                                {
                                    loginType ? (<button className='btn-login'>Login</button>) :
                                        (<button className='btn-signup'>Sign Up</button>)
                                }
                            </div>
                            <div className='type-of-user'>
                                {
                                    loginType ? (<span onClick={() => { setLoginType(false) }}>New to flipkart? Create an Account</span>) : (<span onClick={() => { setLoginType(true) }}>Already an user? Login to an account?</span>)
                                }


                            </div>                           
                            <div className="close" onClick={() => handleCloseLoginModel(false)}>
                                <RxCross2 />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginModel
