import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';
import { products } from '../../data/products';
import './styles.scss';

const ItemListContainer = ({greeting}) => {

  const agregarCarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos al carrito`)
  }

  const [productos, setProductos] = useState([])

  //IIFE
  useEffect(()=> {
    (async () => {
  
        const obtenerProductos = new Promise ((accept, reject)=> {
          setTimeout(() => {
            accept(products)
          }, 3000);
        })
  
      try {
        const productos = await obtenerProductos;
        console.log(productos);
        setProductos(productos);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  console.log(productos);

  return (
    <div className='item-list-container'>
    <h2>{greeting}</h2>
    <ItemList products={productos}/>
    <ItemCount initial={1} stock={8} onAdd={agregarCarrito}/>
    </div>
  )
}

export default ItemListContainer;