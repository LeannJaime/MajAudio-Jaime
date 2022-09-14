import React from 'react'
import { imgProdcutos } from '../../data/imagenes';
import './styles.css';

const ItemDetail = ({product}) => {
    return (
    <div className='detail'>
        <h1>{product.name}</h1>
        <img className='img-detail' src={imgProdcutos(`./${product.id}.jpg`)} alt="foto-producto"/>
        <h3>{product.description}</h3>
        <p>${product.precio}</p>
    </div>
    )
}

export default ItemDetail