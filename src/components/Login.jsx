import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';
import './Login.css';
const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(login(true));
        navigator('/');
        
    }
    return (
        <div>
            <form className='login-form' onSubmit={(e)=>loginUser(e)}>
                    <div>
                        <input className='userId' type="text" id='userId' placeholder='Enter your ID' />
                    </div>
                    <div>
                        <input className='userPw' type="password"  id = 'userPass' placeholder='Enter your password'/>
                    </div>
  
                <div >
                    <input className='loginiBtn' type="submit" value = 'Login' />
                </div>
            </form>
        </div>
    );
};

export default Login;