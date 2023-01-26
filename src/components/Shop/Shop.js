import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart =(id)=>{
        const newCart = [...cart, id]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-cart-container">
                {
                    products.map(product=><Product handle={handleAddToCart} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="products-summery">
                <h1>this one is product summery</h1>
                <h3>your total item is {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;