import React from 'react';
import cart from '../img/cart.png'
const CartHeader = () => {
    return (
        <div>
            <img className='cartImg' src={cart} alt= 'err' />
        </div>
    );
};

export default CartHeader;