import React from 'react';
import './CartItem.css';
import {useDispatch, useSelector} from 'react-redux';
import { deleteCart } from '../store/cart/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    

    //기존의 state 값을 가져와서 filter
    return (
        <div className='cart-item'>
            
                <img 
                src={item.product_img}
                alt=""
                className='cart-item-img' />
          
            
            <span className='cart-item-name'>{item.product_name}</span>
            <span className='cart-item-price'>{item.price}won</span>
            <i className='fas fa-trash-alt' onClick={()=>{dispatch(deleteCart(item))}} ></i>
        </div>
    );
};

export default CartItem;