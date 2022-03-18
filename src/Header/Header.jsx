import React from 'react';
import HeaderList from './HeaderList';
import CartHeader from './CartHeader';

const Header = () => {
    return (
        <header>
            <HeaderList />
            <CartHeader />
        </header>
    );
};

export default Header;