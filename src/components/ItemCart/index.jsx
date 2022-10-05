import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider'
import { Link } from 'react-router-dom';
import './styles.css'

const ItemCart = ({product}) => {

    const { removeItem } = useContext(Shop);

    return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>Titulo: {product.name}</p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio: ${product.precio}</p>
            <p>Subtotal: ${product.quantity * product.precio}</p>
            <button className='btnEliminar' onClick={() => removeItem(product.id)}>Eliminar</button>
            <Link to="/productos">Seguir comprando</Link>
        </div>
    </div>
    )
}

export default ItemCart