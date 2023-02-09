import React, {useState,useEffect} from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';
import { MdFoodBank } from "react-icons/md";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    const getProductData = async()=> {
        const res = await fetch('./data/ProductList.json');
        const result = await res.json();
        setProducts(result.productList);
    }

    useEffect(()=> {
        getProductData();
    },[])
    
    return (
        <div className='product-list'>   
            <h2 className='product-list-title'> Food List <MdFoodBank/> </h2>
            <div className='product-item-container'
            >
                {
                products &&products.map(item => {
                    return <ProductItem key={item.id} item ={item}/>
                })
                }
            </div>
        </div>
    );
};

export default ProductList;