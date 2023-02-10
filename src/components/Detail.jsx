import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
    const detailItem = useSelector(state=> state.product);
    let params = useParams();
    console.log(detailItem);
    return (
        <div>
            <h2>Food Description</h2>
            <h3>{detailItem.map((item,idx)=>{
                return(
                    item.idx+1 === params.id ? item.food_description : null
                )
            })}</h3>
            <h3>This food's ID is {params.id}</h3>
        </div>
    );
};

export default Detail;