import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ItemCart from '../../components/ItemCart';
import { Shop } from '../../context/ShopProvider'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import './styles.css'

const Cart = () => {

  const { cart, totalPrice, clearCart } = useContext(Shop);

  const handleBuy = async () => {
    const importeTotal = totalPrice();
    const orden = ordenGenerada("Leandro", "lean.jaime", 113846545, cart, importeTotal);
    const docRef = await addDoc(collection(db, "orders"), orden);
    alert(`Orden generada, Id: ${docRef.id}`);


    //ACTUALIZAMOS STOCK DE FIREBASE
    cart.forEach( async (productoEnCarrito) => {

      const productRef = doc(db, "products", productoEnCarrito.id);
      const productSnap = await getDoc(productRef);

      await updateDoc(productRef, {
        stock: productSnap.data().stock - productoEnCarrito.quantity
      });
      
    });

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
      <button className='btns' onClick={() => clearCart()}>Limpiar Carrito</button>
      <button className='btns' onClick={handleBuy}>Confirmar compra</button>
    </div>
    </>
  )
}

export default Cart