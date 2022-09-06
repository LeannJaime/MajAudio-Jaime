import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.scss';

const ItemListContainer = ({greeting}) => {

  const agregarCarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos al carrito`)
  }

  return (
    <div className='item-list-container'>
    <h2>{greeting}</h2>
    <ItemCount initial={1} stock={8} onAdd={agregarCarrito}/>
    </div>
  )
}

export default ItemListContainer;