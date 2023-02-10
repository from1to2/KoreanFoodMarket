import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Detail.css';

const Detail = () => {
    const detailItem = useSelector(state=> state.product);
    let params = useParams();
    console.log(detailItem);
    console.log(params.id);
    return (
        <div>
            <h2>Food Description: <em>{detailItem.map((item)=>{
                 return  `${item.id === Number(params.id) ?  item.product_name : ''}`
            })}</em></h2>
            <br></br>
            <br></br>
           
                <p >{detailItem.map((item)=>{
                    return  `${item.id === Number(params.id) ?  item.food_description : ''}`
                })}</p>
           
            
            
        </div>
    );
};

export default Detail;