import './Header.css'
import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;