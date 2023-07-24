import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="product image" />
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price' >Price :${price}</h4>
                <p className='product-sell'>Manufacturer :{seller}</p>
                <p className='product-rating'>Rating : {ratings} star</p>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon className='icon' icon={faShoppingCart} /></button>

            </div>
        </div>
    );
};

export default Product;