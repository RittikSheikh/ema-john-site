import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handle}) => {
    const {id,name,price,seller,stock,ratings,img,quantity,shipping} = product;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <small><p>manufacturer: {seller}</p></small>
            <small><p>rating: {ratings}</p></small>
            </div>
            <button onClick={()=>handle(id)} className='btn'>
                <p>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;