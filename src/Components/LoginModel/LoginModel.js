import React, { useState } from 'react'
import './LoginModel.css'
import { RxCross2 } from "react-icons/rx";
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Slices/UserSlice';
const LoginModel = ({ isOpen, setClose, handleCloseModel }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState(true)
    const dispatch = useDispatch();
    const handleCloseLoginModel = () => {
        handleCloseModel(false);
    }

    const handleSignUp = async () => {
        const { data, error } = supabase.auth.signUp({
            email: email,
            password: password
        })
        if (data.user) {
            alert("Account has been created successfully!!! Please verify your email");
        } else {
            alert(error.message)
        }
    }
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (error) {
            alert(error.message);
            return
        }
        dispatch(setUser(data.user));
        handleCloseLoginModel()
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
                                    loginType ? (<button className='btn-login' onClick={handleLogin}>Login</button>) :
                                        (<button className='btn-signup' onClick={handleSignUp}>Sign Up</button>)
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
