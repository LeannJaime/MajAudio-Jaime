import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ItemCart from '../../components/ItemCart';
import { Shop } from '../../context/ShopProvider'
import Button from 'react-bootstrap/Button';
import './styles.css'

const Cart = () => {

  const { cart, totalPrice, clearCart } = useContext(Shop);
  const navigate = useNavigate();

  const checkout = () => {
    navigate('/checkout');
  }

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
      <Button variant="outline-danger" className='btns' onClick={() => clearCart()}>Limpiar Carrito</Button>
      <Button variant="outline-success"className='btns' onClick={checkout}>Continuar con la compra</Button>
    </div>
    </>
  )
}

export default Cart