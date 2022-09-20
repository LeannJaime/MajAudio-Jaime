import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount';
import './styles.css';
import {useNavigate} from 'react-router-dom';

const ItemDetail = ({product}) => {

    const [qty, setqty] = useState(0);
    const navigate = useNavigate();

    const addCart = (Quantity) => {
        setqty(Quantity);
    }

    const handleFinish = () => {
        navigate('/cart')
    }

    console.log(qty);

    return (
    <div className='detail'>
        <h1>{product.name}</h1>
        <img className='img-detail' src= {product.img} alt="foto-producto"/>
        <h3>{product.description}</h3>
        <p>${product.precio}</p>
        { !qty ? (<ItemCount stock={10} initial={1} onAdd={addCart}/>
        ) : (
            <button onClick={handleFinish}>Finalizar compra</button>
        )}
    </div>
    )
}

export default ItemDetail