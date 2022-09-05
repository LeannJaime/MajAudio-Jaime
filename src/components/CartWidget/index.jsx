import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import './styles.scss';

const CartWidget = () => {
    return (
        <div className='icon-cart'>
            <p>COMPRAR <HiShoppingCart size={50}/></p>
        </div>
    )
}

export default CartWidget