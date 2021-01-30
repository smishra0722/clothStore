import React from 'react';
import {ReactComponent as Logo} from '../../assets/shopping-bag.svg'
import './header.styles.scss';

export const Header = () => (
    <div className='header'>
        <div className='header-top'>
            <div className='header-top-logo'>Cloth Store</div>
            <div className='cart-icon'><Logo /><span className='item-count'>0</span></div>
        </div>
        <div className='header-bottom'>
            <ul className='navigation'>
                <li className='link'>Home</li>
                <li className='link'>Shop</li>
                <li className='link'>About Us</li>
                <li className='link'>Contact</li>
            </ul>
        </div>
    </div>
);