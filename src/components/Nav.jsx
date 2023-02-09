import React from 'react';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout } from '../store/user/userSlice';
import SouthKorea from '../img/SouthKorea.png';
const Nav = () => {
//     const getFlagEmoji = (countryCode) => countryCode.toUpperCase().replace(/./g,
//   char => String.fromCodePoint(127397 + char.charCodeAt())
// );

    const cart = useSelector(state=> state.cart);
    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav className='nav'>
            <div className='first-nav-item'>
                <Link to='/'> <h1>Korean food market</h1><img className ='south-korea' src={SouthKorea} alt ='korea'/> </Link>   
            </div>
            
          
                <Link to ='/cart'>
                    <i className="fas fa-shopping-cart">
                            <div className='cart-amount'>{cart.length}</div>
                    </i>
                </Link>
                
                <span className='user'>
                    {
                        user? 
                        <span className="user" onClick={()=>{dispatch(logout(false))}}>Logout</span>:
                        <span className="user" onClick={()=>{navigate('/login')}}>Login</span>
                    }
                </span>
           
        </nav>
    );
};

export default Nav;