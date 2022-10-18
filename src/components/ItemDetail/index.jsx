import React, { useState, useContext} from 'react'
import ItemCount from '../ItemCount';
import './styles.css';
import {useNavigate} from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';

const ItemDetail = ({product}) => {

    const [qty, setqty] = useState(0);
    const navigate = useNavigate();

    const {addItem} = useContext(Shop)

    const addCart = (Quantity) => {
        setqty(Quantity);
    }

    const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave)
        navigate('/cart')
    }

    console.log(qty);

    return (
    <div className='detail'>
        <h1>{product.name}</h1>
        <img className='img-detail' src= {product.img} alt="foto-producto"/>
        <h3>{product.description}</h3>
        <p>${product.price}</p>
        { !qty ? (<ItemCount stock={product.stock} initial={1} onAdd={addCart}/>
        ) : (
            <button onClick={handleFinish}>Terminar mi compra</button>
        )}
    </div>
    )
}

export default ItemDetail