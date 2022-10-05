import React from 'react'
import { useContext } from 'react';
import {HiShoppingCart} from 'react-icons/hi'
import { Shop } from '../../context/ShopProvider';
import './styles.scss';

const CartWidget = () => {

    const { totalProducts } = useContext(Shop);

    return (
        <div className='icon-cart'>
            <i><HiShoppingCart size={50}/></i>
            <span>{totalProducts() || ''}</span>
        </div>
    )
}

export default CartWidget