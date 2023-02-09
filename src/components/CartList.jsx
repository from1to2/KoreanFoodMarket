import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartList.css';
import { FaShoppingBag } from "react-icons/fa";
const CartList = () => {
    //철자. 
    const cart = useSelector(state => state.cart)
    const cartItem = cart.length>=1 ? cart.map((item, idx)=>{
        return <CartItem key= {item.id} item={item}/>
    }) :
    <div className='cart-empty'>( Your Cart is empty.🤔 )</div>
    
    return (
        <div className='cart-list'>
            <h2 className='cart-list-title'>Shopping Cart <FaShoppingBag/></h2>
            {cartItem}
        </div>
    );
};

export default CartList;