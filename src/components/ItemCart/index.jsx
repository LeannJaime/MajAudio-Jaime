import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css'

const ItemCart = ({product}) => {

    const { removeItem } = useContext(Shop);

    return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>Titulo: {product.name}</p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <Button variant="danger" className='btnEliminar' onClick={() => removeItem(product.id)}>Eliminar</Button>
            <Link to="/productos">Seguir comprando</Link>
        </div>
    </div>
    )
}

export default ItemCart