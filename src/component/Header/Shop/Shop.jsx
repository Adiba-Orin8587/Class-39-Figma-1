import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(product => <Product
                    handleAddToCart={handleAddToCart}
                    key={product.id}
                    product={product}
                >
                </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Shop;