import React, {useState, useEffect} from 'react';
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);    
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(() => {
    }, [count])

    return (
    <div className='contador'>
        <button disabled={count <= 1} onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={handleAdd}>+</button>
        <div>
        <button onClick={addCart}>Agregar al carrito</button>
        </div>
    </div>
    );
};

export default ItemCount;