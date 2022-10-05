import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ItemCart from '../../components/ItemCart';
import { Shop } from '../../context/ShopProvider'
import './styles.css'

const Cart = () => {

  const { cart, totalPrice, clearCart } = useContext(Shop);

  if (cart.length === 0){
    return (
        <>
        <div className='centrar'>
        <h2>No hay elementos en el carrito</h2>
        <Link to='/productos'>Añadir productos</Link>
        </div>
        </>
    )
  }

  return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <div className='priceTotal'>
    <strong>Total: ${totalPrice()}</strong>
    </div>
    <div className='centrar'>
      <button className='btnClear' onClick={() => clearCart()}>Limpiar Carrito</button>
    </div>
    </>
  )
}

export default Cart