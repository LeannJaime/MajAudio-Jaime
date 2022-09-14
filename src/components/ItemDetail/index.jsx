import React from 'react'
import './styles.css';

const ItemDetail = ({product}) => {
    return (
    <div className='detail'>
        <h1>{product.name}</h1>
        <img src={product.id} alt="foto-producto"/>
        <h3>{product.description}</h3>
        <p>${product.precio}</p>
    </div>
    )
}

export default ItemDetail